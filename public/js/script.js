/* global Vue, VueRouter, axios */
var SympolsIndexPage = {
  template: "#sympols-index-page",
  data: function() {
    return {
      sympols: [],
      currentSympol: null,

      name_search: false,
      origin_search: false,
      description_search: false,
      trait_search: false,
      
      nameIndex: "",
      originIndex: "",
      descriptionIndex: "",

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
    updateDescription: function() {
      this.description_search = true;
      if (this.originIndex) {
        axios.get("/sympols?search_description=" + this.descriptionIndex)
        .then(function(response) {
          console.log("may day");
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
  mounted: function() {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  }
};

var SympolsPostPage = {
  template: "#sympols-post-page",
  data: function() {
    return {
      name: "",
      origin: "",
      description: ""
    };
  },
  created: function() {},
  methods: {
    uploadSympol: function(event) {
      if (event.target.files.length > 0) {
        var formData = new FormData();
        formData.append("name", this.name);
        formData.append("origin", this.origin);
        formData.append("description", this.description);
        formData.append("image", event.target.files[0]);

        axios
          .post("http://localhost:3000/sympols", formData)
          .then(function(response) {
            console.log(response);
            this.name = "";
            this.origin = "";
            this.description = "";
            event.target.value = "";
          }.bind(this));
    }
  }
},
  computed: {}
};


var SubmitImagePage = {
  template: "#submit-image-page",
  data: function() {
    return {
      // errors: [],
      urls: [],
      image: ""
    };
  },
  methods: {
    uploadFile: function(event) {
      // console.log(event.target.files);
      if (event.target.files.length > 0) {
        var formData = new FormData();
        formData.append("image", event.target.files[0]);

        axios.post("/images", formData).then(
          function(response) {
            console.log(response.data);
            this.urls = response.data;
            // console.log(this.urls);
            event.target.value = "";
          }.bind(this)
        );
      }
    },
    onDrop: function(e) {
      // console.log(e);
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      this.createFile(files[0]);
      if (files.length > 0) {
        var formData = new FormData();
        formData.append("image", files[0]);

        axios.post("/images", formData).then(
          function(response) {
            console.log(response.data);
            this.urls = response.data;
            // console.log(this.urls);
            event.target.value = "";
          }.bind(this)
        );
      }
    },
    onChange(e) {
      var files = e.target.files;
      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match("image.*")) {
        alert("Select an image");
        return;
      }
      var img = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function(e) {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeFile() {
      this.image = "";
    },
  }
};

var ImageResultPage = {
  template: "#image-result-page",
  data: function() {
    return {
      urls: []
    };
  },
  created: function() {
    axios.get("/images").then(
      function(response) {
        this.urls = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};

var ImageResultPage = {
  template: "#image-result-page",
  data: function() {
    return {
      urls: []
    };
  },
  created: function() {
    axios.get("/images").then(
      function(response) {
        this.urls = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var LogoutPage = {
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};


var router = new VueRouter({
  routes: [
            { path: "/", component: SympolsIndexPage},  
            { path: "/post", component: SympolsPostPage },
            { path: "/browse", component: SubmitImagePage },
            { path: "/imageResult", component: ImageResultPage },
            { path: "/signup", component: SignupPage },
            { path: "/login", component: LoginPage },
            { path: "/logout", component: LogoutPage }
          ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});


var app = new Vue({
  el: "#vue-app",
  router: router,
});