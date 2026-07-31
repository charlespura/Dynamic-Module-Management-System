<template>
    <div id="app">
        <div v-if="authenticated">
            <div class="app-container">
                <!-- Sidebar -->
                <div class="sidebar-wrapper" :class="{ 'sidebar-open': isSidebarOpen }">
                    <Sidebar ref="sidebar" />
                </div>

                <!-- Mobile Overlay -->
                <div class="mobile-overlay" v-if="isSidebarOpen && isMobile" @click="toggleSidebar"></div>

                <!-- Main Content -->
                <div class="main-content" :class="{ 'main-content-shifted': isSidebarOpen && !isMobile }">
                    <!-- Mobile Header -->
                    <div class="mobile-header">
                        <button class="mobile-menu-btn" @click="toggleSidebar">
                            <i class="fa" :class="isSidebarOpen ? 'fa-times' : 'fa-bars'"></i>
                        </button>
                        <span class="mobile-title">Dynamic Module System</span>
                        <button class="mobile-logout-btn" @click="logout">
                            <i class="fa fa-sign-out"></i>
                        </button>
                    </div>

                    <!-- Top Bar -->
                    <div class="top-bar">
                        <div class="top-bar-left">
                            <h5 class="page-title">
                                <span class="title-text">{{ getPageTitle() }}</span>
                                <small class="title-subtitle">{{ getPageSubtitle() }}</small>
                            </h5>
                        </div>
                        <div class="top-bar-right">
                            <span class="user-info">
                                <i class="fa fa-user-circle"></i>
                                <span class="user-name">{{ user ? user.name : 'Admin' }}</span>
                            </span>
                            <button class="btn btn-danger btn-logout" @click="logout">
                                <i class="fa fa-sign-out"></i>
                                <span class="logout-text">Logout</span>
                            </button>
                        </div>
                    </div>

                    <!-- Content Area -->
                    <div class="content-area">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            isSidebarOpen: false,
            isMobile: false,
            windowWidth: window.innerWidth
        };
    },
    computed: {
        authenticated() {
            return this.$store.state.authenticated;
        },
        user() {
            return this.$store.state.user;
        },
        currentRoute() {
            return this.$route.path;
        }
    },
    created() {
        if (this.authenticated) {
            this.$store.dispatch('fetchMenus');
        }
        this.checkMobile();
        window.addEventListener('resize', this.handleResize);
        
        // Load sidebar state from localStorage
        const savedState = localStorage.getItem('sidebarOpen');
        if (savedState !== null) {
            this.isSidebarOpen = JSON.parse(savedState);
        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        '$route'() {
            // Close sidebar on mobile when route changes
            if (this.isMobile) {
                this.isSidebarOpen = false;
                this.saveState();
            }
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
            this.saveState();
            
            // Prevent body scroll when sidebar is open on mobile
            if (this.isMobile) {
                document.body.style.overflow = this.isSidebarOpen ? 'hidden' : '';
            }
        },
        checkMobile() {
            this.isMobile = window.innerWidth <= 768;
            if (this.isMobile) {
                this.isSidebarOpen = false;
                document.body.style.overflow = '';
            }
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
            const wasMobile = this.isMobile;
            this.checkMobile();
            
            if (!this.isMobile && wasMobile) {
                const savedState = localStorage.getItem('sidebarOpen');
                if (savedState !== null) {
                    this.isSidebarOpen = JSON.parse(savedState);
                }
            }
        },
        saveState() {
            localStorage.setItem('sidebarOpen', JSON.stringify(this.isSidebarOpen));
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
            if (this.isMobile) {
                document.body.style.overflow = '';
            }
        },
        getPageTitle() {
            const titles = {
                '/dashboard': 'Dashboard',
                '/projects': 'Projects',
                '/projects/active': 'Active Projects',
                '/projects/completed': 'Completed Projects',
                '/settings': 'Settings',
                '/settings/users': 'User Management',
                '/settings/roles': 'Role Management',
                '/settings/menus': 'Menu Management',
                '/hr': 'HR Module',
                '/hr/employees': 'Employees',
                '/hr/attendance': 'Attendance',
                '/hr/payroll': 'Payroll',
                '/finance': 'Finance Module',
                '/finance/expenses': 'Expenses',
                '/finance/reports': 'Reports',
                '/inventory': 'Inventory Module',
                '/inventory/products': 'Products',
                '/inventory/suppliers': 'Suppliers'
            };
            
            if (titles[this.currentRoute]) {
                return titles[this.currentRoute];
            }
            
            const route = Object.keys(titles).find(key => this.currentRoute.startsWith(key));
            return route ? titles[route] : 'Dashboard';
        },
        getPageSubtitle() {
            const subtitles = {
                '/dashboard': 'Overview',
                '/projects': 'Manage your projects',
                '/projects/active': 'Currently active projects',
                '/projects/completed': 'Finished projects',
                '/settings': 'System configuration',
                '/settings/users': 'Manage system users',
                '/settings/roles': 'Manage roles and permissions',
                '/settings/menus': 'Create and manage modules',
                '/hr': 'Human Resources',
                '/hr/employees': 'Manage employees',
                '/hr/attendance': 'Track attendance',
                '/hr/payroll': 'Manage payroll',
                '/finance': 'Financial Management',
                '/finance/expenses': 'Track expenses',
                '/finance/reports': 'Financial reports',
                '/inventory': 'Inventory Management',
                '/inventory/products': 'Manage products',
                '/inventory/suppliers': 'Manage suppliers'
            };
            
            const route = Object.keys(subtitles).find(key => this.currentRoute.startsWith(key));
            return route ? subtitles[route] : '';
        }
    }
}
</script>

