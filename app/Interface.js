const initializeInterface = () => {
    rules.born.forEach(v => {
        document.getElementById("inputBirth" + v).checked = true;
    });
    rules.survive.forEach(v => {
        document.getElementById("inputSurvive" + v).checked = true;
    });

    document.getElementById("inputEdgeWrapping").checked = true;
    document.getElementById("play-pause-btn").textContent = 'Pause';
    document.getElementById("inputROWS").value = ROWS;
    document.getElementById("inputCOLS").value = COLS;

    document.getElementById("inputNeighborsMoore").checked = true;
    document.getElementById("inputNeighborsCardinal").checked = false;
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

    resetLoopDetection();
};

const updateSurviveRule = (button, value) => {
    if (button.checked) {
        rules.survive.add(value);
    } else {
        rules.survive.delete(value);
    }

    resetLoopDetection();
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

const updateEdgeWrapping = (button) => {
    edgeWrapping = button.checked;
    resetLoopDetection();
}

// TODO: I'm not ashamed of this... but I'm not proud either
const updateNeighborsAlgorithm = (button, algo) => {
    if (button.checked) {
        if (algo === 'MOORE') {
            document.getElementById("inputNeighborsCardinal").checked = false;
            neighborsAlgorithm = 'MOORE';
        }
        if (algo === 'CARDINAL') {
            document.getElementById("inputNeighborsMoore").checked = false;
            neighborsAlgorithm = 'CARDINAL';
        }
    } else {
        if (algo === 'MOORE') {
            document.getElementById("inputNeighborsMoore").checked = false;
            neighborsAlgorithm = 'CARDINAL';
        }
        if (algo === 'CARDINAL') {
            document.getElementById("inputNeighborsCardinal").checked = false;
            neighborsAlgorithm = 'MOORE';
        }
    }

    resetLoopDetection();
};

const updateLoopDetected = (showLoop, showLoopSize, loopSize) => {
    if (showLoop) {
        document.getElementById("loop-detected-notice").classList.remove("invisible");
        document.getElementById("loop-detected-notice").classList.add("visible");
    } else {
        document.getElementById("loop-detected-notice").classList.remove("visible");
        document.getElementById("loop-detected-notice").classList.add("invisible");
    }

    if (showLoopSize) {
        document.getElementById("loop-size-detected-notice").classList.remove("invisible");
        document.getElementById("loop-size-detected-notice").classList.add("visible");
        document.getElementById("loop-size-detected-notice").innerText = `Loop size ${loopSize}`;
    } else {
        document.getElementById("loop-size-detected-notice").classList.remove("visible");
        document.getElementById("loop-size-detected-notice").classList.add("invisible");
    }
}
