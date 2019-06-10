<template>
  <div class="container">
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col" class="text-center" colspan="2">Controls</th>
          </tr>
        </thead>
        <tbody v-bind:key="user.id" v-for="user in users">
          <User v-bind:u="user" @deleteUser="$emit('deleteUser', user.id)"/>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import User from "./User";
export default {
  name: "Users",
  components: {
    User
  },
  props: ["users"]
};
</script>

<style lang="scss" scoped>
</style>

