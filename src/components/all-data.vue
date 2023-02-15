<template>
  <navigation />
  <div class="container m-x auto">
    <br /><br />
    <input
      type="search"
      class="form-control text-uppercase b"
      name="buscar"
      v-model="searchCustomer"
      @keypress.enter="searchOneCustomer()"
      placeholder="Buscar Cliente"
    />
    <br />
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">NIT</th>
          <th scope="col">RAZON SOCIAL</th>
          <th scope="col">TRACKID</th>
          <th scope="col">DISPOSITIVOS</th>
          <th scope="col">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in generalData" :key="customer.id">
          <th scope="row">{{ customer.nit }}</th>
          <td>{{ customer.business_name }}</td>
          <td>{{ customer.server_trackId }}</td>
          <td>{{ customer.number_of_devices }}</td>
          <td>
            <button class="btn btn-dark" @click="editItem(customer.nit)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navigation from "@/components/navigation.vue";
import { CommanderDevice } from "../service/create-data-commander";
import { ICommanderDeviceCreate } from "@/interface/commander.interface";
import {irApi} from '../service/environmentVariables'
export default defineComponent({
  components: {
    navigation,
  },
  data() {
    return {
      generalData: [] as Array<ICommanderDeviceCreate>,
      searchCustomer: "" as string,
    };
  },
  mounted() {
    this.getData();
  },

  methods: {
    async getData() {
      try {

  
        const response = await CommanderDevice.getData();

        this.generalData = response.data;
        alert(
          `Se encontraron ${this.generalData.length} Clientes con comanderas moviles`
        );
      } catch (error) {
        alert("Error: " + error);
      }
    },
    editItem(nit: string) {
      this.$router.push(`/edit-data/${nit}`);
    },
    async searchOneCustomer() {
      this.searchCustomer = this.searchCustomer.toUpperCase();
      if (this.searchCustomer === "") {
        await this.getData();
      }
      if (this.searchCustomer && this.searchCustomer.trim() != null) {
        console.log(this.searchCustomer);
        this.generalData = this.generalData.filter((item) => {
          return (
            item.server_trackId.includes(this.searchCustomer) ||
            item.nit.includes(this.searchCustomer)  ||
            item.business_name.includes(this.searchCustomer)
          );
        });
        console.log(this.generalData)
      }
    },
  },
});
</script>


