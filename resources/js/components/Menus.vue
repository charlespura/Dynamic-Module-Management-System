<template>
    <div>
        <h2>Menu Management</h2>
        <p class="text-muted">Create and manage modules and submodules</p>
        
        <button class="btn btn-primary mb-3" @click="showAddModal = true">
            <i class="fa fa-plus"></i> Add New Module
        </button>

        <div class="card">
            <div class="card-body">
                <h5>Module Structure</h5>
                <div v-if="menus.length === 0" class="alert alert-info">
                    No modules found. Click "Add New Module" to create one.
                </div>
                <ul class="list-unstyled" v-else>
                    <li v-for="menu in menus" :key="menu.id" class="menu-item">
                        <div class="menu-item-header">
                            <i :class="'fa fa-' + menu.icon"></i>
                            <strong>{{ menu.name }}</strong>
                            <span class="badge badge-secondary ml-2">{{ menu.route || 'No route' }}</span>
                            <span class="badge" :class="menu.status ? 'badge-success' : 'badge-danger'">
                                {{ menu.status ? 'Active' : 'Inactive' }}
                            </span>
                            <div class="float-right">
                                <button class="btn btn-sm btn-primary" @click="addSubmenu(menu)">
                                    <i class="fa fa-plus"></i> Add Sub
                                </button>
                                <button class="btn btn-sm btn-warning" @click="editMenu(menu)">
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button class="btn btn-sm btn-danger" @click="deleteMenu(menu.id)">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <ul v-if="menu.children && menu.children.length" class="submenu-list">
                            <li v-for="child in menu.children" :key="child.id" class="submenu-item">
                                <i :class="'fa fa-' + child.icon"></i>
                                {{ child.name }}
                                <span class="badge badge-secondary ml-2">{{ child.route }}</span>
                                <div class="float-right">
                                    <button class="btn btn-sm btn-warning" @click="editMenu(child)">
                                        <i class="fa fa-edit"></i>
                                    </button>
                                    <button class="btn btn-sm btn-danger" @click="deleteMenu(child.id)">
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Add/Edit Modal - FIXED SCROLLING -->
        <div class="modal-overlay" v-if="showAddModal" @click.self="closeModal">
            <div class="modal-container">
                <div class="modal-header">
                    <h5 class="modal-title">{{ editingMenu ? 'Edit Menu' : 'Add New Module' }}</h5>
                    <button type="button" class="close" @click="closeModal">×</button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="saveMenu" class="modal-form">
                        <div class="form-group">
                            <label>Module Name *</label>
                            <input v-model="form.name" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Parent Module</label>
                            <select v-model="form.parent_id" class="form-control">
                                <option value="">None (Top Level Module)</option>
                                <option v-for="menu in parentMenus" :key="menu.id" :value="menu.id">
                                    {{ menu.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Icon</label>
                            <input v-model="form.icon" class="form-control" placeholder="e.g., users, home, money">
                            <small class="text-muted">Font Awesome icon name (without fa- prefix)</small>
                        </div>
                        <div class="form-group">
                            <label>Route</label>
                            <input v-model="form.route" class="form-control" placeholder="/hr/employees">
                            <small class="text-muted">The URL path for this module</small>
                        </div>
                        <div class="form-group">
                            <label>Component</label>
                            <input v-model="form.component" class="form-control" placeholder="Employees">
                            <small class="text-muted">The Vue component name</small>
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
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
                            <button type="submit" class="btn btn-success">{{ editingMenu ? 'Update' : 'Create' }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
    },
    methods: {
        async fetchMenus() {
            try {
                const response = await axios.get('/menus');
                this.menus = response.data.data;
                this.parentMenus = response.data.data.filter(m => m.parent_id === null);
            } catch (error) {
                console.error('Error fetching menus:', error);
            }
        },
        addSubmenu(menu) {
            this.editingMenu = null;
            this.form = {
                name: '',
                parent_id: menu.id,
                icon: '',
                route: '',
                component: '',
                sort_order: 0,
                status: 1
            };
            this.showAddModal = true;
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
                alert(response.data.message || 'Menu saved successfully!');
                this.closeModal();
                this.fetchMenus();
                this.$store.dispatch('fetchMenus');
            } catch (error) {
                alert('Error saving menu: ' + (error.response?.data?.message || error.message));
            }
        },
        async deleteMenu(id) {
            if (!confirm('Are you sure you want to delete this menu?')) return;
            
            try {
                const response = await axios.delete(`/menus/${id}`);
                alert(response.data.message);
                this.fetchMenus();
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
    padding: 10px;
    border-bottom: 1px solid #eee;
}
.menu-item-header {
    padding: 8px;
    background: #f8f9fa;
    border-radius: 4px;
}
.submenu-list {
    margin-left: 30px;
    padding-left: 15px;
    border-left: 2px solid #dee2e6;
}
.submenu-item {
    padding: 8px;
    margin: 4px 0;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #eee;
}

/* Modal Styles - Fixed Scrolling */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    overflow: hidden;
}

.modal-container {
    background: white;
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.modal-header {
    padding: 15px 20px;
    border-bottom: 1px solid #dee2e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: white;
    z-index: 10;
}

.modal-header .close {
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
    color: #000;
    opacity: 0.5;
    padding: 0 10px;
}

.modal-header .close:hover {
    opacity: 1;
}

.modal-body {
    padding: 20px;
    overflow-y: auto;
    flex: 1;
    max-height: calc(90vh - 130px);
}

.modal-form {
    padding-bottom: 10px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
}

.form-control {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
}

.form-control:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.text-muted {
    color: #6c757d;
    font-size: 12px;
    display: block;
    margin-top: 4px;
}

.modal-footer {
    padding: 15px 0 0 0;
    border-top: 1px solid #dee2e6;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    flex-shrink: 0;
    margin-top: 10px;
}

.btn {
    padding: 8px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
}

.btn-success {
    background: #28a745;
    color: white;
}

.btn-success:hover {
    background: #218838;
}

.btn-secondary {
    background: #6c757d;
    color: white;
}

.btn-secondary:hover {
    background: #5a6268;
}

.btn-primary {
    background: #007bff;
    color: white;
}

.btn-primary:hover {
    background: #0069d9;
}

.btn-warning {
    background: #ffc107;
    color: #212529;
}

.btn-danger {
    background: #dc3545;
    color: white;
}

.btn-sm {
    padding: 4px 8px;
    font-size: 12px;
}

.float-right {
    float: right;
}

.ml-2 {
    margin-left: 8px;
}

.mb-3 {
    margin-bottom: 15px;
}

.badge {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 12px;
}

.badge-success {
    background: #28a745;
    color: white;
}

.badge-danger {
    background: #dc3545;
    color: white;
}

.badge-secondary {
    background: #6c757d;
    color: white;
}

.badge-info {
    background: #17a2b8;
    color: white;
}

.badge-primary {
    background: #007bff;
    color: white;
}

.badge-warning {
    background: #ffc107;
    color: #212529;
}

.alert {
    padding: 12px 20px;
    border-radius: 4px;
}

.alert-info {
    background: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
}
</style>