export const isWin = (arr) => {
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

export const isDraw = (arr) => {
    let draw = true;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            draw = false;
            break;
        }
    }
    return draw
}