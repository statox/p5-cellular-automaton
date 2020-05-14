const setNeighborsToSelect = () => {
    const { neighborsAlgorithm } = settings;
    if (neighborsAlgorithm === 'MOORE') {
        settings.neighborsToSelect = {
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
        settings.neighborsToSelect = {
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
        settings.neighborsToSelect = {
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
        settings.neighborsToSelect = {
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
