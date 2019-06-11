<template>
  <div class="mt-4">
    <form>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Import users</label>
        <textarea
          class="form-control textarea"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="code"
        ></textarea>
      </div>
      <input type="submit" class="btn btn-dark" value="Import users" @click.prevent="importUsers">
    </form>
    <SuccessMessage v-if="this.isChanged" :submit="true" :error="this.isError"/>
  </div>
</template>

<script>
import SuccessMessage from "./SuccessMessage";
export default {
  name: "EditImport",
  data() {
    return {
      code: "",
      isChanged: false,
      isError: false
    };
  },
  // computed: {
  //   isError() {
  //     return this.isError;
  //   }
  // },
  components: { SuccessMessage },
  methods: {
    importUsers() {
      this.isChanged = true;
      try {
        this.isError = false;
        const imported = JSON.parse(this.code);
        this.$store.commit("setUsers", imported);
        localStorage.setItem("users", JSON.stringify(imported));
      } catch {
        this.isError = true;
      }
    }
  }
};
</script>
<style scoped>
.textarea {
  max-height: 600px;
  min-height: 200px;
}
</style>


