import { ref } from 'vue'

export const activeBox = ref(9);

export const setActiveBox = (value) => {
    activeBox.value = value;
}