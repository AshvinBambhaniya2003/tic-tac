<template>
  <div
    class="container d-flex align-items-center justify-content-center min-vh-100"
  >
    <table>
      <tr v-for="(row, i) in rowArray">
        <td
          v-for="(item, j) in row"
          :style="i + j === currentBox ? activeStyle : disableStyle"
        >
          <Tic @getTicked="handleTickedEvent" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tic from "./components/tic.vue";
const arr = ref(Array(9).fill(""));
const rowArray = Array(3).fill(Array(3));
const currentBox = ref();
const handleTickedEvent = (index) => {
  currentBox.value = index;
};

const disableStyle = {
  backgroudColor: "gray",
};
const activeStyle = {
  borderColor: "gray",
};
</script>

<style scoped>
.cell {
  height: 70px;
  border: 1px solid black;
}
table tr td {
  border: 10px solid cyan;
}
</style>
