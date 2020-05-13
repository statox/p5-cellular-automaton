const indexToIJ = (index) => {
    return {i: index%COLS, j: Math.floor(index/COLS)};
};

const indexToXY = (index) => {
    const {i, j} = indexToIJ(index);
    const w = D/COLS;
    const h = D/ROWS;
    return {x: i * w, y: j * h, w, h};
}

const IJToIndex = ({i, j}) => {
    if (edgeWrapping) {
        if (i < 0) {
            i = COLS-1;
        }
        if (j < 0) {
            j = ROWS-1;
        }
        if (i === COLS) {
            i = 0;
        }
        if (j === ROWS) {
            j = 0;
        }
    }

    return j * COLS + i;
};
