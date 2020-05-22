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
    const toggleBtn = document.getElementById("toggleDrawingBtn");
    const pencilBtn = document.getElementById("pencilBtn");
    const eraserBtn = document.getElementById("eraserBtn");

    toggleBtn.classList.remove('btn-success');
    if (settings.drawing) {
        toggleBtn.classList.add('btn-success');
    }
    if (settings.drawingTool === 'PENCIL') {
        pencilBtn.classList.add('btn-primary');
        eraserBtn.classList.remove('btn-primary');
    }
    if (settings.drawingTool === 'ERASER') {
        pencilBtn.classList.remove('btn-primary');
        eraserBtn.classList.add('btn-primary');
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

const updateInterfaceRandomizationToggleFromValue = () => {
    const randomizeButton = document.getElementById('toggle-randomize-btn');

    if (settings.randomize) {
        randomizeButton.classList.add('btn-success');
    } else {
        randomizeButton.classList.remove('btn-success');
    }
};

const updateInterfaceRandomizationRulesFromValue = () => {
    const buttons = document.getElementsByClassName('randomization-selection');
    for (var i=0; i<buttons.length; i++) {
        const button = buttons[i];
        if (settings.randomizationRules.has(button.value)) {
            buttons[i].classList.add('btn-success');
        } else {
            buttons[i].classList.remove('btn-success');
        }
    }
};

const updateInterfacePlayPauseBtnFromValue = () => {
    const buttons = document.getElementsByClassName("btn-play-pause");
    const value = settings.runIterations ? 'Pause' : 'Play';
    for (let i=0; i < buttons.length; i++) {
        buttons[i].textContent = value;
    }
};

const updateInterfaceRandomizerFrequencyFromValue = () => {
    document.getElementById("inputRandomFreq").value = settings.randomizeFrequency;
};

const updateInterfaceResetConditionsFromValue = () => {
    const emptyGridBtn = document.getElementById('inputResetEmptyGrid');
    const loopBtn = document.getElementById('inputResetLoop');

    if (settings.resetOnEmptyGrid) {
        emptyGridBtn.classList.add('btn-success');
    } else {
        emptyGridBtn.classList.remove('btn-success');
    }

    if (settings.resetOnLoop) {
        loopBtn.classList.add('btn-success');
    } else {
        loopBtn.classList.remove('btn-success');
    }
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
    updateInterfaceRandomizationToggleFromValue();
    updateInterfaceRandomizationRulesFromValue();
    updateInterfacePlayPauseBtnFromValue();
    updateInterfaceResetConditionsFromValue();
};

const initializeInterface = () => {
    updateInterfaceAllItemsFromValue();
    updateInterfaceRandomizerFrequencyFromValue();
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
    updateInterfacePlayPauseBtnFromValue();
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

const updateStatistics = () => {
    const {
        foundLoop,
        foundLoopSize,
        loopSize,
        minAge,
        maxAge,
        meanAge,
        fillingPercentage,
        newCells
    } = grid;

    if (foundLoop) {
        document.getElementById("noloop-detected-notice").classList.add("invisible");
        document.getElementById("noloop-detected-notice").classList.remove("visible");

        document.getElementById("loop-detected-notice").classList.remove("invisible");
        document.getElementById("loop-detected-notice").classList.add("visible");

        document.getElementById("loop-size-detected-notice").classList.remove("invisible");
        document.getElementById("loop-size-detected-notice").classList.add("visible");

        document.getElementById("loop-size-detected-notice").innerText = 'Calculating loop size';
    } else {
        document.getElementById("noloop-detected-notice").classList.remove("invisible");
        document.getElementById("noloop-detected-notice").classList.add("visible");

        document.getElementById("loop-detected-notice").classList.remove("visible");
        document.getElementById("loop-detected-notice").classList.add("invisible");

        document.getElementById("loop-size-detected-notice").classList.remove("visible");
        document.getElementById("loop-size-detected-notice").classList.add("invisible");
    }

    if (foundLoopSize) {
        document.getElementById("loop-size-detected-notice").innerText = `Loop size ${loopSize}`;
    }

    document.getElementById("stats-min-age").innerText = minAge;
    document.getElementById("stats-max-age").innerText = maxAge;
    document.getElementById("stats-mean-age").innerText = meanAge.toFixed(0);

    document.getElementById("stats-iteration").innerText = iterationCpt;
    document.getElementById("stats-new-cells").innerText = newCells;
    document.getElementById("stats-filling-percentage").innerText = fillingPercentage.toFixed(0) + '%';
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

const toggleRandomize = () => {
    settings.randomize = !settings.randomize;

    const freqInput = document.getElementById('inputRandomFreq');
    const value = Number(freqInput.value);
    if (typeof value === 'number' && value > 0) {
        settings.randomizeFrequency = value;
        updateInterfaceRandomizerFrequencyFromValue();
    }

    updateInterfaceRandomizationToggleFromValue();
}

const updateRandomizationRule = (button, ruleName) => {
    if (settings.randomizationRules.has(ruleName)) {
        settings.randomizationRules.delete(ruleName)
    } else {
        settings.randomizationRules.add(ruleName)
    }

    updateInterfaceRandomizationRulesFromValue();
};

const toggleDrawing = () => {
    settings.drawing = !settings.drawing;
    updateInterfaceDrawingToolsFromValue();
}

const updateResetSettings = (button) => {
    const condition = button.value;
    if (condition === 'EMPTY') {
        settings.resetOnEmptyGrid = !settings.resetOnEmptyGrid;
    }
    if (condition === 'LOOP') {
        settings.resetOnLoop = !settings.resetOnLoop;
    }

    updateInterfaceResetConditionsFromValue();
}
