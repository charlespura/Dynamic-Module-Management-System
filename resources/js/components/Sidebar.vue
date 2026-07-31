<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <h4>Dynamic Module Management System</h4>
        </div>
        <ul class="nav flex-column">
            <li v-for="menu in menus" :key="menu.id" class="nav-item">
                <!-- If menu has children, show as dropdown -->
                <template v-if="menu.children && menu.children.length">
                    <div 
                        @click="toggleMenu(menu)" 
                        class="nav-link" 
                        :class="{ active: isActive(menu) }"
                        style="cursor: pointer;"
                    >
                        <i :class="'fa fa-' + menu.icon"></i>
                        <span>{{ menu.name }}</span>
                        <span class="arrow">
                            <i class="fa" :class="isOpen(menu) ? 'fa-chevron-down' : 'fa-chevron-right'"></i>
                        </span>
                    </div>
                    <ul v-show="isOpen(menu)" class="nav flex-column sub-menu">
                        <li v-for="child in menu.children" :key="child.id" class="nav-item">
                            <router-link 
                                :to="child.route" 
                                class="nav-link sub-link" 
                                active-class="active"
                            >
                                <i :class="'fa fa-' + child.icon"></i>
                                {{ child.name }}
                            </router-link>
                        </li>
                    </ul>
                </template>
                <!-- If no children, show as simple link -->
                <template v-else>
                    <router-link :to="menu.route" class="nav-link" active-class="active">
                        <i :class="'fa fa-' + menu.icon"></i>
                        {{ menu.name }}
                    </router-link>
                </template>
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
        // Load saved state from localStorage
        const savedState = localStorage.getItem('openMenus');
        if (savedState) {
            try {
                const parsed = JSON.parse(savedState);
                this.openMenus = new Set(parsed);
            } catch (e) {
                this.openMenus = new Set();
            }
        }
        
        // Fetch menus
        this.$store.dispatch('fetchMenus');
    },
    watch: {
        menus(newMenus) {
            // Auto-open Settings if it has children
            const settingsMenu = newMenus.find(m => m.name === 'Settings');
            if (settingsMenu && settingsMenu.children && settingsMenu.children.length) {
                if (!this.openMenus.has(settingsMenu.id)) {
                    this.openMenus.add(settingsMenu.id);
                    this.saveState();
                }
            }
        }
    },
    methods: {
        toggleMenu(menu) {
            // Toggle the menu state
            if (this.openMenus.has(menu.id)) {
                this.openMenus.delete(menu.id);
            } else {
                this.openMenus.add(menu.id);
            }
            this.saveState();
            
            // Force Vue to re-render
            this.$forceUpdate();
        },
        isOpen(menu) {
            return this.openMenus.has(menu.id);
        },
        isActive(menu) {
            return this.$route.path === menu.route;
        },
        saveState() {
            const state = Array.from(this.openMenus);
            localStorage.setItem('openMenus', JSON.stringify(state));
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
    display: block;
    text-decoration: none;
    user-select: none;
    transition: all 0.2s;
}
.nav-link:hover {
    color: white;
    background: #1a252f;
    text-decoration: none;
}
.nav-link.active {
    color: white;
    background: #1a252f;
}
.nav-link i {
    margin-right: 10px;
    width: 20px;
    text-align: center;
    pointer-events: none;
}
.nav-link span {
    pointer-events: none;
}
.arrow {
    float: right;
    pointer-events: none;
}
.arrow i {
    pointer-events: none;
}
.sub-menu {
    background: #1a252f;
    list-style: none;
    padding-left: 0;
    margin: 0;
}
.sub-menu .nav-link {
    padding-left: 45px;
    font-size: 0.9em;
}
.sub-menu .nav-link:hover {
    background: #0f1a24;
}
</style>