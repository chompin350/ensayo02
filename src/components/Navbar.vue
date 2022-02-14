<template>
  <div>
   <b-navbar toggleable="lg" type="dark" variant="dark" v-if="estado">
      <b-navbar-brand href="#">Company</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/login">Home</b-nav-item>
          <b-nav-item to="/about">Opciones</b-nav-item>
          <b-nav-item href="#">Inventario</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Profile</b-nav-item>
          <b-nav-item href="#">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
   <b-navbar type="light" variant="light" v-else>
      <b-navbar-nav>
        <b-nav-item href="#">
          <img src="@/assets/empresa.png" alt="Logo empresa">
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>

</template>

<script>
  import { mapState} from 'vuex';

  export default {
    computed:{
      ...mapState(['estado']),

    },
    created(){
      if (this.$store.state.estado){
        this.$router.push({name: 'Home'}).catch(() => {});
      }else{
        this.$router.push({name: 'Login'}).catch(() => {});
      }
    }
  }
</script>

<style scoped>

  img{
    width: 50px;
    height: 50px;
  }

</style>