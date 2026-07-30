<template>
    <div>
        <h1>Dashboard</h1>
        <div class="row">
            <div class="col-md-3">
                <div class="card bg-primary text-white">
                    <div class="card-body">
                        <h5>Total Employees</h5>
                        <h2>{{ stats.employees || 0 }}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-success text-white">
                    <div class="card-body">
                        <h5>Active Modules</h5>
                        <h2>{{ stats.modules || 0 }}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h5>Total Users</h5>
                        <h2>{{ stats.users || 0 }}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card bg-warning text-white">
                    <div class="card-body">
                        <h5>System Status</h5>
                        <h2><span class="badge badge-light">Online</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stats: {
                employees: 125,
                modules: 12,
                users: 8
            }
        };
    }
}
</script>
