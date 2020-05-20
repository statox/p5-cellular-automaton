function Grid() {
    this.minAge = 0;
    this.maxAge = 0;
    this.aliveCells;
    this.previousStates = new Set();
    this.foundLoop = false;
    this.loopSize;
    this.foundLoopSize = false;

    this.doIteration = () => {
        const newStates = [];
        cells.forEach(c => {
            const neighborsIndex = c.getNeighborsIndex();
            const aliveNeighbors = neighborsIndex.reduce((count, index) => {
                if (cells[index].isAlive) {
                    count++;
                }
                return count;
            }, 0);

            if (c.isAlive && rules.survive.has(aliveNeighbors) ) {
                newStates.push(c.survive);
            } else if (!c.isAlive && rules.born.has(aliveNeighbors)) {
                newStates.push(c.born);
            } else {
                newStates.push(c.die);
            }
        });

        this.minAge = cells[0].age;
        this.maxAge = cells[0].age;

        let representation = '';
        this.aliveCells = 0;
        cells.forEach((c, i) => {
            newStates[i].bind(c)();
            if (c.isAlive) {
                if (c.age < this.minAge) {
                    this.minAge = c.age;
                }
                if (c.age > this.maxAge) {
                    this.maxAge = c.age;
                }
                representation += '1';
                this.aliveCells++;
            } else {
                representation += '0';
            }
        });

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
    }

    this.resetLoopDetection = () => {
        this.previousStates = new Set();
        this.foundLoop = false;
        this.foundLoopSize = false;
    };
}
