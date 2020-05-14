// Dimensions of the canvas and the table
const D=900;

// Cells of the game
let cells = [];

let settings;
let rules;
let grid;

function changePreset(presetIndex) {
    const newPreset = PRESETS[presetIndex];
    const { wrap, B, S } = newPreset;

    settings.neighborsAlgorithm = newPreset.neighborsAlgorithm;
    updateInterfaceNeighborsAlgorithmFromValue();

    setNeighborsToSelect();
    updateInterfaceSelectedNeighborsFromValue();

    rules.born = new Set(B);
    rules.survive = new Set(S);
    updateInterfaceRulesFromValues();

    settings.edgeWrapping = wrap;
    updateInterfaceEdgeWrappingFromValue();

    resetLoopDetection();
}

function resetLoopDetection() {
    grid.resetLoopDetection();
}

function resetGrid() {
    settings.nbCells = settings.ROWS * settings.COLS;
    cells = [];

    grid = new Grid();
    for (var i=0; i<settings.nbCells; i++) {
        cells.push(new Cell(i, Math.random() < 0.5));
    }
}

function setup() {
    // Create the canvas and put it in its div
    var myCanvas = createCanvas(D, D);
    myCanvas.parent("canvasDiv");

    settings = new Settings();

    rules = new Rules([3], [2, 3]);
    grid = new Grid();

    setNeighborsToSelect();

    for (var i=0; i<settings.nbCells; i++) {
        cells.push(new Cell(i, Math.random() < 0.5));
    }

    initializeInterface();
}

let iterationCpt = 0;
function draw() {
    background(0, 0, 0);
    frameRate(30);

    if (settings.runIterations) {
        grid.doIteration();
    }
    cells.forEach(c => c.show(grid.maxAge));

    updateLoopDetected(grid.foundLoop, grid.foundLoopSize, grid.loopSize);

    iterationCpt++;
}
