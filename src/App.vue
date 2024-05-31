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
                <Tic ticId="0" @boxId="addToarrayOfMain(0)" />
              </div>
              <div class="col-4 ubhiliti">
                <Tic ticId="1" @boxId="addToarrayOfMain(1)" />
              </div>
              <div class="col-4">
                <Tic ticId="2" @boxId="addToarrayOfMain(2)" />
              </div>
            </div>
            <div class="row adiliti">
              <div class="col-4 ubhiliti">
                <Tic ticId="3" @boxId="addToarrayOfMain(3)" />
              </div>
              <div class="col-4 ubhiliti">
                <Tic ticId="4" @boxId="addToarrayOfMain(4)" />
              </div>
              <div class="col-4">
                <Tic ticId="5" @boxId="addToarrayOfMain(5)" />
              </div>
            </div>
            <div class="row">
              <div class="col-4 ubhiliti">
                <Tic ticId="6" @boxId="addToarrayOfMain(6)" />
              </div>
              <div class="col-4 ubhiliti">
                <Tic ticId="7" @boxId="addToarrayOfMain(7)" />
              </div>
              <div class="col-4">
                <Tic ticId="8" @boxId="addToarrayOfMain(8)" />
              </div>
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tic from "./components/tic.vue";
import { currentUser } from './store/currentUser.js'
import { activeBox } from "./store/activeBox";
const mainArr = ref(Array(9).fill(""));


const addToarrayOfMain = (num) => {
  if (mainArr.value[num] !== "") {
    return;
  }
  mainArr.value[num] = currentUser.value;
  const result = isMainWin(mainArr.value);

  console.log(activeBox.value);

  if (result) {
    console.log("ushfijsbfkhsdb");
    console.log("main game" + result + "is win");
    alert(` ${result} wins`);

    window.location.reload()
  }

}

function isMainWin(arr) {
  const winCondition = [
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
  ];
  for (const i of winCondition) {
    if (arr[i[0]] === arr[i[1]] && arr[i[0]] === arr[i[2]] && arr[i[0]]) {
      return arr[i[0]];
    }
  }
  return false;
}

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
