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
      <input type="submit" class="btn btn-dark" value="Import users" @click="importUsers">
    </form>
    <SuccessMessage v-if="this.isChanged" :submit="true"/>
  </div>
</template>

<script>
import SuccessMessage from "./SuccessMessage";
export default {
  name: "EditImport",
  data() {
    return {
      code: "",
      isChanged: false
    };
  },
  components: { SuccessMessage },
  methods: {
    importUsers(e) {
      e.preventDefault();
      if (this.code !== "") {
        this.isChanged = true;
        const done = JSON.parse(this.code);
        this.$store.state.users = done;
        localStorage.setItem("users", JSON.stringify(done));
      } else {
        alert("Empty field!");
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


