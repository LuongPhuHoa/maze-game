let app = {};

createGame(app);

let levels = [];
levels[0] = {
    map: [
        [1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
        [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0]
    ],
    player: {
        x: 0,
        y: 8
    },
    goal: {
        x: 2,
        y: 8
    },
    theme: 'default',
};

class Maze {
    constructor(id, level) {

        this.el = document.getElementById(id);

        // level addition
        this.level_idx = 0;

        // establish the basic properties common to all this objects.
        this.tileTypes = ['floor', 'wall'];
        this.tileDim = 45;
        // inherit the level's properties: map, player start, goal start.
        this.map = level.map;

        // level switch
        this.theme = level.theme;

        // make a copy of the level's player.
        this.player = { ...level.player };

        // create a property for the DOM element, to be set later.
        this.player.el = null;

        // make a copy of the goal.
        this.goal = { ...level.goal };
    }

    createEl(x, y, type) {
        // create one tile.
        let el = document.createElement('div');

        // two class names: one for tile, one or the tile type.
        el.className = type;

        // set width and height of tile based on the passed-in dimensions.
        el.style.width = el.style.height = this.tileDim + 'px';

        // set left positions based on x coordinate.
        el.style.left = x * this.tileDim + 'px';

        // set top position based on y coordinate.
        el.style.top = y * this.tileDim + 'px';

        el.style.border = 'none';

        return el;
    }

    /*
     * Applies the level theme as a class to the game element. 
     * Populates the map by adding tiles and sprites to their respective layers.
     */
    populateMap() {

        // add theme call
        this.el.className = 'game-container ' + this.theme;

        // make a reference to the tiles layer in the DOM.
        let tiles = this.el.querySelector('#tiles');

        // set up our loop to populate the grid.
        for (var y = 0; y < this.map.length; ++y) {
            for (var x = 0; x < this.map[y].length; ++x) {

                let tileCode = this.map[y][x];

                // determine tile type using code
                // index into the tileTypes array using the code.
                let tileType = this.tileTypes[tileCode];

                // call the helper function
                let tile = this.createEl(x, y, tileType);

                // add to layer
                tiles.appendChild(tile);
            }
        }
    }

    /*
     * Place the player or goal sprite.
     * @param {String} type - either 'player' or 'goal', used by createEl and becomes DOM ID
     */
    placeSprite(type) {

        // syntactic sugar
        let x = this[type].x

        let y = this[type].y;

        // reuse the createTile function
        let sprite = this.createEl(x, y, type);

        sprite.id = type;

        // set the border radius of the sprite.
        sprite.style.borderRadius = this.tileDim + 'px';

        // get half the difference between tile and sprite.

        // grab the layer
        let layer = this.el.querySelector('#sprites');

        layer.appendChild(sprite);

        return sprite;
    }

    /*
     * Triggers a collide animation on the player sprite.
     */
    collide() {
        this.player.el.className += ' collide';

        let obj = this;

        window.setTimeout(function () {
            obj.player.el.className = 'player';
        }, 200);

        return 0;

    };
    /*
     * Moves the player sprite left.
     */
    moveLeft() {
        // if at the boundary, return
        if (this.player.x == 0) {
            this.collide();
            return;
        }
        // itentify next tile
        let nextTile = this.map[this.player.y][this.player.x - 1];

        // if next tile is a wall, add collide effect and return
        if (nextTile == 1) {
            this.collide();
            return;
        }
        // change coordinates of player object
        this.player.x -= 1;
        // update location of DOM element
        this.updateHoriz();
    };
    /*
     * Moves the player sprite up.
     */
    moveUp() {
        if (this.player.y == 0) {
            // at end: these could be combined
            this.collide();
            return;
        }

        let nextTile = this.map[this.player.y - 1][this.player.x];
        if (nextTile == 1) {
            this.collide();
            return;
        }
        this.player.y -= 1;
        this.updateVert();

    };
    /*
     * Moves the player sprite right.
     */
    moveRight() {
        if (this.player.x == this.map[this.player.y].length - 1) {
          this.collide();
          return;
        }
        let nextTile = this.map[this.player.y][this.player.x + 1];
    
        if (nextTile == 1) {
          this.collide()
          return;
        }
        this.player.x += 1;
    
        this.updateHoriz();
      };
    /*
     * Moves player sprite down.
     */
    moveDown() {
        if (this.player.y == this.map.length - 1) {
            this.collide();
            return;
        }
        // find the next tile in the 2D array.

        let nextTile = this.map[this.player.y + 1][this.player.x];
        if (nextTile == 1) {
            this.collide()
            return;
        }
        this.player.y += 1;
        this.updateVert();

    };
    /* 
     *  Updates vertical position of player sprite based on object's y coordinates.
     */
    updateVert() {
        this.player.el.style.top = this.player.y * this.tileDim + 'px';
    };
    /* 
     *  Updates horizontal position of player sprite based on object's x coordinates.
     */
    updateHoriz() {
        this.player.el.style.left = this.player.x * this.tileDim + 'px';
    };
    /*
     * Moves player based on keyboard cursor presses.
     */
    movePlayer(event) {
        event.preventDefault();

        if (event.keyCode < 37 || event.keyCode > 40) {
            return;
        }

        switch (event.keyCode) {
            case 37:
                this.moveLeft();
                break;

            case 38:
                this.moveUp();
                break;

            case 39:
                this.moveRight();
                break;

            case 40:
                this.moveDown();
                break;
        }
    }
    /*
     * Check on whether goal has been reached.
     */
    checkGoal() {
        let body = document.querySelector('body');

        if (this.player.y == this.goal.y &&
            this.player.x == this.goal.x) {

            body.className = 'success';
        }
        else {
            body.className = '';
        }
    }
    /*
     * Changes the level of the game object.
     */
    changeLevel() {

        // update the level index.
        this.level_idx++;

        // if higher than max index, set back to zero.
        if (this.level_idx > levels.length - 1) {
            this.level_idx = 0;
        }

        // get the level at this index.
        let level = levels[this.level_idx];

        // sync the map with the level map.
        this.map = level.map;
        // sync the theme with the level theme.
        this.theme = level.theme;

        // make a copy of the level's player object, since x and y change during the game.
        this.player = { ...level.player };

        // make a copy of the level's goal object, since x and y change between levels.
        this.goal = { ...level.goal };
    }

    /*
     * If goal has been reached, 
     */
    addMazeListener() {

        // grab the map

        let map = this.el.querySelector('.game-map');

        // grab reference to game object since we are going into a function 
        // and "this" will no longer refer to the game object

        let obj = this;

        // if game board is clicked or tapped, see if we should change levels
        map.addEventListener('mousedown', function (e) {

            // if not at the goal, then get outta here
            if (obj.player.y != obj.goal.y ||
                obj.player.x != obj.goal.x) {
                return;
            }
            // change level of game object by changing it's properties
            obj.changeLevel();

            // get the two layers
            let layers = obj.el.querySelectorAll('.layer');

            // clear tiles and sprites from layers
            for (layer of layers) {
                layer.innerHTML = '';
            }

            // place the new level.
            obj.placeLevel();

            // check the goal to reset the message.
            obj.checkGoal();

        });
    };

    /*
     *  Responds to a keydown event by moving the player and checking the goal.
     */
    keyboardListener() {
        document.addEventListener('keydown', event => {
            this.movePlayer(event);
            this.checkGoal();
        });

    }
    /*
     * Adds mouse down listeners to buttons
     */
    buttonListeners() {
        let up = document.getElementById('up');
        let left = document.getElementById('left');
        let down = document.getElementById('down')
        let right = document.getElementById('right');

        // the sprite is out of date
        let obj = this;
        up.addEventListener('mousedown', function () {

            obj.moveUp();
            obj.checkGoal();
        });
        down.addEventListener('mousedown', function () {
            obj.moveDown();
            obj.checkGoal();
        });
        left.addEventListener('mousedown', function () {
            obj.moveLeft();
            obj.checkGoal();
        });
        right.addEventListener('mousedown', function () {
            obj.moveRight();
            obj.checkGoal();
        });

    }

    /*
     * Sets the message of the text element.
     * @param {String} msg - The message to be printed.
     */
    setMessage(msg) {
        let text_el = this.el.querySelector('.text');
        text_el.textContent = msg;
    };

    /*
     * Sizes up the map based on array dimensions.
     */
    sizeUp() {

        // inner container so that text can be below it
        let map = this.el.querySelector('.game-map');

        // inner container, height. Need this.map
        map.style.height = this.map.length * this.tileDim + 'px';

        map.style.width = this.map[0].length * this.tileDim + 'px';

    };


    /*
     * Populates the map.
     * Sizes up the map based on array dimensions.
     * Gives the goal and player some references.
     */
    placeLevel() {
        this.populateMap();

        this.sizeUp();

        this.placeSprite('goal');

        // we want the DOM element that gets returned...
        let playerSprite = this.placeSprite('player');

        // ..so we can store it in the playerSprite element.
        this.player.el = playerSprite;

    }
    /*
     *  Add keyboard, button, and maze tap listeners
     */
    addListeners() {

        this.keyboardListener();

        this.buttonListeners();

        // changing levels
        this.addMazeListener();
    }
}

function createGame(context) {
    context.init = function () {

        let myGame = new Maze('game-container-1', levels[0]);

        // encapsulate for multi-level
        myGame.placeLevel();

        // add listeners
        myGame.addListeners();

    }
}

/*
*  Effect for player/item
*/
function CenterLightSource(){
    let highlightPos = document.querySelector('.playerVfx').getBoundingClientRect();

    $('#mpg-flashlight').offset({
        top: highlightPos.top + window.scrollX - 2050,
        left: highlightPos.left + window.scrollY - 2050
    });
    $('#mpg-memory').offset({
        top: highlightPos.top + window.scrollX - 50,
        left: highlightPos.left + window.scrollY - 50
    });
    $('#vfx-nade').offset({
        top: highlightPos.top + window.scrollX - 50,
        left: highlightPos.left + window.scrollY - 50
    });
}

let effectArea = document.querySelector('#effect-area')
let testBtn = document.querySelector('#test-effect')

// reposistion vfx when resize
window.addEventListener("resize", CenterLightSource);
// remove item vfx when its end 
effectArea.addEventListener("animationend", function() {
    console.log("vfx class cleared");
    effectArea.classList.remove('vfx-flashbang');
    effectArea.classList.remove('vfx-spook');
    effectArea.classList.remove('vfx-nade');
}, false);
//debug btn
testBtn.addEventListener('click', function() {
    effectArea.classList.add('vfx-spook');
})

app.init();


