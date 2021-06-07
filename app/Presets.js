/*
 * # Cool presets to remember
 * [X] Wrap - Cardinal - B23S4567
 * [X] Wrap - Moore    - B12S4567
 * [X] Wrap - Moore    - B13S12456
 * [X] Wrap - Cardinal - B13S012
 * [X] Wrap - Cardinal - B13S134
 * [X] Wrap - Cardinal - B2345S124 => Interesting when adding/removing S3
 * [X] Wrap - Cardinal - B2345S23456
 * [X] Wrap - Cardinal - B2S23
 * [X] Wrap - Cardinal - B23S2
 */

const PRESETS = [
    {
        settings: {
            name: 'Game of life',
            description: 'The original Conway\'s Game of life',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: true, N: true, NE: true, W: true, E: true, SW: true, S: true, SE: true, SELF: false},
        },
        rules: {
            born: [3], survive: [2, 3]
        }
    },
    {
        settings: {
            name: "Bryan's arrows",
            description: "Arrow forming automata discovered by Bryan",
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: { NW: true, N: false, NE: false, W: true, E: true, SW: true, S: false, SE: false, SELF: false, },
            neighborsAlgorithm: "MOORE",
        },
        rules: {
            born: [1, 2], survive: [1, 2, 0]
        },
    },
    {
        settings: {
            name: 'Dead islands',
            description: 'An automaton island of dead cells which never resurect',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: true,
            initialDensity: 50,
            neighborsToSelect: {NW: false, N: true, NE: false, W: true, E: true, SW: false, S: true, SE: false, SELF: false},
        },
        rules: {
            born: [2, 3], survive: [4, 5, 6, 7]
        }
    },
    {
        settings: {
            name: 'Big block',
            description: 'An automaton a big block in the center and sometimes alive edges',
            edgeWrapping: false,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: false, N: true, NE: false, W: true, E: true, SW: false, S: true, SE: false, SELF: false},
        },
        rules: {
            born: [1, 3], survive: [1, 3, 4]
        }
    },
    {
        settings: {
            name: 'Swiss cheese',
            description: 'Fills the space but leave some long lasting holes',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: true, N: true, NE: true, W: true, E: true, SW: true, S: true, SE: true, SELF: false},
        },
        rules: {
            born: [1, 2], survive: [4, 5, 6, 7]
        }
    },
    {
        settings: {
            name: 'Everchanging islands',
            description: 'Generates some islands which are constantly evolving',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: true, N: true, NE: true, W: true, E: true, SW: true, S: true, SE: true, SELF: false},
        },
        rules: {
            born: [1, 3], survive: [1, 2, 4, 5, 6]
        }
    },
    {
        settings: {
            name: 'Pathes and islands',
            description: 'Generates some long lasting paths and sometimes some moving islands',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: false, N: true, NE: false, W: true, E: true, SW: false, S: true, SE: false, SELF: false},
        },
        rules: {
            born: [1, 3], survive: [0, 1, 2]
        }
    },
    {
        settings: {
            name: 'Symetry effects',
            description: 'Interesting effects when you add and remove the S3 rule',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: false, N: true, NE: false, W: true, E: true, SW: false, S: true, SE: false, SELF: false},
        },
        rules: {
            born: [2, 3, 4, 5], survive: [1, 2, 4]
        }
    },
    {
        settings: {
            name: 'Filler',
            description: 'Rapidly fills the space, creating a cool heatmap-like effect',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: false, N: true, NE: false, W: true, E: true, SW: false, S: true, SE: false, SELF: false},
        },
        rules: {
            born: [2, 3, 4, 5], survive: [2, 3, 4, 5, 6]
        }
    },
    {
        settings: {
            name: 'Small blocks',
            description: 'Generates some small blocks across the space',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: false, N: true, NE: false, W: true, E: true, SW: false, S: true, SE: false, SELF: false},
        },
        rules: {
            born: [2], survive: [2, 3]
        }
    },
    {
        settings: {
            name: 'Pathes and loops',
            description: 'Stabilizes to lines across the space. Also produces rings which disappear',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: {NW: false, N: true, NE: false, W: true, E: true, SW: false, S: true, SE: false, SELF: false},
        },
        rules: {
            born: [2, 3], survive: [2]
        }
    },
    {
        settings: {
            name: 'Slider',
            description: 'Stabilizes on sliding lines of cells',
            edgeWrapping: true,
            loopDetection: true,
            invertVisualization: false,
            initialDensity: 50,
            neighborsToSelect: { N:   true, W:   false, S:   false, E:   false, NW:  false, NE:  false, SW:  false, SE:  false, SELF:false, },
        },
        rules: {
            born: [1], survive: [1]
        }
    },
];

const changePreset = (presetIndex) => {
    const newPreset = PRESETS[presetIndex];
    const {
        ROWS,
        COLS,
        nbCells,
        runIterations,
        randomize,
        randomizationRules,
        randomizeFrequency,
        resetOnEmptyGrid,
        resetOnLoop
    } = settings;

    try {
        settings = JSON.parse(JSON.stringify(newPreset.settings));
    } catch (error) {
        console.error('Failed to parse the preset');
        console.error(error);
    }
    rules.born = new Set(newPreset.rules.born);
    rules.survive = new Set(newPreset.rules.survive);

    settings.ROWS = ROWS;
    settings.COLS = COLS;
    settings.nbCells = nbCells;
    settings.runIterations = runIterations;
    settings.randomize = randomize;
    settings.neighborsAlgorithm = 'MOORE';
    settings.drawingTool = 'PENCIL';
    settings.drawing = false;
    settings.randomizationRules = randomizationRules;
    settings.randomizeFrequency = randomizeFrequency;
    settings.resetOnEmptyGrid = resetOnEmptyGrid;
    settings.resetOnLoop = resetOnLoop;

    updateInterfaceAllItemsFromValue();
    resetLoopDetection();
}

const createPresetFromCurrentConfig = (name, description) => {
    settings.name = name;
    settings.description = description;

    return currentPreset = {
        settings,
        rules: {
            born: [...rules.born],
            survive: [...rules.survive],
        }
    }
};
const saveCurrentPreset = (name, description) => {
    const currentPreset = createPresetFromCurrentConfig(name, description);
    PRESETS.push(currentPreset);
    changePreset(PRESETS.length - 1);
}

const exportCurrentPreset = (name, description) => {
    const currentPreset = createPresetFromCurrentConfig(name, description);
    download(`${name}.json`, JSON.stringify(currentPreset));
}

const download = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
}
