<template>
  <div class="container">
    <div>current activeBox: {{ activeBox }}</div>
    <div class="row d-flex align-items-center container">
      <div class="col-4">
        <div class="mt-5">
          <div class="row">
            <div v-for="(item, index) in mainArr" :key="index" class="col-4 cell ticContainer text-center">
              <div>{{ item }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8">
        <div class="container d-flex align-items-center justify-content-center min-vh-100">
          <table>
            <div class="mb-2">
              {{ currentUser }} Turn
            </div>
            <div class="row adiliti">
              <div class="col-4 ubhiliti">
                <Tic :ticId="0" />
              </div>
              <div class="col-4 ubhiliti">
                <Tic :ticId="1" />
              </div>
              <div class="col-4">
                <Tic :ticId="2" />
              </div>
            </div>
            <div class="row adiliti">
              <div class="col-4 ubhiliti">
                <Tic :ticId="3" />
              </div>
              <div class="col-4 ubhiliti">
                <Tic :ticId="4" />
              </div>
              <div class="col-4">
                <Tic :ticId="5" />
              </div>
            </div>
            <div class="row">
              <div class="col-4 ubhiliti">
                <Tic :ticId="6" />
              </div>
              <div class="col-4 ubhiliti">
                <Tic :ticId="7" />
              </div>
              <div class="col-4">
                <Tic :ticId="8" />
              </div>
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import Tic from "./components/tic.vue";
import { currentUser } from './store/currentUser.js'
import { activeBox } from "./store/activeBox";
import { mainArr } from "./store/mainArr";

</script>

<style scoped>
.cell {
  height: 70px;
  border: 1px solid white;
}

table tr td {
  border: 10px solid cyan;
}

.visibilityHidden {
  visibility: hidden;
}

.adiliti {
  border-bottom: 5px solid #7e818b;
  ;
}

.ubhiliti {
  border-right: 5px solid #acb1c0;
}
</style>
