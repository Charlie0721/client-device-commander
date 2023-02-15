<template>
  <navigation />
  <br /><br />
  <div class="mx-auto" style="width: 980px">
    <div class="card">
      <div class="card-body">
        <h1 class="title">EDITAR INFORMACION</h1>
        <form
          @submit.prevent="updateDataCommander(editDataCustomer.nit)"
          class="contact-form row"
        >
          <div class="form-field col-lg-6">
            <input
              id="nit"
              class="input-text js-input"
              type="text"
              required
              v-model="editDataCustomer.nit"
            />
            <label class="label" for="name">NIT</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="business_name"
              class="input-text js-input"
              type="text"
              required
              v-model="editDataCustomer.business_name"
            />
            <label class="label" for="business_name">RAZON SOCIAL</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="tradename"
              class="input-text js-input"
              type="text"
              v-model="editDataCustomer.tradename"
            />
            <label class="label" for="tradename">NOMBRE COMERCIAL</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="department"
              class="input-text js-input"
              type="text"
              v-model="editDataCustomer.department"
            />
            <label class="label" for="department">DEPARTAMENTO</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="city"
              class="input-text js-input"
              type="text"
              v-model="editDataCustomer.city"
            />
            <label class="label" for="city">CIUDAD</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="address"
              class="input-text js-input"
              type="text"
              v-model="editDataCustomer.address"
            />
            <label class="label" for="address">DIRECCION</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="phone_number"
              class="input-text js-input"
              type="text"
              v-model="editDataCustomer.phone_number"
            />
            <label class="label" for="phone_number">NUMERO TELEFONICO</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="serverTrackId"
              class="input-text js-input"
              type="text"
              v-model="editDataCustomer.server_trackId"
            />
            <label class="label" for="serverTrackId">TRACKID SERVIDOR</label>
          </div>
          <div class="form-field col-lg-6">
            <input
              id="numberOfDevices"
              class="input-text js-input"
              type="number"
              v-model="editDataCustomer.number_of_devices"
            />
            <label class="label" for="numberOfDevices"
              >CANTIDAD DISPOSITIVOS</label
            >
          </div>
          <div class="form-field col-lg-6">
            <label class="label" for="lifeTime">VITALICIA</label>
            <select
              class="input-text js-input"
              id="exampleFormControlSelect1"
              aria-label="Default select example"
              v-model="editDataCustomer.lifetime"
            >
              <option value="SI">SI</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <div
            class="form-field col-lg-6"
            v-if="editDataCustomer.lifetime === 'NO'"
          >
            <input
              id="activationDate"
              class="input-text js-input"
              type="date"
              v-model="editDataCustomer.activation_date"
            />
            <label class="label" for="activationDate">FECHA ACTIVACION</label>
          </div>
          <div
            class="form-field col-lg-6"
            v-if="editDataCustomer.lifetime === 'NO'"
          >
            <input
              id="end_date"
              class="input-text js-input"
              type="date"
              v-model="editDataCustomer.end_date"
            />
            <label class="label" for="end_date">FECHA FINALIZACION</label>
          </div>

          <div class="form-field col-lg-12">
            <button type="submit" class="submit-btn">EDITAR</button>
          </div>
        </form>
      </div>
    </div>
    <br />
    <div class="card text-center">
      <div class="card-header">
        <h5 class="card-title">
          TRACKID SERVIDOR: {{ editDataCustomer.server_trackId }}
        </h5>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ editDataCustomer.business_name }}</h5>
        <p class="card-text">NIT: {{ editDataCustomer.nit }}</p>
        <p class="card-text" v-if="editDataCustomer.activation_date != null">
          ACTIVACION: {{ editDataCustomer.activation_date }} FINALIZACION:
          {{ editDataCustomer.end_date }}
        </p>
        <p class="card-text">CIUDAD: {{ editDataCustomer.city }}</p>
        <p class="card-text">DEPARTAMENTO: {{ editDataCustomer.department }}</p>
        <p class="card-text">VITALICIA: {{ editDataCustomer.lifetime }}</p>
        <p class="card-text">TELEFONO: {{ editDataCustomer.phone_number }}</p>
        <p class="card-text">DIRECCION: {{ editDataCustomer.address }}</p>
      </div>
      <div class="card-footer text-muted">
        <h5 class="card-title">
          DISPOSITIVOS ASOCIADOS:{{ editDataCustomer.number_of_devices }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navigation from "@/components/navigation.vue";
import { ICommanderDeviceUpdate } from "@/interface/commander.interface";
import { CommanderDevice } from "@/service/create-data-commander";
export default defineComponent({
  components: {
    navigation,
  },
  mounted() {
    this.getData(this.nit);
  },
  data() {
    return {
      nit: "" as string,
      editDataCustomer: {} as ICommanderDeviceUpdate,
    };
  },
  methods: {
    async updateDataCommander(nit: string) {
      try {
        nit = this.$route.params.nit.toString();
        const dataUpdated: ICommanderDeviceUpdate = this.editDataCustomer;
        const response = await CommanderDevice.updateData(nit, dataUpdated);
        alert(`Editado !!! ${response.status}`);
      } catch (error) {
        alert(error);
      }
    },
    async getData(nit: string) {
      try {
        nit = this.$route.params.nit.toString();
        const getDataByNit = await CommanderDevice.getUniqueDataByNit(nit);
        this.editDataCustomer.nit = getDataByNit.data.nit;
        this.editDataCustomer.business_name = getDataByNit.data.business_name;
        this.editDataCustomer.tradename = getDataByNit.data.tradename;
        this.editDataCustomer.activation_date =
          getDataByNit.data.activation_date;
        this.editDataCustomer.end_date = getDataByNit.data.end_date;
        this.editDataCustomer.city = getDataByNit.data.city;
        this.editDataCustomer.department = getDataByNit.data.department;
        this.editDataCustomer.phone_number = getDataByNit.data.phone_number;
        this.editDataCustomer.number_of_devices =
          getDataByNit.data.number_of_devices;
        this.editDataCustomer.server_trackId = getDataByNit.data.server_trackId;
        this.editDataCustomer.lifetime = getDataByNit.data.lifetime;
        this.editDataCustomer.address = getDataByNit.data.address;
      } catch (error) {
        alert(error);
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
  position: initial;
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
