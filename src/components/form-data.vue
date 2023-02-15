<template>

    <navigation/>
  <section class="get-in-touch">
    <h1 class="title">DATOS BASICOS</h1>
    <form @submit.prevent="sendDataCommander()" class="contact-form row">
      <div class="form-field col-lg-6">
        <input
          id="nit"
          class="input-text js-input"
          type="text"
          required
          v-model="commanderDevice.nit"
        />
        <label class="label" for="name">NIT</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="business_name"
          class="input-text js-input"
          type="text"
          required
          v-model="commanderDevice.business_name"
        />
        <label class="label" for="business_name">RAZON SOCIAL</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="tradename"
          class="input-text js-input"
          type="text"
          v-model="commanderDevice.tradename"
        />
        <label class="label" for="tradename">NOMBRE COMERCIAL</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="department"
          class="input-text js-input"
          type="text"
          v-model="commanderDevice.department"
        />
        <label class="label" for="department">DEPARTAMENTO</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="city"
          class="input-text js-input"
          type="text"
          v-model="commanderDevice.city"
        />
        <label class="label" for="city">CIUDAD</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="address"
          class="input-text js-input"
          type="text"
          v-model="commanderDevice.address"
        />
        <label class="label" for="address">DIRECCION</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="phone_number"
          class="input-text js-input"
          type="text"
          v-model="commanderDevice.phone_number"
        />
        <label class="label" for="phone_number">NUMERO TELEFONICO</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="serverTrackId"
          class="input-text js-input"
          type="text"
          v-model="commanderDevice.server_trackId"
        />
        <label class="label" for="serverTrackId">TRACKID SERVIDOR</label>
      </div>
      <div class="form-field col-lg-6">
        <input
          id="numberOfDevices"
          class="input-text js-input"
          type="number"
          v-model="commanderDevice.number_of_devices"
        />
        <label class="label" for="numberOfDevices">CANTIDAD DISPOSITIVOS</label>
      </div>
      <div class="form-field col-lg-6">
        <label class="label" for="lifeTime">VITALICIA</label>
        <select
          class="input-text js-input"
          id="exampleFormControlSelect1"
          aria-label="Default select example"
          v-model="commanderDevice.lifetime"
        >
          <option value="SI">SI</option>
          <option value="NO">NO</option>
        </select>
      </div>
      <div class="form-field col-lg-6" v-if="commanderDevice.lifetime === 'NO'">
        <input
          id="activationDate"
          class="input-text js-input"
          type="date"
          v-model="commanderDevice.activation_date"
        />
        <label class="label" for="activationDate">FECHA ACTIVACION</label>
      </div>
      <div class="form-field col-lg-6" v-if="commanderDevice.lifetime === 'NO'">
        <input
          id="end_date"
          class="input-text js-input"
          type="date"
          v-model="commanderDevice.end_date"
        />
        <label class="label" for="end_date">FECHA FINALIZACION</label>
      </div>

      <div class="form-field col-lg-12">
        <button type="submit" class="submit-btn">Guardar</button>
      </div>
    </form>
  </section>
</template>



<script lang="ts">
import { defineComponent } from "vue";
import { ICommanderDeviceCreate } from "../interface/commander.interface";
import { CommanderDevice } from "../service/create-data-commander";
import navigation from '@/components/navigation.vue';
export default defineComponent({
    components: {
        navigation
    },

  data() {
    return {
      commanderDevice: {} as ICommanderDeviceCreate,
    };
  },
  methods: {
    async sendDataCommander() {
      try {
        let business_name = this.commanderDevice.business_name;
        this.commanderDevice.business_name = business_name.toUpperCase();
        let tradename = this.commanderDevice.tradename;
        this.commanderDevice.tradename = tradename.toUpperCase();
        let city = this.commanderDevice.city;
        this.commanderDevice.city = city.toUpperCase();
        let department = this.commanderDevice.department;
        this.commanderDevice.department = department.toUpperCase();
        let address = this.commanderDevice.address;
        this.commanderDevice.address = address.toUpperCase();

        const responseData = await CommanderDevice.sendData(
          this.commanderDevice
        );
        if (responseData.data.response === undefined) {
          alert("¡Cliente Creado !");
        } else {
          alert(responseData.data.response);
        }
        this.commanderDevice.nit = "";
        this.commanderDevice.business_name = "";
        this.commanderDevice.tradename = "";
        this.commanderDevice.city = "";
        this.commanderDevice.department = "";
        this.commanderDevice.address = "";
        this.commanderDevice.phone_number = "";
        this.commanderDevice.server_trackId="";
        this.commanderDevice.number_of_devices=0;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
</script>


<style scoped>
.get-in-touch {
  max-width: 800px;
  margin: 50px auto;
  position: relative;
}
.get-in-touch .title {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 3.2em;
  line-height: 48px;
  padding-bottom: 48px;
  color: #5543ca;
  background: #5543ca;
  background: -moz-linear-gradient(left, #f4524d 0%, #5543ca 100%) !important;
  background: -webkit-linear-gradient(
    left,
    #f4524d 0%,
    #5543ca 100%
  ) !important;
  background: linear-gradient(to right, #f4524d 0%, #5543ca 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

.contact-form .form-field {
  position: relative;
  margin: 32px 0;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #5543ca;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
.contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-24px);
  transform: translateY(-24px);
}
.contact-form .label {
  position: absolute;
  left: 20px;
  bottom: 11px;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: #5543ca;
  cursor: text;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.contact-form .submit-btn {
  display: inline-block;
  background-color: #000;
  background-image: linear-gradient(125deg, #a72879, #064497);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  width: 200px;
  cursor: pointer;
}
</style>