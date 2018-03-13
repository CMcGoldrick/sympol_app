/* global Vue, VueRouter, axios */
var SympolsIndexPage = {
  template: "#sympols-index-page",
  data: function() {
    return {
      sympols: {
        name: ""
      },
      jumpIndex: ""
    };
  },
  methods: {
    updateIndex: function() {
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