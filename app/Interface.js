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

const updateInterfaceInvertVisFromValue = () => {
    if (settings.invertVisualization) {
        document.getElementById("inputInvertVis").classList.add('btn-success');
    } else {
        document.getElementById("inputInvertVis").classList.remove('btn-success');
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

const updateInterfaceDrawingToolsFromValue = () => {
    const pencilBtn = document.getElementById("pencilBtn");
    const eraserBtn = document.getElementById("eraserBtn");

    if (settings.drawingTool === 'PENCIL') {
        pencilBtn.classList.add('btn-success');
        eraserBtn.classList.remove('btn-success');
    }
    if (settings.drawingTool === 'ERASER') {
        pencilBtn.classList.remove('btn-success');
        eraserBtn.classList.add('btn-success');
    }
};

const updateInterfaceSizeFromValue = () => {
    document.getElementById("inputROWS").value = settings.ROWS;
    document.getElementById("inputCOLS").value = settings.COLS;
};

const updateInterfaceInitialDensityFromValue = () => {
    document.getElementById("inputInitialDensity").value = settings.initialDensity;
};

const updateInterfacePresetsFromValue = () => {
    const presetsSelect = document.getElementById("preset-select");
    while (presetsSelect.firstChild) {
        presetsSelect.removeChild(presetsSelect.firstChild);
    }

    PRESETS.forEach((preset, index) => {
        presetOption = document.createElement("option");
        presetOption.innerText = preset.settings.name;
        presetOption.value = index;

        if (preset.settings.name === settings.name) {
            presetOption.selected = 'selected';
            document.getElementById("preset-description").innerText = preset.settings.description;
        }

        presetsSelect.appendChild(presetOption);
    });
};

const updateInterfaceAllItemsFromValue = () => {
    updateInterfaceRulesFromValues();
    updateInterfaceEdgeWrappingFromValue();
    updateInterfaceInvertVisFromValue();
    updateInterfaceNeighborsAlgorithmFromValue();
    updateInterfaceSelectedNeighborsFromValue();
    updateInterfaceDrawingToolsFromValue();
    updateInterfaceSizeFromValue();
    updateInterfaceInitialDensityFromValue();
    updateInterfacePresetsFromValue();
};

const initializeInterface = () => {
    updateInterfaceAllItemsFromValue();
    document.getElementById("play-pause-btn").textContent = 'Pause';
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
    settings.initialDensity = Number(document.getElementById("inputInitialDensity").value);
    resetGrid();
}

const updateEdgeWrapping = (button) => {
    settings.edgeWrapping = !settings.edgeWrapping;
    updateInterfaceEdgeWrappingFromValue();
    resetLoopDetection();
}

const updateInvertVis = (button) => {
    settings.invertVisualization = !settings.invertVisualization;
    updateInterfaceInvertVisFromValue();
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

        document.getElementById("loop-size-detected-notice").classList.remove("invisible");
        document.getElementById("loop-size-detected-notice").classList.add("visible");

        document.getElementById("loop-size-detected-notice").innerText = 'Calculating loop size';
    } else {
        document.getElementById("loop-detected-notice").classList.remove("visible");
        document.getElementById("loop-detected-notice").classList.add("invisible");

        document.getElementById("loop-size-detected-notice").classList.remove("visible");
        document.getElementById("loop-size-detected-notice").classList.add("invisible");
    }

    if (showLoopSize) {
        document.getElementById("loop-size-detected-notice").innerText = `Loop size ${loopSize}`;
    }
};

const updatePreset = (select) => {
    const chosenPresetIndex = select.options[select.selectedIndex].value;
    const description = changePreset(chosenPresetIndex);
    document.getElementById("preset-description").innerText = settings.description;
    resetLoopDetection();
};

const updateNeighborSelection = (neighbor) => {
    settings.neighborsToSelect[neighbor] = !settings.neighborsToSelect[neighbor];
    resetLoopDetection();
    updateInterfaceSelectedNeighborsFromValue();
};

const updateDrawing = (tool) => {
    settings.drawingTool = tool;
    updateInterfaceDrawingToolsFromValue();
};

const savePresetClicked = () => {
    const name = document.getElementById('export-name').value;
    const description = document.getElementById('export-description').value;
    saveCurrentPreset(name, description);
}

const exportPresetClicked = () => {
    const name = document.getElementById('export-name').value;
    const description = document.getElementById('export-description').value;
    exportCurrentPreset(name, description);
}
