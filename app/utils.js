const indexToIJ = (index) => {
    return {i: index%settings.COLS, j: Math.floor(index/settings.COLS)};
};

const indexToXY = (index) => {
    const {i, j} = indexToIJ(index);
    const w = D/settings.COLS;
    const h = D/settings.ROWS;
    return {x: i * w, y: j * h, w, h};
}

const IJToIndex = ({i, j}) => {
    if (settings.edgeWrapping) {
        if (i < 0) {
            i = settings.COLS-1;
        }
        if (j < 0) {
            j = settings.ROWS-1;
        }
        if (i === settings.COLS) {
            i = 0;
        }
        if (j === settings.ROWS) {
            j = 0;
        }
    }

    return j * settings.COLS + i;
};
