// Dimensions of the canvas and the table
const D=900;

// Cells of the game
let cells = [];

let settings;
let rules;
let grid;

let previousRunIteration;
let mouseWasPressed;

function resetLoopDetection() {
    grid.resetLoopDetection();
}

function resetGrid() {
    settings.nbCells = settings.ROWS * settings.COLS;
    cells = [];

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

    previousRunIteration = settings.runIterations;
    mouseWasPressed = false;

    rules = new Rules([3], [2, 3]);
    grid = new Grid();

    setNeighborsToSelect();

    for (var i=0; i<settings.nbCells; i++) {
        cells.push(new Cell(i, Math.random() < settings.initialDensity / 100));
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

    if (mouseIsPressed) {
        drawCell();
    }

    iterationCpt++;
}

function mousePressed() {
    // When pressing the mouse to draw cells stop the simulation
    if (mouseX > 0 && mouseX < D && mouseY > 0 && mouseY < D) {
        previousRunIteration = settings.runIterations;
        settings.runIterations = false;
    }
}

function mouseReleased() {
    // When releasing the mouse after drawing cells resume the simulation
    if (mouseX > 0 && mouseX < D && mouseY > 0 && mouseY < D) {
        settings.runIterations = previousRunIteration;
    }
}