<style>
/* ============================================
   GLOBAL RESET
   ============================================ */

* {
    box-sizing: border-box;
}

html, body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    background: #f5f7fa;
    overflow-x: hidden;
}

/* ============================================
   APP CONTAINER
   ============================================ */

.app-container {
    display: flex;
    min-height: 100vh;
    position: relative;
    width: 100%;
}

/* ============================================
   SIDEBAR WRAPPER
   ============================================ */

.sidebar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    height: 100vh;
    z-index: 1000;
    background: #2c3e50;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}

/* ============================================
   MAIN CONTENT
   ============================================ */

.main-content {
    flex: 1;
    margin-left: 260px;
    padding: 20px 30px;
    min-height: 100vh;
    background: #f5f7fa;
    transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    width: calc(100% - 260px);
    position: relative;
}

/* ============================================
   MOBILE HEADER
   ============================================ */

.mobile-header {
    display: none;
    position: sticky;
    top: 0;
    z-index: 500;
    background: #2c3e50;
    color: white;
    padding: 12px 16px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    min-height: 56px;
    width: 100%;
}

.mobile-menu-btn {
    background: none;
    border: none;
    color: white;
    font-size: 22px;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    z-index: 1001;
}

.mobile-menu-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

.mobile-title {
    font-size: 16px;
    font-weight: 600;
    flex: 1;
    text-align: center;
}

.mobile-logout-btn {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    padding: 4px 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
}

.mobile-logout-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}

/* ============================================
   MOBILE OVERLAY
   ============================================ */

.mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    animation: fadeIn 0.3s ease;
    display: none;
}

/* ============================================
   TOP BAR
   ============================================ */

.top-bar {
    background: white;
    padding: 12px 20px;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
}

.top-bar-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.page-title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.title-text {
    font-weight: 700;
}

.title-subtitle {
    font-weight: 400;
    font-size: 14px;
    color: #6c757d;
    margin-left: 6px;
}

.top-bar-right {
    display: flex;
    align-items: center;
    gap: 16px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #2c3e50;
    font-weight: 500;
    font-size: 14px;
}

.user-info i {
    font-size: 20px;
    color: #667eea;
}

.user-name {
    font-weight: 600;
}

.btn-logout {
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #dc3545;
    color: white;
}

.btn-logout:hover {
    background: #c82333;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
}

.btn-logout i {
    font-size: 14px;
}

/* ============================================
   CONTENT AREA
   ============================================ */

.content-area {
    background: transparent;
    min-height: calc(100vh - 180px);
    width: 100%;
}

