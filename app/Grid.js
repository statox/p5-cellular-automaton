function Grid() {
    this.minAge = 0;
    this.maxAge = 0;
    this.previousStates = new Set();
    this.foundLoop = false;
    this.loopSize;
    this.foundLoopSize = false;
    this.loopFirstElement;

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
            } else {
                representation += '0';
            }
        });

        if (settings.loopDetection) {
            if (this.previousStates.has(representation)) {
                this.foundLoop = true;
                this.loopSize = 0;
                this.loopFirstElement = representation;
                this.previousStates = new Set();
            }

            if (this.foundLoop && !this.foundLoopSize) {
                this.loopSize++;
                if (representation === this.loopFirstElement) {
                    this.foundLoopSize = true;
                }
            }

            if (!this.foundLoop) {
                this.previousStates.add(representation);
            }
        }
    }

    this.resetLoopDetection = () => {
        this.previousStates = new Set();
        this.foundLoop = false;
        this.loopSize = null;
        this.foundLoopSize = false;
        this.loopFirstElement = null;
    };
}
