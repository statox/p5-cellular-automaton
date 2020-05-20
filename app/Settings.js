function Settings() {
    this.name;
    this.description;
    this.runIterations = true;
    this.edgeWrapping = true;
    this.ROWS = 100;
    this.COLS = 100;
    this.nbCells = this.ROWS * this.COLS;
    this.loopDetection = true;
    this.neighborsAlgorithm = 'MOORE';
    this.neighborsToSelect;
    this.invertVisualization = false;
    this.initialDensity = 50;
    this.drawingTool = 'PENCIL';
    this.drawing = false;
    this.randomize = false;
    this.randomizationRules = new Set(['neighbors', 'birth', 'survive']);
}
