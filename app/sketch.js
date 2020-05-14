// Dimensions of the canvas and the table
const D=900;

// Cells of the game
let cells = [];

let rules;
let grid;
let runIterations;
let edgeWrapping;
let neighborsAlgorithm;
let loopDetection;

// Dimensions of the grid
let ROWS;
let COLS;
let nbCells;

function changePreset(presetIndex) {
    const newPreset = PRESETS[presetIndex];
    const { wrap, B, S } = newPreset;

    neighborsAlgorithm = newPreset.neighborsAlgorithm;
    updateInterfaceNeighborsAlgorithmFromValue();

    rules.born = new Set(B);
    rules.survive = new Set(S);
    updateInterfaceRulesFromValues();

    edgeWrapping = wrap;
    updateInterfaceEdgeWrappingFromValue();

    resetLoopDetection();
}

function resetLoopDetection() {
    grid.resetLoopDetection();
}

function resetGrid() {
    nbCells = ROWS * COLS;
    cells = [];

    grid = new Grid();
    for (var i=0; i<nbCells; i++) {
        cells.push(new Cell(i, Math.random() < 0.5));
    }
}

function setup() {
    // Create the canvas and put it in its div
    var myCanvas = createCanvas(D, D);
    myCanvas.parent("canvasDiv");

    rules = new Rules([3], [2, 3]);
    grid = new Grid();
    runIterations = true;
    ROWS=100;
    COLS=100;
    nbCells = ROWS * COLS;
    edgeWrapping = true;
    neighborsAlgorithm = 'MOORE';
    loopDetection = true;

    for (var i=0; i<nbCells; i++) {
        cells.push(new Cell(i, Math.random() < 0.5));
    }

    initializeInterface();
}

let iterationCpt = 0;
function draw() {
    background(0, 0, 0);
    frameRate(30);

    if (runIterations) {
        grid.doIteration();
    }
    cells.forEach(c => c.show(grid.maxAge));

    updateLoopDetected(grid.foundLoop, grid.foundLoopSize, grid.loopSize);

    iterationCpt++;
}
