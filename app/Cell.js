function Cell(index, isAlive) {
    this.index = index;
    this.isAlive = isAlive;
    this.age = 0;

    this.show = (maxAge) => {
        const {x, y, w, h} = indexToXY(this.index);
        const relativeAge = 76 - map(this.age, 0, maxAge, 0, 76);

        if (this.isAlive) {
            let [R, G, B] = [5, 5, 5];

            if (relativeAge < 25) {
                R = max(5, relativeAge);
            } else if (relativeAge < 51) {
                R = 25;
                G = max(5, relativeAge - 25);
            } else if (relativeAge < 76) {
                R = 25;
                G = 25;
                B = max(5, relativeAge - 51);
            }

            fill(...[ R, G, B ].map(c => Math.floor(c*10)));
            rect(x, y, w, h);
        }

    }

    this.getNeighborsIndex = () => {
        const { neighborsToSelect } = settings;
        const { i, j } = indexToIJ(this.index);
        const neighborsCoords = [];

        if (neighborsToSelect['NW']) {
            neighborsCoords.push({ i: i-1, j: j-1});
        }
        if (neighborsToSelect['N']) {
            neighborsCoords.push({ i: i, j: j-1});
        }
        if (neighborsToSelect['NE']) {
            neighborsCoords.push({ i: i+1, j: j-1});
        }

        if (neighborsToSelect['W']) {
            neighborsCoords.push({ i: i-1, j: j});
        }
        if (neighborsToSelect['SELF']) {
            neighborsCoords.push({ i: i, j: j});
        }
        if (neighborsToSelect['E']) {
            neighborsCoords.push({ i: i+1, j: j});
        }

        if (neighborsToSelect['SW']) {
            neighborsCoords.push({ i: i-1, j: j+1});
        }
        if (neighborsToSelect['S']) {
            neighborsCoords.push({ i: i, j: j+1});
        }
        if (neighborsToSelect['SE']) {
            neighborsCoords.push({ i: i+1, j: j+1});
        }

        if (settings.edgeWrapping) {
            return neighborsCoords.map(IJToIndex)
        }

        return neighborsCoords.filter(({i, j}) => {
            return i > -1 && j > -1 && i < settings.COLS && j < settings.ROWS
        }).map(IJToIndex);
    }

    this.born = () => {
        this.isAlive=true;
        this.age=0;
    }

    this.die = () => {
        this.isAlive=false;
    }

    this.survive = () => {
        this.age++;
    }
}
