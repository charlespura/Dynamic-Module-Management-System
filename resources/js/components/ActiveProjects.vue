<template>
    <div>
        <h2>Active Projects</h2>
        <div class="card">
            <div class="card-body">
                <p>List of currently active projects</p>
                <div class="alert alert-success">
                    <i class="fa fa-check-circle"></i> {{ activeProjects.length }} active projects
                </div>
                <div class="list-group">
                    <div v-for="project in activeProjects" :key="project.id" class="list-group-item">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <i class="fa fa-check-circle text-success"></i>
                                <strong>{{ project.name }}</strong>
                            </div>
                            <span class="badge badge-primary">Active</span>
                        </div>
                        <small class="text-muted">Deadline: {{ project.deadline }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ActiveProjects',
    data() {
        return {
            activeProjects: [
                { id: 1, name: 'Website Redesign', deadline: '2024-12-31' },
                { id: 2, name: 'Mobile App Development', deadline: '2024-11-15' },
                { id: 3, name: 'API Integration', deadline: '2024-12-01' }
            ]
        };
    }
}
</script>