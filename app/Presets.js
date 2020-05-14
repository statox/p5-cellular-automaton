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
        name: 'Game of life',
        description: 'The original Conway\'s Game of life',
        wrap: true, neighborsAlgorithm: 'MOORE',
        B: [3], S: [2, 3]
    },
    {
        name: 'Dead islands',
        description: 'An automata with island of dead cells which never resurect',
        wrap: true, neighborsAlgorithm: 'CARDINAL',
        B: [2, 3], S: [4, 5, 6, 7]
    },
    {
        name: 'Big block',
        description: 'An automata with a big block in the center and sometimes alive edges',
        wrap: false, neighborsAlgorithm: 'CARDINAL',
        B: [1, 3], S: [1, 3, 4]
    },
    {
        name: 'Swiss cheese',
        description: 'Fills the space but leave some long lasting holes',
        wrap: true, neighborsAlgorithm: 'MOORE',
        B: [1, 2], S: [4, 5, 6, 7]
    },
    {
        name: 'Everchanging islands',
        description: 'Generates some islands which are constantly evolving',
        wrap: true, neighborsAlgorithm: 'MOORE',
        B: [1, 3], S: [1, 2, 4, 5, 6]
    },
    {
        name: 'Pathes and islands',
        description: 'Generates some long lasting paths and sometimes some moving islands',
        wrap: true, neighborsAlgorithm: 'CARDINAL',
        B: [1, 3], S: [0, 1, 2]
    },
    {
        name: 'Symetry effects',
        description: 'Interesting effects when you add and remove the S3 rule',
        wrap: true, neighborsAlgorithm: 'CARDINAL',
        B: [2, 3, 4, 5], S: [1, 2, 4]
    },
    {
        name: 'Filler',
        description: 'Rapidly fills the space, creating a cool heatmap-like effect',
        wrap: true, neighborsAlgorithm: 'CARDINAL',
        B: [2, 3, 4, 5], S: [2, 3, 4, 5, 6]
    },
    {
        name: 'Small blocks',
        description: 'Generates some small blocks across the space',
        wrap: true, neighborsAlgorithm: 'CARDINAL',
        B: [2], S: [2, 3]
    },
    {
        name: 'Pathes and loops',
        description: 'Stabilizes to lines across the space. Also produces rings which disappear',
        wrap: true, neighborsAlgorithm: 'CARDINAL',
        B: [2, 3], S: [2]
    },
];
