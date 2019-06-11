<template>
  <div>
    <router-link to="/edit" class="badge badge-info text-wrap p-2 mb-2 ml-3 mt-3">Add User</router-link>
    <Users v-bind:users="users" @deleteUser="deleteUser"/>
  </div>
</template>

<script>
import Users from "./Users";
export default {
  name: "Home",
  components: {
    Users
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    deleteUser(id) {
      const users = [...this.$store.state.users].filter(u => u.id != id);
      this.$store.commit("setUsers", users);
      localStorage.setItem("users", JSON.stringify(users));
    }
  },
  mounted() {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) this.$store.commit("setUsers", users);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
