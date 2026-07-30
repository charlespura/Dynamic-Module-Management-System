<template>
    <div>
        <h2>Projects Dashboard</h2>
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <p class="mb-0">Project Management Module</p>
                    <button class="btn btn-primary" @click="openAddModal">
                        <i class="fa fa-plus"></i> Add New Project
                    </button>
                </div>

                <!-- Loading Spinner -->
                <div v-if="loading" class="text-center py-5">
                    <i class="fa fa-spinner fa-spin fa-3x text-primary"></i>
                    <p class="mt-2">Loading projects...</p>
                </div>

                <!-- Statistics -->
                <div v-else>
                    <div class="row mb-4">
                        <div class="col-md-3">
                            <div class="card bg-primary text-white">
                                <div class="card-body">
                                    <h5>Total Projects</h5>
                                    <h2>{{ stats.total || 0 }}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-success text-white">
                                <div class="card-body">
                                    <h5>Active</h5>
                                    <h2>{{ stats.active || 0 }}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-warning text-white">
                                <div class="card-body">
                                    <h5>In Progress</h5>
                                    <h2>{{ stats.in_progress || 0 }}</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-secondary text-white">
                                <div class="card-body">
                                    <h5>Completed</h5>
                                    <h2>{{ stats.completed || 0 }}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Projects Table -->
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Project Name</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Deadline</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="projects.length === 0">
                                    <td colspan="6" class="text-center text-muted">
                                        No projects found. Click "Add New Project" to create one.
                                    </td>
                                </tr>
                                <tr v-for="project in projects" :key="project.id">
                                    <td>{{ project.id }}</td>
                                    <td><strong>{{ project.name }}</strong></td>
                                    <td>{{ truncateText(project.description, 50) }}</td>
                                    <td>
                                        <span class="badge" :class="getStatusClass(project.status)">
                                            {{ project.status }}
                                        </span>
                                    </td>
                                    <td>{{ formatDate(project.deadline) }}</td>
                                    <td>
                                        <button class="btn btn-sm btn-info" @click="viewProject(project)" title="View">
                                            <i class="fa fa-eye"></i>
                                        </button>
                                        <button class="btn btn-sm btn-warning" @click="editProject(project)" title="Edit">
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button class="btn btn-sm btn-danger" @click="deleteProject(project.id)" title="Delete">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add/Edit Project Modal -->
        <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
            <div class="modal-container">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fa" :class="editingProject ? 'fa-edit' : 'fa-plus-circle'"></i>
                        {{ editingProject ? 'Edit Project' : 'Add New Project' }}
                    </h5>
                    <button type="button" class="close" @click="closeModal">×</button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="saveProject" id="projectForm">
                        <!-- Project Name -->
                        <div class="form-group">
                            <label>Project Name <span class="text-danger">*</span></label>
                            <input 
                                v-model="form.name" 
                                type="text" 
                                class="form-control" 
                                placeholder="Enter project name"
                                required
                                :class="{ 'is-invalid': errors.name }"
                            >
                            <div v-if="errors.name" class="invalid-feedback">{{ errors.name[0] }}</div>
                        </div>

                        <!-- Description -->
                        <div class="form-group">
                            <label>Description</label>
                            <textarea 
                                v-model="form.description" 
                                class="form-control" 
                                rows="3"
                                placeholder="Enter project description"
                                :class="{ 'is-invalid': errors.description }"
                            ></textarea>
                            <div v-if="errors.description" class="invalid-feedback">{{ errors.description[0] }}</div>
                        </div>

                        <!-- Status -->
                        <div class="form-group">
                            <label>Status</label>
                            <select v-model="form.status" class="form-control" :class="{ 'is-invalid': errors.status }">
                                <option value="Active">Active</option>
                                <option value="In Progress">In Progress</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <div v-if="errors.status" class="invalid-feedback">{{ errors.status[0] }}</div>
                        </div>

                        <div class="row">
                            <!-- Start Date -->
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Start Date</label>
                                    <input 
                                        v-model="form.start_date" 
                                        type="date" 
                                        class="form-control"
                                        :class="{ 'is-invalid': errors.start_date }"
                                    >
                                    <div v-if="errors.start_date" class="invalid-feedback">{{ errors.start_date[0] }}</div>
                                </div>
                            </div>

                            <!-- Deadline -->
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Deadline</label>
                                    <input 
                                        v-model="form.deadline" 
                                        type="date" 
                                        class="form-control"
                                        :class="{ 'is-invalid': errors.deadline }"
                                    >
                                    <div v-if="errors.deadline" class="invalid-feedback">{{ errors.deadline[0] }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- Form Actions -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="closeModal">
                                <i class="fa fa-times"></i> Cancel
                            </button>
                            <button 
                                type="submit" 
                                class="btn btn-success" 
                                :disabled="submitting"
                            >
                                <i class="fa" :class="submitting ? 'fa-spinner fa-spin' : 'fa-save'"></i>
                                {{ submitting ? 'Saving...' : (editingProject ? 'Update Project' : 'Create Project') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal-backdrop" v-if="showModal"></div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Projects',
    data() {
        return {
            projects: [],
            stats: {},
            loading: false,
            showModal: false,
            submitting: false,
            editingProject: null,
            errors: {},
            form: {
                name: '',
                description: '',
                status: 'Active',
                start_date: '',
                deadline: ''
            }
        };
    },
    created() {
        this.fetchProjects();
        this.fetchStats();
    },
    methods: {
        openAddModal() {
            this.editingProject = null;
            this.errors = {};
            this.form = {
                name: '',
                description: '',
                status: 'Active',
                start_date: '',
                deadline: ''
            };
            this.showModal = true;
        },

        async fetchProjects() {
            this.loading = true;
            try {
                const response = await axios.get('/projects');
                this.projects = response.data.data;
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                this.loading = false;
            }
        },

        async fetchStats() {
            try {
                const response = await axios.get('/projects/stats');
                this.stats = response.data.data;
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        },

        getStatusClass(status) {
            const classes = {
                'Active': 'badge-success',
                'In Progress': 'badge-warning',
                'On Hold': 'badge-danger',
                'Completed': 'badge-secondary'
            };
            return classes[status] || 'badge-primary';
        },

        truncateText(text, length) {
            if (!text) return 'N/A';
            return text.length > length ? text.substring(0, length) + '...' : text;
        },

        formatDate(date) {
            if (!date) return 'N/A';
            return new Date(date).toLocaleDateString();
        },

        viewProject(project) {
            alert(`📋 Project Details\n\nName: ${project.name}\nDescription: ${project.description || 'N/A'}\nStatus: ${project.status}\nStart Date: ${this.formatDate(project.start_date)}\nDeadline: ${this.formatDate(project.deadline)}`);
        },

        editProject(project) {
            this.editingProject = project;
            this.errors = {};
            this.form = {
                name: project.name,
                description: project.description || '',
                status: project.status,
                start_date: project.start_date || '',
                deadline: project.deadline || ''
            };
            this.showModal = true;
        },

        closeModal() {
            this.showModal = false;
            this.editingProject = null;
            this.errors = {};
            this.form = {
                name: '',
                description: '',
                status: 'Active',
                start_date: '',
                deadline: ''
            };
        },

        async saveProject() {
            this.submitting = true;
            this.errors = {};

            try {
                let response;
                if (this.editingProject) {
                    response = await axios.put(`/projects/${this.editingProject.id}`, this.form);
                } else {
                    response = await axios.post('/projects', this.form);
                }

                alert(response.data.message || 'Project saved successfully!');
                this.closeModal();
                this.fetchProjects();
                this.fetchStats();
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    this.errors = error.response.data.errors || {};
                    const firstError = Object.values(this.errors)[0];
                    if (firstError) {
                        alert('Validation Error: ' + firstError[0]);
                    }
                } else {
                    alert('Error saving project: ' + (error.response?.data?.message || error.message));
                }
            } finally {
                this.submitting = false;
            }
        },

        async deleteProject(id) {
            if (!confirm('Are you sure you want to delete this project?')) return;
            
            try {
                const response = await axios.delete(`/projects/${id}`);
                alert(response.data.message);
                this.fetchProjects();
                this.fetchStats();
            } catch (error) {
                alert('Error deleting project: ' + (error.response?.data?.message || error.message));
            }
        }
    }
}
</script>

<style scoped>
/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal-container {
    background: white;
    border-radius: 12px;
    max-width: 650px;
    width: 100%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal-header {
    padding: 20px 25px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    background: #f8f9fa;
    border-radius: 12px 12px 0 0;
}

.modal-header .modal-title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
}

.modal-header .close {
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    background: none;
    border: none;
    color: #6c757d;
    padding: 0 10px;
}

.modal-header .close:hover {
    color: #000;
}

.modal-body {
    padding: 25px;
    overflow-y: auto;
    flex: 1;
}

.modal-footer {
    padding: 15px 25px 20px;
    border-top: 1px solid #e9ecef;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    flex-shrink: 0;
    background: #f8f9fa;
    border-radius: 0 0 12px 12px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #2c3e50;
}

.text-danger {
    color: #dc3545;
}

.form-control {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 14px;
}

.form-control:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control.is-invalid {
    border-color: #dc3545;
}

.invalid-feedback {
    color: #dc3545;
    font-size: 12px;
    margin-top: 4px;
}

.btn {
    padding: 8px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary {
    background: #007bff;
    color: white;
}
.btn-primary:hover {
    background: #0069d9;
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

.btn-info {
    background: #17a2b8;
    color: white;
}
.btn-info:hover {
    background: #138496;
}

.btn-warning {
    background: #ffc107;
    color: #212529;
}
.btn-warning:hover {
    background: #e0a800;
}

.btn-danger {
    background: #dc3545;
    color: white;
}
.btn-danger:hover {
    background: #c82333;
}

.btn-sm {
    padding: 4px 10px;
    font-size: 12px;
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

/* Table Styles */
.table-responsive {
    overflow-x: auto;
}

.table {
    width: 100%;
    margin-bottom: 0;
    border-collapse: collapse;
}

.table th {
    background: #f8f9fa;
    color: #2c3e50;
    font-weight: 600;
    padding: 12px 15px;
    border-bottom: 2px solid #dee2e6;
    text-align: left;
}

.table td {
    padding: 12px 15px;
    border-bottom: 1px solid #e9ecef;
    vertical-align: middle;
}

.table-hover tbody tr:hover {
    background: #f8f9fa;
}

/* Badge Styles */
.badge {
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.badge-success { background: #28a745; color: white; }
.badge-warning { background: #ffc107; color: #212529; }
.badge-danger { background: #dc3545; color: white; }
.badge-secondary { background: #6c757d; color: white; }
.badge-primary { background: #007bff; color: white; }

/* Card Styles */
.card {
    border: none;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card .card-body {
    padding: 25px;
}
</style>