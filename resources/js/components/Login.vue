<template>
    <div class="login-container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4 class="text-center">Dynamic Module System</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="handleLogin">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" v-model="email" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" v-model="password" class="form-control" required>
                            </div>
                            <div v-if="error" class="alert alert-danger">{{ error }}</div>
                            <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
                                {{ loading ? 'Logging in...' : 'Login' }}
                            </button>
                        </form>
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
            email: 'admin@example.com',
            password: 'password',
            error: '',
            loading: false
        };
    },
    methods: {
        async handleLogin() {
            this.error = '';
            this.loading = true;
            
            try {
                const result = await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                });
                
                if (result) {
                    await this.$store.dispatch('fetchMenus');
                    this.$router.push('/dashboard');
                } else {
                    this.error = 'Invalid credentials';
                }
            } catch (error) {
                this.error = error.response?.data?.message || 'Login failed';
                console.error('Login error:', error);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.login-container {
    display: auto;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #f5f7fa;
}
.card {
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
</style>