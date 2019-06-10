<template>
  <div>
    <router-link to="/" class="badge badge-info text-wrap p-2 ml-3 mb-2 mt-3">Home</router-link>
    <div class="container">
      <form class="mt-5">
        <div class="form-group">
          <label for="inputName">Name</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            placeholder="Enter name"
            v-model="name"
          >
        </div>
        <div class="form-group">
          <label for="inputSurname">Surname</label>
          <input
            type="text"
            class="form-control"
            id="inputSurname"
            placeholder="Enter surname"
            v-model="surname"
          >
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Enter email"
            v-model="email"
          >
        </div>
        <div class="form-group">
          <label for="inputPhone">Phone</label>
          <input
            type="text"
            class="form-control"
            id="inputPhone"
            placeholder="Enter phone"
            v-model="phone"
          >
        </div>
        <button v-if="isSubmit" type="submit" class="btn btn-primary" @click="addUser">Submit</button>
        <button v-else type="submit" class="btn btn-warning" @click="setUser">Edit</button>
      </form>
      <SuccessMessage v-if="this.isChanged" :submit="isSubmit"/>
      <EditImport v-if="isSubmit"/>
      <!-- v-if ="this.isChanged" -->
    </div>
  </div>
</template>

<script>
import uuid from "uuid";
import EditImport from "./EditImport";
import SuccessMessage from "./SuccessMessage";
export default {
  name: "Edit",
  data() {
    return {
      isChanged: false,
      name: "",
      surname: "",
      email: "",
      phone: ""
    };
  },
  components: {
    SuccessMessage,
    EditImport
  },
  methods: {
    addUser(e) {
      e.preventDefault();
      const newUser = {
        id: uuid.v4(),
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone
      };
      this.$store.state.users = [...this.$store.state.users, newUser];
      this.isChanged = true;
      const state = this.$store.state.users;
      localStorage.setItem("users", JSON.stringify(state));
    },
    setUser(e) {
      e.preventDefault();
      if (this.$store.state.users) {
        const mappedUsers = this.$store.state.users.map(x => {
          if (x.id === this.$route.params.id) {
            x = {
              ...x,
              name: this.name,
              surname: this.surname,
              email: this.email,
              phone: this.phone
            };
          }
          return x;
        });
        this.$store.state.users = mappedUsers;
        this.isChanged = true;
        const state = this.$store.state.users;
        localStorage.setItem("users", JSON.stringify(state));
      }
    }
  },
  computed: {
    isSubmit() {
      return this.$route.params.id === undefined;
    }
  },
  mounted() {
    this.$store.state.users.map(x => {
      if (x.id === this.$route.params.id) {
        this.name = x.name;
        this.surname = x.surname;
        this.email = x.email;
        this.phone = x.phone;
      }
      return x;
    });
  }
};
</script>

<style>
</style>
