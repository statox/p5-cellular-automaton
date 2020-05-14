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
};
