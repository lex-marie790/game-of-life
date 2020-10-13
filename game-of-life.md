## Student should be able to describe the rules of Conway’s “Game of Life” 
    * Rules of the Game
        1. cells are alive if they have 2 or 3 neighbors. Anything else means they are dead
            1. under 2, underpopulation kills them
            2. 2 or 3, they get to live on for another generation 
            3. over 3, they die of overpopulation
        2. If the cell is dead, but has 3 (and only 3) neighbors, the cell can come back to life.
            1. exactly 3 - reproduction

    * Breakdown of Populations
    * Underpopulated - less than 2 neighbors
    * Overpopulated - more than 3 neighbors
    * Reproduction - exactly 3 neighbors

## Student should be able to explain what cellular automata are and describe how they are useful in real life
    * program that operates on data typically stored in a 2D grid
    * set of rules determines how the cells value changes over time
    * each new grid becomes the current state

## Student should be able to correctly analyze the ‘Turing Completeness’ of Conway’s “Game of Life”


## Visualizations
    * 25x25 grid that displays cells
    * Properties
        * alive/dead (assign custom colors)
        * clickable
            * users can add in their own cells but not while simulation is going
        * behavior
            * toggle: 
                * switch between alive/dead
                * run simulations
        * generation counter
            * Utilize a timeout function to build the next generation of cells & update the display at the chosen time interval
        * buttons
            * start
            * stop
            * clear
    * must include separate section that explains rules

## Algorithms
    * must implement
        * each cell in current generations grid:
            * examine state of all neighbors (8 per cell)
            * apply alive/dead rules
            * main loops completes:
                * swap current and next grids
                * repeat until simulation stops
    * breaks down previous rules into appropriate sub-tasks implemented with helper functions (improve readability)
    * double buffering
    * well document whats going on with the edges
        * wrap to the far side 
        * assume all edge cells are dead-dead

## Custom Features - must include 3 for MVP
    * give a few preloaded sample cell configs
    * add option to create random cell config 
    * additional cell properties
        * color or size
    * allow users to specify speed of simulation
    * provide functionality to manually set through the simulation one at a time
    * allow users to choose grid size
    * given specific generation, calculate the configuration of the cells at the point in time and jump to it skipping the animation
    * run personal custom features by TL 



