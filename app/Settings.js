function Settings() {
    this.runIterations = true;
    this.edgeWrapping = true;
    this.ROWS = 100;
    this.COLS = 100;
    this.nbCells = this.ROWS * this.COLS;
    this.loopDetection = true;
    this.neighborsAlgorithm = 'MOORE';
    this.neighborsToSelect;
}
