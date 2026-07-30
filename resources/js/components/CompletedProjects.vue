<template>
    <div>
        <h2>Completed Projects</h2>
        <div class="card">
            <div class="card-body">
                <p>List of completed projects</p>
                <div v-if="loading" class="text-center">
                    <i class="fa fa-spinner fa-spin"></i> Loading...
                </div>
                <div v-else>
                    <div class="alert alert-success">
                        <i class="fa fa-check-double"></i> {{ projects.length }} completed projects
                    </div>
                    <div class="list-group">
                        <div v-for="project in projects" :key="project.id" class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fa fa-check-double text-success"></i>
                                    <strong>{{ project.name }}</strong>
                                </div>
                                <span class="badge badge-secondary">Completed</span>
                            </div>
                            <small class="text-muted">Completed: {{ formatDate(project.completed_date || project.updated_at) }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CompletedProjects',
    data() {
        return {
            projects: [],
            loading: false
        };
    },
    created() {
        this.fetchCompletedProjects();
    },
    methods: {
        async fetchCompletedProjects() {
            this.loading = true;
            try {
                const response = await axios.get('/projects/completed');
                this.projects = response.data.data;
            } catch (error) {
                console.error('Error fetching completed projects:', error);
            } finally {
                this.loading = false;
            }
        },
        formatDate(date) {
            if (!date) return 'N/A';
            return new Date(date).toLocaleDateString();
        }
    }
}
</script>