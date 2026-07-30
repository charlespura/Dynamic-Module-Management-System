<template>
    <div>
        <h2>Project Reports</h2>
        <div class="card">
            <div class="card-body">
                <p>Project reporting and analytics</p>
                <div class="alert alert-info">
                    <i class="fa fa-chart-bar"></i> Generate reports for all projects
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5>Project Status</h5>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-success" style="width: 60%">Active: 60%</div>
                                </div>
                                <div class="progress mb-2">
                                    <div class="progress-bar bg-warning" style="width: 25%">In Progress: 25%</div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-secondary" style="width: 15%">Completed: 15%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5>Quick Stats</h5>
                                <ul class="list-unstyled">
                                    <li><i class="fa fa-check-circle text-success"></i> Active: 15</li>
                                    <li><i class="fa fa-check-double text-info"></i> Completed: 10</li>
                                    <li><i class="fa fa-clock text-warning"></i> Pending: 5</li>
                                    <li><i class="fa fa-tasks text-primary"></i> Total: 30</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectReports'
}
</script>