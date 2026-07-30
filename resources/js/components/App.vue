<template>
    <div id="app">
        <div v-if="authenticated">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 sidebar-wrapper">
                        <Sidebar />
                    </div>
                    <div class="col-md-10 main-content">
                        <div class="top-bar">
                            <button class="btn btn-danger float-right" @click="logout">Logout</button>
                        </div>
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
    computed: {
        authenticated() {
            return this.$store.state.authenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/login');
        }
    },
    created() {
        if (this.authenticated) {
            this.$store.dispatch('fetchMenus');
        }
    }
}
</script>

<style>
.sidebar-wrapper {
    padding: 0;
    min-height: 100vh;
    background: #2c3e50;
}
.main-content {
    padding: 20px;
    background: #f5f7fa;
    min-height: 100vh;
}
.top-bar {
    margin-bottom: 20px;
    padding: 10px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>