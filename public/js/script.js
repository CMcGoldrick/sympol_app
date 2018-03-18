/* global Vue, VueRouter, axios */
var SympolsIndexPage = {
  template: "#sympols-index-page",
  data: function() {
    return {
      sympols: [],
      currentSympol: null,

      name_search: false,
      origin_search: false,
      symmetry_search: false,
      trait_search: false,
      
      nameIndex: "",
      originIndex: "",
      symmetryIndex: "",

      traitSelected: "",
      searchTraits: [],
    };
  },

  methods: {
    loadCurrentSympol: function(sympol) {
      axios.get("/sympols/" + sympol.id).then(function(response) {
          this.currentSympol = response.data;
          // console.log("test2")
        }.bind(this));
    },
    addToSearchTraits: function() {
      if (this.traitSelected && this.searchTraits.indexOf(this.traitSelected) === -1) {
        this.searchTraits.push(this.traitSelected);
        console.log(this.searchTraits);
      }
    },
    updateName: function() {
      this.name_search = true;
      if (this.nameIndex) {
        axios.get("/sympols?search_name=" + this.nameIndex)
          .then(function(response) {
            // console.log("update");
            this.sympols = response.data;
          }.bind(this));
      }
    },
    updateOrigin: function() {
      this.origin_search = true;
      if (this.originIndex) {
        axios.get("/sympols?search_origin=" + this.originIndex)
        .then(function(response) {
          // console.log("may day");
          this.sympols = response.data;
        }.bind(this));
      }
    },
    updateSymmetry: function() {
      this.symmetry_search = true;
      if (this.symmetryIndex) {
        axios.get("sympols?search_trait=" + this.symmetryIndex)
        .then(function(response) {
          // console.log("may day");
          this.sympols = response.data;
        }.bind(this));
      }
    },
    updateTrait: function() {
      this.trait_search = true;
      if (this.searchTraits) {
        axios.get("/sympols", {params: {search_traits: this.searchTraits}})
        .then(function(response) {
          // console.log("may day");
          this.sympols = response.data;
        }.bind(this));
      }
    }
  },
  created: function() {
    axios.get("/sympols")
      .then(function(response) {
        this.sympols = response.data;
      }.bind(this));
  },
};


var SympolsShowPage = {
  template: "#sympols-show-page",
  data: function() {
    return {
      sympol: {
        name: "",
        description: "",
        images: [{url: ""}]
      }
    }
  },
  created: function() {
  axios.get("/sympols/" + this.$route.params.id )
    .then(function(response) {
      this.sympol = response.data;
    }.bind(this));
  }
};


var router = new VueRouter({
  routes: [
            { path: "/sympols/:id", component: SympolsShowPage },
            { path: "/", component: SympolsIndexPage},  
          ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});


var app = new Vue({
  el: "#vue-app",
  router: router,
});