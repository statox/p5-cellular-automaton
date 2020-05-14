const setNeighborsToSelect = () => {
    if (neighborsAlgorithm === 'MOORE') {
        neighborsToSelect = {
            NW:  true,
            N:   true,
            NE:  true,
            W:   true,
            E:   true,
            SW:  true,
            S:   true,
            SE:  true,
            SELF:false,
        };
    }

    if (neighborsAlgorithm === 'CARDINAL') {
        neighborsToSelect = {
            N:   true,
            W:   true,
            S:   true,
            E:   true,
            NW:  false,
            NE:  false,
            SW:  false,
            SE:  false,
            SELF:false,
        };
    }

    if (neighborsAlgorithm === 'DIAGONAL') {
        neighborsToSelect = {
            NW: true,
            NE: true,
            SW: true,
            SE: true,
            N:  false,
            W:  false,
            S:  false,
            E:  false,
            SELF:false,
        };
    }

    if (neighborsAlgorithm === 'ECA') {
        neighborsToSelect = {
            W:  true,
            E:  true,
            NW: false,
            NE: false,
            SW: false,
            SE: false,
            N:  false,
            S:  false,
            SELF:false,
        };
    }
};
