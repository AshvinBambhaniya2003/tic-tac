<template>
  <div class="mt-5 container">
    <div class="row">
      <div v-for="(item, index) in mainArr" :key="index" class="col-4 cell ticContainer text-center">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
  <div class="container d-flex align-items-center justify-content-center min-vh-100">
    <table>

      <div class="mb-2">
        {{ currentUser }} Turn
      </div>
      <div class="row adiliti">
        <div class="col-4 ubhiliti">
          <Tic @boxId="addToarrayOfMain(0)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 0 && activeAll }" />
        </div>
        <div class="col-4 ubhiliti">
          <Tic @boxId="addToarrayOfMain(1)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 1 && activeAll }" />
        </div>
        <div class="col-4">
          <Tic @boxId="addToarrayOfMain(2)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 2 && activeAll }" />
        </div>
      </div>
      <div class="row adiliti">
        <div class="col-4 ubhiliti">
          <Tic @boxId="addToarrayOfMain(3)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 3 && activeAll }" />
        </div>
        <div class="col-4 ubhiliti">
          <Tic @boxId="addToarrayOfMain(4)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 4 && activeAll }" />
        </div>
        <div class="col-4">
          <Tic @boxId="addToarrayOfMain(5)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 5 && activeAll }" />
        </div>
      </div>
      <div class="row">
        <div class="col-4 ubhiliti">
          <Tic @boxId="addToarrayOfMain(6)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 6 && activeAll }" />
        </div>
        <div class="col-4 ubhiliti">
          <Tic @boxId="addToarrayOfMain(7)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 7 && activeAll }" />
        </div>
        <div class="col-4">
          <Tic @boxId="addToarrayOfMain(8)" @getTicked="disableBox"
            :class="{ visibilityHidden: activeBox !== 8 && activeAll }" />
        </div>
      </div>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tic from "./components/tic.vue";
import { currentUser } from './store/currentUser.js'
const activeBox = ref()
const activeAll = ref(false)
const mainArr = ref(Array(9).fill(""));

const disableBox = (data) => {
  console.log(currentUser.value);
  // console.log(data);
  activeAll.value = true
  activeBox.value = data

  if (mainArr.value[data]) {
    activeAll.value = false
  }
}


const addToarrayOfMain = (num) => {
  // console.log(num);
  if (mainArr.value[num] !== "") {
    return;
  }
  mainArr.value[num] = currentUser.value;
  const result = isMainWin(mainArr.value);
  console.log(result);

  if (result) {
    console.log("ushfijsbfkhsdb");
    console.log("main game" + result + "is win");
    alert(` ${result} wins`);

    // return;
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
  border: 1px solid black;
}

table tr td {
  border: 10px solid cyan;
}

.visibilityHidden {
  visibility: hidden;
}

.adiliti {
  border-bottom: 1px solid white;
}

.ubhiliti {
  border-right: 1px solid white;
}
</style>