/* ============================================
   RESPONSIVE STYLES
   ============================================ */

/* Tablets and smaller laptops */
@media (max-width: 1024px) {
    .sidebar-wrapper {
        width: 240px;
    }
    
    .main-content {
        margin-left: 240px;
        padding: 16px 20px;
        width: calc(100% - 240px);
    }
    
    .page-title {
        font-size: 18px;
    }
}

/* Mobile devices */
@media (max-width: 768px) {
    .mobile-header {
        display: flex !important;
    }
    
    .sidebar-wrapper {
        position: fixed !important;
        width: 280px !important;
        transform: translateX(-100%) !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        top: 0 !important;
        height: 100vh !important;
        z-index: 1000 !important;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    .sidebar-wrapper.sidebar-open {
        transform: translateX(0) !important;
        box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3) !important;
        border-radius: 0 12px 12px 0 !important;
    }
    
    .main-content {
        margin-left: 0 !important;
        padding: 12px !important;
        padding-top: 0 !important;
        width: 100% !important;
        min-height: 100vh !important;
    }
    
    .top-bar {
        padding: 12px 16px;
        flex-direction: column;
        align-items: stretch;
        gap: 8px;
        border-radius: 8px;
        margin-top: 12px;
    }
    
    .top-bar-left {
        justify-content: center;
    }
    
    .top-bar-right {
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .page-title {
        font-size: 16px;
        justify-content: center;
    }
    
    .title-subtitle {
        font-size: 12px;
    }
    
    .user-info .user-name {
        display: inline;
    }
    
    .logout-text {
        display: inline;
    }
    
    .btn-logout {
        padding: 6px 14px;
        font-size: 13px;
    }
    
    .mobile-overlay {
        display: block !important;
    }
}

/* Small mobile devices */
@media (max-width: 480px) {
    .sidebar-wrapper {
        width: 260px !important;
    }
    
    .main-content {
        padding: 10px !important;
    }
    
    .top-bar {
        padding: 10px 12px;
        margin-top: 8px;
    }
    
    .page-title {
        font-size: 14px;
    }
    
    .title-subtitle {
        font-size: 11px;
        display: block;
        margin-left: 0;
    }
    
    .btn-logout {
        padding: 4px 12px;
        font-size: 12px;
    }
    
    .user-info {
        font-size: 12px;
    }
    
    .user-info i {
        font-size: 16px;
    }
    
    .mobile-title {
        font-size: 14px;
    }
    
    .mobile-menu-btn {
        font-size: 18px;
    }
    
    .mobile-logout-btn {
        font-size: 16px;
    }
}

/* Landscape mobile */
@media (max-width: 768px) and (orientation: landscape) {
    .sidebar-wrapper {
        width: 220px !important;
    }
    
    .mobile-title {
        font-size: 14px;
    }
    
    .top-bar {
        padding: 8px 12px;
        margin-top: 8px;
    }
}

/* Very small screens */
@media (max-width: 360px) {
    .sidebar-wrapper {
        width: 240px !important;
    }
    
    .page-title {
        font-size: 13px;
        flex-direction: column;
        align-items: center;
        gap: 2px;
    }
    
    .top-bar-right {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .btn-logout {
        padding: 4px 10px;
        font-size: 11px;
    }
    
    .user-name {
        display: none;
    }
}

/* Desktop with open sidebar */
@media (min-width: 769px) {
    .sidebar-wrapper {
        transform: translateX(0) !important;
    }
    
    .mobile-overlay {
        display: none !important;
    }
    
    .main-content {
        margin-left: 260px;
    }
}

/* ============================================
   ANIMATIONS
   ============================================ */

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInRight {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

/* ============================================
   ACCESSIBILITY
   ============================================ */

@media (prefers-reduced-motion: reduce) {
    .sidebar-wrapper,
    .main-content,
    .mobile-overlay {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}

/* High contrast mode */
@media (prefers-contrast: high) {
    .btn-logout {
        border: 2px solid #dc3545;
    }
    
    .top-bar {
        border: 1px solid #dee2e6;
    }
}

/* ============================================
   SCROLLBAR STYLES
   ============================================ */

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

* {
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
}
</style>