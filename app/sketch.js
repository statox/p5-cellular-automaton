// Dimensions of the canvas and the table
const D=900;

// Cells of the game
let cells = [];

let settings;
let rules;
let grid;

let previousRunIteration;

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
    rules = new Rules([3], [2, 3]);
    grid = new Grid();
    changePreset(0);

    previousRunIteration = settings.runIterations;

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

    if (settings.randomize && iterationCpt%100 === 0) {
        randomizeSettings();
    }

    if (grid.aliveCells === 0) {
        resetGrid();
    }

    iterationCpt++;

    // Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
    let fps = frameRate();
    fill(255);
    stroke(0);
    text("FPS: " + fps.toFixed(2), 10, height - 10);
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
