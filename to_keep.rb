S3 KEYS:

User name,Password,Access key ID,Secret access key,Console login link
admin-sympol,,AKIAIBJ46QN2ZADBRD6A,LUB0Jtroj780UDehIkH7lMmH1h9yhx9ekKN6s4sh,https://763583573852.signin.aws.amazon.com/console

"Principal": { "AWS": "d56cd60aed434e87bb5bb5ced08cd299a0b5b08e6bcca7e08544ef060513ea4d" }

"Principal": { "AWS": "arn:aws:iam::763583573852:root" }

arn:aws:s3:::sympol-app


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

