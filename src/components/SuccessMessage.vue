<template>
  <div>
    <h5 class="badge badge-success h5" v-if="submit">Success submit!</h5>
    <h5 class="badge badge-success h5" v-else>Success edit!</h5>
  </div>
</template>

<script>
export default {
  name: "SuccessMessage",
  props: ["submit"]
};
</script>

<style scoped>
.h5 {
  font-size: 1.3em;
  margin-top: 10px;
}
</style>
