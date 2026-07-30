<template>
    <div>
        <h2>Completed Projects</h2>
        <div class="card">
            <div class="card-body">
                <p>List of completed projects</p>
                <div class="alert alert-success">
                    <i class="fa fa-check-double"></i> {{ completedProjects.length }} completed projects
                </div>
                <div class="list-group">
                    <div v-for="project in completedProjects" :key="project.id" class="list-group-item">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <i class="fa fa-check-double text-success"></i>
                                <strong>{{ project.name }}</strong>
                            </div>
                            <span class="badge badge-success">Completed</span>
                        </div>
                        <small class="text-muted">Completed: {{ project.completed_date }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompletedProjects',
    data() {
        return {
            completedProjects: [
                { id: 1, name: 'Database Migration', completed_date: '2024-10-01' },
                { id: 2, name: 'Server Upgrade', completed_date: '2024-09-15' },
                { id: 3, name: 'Security Audit', completed_date: '2024-08-20' }
            ]
        };
    }
}
</script>