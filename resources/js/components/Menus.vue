<template>
    <div>
        <h2>Menu Management</h2>
        
        <button class="btn btn-primary mb-3" @click="showAddModal = true">
            <i class="fa fa-plus"></i> Add New Menu
        </button>

        <!-- Menu Tree -->
        <div class="card">
            <div class="card-body">
                <div v-for="menu in menus" :key="menu.id" class="menu-item">
                    <div class="menu-row" :style="{ paddingLeft: (getDepth(menu) * 20) + 'px' }">
                        <i :class="'fa fa-' + menu.icon"></i>
                        <span class="menu-name">{{ menu.name }}</span>
                        <span class="badge" :class="menu.status ? 'badge-success' : 'badge-danger'">
                            {{ menu.status ? 'Active' : 'Inactive' }}
                        </span>
                        <span class="menu-route">{{ menu.route }}</span>
                        <div class="menu-actions">
                            <button class="btn btn-sm btn-info" @click="editMenu(menu)">Edit</button>
                            <button class="btn btn-sm btn-danger" @click="deleteMenu(menu.id)">Delete</button>
                        </div>
                    </div>
                    <div v-if="menu.children && menu.children.length">
                        <div v-for="child in menu.children" :key="child.id" class="menu-item">
                            <div class="menu-row" :style="{ paddingLeft: (getDepth(child) * 20) + 'px' }">
                                <i :class="'fa fa-' + child.icon"></i>
                                <span class="menu-name">{{ child.name }}</span>
                                <span class="badge" :class="child.status ? 'badge-success' : 'badge-danger'">
                                    {{ child.status ? 'Active' : 'Inactive' }}
                                </span>
                                <span class="menu-route">{{ child.route }}</span>
                                <div class="menu-actions">
                                    <button class="btn btn-sm btn-info" @click="editMenu(child)">Edit</button>
                                    <button class="btn btn-sm btn-danger" @click="deleteMenu(child.id)">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add/Edit Modal -->
        <div class="modal" :class="{ show: showAddModal }" v-if="showAddModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ editingMenu ? 'Edit Menu' : 'Add New Menu' }}</h5>
                        <button type="button" class="close" @click="closeModal">×</button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="saveMenu">
                            <div class="form-group">
                                <label>Menu Name *</label>
                                <input v-model="form.name" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Parent Menu</label>
                                <select v-model="form.parent_id" class="form-control">
                                    <option value="">None (Top Level)</option>
                                    <option v-for="menu in parentMenus" :key="menu.id" :value="menu.id">
                                        {{ menu.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Icon</label>
                                <input v-model="form.icon" class="form-control" placeholder="e.g., users, home, money">
                                <small class="text-muted">Font Awesome icons: <a href="https://fontawesome.com/v4/icons/" target="_blank">View icons</a></small>
                            </div>
                            <div class="form-group">
                                <label>Route</label>
                                <input v-model="form.route" class="form-control" placeholder="/hr/employees">
                            </div>
                            <div class="form-group">
                                <label>Component</label>
                                <input v-model="form.component" class="form-control" placeholder="Employees">
                            </div>
                            <div class="form-group">
                                <label>Sort Order</label>
                                <input v-model="form.sort_order" type="number" class="form-control">
                            </div>
                            <div class="form-group">
                                <label>Status</label>
                                <select v-model="form.status" class="form-control">
                                    <option :value="1">Active</option>
                                    <option :value="0">Inactive</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-success">{{ editingMenu ? 'Update' : 'Create' }}</button>
                            <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop" v-if="showAddModal"></div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            menus: [],
            parentMenus: [],
            showAddModal: false,
            editingMenu: null,
            form: {
                name: '',
                parent_id: '',
                icon: '',
                route: '',
                component: '',
                sort_order: 0,
                status: 1
            }
        };
    },
    created() {
        this.fetchMenus();
        this.fetchParentMenus();
    },
    methods: {
        getDepth(menu) {
            let depth = 0;
            let parent = menu.parent_id;
            while (parent) {
                depth++;
                const found = this.menus.find(m => m.id === parent);
                parent = found ? found.parent_id : null;
            }
            return depth;
        },
        async fetchMenus() {
            try {
                const response = await axios.get('/menus');
                this.menus = response.data.data;
            } catch (error) {
                console.error('Error fetching menus:', error);
                alert('Error loading menus');
            }
        },
        async fetchParentMenus() {
            try {
                const response = await axios.get('/menus');
                this.parentMenus = response.data.data.filter(m => m.parent_id === null);
            } catch (error) {
                console.error('Error fetching parent menus:', error);
            }
        },
        editMenu(menu) {
            this.editingMenu = menu;
            this.form = { ...menu };
            this.showAddModal = true;
        },
        closeModal() {
            this.showAddModal = false;
            this.editingMenu = null;
            this.form = {
                name: '',
                parent_id: '',
                icon: '',
                route: '',
                component: '',
                sort_order: 0,
                status: 1
            };
        },
        async saveMenu() {
            try {
                let response;
                if (this.editingMenu) {
                    response = await axios.put(`/menus/${this.editingMenu.id}`, this.form);
                } else {
                    response = await axios.post('/menus', this.form);
                }
                alert(response.data.message || 'Menu saved successfully');
                this.closeModal();
                this.fetchMenus();
                this.fetchParentMenus();
                // Refresh sidebar
                this.$store.dispatch('fetchMenus');
            } catch (error) {
                alert('Error saving menu: ' + (error.response?.data?.message || error.message));
            }
        },
        async deleteMenu(id) {
            if (!confirm('Are you sure you want to delete this menu?')) return;
            
            try {
                const response = await axios.delete(`/menus/${id}`);
                alert(response.data.message || 'Menu deleted successfully');
                this.fetchMenus();
                this.fetchParentMenus();
                this.$store.dispatch('fetchMenus');
            } catch (error) {
                alert('Error deleting menu: ' + (error.response?.data?.message || error.message));
            }
        }
    }
}
</script>

<style scoped>
.menu-item {
    border-bottom: 1px solid #eee;
}
.menu-row {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    gap: 15px;
}
.menu-row:hover {
    background: #f5f5f5;
}
.menu-name {
    font-weight: 500;
    min-width: 150px;
}
.menu-route {
    color: #666;
    font-size: 0.9em;
    flex: 1;
}
.menu-actions {
    display: flex;
    gap: 5px;
}
.menu-actions .btn {
    padding: 2px 10px;
    font-size: 0.8em;
}
.badge {
    font-size: 0.7em;
    padding: 3px 8px;
}
.modal.show {
    display: block;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1040;
}
.modal {
    z-index: 1050;
}
</style>