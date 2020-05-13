const initializeInterface = () => {
    rules.born.forEach(v => {
        document.getElementById("inputBirth" + v).checked = true;
    });
    rules.survive.forEach(v => {
        document.getElementById("inputSurvive" + v).checked = true;
    });

    document.getElementById("play-pause-btn").textContent = 'Pause';
    document.getElementById("inputROWS").value = ROWS;
    document.getElementById("inputCOLS").value = COLS;

};

const resetSimulation = () => {
    resetGrid();
};

const updateBirthRule = (button, value) => {
    if (button.checked) {
        rules.born.add(value);
    } else {
        rules.born.delete(value);
    }
};

const updateSurviveRule = (button, value) => {
    if (button.checked) {
        rules.survive.add(value);
    } else {
        rules.survive.delete(value);
    }
};

const toggleRun = () => {
    runIterations = !runIterations;
    document.getElementById("play-pause-btn").textContent = runIterations ? 'Pause' : 'Play';
}

const setSize = () => {
    ROWS = Number(document.getElementById("inputROWS").value);
    COLS = Number(document.getElementById("inputCOLS").value);
    resetGrid();
}
