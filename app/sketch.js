// Dimensions of the canvas and the table
const D=900;

// Cells of the game
let cells = [];

let settings;
let rules;
let grid;

let iterationCpt;
let previousRunIteration;

function resetLoopDetection() {
    grid.resetLoopDetection();
}

function resetGrid() {
    settings.nbCells = settings.ROWS * settings.COLS;
    cells = [];

    iterationCpt = 0;
    grid = new Grid();
    for (var i=0; i<settings.nbCells; i++) {
        cells.push(new Cell(i, Math.random() < settings.initialDensity / 100));
    }
}

function setup() {
    // Create the canvas and put it in its div
    var myCanvas = createCanvas(D, D);
    myCanvas.parent("canvasDiv");

    settings = new Settings();
    rules = new Rules([3], [2, 3]);
    grid = new Grid();
    changePreset(0);

    iterationCpt = 0;
    previousRunIteration = settings.runIterations;

    setNeighborsToSelect();

    for (var i=0; i<settings.nbCells; i++) {
        cells.push(new Cell(i, Math.random() < settings.initialDensity / 100));
    }

    initializeInterface();
}

function draw() {
    background(0, 0, 0);
    frameRate(30);

    if (settings.runIterations) {
        // To make sure the algorithm is in O(n) this function is also responsible
        // for the drawing of the cells
        grid.doIteration();
        updateStatistics();
        iterationCpt++;
    } else {
        cells.forEach(c => c.show(grid.maxAge, iterationCpt));
    }

    if (mouseIsPressed) {
        drawCell();
    }

    if (settings.randomize && iterationCpt%settings.randomizeFrequency === 0) {
        randomizeSettings();
    }

    if (
        (!grid.aliveCells && settings.resetOnEmptyGrid) ||
        (grid.foundLoopSize && settings.resetOnLoop)
    ){
        resetGrid();
    }

    // Draw FPS at the bottom left of the screen
    let fps = frameRate();
    fill(255);
    stroke(0);
    text("Alive cells: " + grid.aliveCells, 10, height - 25);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
}
