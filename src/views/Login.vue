<template>
  <div class="container text-left">
    <h1>Login Usuarios</h1>
    <div>
      <ul v-if="errores.length">
        <ol v-for="(error,index) in errores" :key="index" >
          <b-alert
            show
            variant="danger"
          >
            {{ error }}
          </b-alert>
          
        </ol>
      </ul>
    </div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="formulario.email"
          type="email"
          placeholder="Ingrese email"
          required
          @click="limpiarvalidacion"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formulario.contrasena"
          type="password"
          placeholder="Ingrese contraseña"
          required
          @click="limpiarvalidacion"
        ></b-form-input>
      </b-form-group>
      <p>Ingrese sus credenciales de usuario</p>
      <div>
        <b-button variant="primary" @click="validaformulario">Ingresar</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
  name: 'Login',
  data(){
    return {
      formulario:{
          email:'',
          contrasena:''
      },
      errores:[],
    }
  },
  computed:{
    ...mapState(['estado']),
  },
  methods:{
    validaformulario(){
      this.errores=[];
      if (!this.formulario.email) {
        this.errores.push('El correo electrónico es obligatorio.');
      } else if (!this.validEmail(this.formulario.email)) {
        this.errores.push('El correo electrónico debe ser válido.');
      }
      if (!this.formulario.contrasena) {
        this.errores.push("La password es obligatoria.");
      }
      if (this.formulario.contrasena.length>20) {
        this.errores.push("El largo de la password ha excedido el limite.");
      }
      if (this.formulario.contrasena.length<6) {
        this.errores.push("El largo minimo de la password es 6 caracteres.");
      }
      if (this.errores.length==0){
      const axiosInstance = axios.create({headers: {"Access-Control-Allow-Origin": "*"}})
        .post('http://157.230.190.251/api/v1/cmodels/users/login', {
          username: this.email, 
          password: this.password
        })
        .then((accept) =>{
          console.log(accept);
        })
        .catch(e =>{
          console.log(e)
        })
      }
    },

    validEmail(email) {
      var re = /\w+@\w+\.+[a-z]/;
      return re.test(email);
    },
    limpiarvalidacion(){
      this.errores=[];
    },
  }
}
</script>

<style scoped>

.container{
  margin-top: 2rem;
  padding-bottom: 2rem;
  width:30%;
  border: 1px solid rgb(228, 225, 225);
  border-radius: 5px;
}

ol, ul{
  padding-left: 0;
}

button{
  width: 100%;
}
</style>
