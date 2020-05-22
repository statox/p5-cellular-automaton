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

