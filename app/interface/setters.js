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
