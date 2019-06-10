import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    users: [
      // {
      //   id: 1,
      //   name: "Nick",
      //   surname: "Nick",
      //   email: "test@mail.com",
      //   phone: "+380931209312"
      // },
      // {
      //   id: 2,
      //   name: "Alex",
      //   surname: "Alex",
      //   email: "test@mail.com",
      //   phone: "+380931209312"
      // },
      // {
      //   id: 3,
      //   name: "Kirill",
      //   surname: "Kirill",
      //   email: "test@mail.com",
      //   phone: "+380931209312"
      // }
    ]
  }
});

export default store;
