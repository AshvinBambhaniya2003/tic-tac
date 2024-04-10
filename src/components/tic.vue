<template>
  <div class="row">
    <div
      v-for="(item, index) in arr"
      :key="index"
      class="col-4 cell ticContainer text-center"
      @click="addturn(index)"
    >
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const arr = ref(Array(9).fill(""));
const currentUser = ref("X");
const emit = defineEmits(['getTicked'])

watch(arr.value, (arr) => {
  let draw = true;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      draw = false;
      break;
    }
  }
  if (draw) {
    alert("game draw...");
  }
});
function addturn(i) {
  if (arr.value[i] !== "") {
    return;
  }
  arr.value[i] = currentUser.value;

  if (currentUser.value == "X") {
    currentUser.value = "O";
  } else {
    currentUser.value = "X";
  }
  const result = isWin(arr.value);
  if (result) {
    alert(`${result} wins`);
    return;
  }

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
    console.log(i);
    console.log(arr[i[0]]);
    if (
      arr[i[0]] === arr[i[1]] &&
      arr[i[0]] === arr[i[2]]
    ) {
      console.log("win");
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
