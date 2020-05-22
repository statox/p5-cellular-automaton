function Grid() {
    this.minAge = 0;
    this.maxAge = 0;
    this.meanAge = 0;
    this.aliveCells = 0;
    this.newCells = 0;
    this.fillingPercentage = 0;
    this.previousStates = new Set();
    this.foundLoop = false;
    this.loopSize;
    this.foundLoopSize = false;

    this.doIteration = () => {
        this.minAge = cells[0].age;
        this.maxAge = cells[0].age;
        this.meanAge = 0;
        this.newCells = 0;
        let representation = '';
        this.aliveCells = 0;

        cells.forEach(c => {
            const cellIsAlive = c.states[iterationCpt];

            // We don't need to keep old states
            // TODO check if that doesn't actually slow down the loop
            if (iterationCpt > 1) {
                delete c.states[iterationCpt - 1];
            }

            if (cellIsAlive) {
                if (c.age < this.minAge) {
                    this.minAge = c.age;
                }
                if (c.age > this.maxAge) {
                    this.maxAge = c.age;
                }
                if (c.age === 0) {
                    this.newCells++;
                }
                representation += '1';
                this.meanAge += c.age;
                this.aliveCells++;
            } else {
                representation += '0';
            }

            c.show(this.maxAge, iterationCpt);

            const neighborsIndex = c.getNeighborsIndex();

            const aliveNeighbors = neighborsIndex.reduce((count, index) => {
                if (cells[index].states[iterationCpt]) {
                    count++;
                }
                return count;
            }, 0);

            if (cellIsAlive && rules.survive.has(aliveNeighbors) ) {
                c.survive(iterationCpt+1);
            } else if (!cellIsAlive && rules.born.has(aliveNeighbors)) {
                c.born(iterationCpt+1);
            } else {
                c.die(iterationCpt+1);
            }

        });

        this.meanAge = this.aliveCells ? this.meanAge / this.aliveCells : 0;
        this.fillingPercentage = 100 * this.aliveCells / settings.nbCells;

        if (settings.loopDetection) {
            if (!this.foundLoop && this.previousStates.has(representation)) {
                this.foundLoop = true;
                this.foundLoopSize = false;
                this.loopSize = -1;
                this.previousStates = new Set();
            }

            if (this.foundLoop && !this.foundLoopSize) {
                this.loopSize++;
                if (this.previousStates.has(representation)) {
                    this.foundLoopSize = true;
                }
            }

            if (!this.foundLoop || !this.foundLoopSize) {
                this.previousStates.add(representation);
            }
        }
    };

    this.resetLoopDetection = () => {
        this.previousStates = new Set();
        this.foundLoop = false;
        this.foundLoopSize = false;
    };
}
