<template>
    <div>
        <h2>Projects Dashboard</h2>
        <div class="card">
            <div class="card-body">
                <p>Project Management Module</p>
                
                <button class="btn btn-primary mb-3">
                    <i class="fa fa-plus"></i> New Project
                </button>

                <div class="row">
                    <div class="col-md-4">
                        <div class="card bg-primary text-white">
                            <div class="card-body">
                                <h5>Total Projects</h5>
                                <h2>{{ stats.total }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-success text-white">
                            <div class="card-body">
                                <h5>Active</h5>
                                <h2>{{ stats.active }}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-warning text-white">
                            <div class="card-body">
                                <h5>Completed</h5>
                                <h2>{{ stats.completed }}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <table class="table mt-3">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Project Name</th>
                            <th>Status</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="project in projects" :key="project.id">
                            <td>{{ project.id }}</td>
                            <td>{{ project.name }}</td>
                            <td>
                                <span class="badge" :class="project.status === 'Active' ? 'badge-success' : 'badge-secondary'">
                                    {{ project.status }}
                                </span>
                            </td>
                            <td>{{ project.deadline }}</td>
                            <td>
                                <button class="btn btn-sm btn-info">View</button>
                                <button class="btn btn-sm btn-warning">Edit</button>
                                <button class="btn btn-sm btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            stats: {
                total: 25,
                active: 15,
                completed: 10
            },
            projects: [
                { id: 1, name: 'Website Redesign', status: 'Active', deadline: '2024-12-31' },
                { id: 2, name: 'Mobile App Development', status: 'Active', deadline: '2024-11-15' },
                { id: 3, name: 'Database Migration', status: 'Completed', deadline: '2024-10-01' }
            ]
        };
    }
}
</script>