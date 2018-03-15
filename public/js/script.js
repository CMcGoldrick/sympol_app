/* global Vue, VueRouter, axios */
var SympolsIndexPage = {
  template: "#sympols-index-page",
  data: function() {
    return {
      search: false,
      sympols: [],
      jumpIndex: "",
      searchSympol:{},

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
            { text: "corss(es)", value: "corss(es)"},
            ]

        

    };
  },
  methods: {
    // isSearch: function(sympol) {
    //   this.search = true;
    //   this.searchSympol = sympol
    //   console.log(search)
    //   console.log()
    // },
    updateIndex: function() {
      this.search = true;
      if (this.jumpIndex) {
        axios.get("/sympols?search_name=" + this.jumpIndex)
          .then(function(response) {
            console.log("update");
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


var SympolSearch = {
  template: "#search-page",
  data: function() {
    return {
      sympols: [],
      nameFilter: "",
      originFilter: "",
    }
  },
  created: function() {
    axios.get("/sympols").then(function(response) {
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
            { path: "/sympols", component: SympolsIndexPage },  
            { path: "/", component: SympolSearch}
          ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});