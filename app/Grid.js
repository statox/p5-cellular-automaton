function Grid() {
    this.minAge = 0;
    this.maxAge = 0;

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
        cells.forEach((c, i) => {
            newStates[i].bind(c)();
            if (c.isAlive) {
                if (c.age < this.minAge) {
                    this.minAge = c.age;
                }
                if (c.age > this.maxAge) {
                    this.maxAge = c.age;
                }
            }
        });
    }
}
