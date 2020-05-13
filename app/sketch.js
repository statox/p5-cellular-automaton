// Dimensions of the canvas and the table
const D=900;

// Dimensions of the grid
const ROWS=100;
const COLS=100;

// Cells of the game
const cells = [];
const nbCells = ROWS * COLS;

let rules;
let grid;

function resetGrid() {
    cells.forEach(cell => {
        cell.die();
        if (Math.random() < 0.5) {
            cell.born();
        }
    });
}

function setup() {
    // Create the canvas and put it in its div
    var myCanvas = createCanvas(D, D);
    myCanvas.parent("canvasDiv");

    rules = new Rules([3], [2, 3]);
    grid = new Grid();
    for (var i=0; i<nbCells; i++) {
        cells.push(new Cell(i, Math.random() < 0.5));
    }

    initializeInterface();
}

let iterationCpt = 0;
function draw() {
    background(235, 235, 235);
    frameRate(30);

    grid.doIteration();
    cells.forEach(c => c.show(grid.maxAge));

    iterationCpt++;
}
