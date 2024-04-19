<template>
  <div class="row">
    <div v-for="(item, index) in arr" :key="index" class="col-4 cell ticContainer text-center" @click="addturn(index)">
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { currentUser, setCurrentUser } from '../store/currentUser.js'
const arr = ref(Array(9).fill(""));
const emit = defineEmits(['getTicked', 'boxId'])
const win = ref(false)
// console.log(currentUser.value);

watch(arr.value, (currarr) => {
  let draw = true;
  for (let i = 0; i < currarr.length; i++) {
    if (!currarr[i]) {
      draw = false;
      break;
    }
  }
  if (draw && !win.value) {
    alert("game draw...");
    const arrreset = Array(9).fill("");
    console.log(arrreset);
    arr.value = arrreset;
    console.log(arr.value);
  }

});
// console.log(arr.value);

// const { currentUser } = defineProps(['currentUser'])
// console.log(currentUser);

function addturn(i) {
  // console.log(currentUser);
  if (arr.value[i] !== "" || win.value) {
    return;
  }
  arr.value[i] = currentUser.value;
  // console.log("in tick : ", currentUser);
  const result = isWin(arr.value);

  if (result) {
    alert(`${result} wins`);
    win.value = true
    emit('boxId')
    // return;
  }
  setCurrentUser()

  emit('getTicked', i)
}

function isWin(arr) {
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
</style>
