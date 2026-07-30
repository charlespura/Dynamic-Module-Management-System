import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import axios from 'axios';

// Register plugins
Vue.use(Vuex);
Vue.use(VueRouter);

// Import CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap';

// Import components
import App from './components/App.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Employees from './components/Employees.vue';
import Attendance from './components/Attendance.vue';
import Payroll from './components/Payroll.vue';
import Expenses from './components/Expenses.vue';
import Reports from './components/Reports.vue';
import Products from './components/Products.vue';
import Suppliers from './components/Suppliers.vue';
import Users from './components/Users.vue';
import Roles from './components/Roles.vue';
import Menus from './components/Menus.vue';
import HR from './components/HR.vue';
import Finance from './components/Finance.vue';
import Inventory from './components/Inventory.vue';
import Settings from './components/Settings.vue';

// Set base URL for axios
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;

// Add token to all requests if it exists
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});

// Handle response errors
axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            if (router.currentRoute.path !== '/login') {
                router.push('/login');
            }
        }
        return Promise.reject(error);
    }
);

// Define routes
const routes = [
    { path: '/login', component: Login, name: 'login' },
    { path: '/dashboard', component: Dashboard, name: 'dashboard', meta: { requiresAuth: true } },
    { path: '/hr', component: HR, name: 'hr', meta: { requiresAuth: true } },
    { path: '/finance', component: Finance, name: 'finance', meta: { requiresAuth: true } },
    { path: '/inventory', component: Inventory, name: 'inventory', meta: { requiresAuth: true } },
    { path: '/settings', component: Settings, name: 'settings', meta: { requiresAuth: true } },
    { path: '/hr/employees', component: Employees, name: 'employees', meta: { requiresAuth: true } },
    { path: '/hr/attendance', component: Attendance, name: 'attendance', meta: { requiresAuth: true } },
    { path: '/hr/payroll', component: Payroll, name: 'payroll', meta: { requiresAuth: true } },
    { path: '/finance/expenses', component: Expenses, name: 'expenses', meta: { requiresAuth: true } },
    { path: '/finance/reports', component: Reports, name: 'reports', meta: { requiresAuth: true } },
    { path: '/inventory/products', component: Products, name: 'products', meta: { requiresAuth: true } },
    { path: '/inventory/suppliers', component: Suppliers, name: 'suppliers', meta: { requiresAuth: true } },
    { path: '/settings/users', component: Users, name: 'users', meta: { requiresAuth: true } },
    { path: '/settings/roles', component: Roles, name: 'roles', meta: { requiresAuth: true } },
    { path: '/settings/menus', component: Menus, name: 'menus', meta: { requiresAuth: true } },
    { path: '*', redirect: '/dashboard' }
];

// Create router
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// Navigation guard
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            next('/login');
        } else {
            next();
        }
    } else {
        if (to.path === '/login' && token) {
            next('/dashboard');
        } else {
            next();
        }
    }
});

// Create store
const store = new Vuex.Store({
    state: {
        menus: [],
        user: JSON.parse(localStorage.getItem('user')) || null,
        loading: false,
        authenticated: !!localStorage.getItem('token')
    },
    mutations: {
        SET_MENUS(state, menus) {
            state.menus = menus;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_USER(state, user) {
            state.user = user;
            state.authenticated = !!user;
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        },
        SET_AUTHENTICATED(state, status) {
            state.authenticated = status;
            if (!status) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
        }
    },
    actions: {
        async fetchMenus({ commit }) {
            try {
                commit('SET_LOADING', true);
                const response = await axios.get('/menus/sidebar');
                commit('SET_MENUS', response.data.data);
                return response.data;
            } catch (error) {
                console.error('Error fetching menus:', error);
                throw error;
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async login({ commit }, credentials) {
            try {
                const response = await axios.post('/login', credentials);
                if (response.data.success) {
                    const token = response.data.token;
                    if (token) {
                        localStorage.setItem('token', token);
                    }
                    commit('SET_USER', response.data.user);
                    commit('SET_AUTHENTICATED', true);
                    return response.data;
                }
                return null;
            } catch (error) {
                console.error('Login error:', error);
                throw error;
            }
        },
        logout({ commit }) {
            commit('SET_USER', null);
            commit('SET_AUTHENTICATED', false);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
});

// Create Vue instance
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
