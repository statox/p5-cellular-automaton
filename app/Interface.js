const updateInterfaceSelectedNeighborsFromValue = () => {
    Object.keys(settings.neighborsToSelect).forEach(key => {
        document.getElementById("neighbors-" + key).classList.remove('btn-success');

        if (settings.neighborsToSelect[key]) {
        document.getElementById("neighbors-" + key).classList.add('btn-success');
        }
    });
};

const updateInterfaceRulesFromValues = () => {
    for (let v=0; v<9; v++) {
        document.getElementById("inputBirth" + v).classList.remove('btn-success');
        document.getElementById("inputSurvive" + v).classList.remove('btn-success');
    }
    rules.born.forEach(v => {
        document.getElementById("inputBirth" + v).classList.add('btn-success');
    });
    rules.survive.forEach(v => {
        document.getElementById("inputSurvive" + v).classList.add('btn-success');
    });
};

const updateInterfaceEdgeWrappingFromValue = () => {
    if (settings.edgeWrapping) {
        document.getElementById("inputEdgeWrapping").classList.add('btn-success');
    } else {
        document.getElementById("inputEdgeWrapping").classList.remove('btn-success');
    }
};

const updateInterfaceNeighborsAlgorithmFromValue = () => {
    const buttons = document.getElementsByClassName('algo-selection');
    for (var i=0; i<buttons.length; i++) {
        const button = buttons[i];
        if (button.value !== settings.neighborsAlgorithm) {
            buttons[i].classList.remove('btn-success');
        } else {
            buttons[i].classList.add('btn-success');
        }
    }
};

const initializeInterface = () => {
    updateInterfaceRulesFromValues();
    updateInterfaceEdgeWrappingFromValue();
    updateInterfaceNeighborsAlgorithmFromValue();
    updateInterfaceSelectedNeighborsFromValue();

    document.getElementById("play-pause-btn").textContent = 'Pause';
    document.getElementById("inputROWS").value = settings.ROWS;
    document.getElementById("inputCOLS").value = settings.COLS;

    PRESETS.forEach((preset, index) => {
        presetOption = document.createElement("option");
        presetOption.innerText = preset.name;
        presetOption.value = index;

        document.getElementById("preset-select").appendChild(presetOption);
    });
    document.getElementById("preset-description").innerText = PRESETS[0].description;
};

const resetSimulation = () => {
    resetGrid();
};

const updateBirthRule = (button, value) => {
    if (rules.born.has(value)) {
        rules.born.delete(value);
    } else {
        rules.born.add(value);
    }

    updateInterfaceRulesFromValues();
    resetLoopDetection();
};

const updateSurviveRule = (button, value) => {
    if (rules.survive.has(value)) {
        rules.survive.delete(value);
    } else {
        rules.survive.add(value);
    }

    updateInterfaceRulesFromValues();
    resetLoopDetection();
};

const toggleRun = () => {
    settings.runIterations = !settings.runIterations;
    document.getElementById("play-pause-btn").textContent = settings.runIterations ? 'Pause' : 'Play';
}

const setSize = () => {
    settings.ROWS = Number(document.getElementById("inputROWS").value);
    settings.COLS = Number(document.getElementById("inputCOLS").value);
    resetGrid();
}

const updateEdgeWrapping = (button) => {
    settings.edgeWrapping = !settings.edgeWrapping;
    updateInterfaceEdgeWrappingFromValue();
    resetLoopDetection();
}

const updateNeighborsAlgorithm = (button, algo) => {
    settings.neighborsAlgorithm = button.value;

    updateInterfaceNeighborsAlgorithmFromValue();
    setNeighborsToSelect();
    updateInterfaceSelectedNeighborsFromValue();
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

const updatePreset = (select) => {
    const chosenPresetIndex = select.options[select.selectedIndex].value;
    document.getElementById("preset-description").innerText = PRESETS[chosenPresetIndex].description;
    changePreset(chosenPresetIndex);
}

const updateNeighborSelection = (neighbor) => {
    settings.neighborsToSelect[neighbor] = !settings.neighborsToSelect[neighbor];
    updateInterfaceSelectedNeighborsFromValue();
}
