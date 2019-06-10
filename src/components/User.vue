<template>
  <tr>
    <td>{{u.name}}</td>
    <td>{{u.surname}}</td>
    <td>{{u.phone}}</td>
    <td>{{u.email}}</td>
    <td class="text-center" colspan="2">
      <router-link
        class="btn btn-primary mr-3 ml-3"
        :to="{ name: 'editid', params: {id: u.id } }"
      >Edit</router-link>
      <button class="btn btn-danger" @click="$emit('deleteUser', u.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "User",
  props: ["u"]
};
</script>

<style lang="scss" scoped>
</style>

