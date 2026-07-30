<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <h4>System</h4>
        </div>
        <ul class="nav flex-column">
            <li v-for="menu in menus" :key="menu.id" class="nav-item">
                <a @click.prevent="toggleMenu(menu)" class="nav-link" :class="{ active: isActive(menu) }">
                    <i :class="'fa fa-' + menu.icon"></i>
                    {{ menu.name }}
                    <span v-if="menu.children && menu.children.length" class="arrow">
                        <i class="fa" :class="isOpen(menu) ? 'fa-chevron-down' : 'fa-chevron-right'"></i>
                    </span>
                </a>
                <ul v-if="menu.children && menu.children.length" v-show="isOpen(menu)" class="nav flex-column sub-menu">
                    <li v-for="child in menu.children" :key="child.id" class="nav-item">
                        <router-link :to="child.route" class="nav-link" active-class="active">
                            <i :class="'fa fa-' + child.icon"></i>
                            {{ child.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openMenus: new Set()
        };
    },
    computed: {
        menus() {
            return this.$store.state.menus;
        }
    },
    created() {
        this.$store.dispatch('fetchMenus');
    },
    methods: {
        toggleMenu(menu) {
            if (this.openMenus.has(menu.id)) {
                this.openMenus.delete(menu.id);
            } else {
                this.openMenus.add(menu.id);
            }
        },
        isOpen(menu) {
            return this.openMenus.has(menu.id);
        },
        isActive(menu) {
            return this.$route.path === menu.route;
        }
    }
}
</script>

<style scoped>
.sidebar {
    height: 100vh;
    overflow-y: auto;
    background: #2c3e50;
}
.sidebar-header {
    padding: 20px;
    background: #1a252f;
    color: white;
    text-align: center;
}
.sidebar-header h4 {
    margin: 0;
}
.nav-link {
    color: #8aa4b8;
    padding: 12px 20px;
    cursor: pointer;
}
.nav-link:hover {
    color: white;
    background: #1a252f;
}
.nav-link.active {
    color: white;
    background: #1a252f;
}
.nav-link i {
    margin-right: 10px;
    width: 20px;
    text-align: center;
}
.arrow {
    float: right;
}
.sub-menu {
    background: #1a252f;
}
.sub-menu .nav-link {
    padding-left: 45px;
    font-size: 0.9em;
}
</style>