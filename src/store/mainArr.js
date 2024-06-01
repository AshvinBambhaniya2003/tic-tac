import { isWin } from "@/composable/gameStatus";
import { currentUser } from "./currentUser";
import { ref } from "vue";
import { activeBox } from "./activeBox";

export const mainArr = ref(Array(9).fill(""));

export const addToarrayOfMain = (num) => {
    if (mainArr.value[num] !== "") {
        return;
    }
    mainArr.value[num] = currentUser.value;
    const result = isWin(mainArr.value);

    if (result) {
        console.log("main game" + result + "is win");
        alert(` ${result} wins`);

        window.location.reload()
    }

}

export const isAlreadyWinBySomeone = (index) => {
    if (mainArr.value[index] !== "") {
        return true;
    }
    return false
}