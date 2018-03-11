/* global Vue, VueRouter, axios */

var SearchPage = {
  template: "#search-page",
  data: function() {
    return {
      message: "This is where the searching magic happens!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
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
            { path: "/", component: SearchPage },
            { path: "/sympols/:id", component: SympolsShowPage }
          ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});