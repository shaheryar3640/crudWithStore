import axios from "axios";
const domains = {
  namespaced: true,
  state: {
    editMode: false,
    domain: [],
    addDom: {
      domain_name: "",
    },
    editDomain: {
      id: "",
      domain_name: "",
    },
  },
  mutations: {
    setDomain(state, domain) {
      state.domain = domain;
    },
  },
  actions: {
    async addDomainAct(context) {
      let user = localStorage.getItem("token");
      await axios.post("http://127.0.0.1:8000/api/domain/add", context.state.addDom, {
        headers: {
          Authorization: "Bearer " + user,
        }
      })
        .then(res => {
          console.log(res);
      context.dispatch("setDomainAct");         
      })
    },
    async setDomainAct({ commit }) {
      let user = localStorage.getItem("token");
      let response = await axios.get("http://127.0.0.1:8000/api/domain/index", {
        headers: {
          Authorization: "Bearer " + user,
        },
      });
      console.log(response.data);
      commit("setDomain", response.data);
    },
    async editDomainAct({ commit }, id) {
      commit.state.editMode = true;
      commit.state.editDomain.id = id.domain.id;
      commit.state.editDomain.domain_name = id.domain.domain_name;
    },
    async updateDomainAct(context, id) {
      let user = localStorage.getItem("token");
      await axios.put("http://127.0.0.1:8000/api/domain/update", id, {
        headers: {
          Authorization: "Bearer " + user,
        },
      });
    },
    async deleteDomainAct(context, data) {
      let user = localStorage.getItem("token");
      await axios
        .delete("http://127.0.0.1:8000/api/domain/delete/" + data.domain.id, {
          headers: {
            Authorization: "Bearer " + user,
          },
        })
        .then((response) => {
          console.log(response);
          context.dispatch("setDomainAct");
        });
    },
  },
  getters: {
    getDomain(state) {
      return state.domain;
    },
  },
};
export default domains;