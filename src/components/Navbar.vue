<template lang="">
    <div>
        <div class="row">
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <router-link class="navbar-brand" :to="{name: 'Home'}">Blog</router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul v-if="authentications" class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{name: 'Dashboard'}"> Dashboard </router-link>
                        </li>
                    </ul>
                   
                    <ul v-if="!authentications" class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <router-link class="nav-link" :to="{name: 'Signin'}"> Signin </router-link>
                        </li>
                    </ul>

                    <ul v-if="authentications" class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#"> {{user.name}} </a>
                        </li>
                    </ul>

                    <ul v-if="authentications" class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <a  @click="logOut()" class="nav-link" href="#"> LogOut </a>
                        </li>
                    </ul>
    
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authentications: "auth/authentications",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOut: "auth/signOut",
    }),
    logOut() {
      this.signOut().then(() => {
        this.$router.replace({ name: "Home" });
      });
    },
  },
};
</script>
<style lang="">
</style>