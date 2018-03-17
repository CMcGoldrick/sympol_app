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
      
      nameIndex: "",
      originIndex: "",
      symmetryIndex: "",

      symmetry: "",
      symmetries: [
            { text: "symmetric", value: "symmetric"},
            { text: "asymmetric", value: "asymmetric"}],

      border: "",
      borders: [
            { text: "open", value: "open"},
            { text: "closed", value: "closed"},
            { text: "open and closed", value: "open and closed"}],

      lining: "",
      linings: [
            { text: "straight", value: "straight"},
            { text: "curved", value: "curved"},
            { text: "straight", value: "straight and curved"}],

      shape: "",
      shapes: [
            { text: "circle(s)", value: "circle(s)"},
            { text: "rectangle(s)", value: "rectangle(s)"},
            { text: "square(s)", value: "square(s)"},
            { text: "spiral(s)", value: "spiral(s)"},
            { text: "knot(s)", value: "knot(s)"},
            { text: "star(s)", value: "star(s)"},
            { text: "corss(es)", value: "corss(es)"}],

      number: "",
      numbers: [
            { text: "single", value: "single"},
            { text: "double", value: "double"},
            { text: "triple", value: "triple"},
            { text: "quadruple (4)", value: "quadruple (4)"},
            { text: "quintuple (5)", value: "quintuple (5)"},
            { text: "sextuple (6)", value: "sextuple (6)"},
            { text: "septuple (7)", value: "septuple (7)"},
            { text: "octuple (8)", value: "octuple (8)"},
            { text: "nonuple (9)", value: "nonuple (9)"},
            { text: "decuple (10)", value: "decuple (10)"}],
    };
  },

  methods: {
    loadCurrentSympol: function(sympol) {
      axios.get("/sympols/" + sympol.id).then(function(response) {
          // console.log("test1")
          this.currentSympol = response.data;
          // console.log("test2")
        }.bind(this));
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
          console.log("may day");
          this.sympols = response.data;
        }.bind(this));
      }
    },
    updateSymmetry: function() {
      this.symmetry_search = true;
      if (this.symmetryIndex) {
        axios.get("sympols?search_trait=" + this.symmetryIndex)
        .then(function(response) {
          console.log("may day");
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