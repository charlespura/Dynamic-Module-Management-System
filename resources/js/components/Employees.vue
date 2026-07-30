<template>
    <div>
        <h2>Employees Module</h2>
        <div class="card">
            <div class="card-body">
                <p>Employee Management</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="emp in employees" :key="emp.id">
                            <td>{{ emp.id }}</td>
                            <td>{{ emp.name }}</td>
                            <td>{{ emp.department }}</td>
                            <td><span class="badge badge-success">Active</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employees: [
                { id: 1, name: 'John Doe', department: 'IT' },
                { id: 2, name: 'Jane Smith', department: 'HR' },
                { id: 3, name: 'Bob Johnson', department: 'Finance' }
            ]
        };
    }
}
</script>
