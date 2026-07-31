<template>
    <div>
        <h2>Active Projects</h2>
        <div class="card">
            <div class="card-body">
                <p>List of currently active projects</p>
                <!-- loading -->
                <div v-if="loading" class="text-center">
                    <i class="fa fa-spinner fa-spin"></i> Loading...
                </div>
                <div v-else>
                    <div class="alert alert-success">
                        <i class="fa fa-check-circle"></i> {{ projects.length }} active projects
                    </div>
                    <div class="list-group">
                        <div v-for="project in projects" :key="project.id" class="list-group-item">
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <i class="fa fa-check-circle text-success"></i>
                                    <strong>{{ project.name }}</strong>
                                </div>
                                <span class="badge badge-primary">Active</span>
                            </div>
                            <small class="text-muted">Deadline: {{ formatDate(project.deadline) }}</small>
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
    name: 'ActiveProjects',
    data() {
        return {
            projects: [],
            loading: false
        };
    },
    created() {
        this.fetchActiveProjects();
    },
    methods: {
        async fetchActiveProjects() {
            this.loading = true;
            try {
                const response = await axios.get('/projects/active');
                this.projects = response.data.data;
            } catch (error) {
                console.error('Error fetching active projects:', error);
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