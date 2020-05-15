# Cellular automaton

Using p5.js to play with cellular automaton.

# TODO
Features I want to implement:

 - [X] Loop detection: Have a message saying when a loop has been detected and what is the length of the cycle
 - [ ] Statistics about the population: Number of cells alive, average age, oldest cell, etc...
 - [X] Interesting presets: Have a list of cool automaton for the user to choose
 - [X] Preset saving: Have a way to store a cool automaton the user found
 - [ ] Preset import: Now that we can save a configuration, let's import it too
 - [X] Neigbors choice interface: Have a grid to let the user choose which cells should be included as neighbors
    - [X] Have a list of presets (Moore, Cardinal, Diagonal, Same Line, etc)
    - [X] Possibility to include a cell in the list of its neighbors
    - [ ] Possibility to choose neighbors of more than one row of distance
 - [X] Invert visualization: Have a way to ligth the dead cells and turn the living ones black
 - [X] Drawing and erasing: Have a way to set the alive/dead cells directly from the mouse
 - [X] Initial density setting: Have a way to select the density of living cells when generating a random grid
 - [ ] Perf improvement: Initialize the list of neighbors for each cells at the initialization of the grid.
 - [ ] Visualization: Have a setting to merge some cells together to have a smaller definition and visualize the grid as if it was some leds
 - [ ] Visualization: Let's make it 3D!!
 - [ ] Random changes: Have a settings to randomly change settings during the simulation to create artistic visualizations
