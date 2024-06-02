<template>
  <div class="row" :class="{ backgroundHighlight: (activeBox == 9 || activeBox == props.ticId) && !win}">
    <div v-for="(item, index) in arr" :key="index" class="col-4 cell ticContainer text-center" @click="addturn(index)">
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script setup>

import { ref, defineProps } from "vue";
import { currentUser, setCurrentUser } from '../store/currentUser.js'
import { activeBox, setActiveBox } from '../store/activeBox.js'
import { addToarrayOfMain, isAlreadyWinBySomeone } from "@/store/mainArr.js";
import { isDraw, isWin } from "@/composable/gameStatus.js";

const arr = ref(Array(9).fill(""));
const win = ref(false)

const props = defineProps({
  ticId: Number,
})

function addturn(i) {
  if (activeBox.value == 9 || activeBox.value == props.ticId) {
    if (arr.value[i] !== "" || win.value) {
      return;
    }
    arr.value[i] = currentUser.value;

    const result = isWin(arr.value);
    if (result) {
      alert(`${result} wins`);
      win.value = true
      setActiveBox(9)
      addToarrayOfMain(props.ticId)
      setCurrentUser()
      return;
    }

    const draw = isDraw(arr.value)
    if (draw) {
      alert("game draw...");
      resetArr()
      setCurrentUser()
      setActiveBox(9)
      return
    }

    setCurrentUser()
    if (isAlreadyWinBySomeone(i)) {
      setActiveBox(9)
      return
    }
    setActiveBox(i)
  }
}

function resetArr() {
  const arrreset = Array(9).fill("");
  arr.value = arrreset;
}

</script>

<style scoped>
.cell {
  height: 70px;
  border: 1px solid white;
}
.backgroundHighlight {
  background: #656060;
}

</style>