<template lang="">
    <div>

        <div class="row">
            <div class="col-md-9 mx-auto">
                <div class="card">
                    <div class="card-header text-center">Signin</div>
                    <div class="card-body">
                        <form autocomplete="off" @submit.prevent="onSubmit()">
                            <div class="form-group row">
                                <label for="email" class="col-sm-3 col-form-label">Email</label>
                                <div class="col-sm-8">
                                    <input v-model="user.email" type="email" id="email" class="form-control" placeholder="Email">
                                </div>
                            </div>

                            <div class="form-group row mt-2">
                                <label for="password" class="col-sm-3 col-form-label">Password</label>
                                <div class="col-sm-8">
                                    <input v-model="user.password" type="password" id="password" class="form-control" placeholder="Password">
                                </div>
                            </div>

                            <div class="form-group mt-2 text-center">
                                <button type="submit" class="btn btn-primary btn-sm">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>

import { mapActions } from 'vuex';

    export default {
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions({
                'signIn': 'auth/signIn'
            }),
            onSubmit() {
                this.signIn(this.user).then(() => this.$router.replace({ name: 'Dashboard'}))
            }
           
        },
    }
</script>
<style lang="">

</style>