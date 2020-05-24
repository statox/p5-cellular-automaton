# Cellular automata

Using p5.js to play with cellular automata.

# What is this ?

This is a little web page which allows the user to play and experiment with cellular automata.
See [wiki](https://en.wikipedia.org/wiki/Cellular_automaton) if you never heard about these amazing mathematical models.

For now the application only runs 2D cellular automata like the Game of Life.

The goal is to be able to change the rules of an automaton, see how it reacts and hopefully get cool visual effects from these visualizations.

Note that this is:

 - A work in progress, until... Indefinitely probably;
 - A web page made by a backend developer who doesn't particularly enjoy working on UI/UX.
 - An experimental project made to work most of the time and quickly enough.
 - Mostly just a toy for me to have fun with.

So yes, these are all bad excuses for the crappy code, the lack of frontend framework and basically anything wrong with the page :)

# Why ?

Because for years I have been fascinated by how simple rules can create chaotic behavior and how elegant these automata are.

Also because John Conway an amazing mathematician and one of the fathers of cellular automata (amongst other things) [died from COVID-19 recently](https://en.wikipedia.org/wiki/John_Horton_Conway) and it was a good occasion to praise his work.

Also because colors are cool!

# How does it work ?

I wanted to do something quick and accessible to everyone so I went for a simple webpage using mostly vanilla Javascript and [P5.JS](https://p5js.org/reference/) (which is an awesome framework to do visual stuff in a browser).

You can have a look at the code which is pretty short to have a basic idea of how I handled the grid, cells and their transitions.

# What's next ?

I begin to be happy with my 2D automata. If I manage to keep my motivation I want to also implement a similar system which would allow the user to play with 1D cellular automata like [Rule 30](https://en.wikipedia.org/wiki/Rule_30).

However to do so I will probably need to revamp how my models and views are coordinated and to do so I'll try to implement Vue.JS.

# TODO

An ever changing list of what I want to get done:

 - [X] Loop detection: Have a message saying when a loop has been detected and what is the length of the cycle
 - [X] Statistics about the population: Number of cells alive, average age, oldest cell, etc...
    - [ ] Improved statistics: Even moar stats! Maybe about all the simulations ran, or more details... TBD
 - [X] Interesting presets: Have a list of cool automata for the user to choose
 - [X] Preset saving: Have a way to store a cool automaton the user found
 - [ ] Preset import: Now that we can save a configuration, let's import it too
 - [ ] Preset sharing: Have a page explaining how to export your config and create a PR to merge it to the app existing presets. (For when this page becomes famous!)
 - [X] Neighbors choice interface: Have a grid to let the user choose which cells should be included as neighbors
    - [X] Have a list of presets (Moore, Cardinal, Diagonal, Same Line, etc)
    - [X] Possibility to include a cell in the list of its neighbors
    - [ ] Possibility to choose neighbors of more than one row of distance
 - [X] Invert visualization: Have a way to ligth the dead cells and turn the living ones black
 - [X] Drawing and erasing: Have a way to set the alive/dead cells directly from the mouse
 - [X] Initial density setting: Have a way to select the density of living cells when generating a random grid
 - [ ] Perf improvement: Initialize the list of neighbors for each cells at the initialization of the grid.
 - [X] Perf improvement: For now Grid.doIteration is O(n2), make it O(n). I think it is possible to do so by having Cells containing their current state and the next one and handle the transformation in only one loop.
    - Done. But it seems like it doesn't make a huge difference.
 - [ ] Visualization: Have a setting to merge some cells together to have a smaller definition and visualize the grid as if it was some LEDs
 - [ ] Visualization: Let's make it 3D!!
 - [X] Random changes: Have a settings to randomly change settings during the simulation to create artistic visualizations
 - [ ] Try the newcss framework to replace bootstrap (Dedicated branch already created)(Probably won't do)
 - [ ] Clean up the code! More precisely maybe use Vue.js to have a better handling of the model/view communication.
 - [ ] Implement 1D automata! This will probably require to do the migration to Vue but that would be cool!
    - More precisely: I want to create a tabbed interface with one tab for 2D automata, one tab for 1D and maybe one tab to 3D ones too?
