<!-- Josh explained sympol name index search -->
<template id="sympols-index-page">
  <div class="vue-component">
    <div class="index-style">
      <div class="container">
        <p>Select a sympol</p>
          <input v-model="jumpIndex" list="sympol-names" v-on:change="updateIndex()">

            <datalist id="sympol-names">
              <option v-for="sympol in sympols">{{sympol.name}}</option>
            </datalist>            

            <div v-for="sympol in sympols">
              <a class="btn btn-primary" v-bind:href="'/#/sympols/' + sympol.id">{{sympol.name}}</a>
            </div>

  <!--         <div>
            <h1 class="index-style" v-for="sympol in sympols"> {{ sympol.name }} </h1>
          </div>  -->
            <!-- <a v-bind:href="'/#/sympols/' + sympol.id" class="btn btn-primary float-right">Search</a> -->
      </div>
    </div>
  </div> 
</template>
<!-- ------------------------------------------------ -->

