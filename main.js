let app = {};

let levels = [];
levels[0] = {
    //this map is used to store maze
    //it works with the tileTypes array in the Maze constructor (0 - floor, 1 - wall)
    map: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    ],
    //set the position of player depending on the map array
    player: {
        x: 0,
        y: 0
    },
    //set the position of goal depending on the map array
    goal: {
        x: 18,
        y: 18
    },
    //set the position of goal depending on the map array, also using array to declare more items
    items: [{ x: 3, y: 4 }, { x: 12, y: 16 }, { x: 16, y: 8 }],
    //choose theme to change style of map and its elements
    theme: 'default',
};

levels[1] = {
    map: [
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    ],
    player: {
        x: 0,
        y: 0
    },
    goal: {
        x: 22,
        y: 22
    },
    items: [{ x: 12, y: 1 }, { x: 4, y: 8 }, { x: 12, y: 10 }, { x: 21, y: 14 }, { x: 8, y: 20 }],
    theme: 'dungeon',
}

levels[2] = {
    map: [
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
    player: {
        x: 2,
        y: 0
    },
    goal: {
        x: 28,
        y: 28
    },
    items: [{ x: 16, y: 1 }, { x: 3, y: 16 }, { x: 7, y: 12 }, { x: 17, y: 14 }, { x: 10, y: 27 }, { x: 21, y: 22 }, { x: 26, y: 18 }],
    theme: 'grassland',
}

let effectArea = document.querySelector('#effect-area');
let effectItem = document.querySelector('#effect-item');
let effectPlayer = document.querySelector('#effect-player');
let tilesArea = document.querySelector('#tiles');
let testBtn = document.querySelector('#test-effect');
let returnBtn= document.querySelector('#return-btn');
let leaderBoard= document.querySelector('.leaderboard__profiles');

/* create class maze with necessary functions */
class Maze {
    //declare constructor
    constructor(id, level, index, tileDimension) {
        //get player's name
        this.name= document.querySelector('#player-name').value;
        //access id of element to create maze
        this.el = document.getElementById(id);

        //level index used to change level
        this.level_idx = index;

        //establish the basic properties to create maze
        this.tileTypes = ['floor', 'wall'];
        this.tileDim = tileDimension;

        //inherit the level's properties from levels[]
        this.map = level.map;
        this.theme = level.theme;
        this.player = { ...level.player };
        this.goal = { ...level.goal };
        this.items = level.items;

        //create a property for the DOM element
        this.player.el = null;
        this.footstep= 0;

    }

    /* Create tile element */
    createTileElement(x, y, type) {

        // create div to store tile
        let el = document.createElement('div');

        //set classname for div element depends on type of tile
        el.className = type;

        //set width and height of tile based on the dimension size
        el.style.width = el.style.height = this.tileDim + 'px';

        //set positions based on x coordinate
        el.style.left = x * this.tileDim + 'px';

        //set position based on y coordinate
        el.style.top = y * this.tileDim + 'px';

        //remove border
        el.style.border = 'none';

        return el;

    }

    /* Apply the level theme and make the map by adding tiles and sprites */
    populateMap() {

        //add theme
        this.el.className = 'game-container ' + this.theme;

        //make a reference to the tiles layer
        let tiles = this.el.querySelector('#tiles');

        //set up loop to populate the grid of map
        for (var y = 0; y < this.map.length; ++y) {
            for (var x = 0; x < this.map[y].length; ++x) {

                //put position of tile with the element in map array
                let tileCode = this.map[y][x];

                //determine tile type using index into the tileTypes array
                let tileType = this.tileTypes[tileCode];

                //call the helper function to create tile
                let tile = this.createTileElement(x, y, tileType);

                //add to layer in html
                tiles.appendChild(tile);
            }
        }
    }

    /* Place the player or goal sprite */
    placeSprite(type) {

        //set position of sprite
        let x = this[type].x
        let y = this[type].y;

        //reuse the createTileElement function
        let sprite = this.createTileElement(x, y, type);

        //set id to type to create different sprite
        sprite.id = type;

        //set the border radius of the sprite
        sprite.style.borderRadius = this.tileDim + 'px';

        // get half the difference between tile and sprite.

        //select the layer to create sprite
        let layer = this.el.querySelector('#sprites');

        //add sprite to maze in html
        layer.appendChild(sprite);

        return sprite;

    }

    //this function is used to add items to maze like addSprite, the different is param
    placeMultiSprite(type, ind) {

        let x = this[type][ind].x
        let y = this[type][ind].y;

        let sprite = this.createTileElement(x, y, type);

        //sprite.id = type;

        sprite.style.borderRadius = this.tileDim + 'px';

        let layer = this.el.querySelector('#sprites');

        layer.appendChild(sprite);

        return sprite;
    }

    /* Triggers a collide animation on the player when hit walls */
    collide() {

        //add class name collide to player
        this.player.el.className += ' collide';
        effectPlayer.classList.add('collide');

        let obj = this;

        //set time out of collide effect
        window.setTimeout(function () {
            obj.player.el.className = 'player';
            effectPlayer.classList.remove('collide');
        }, 200);

        return 0;

    };

    /* Create some functions to help player move */
    /* Moves the player left */
    moveLeft() {

        //if at the boundary -> return
        if (this.player.x == 0) {
            this.collide();
            return;
        }

        //itentify next tile
        let nextTile = this.map[this.player.y][this.player.x - 1];

        // if next tile is a wall, collide effect triggers and return
        if (nextTile == 1) {
            this.collide();
            return;
        }

        //change coordinates of player
        this.player.x -= 1;

        // update location of player
        this.player.el.style.left = this.player.x * this.tileDim + 'px';

    };
    /* These moveUp, moveRight, moveDown have same definition of moveLeft. The only different is calculating next tile */
    /* Moves the player up */
    moveUp() {

        if (this.player.y == 0) {
            this.collide();
            return;
        }

        let nextTile = this.map[this.player.y - 1][this.player.x];

        if (nextTile == 1) {
            this.collide();
            return;
        }

        this.player.y -= 1;

        this.player.el.style.top = this.player.y * this.tileDim + 'px';

    };
    /* Moves the player right */
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

        this.player.el.style.left = this.player.x * this.tileDim + 'px';

    };
    /* Moves the player down */
    moveDown() {

        if (this.player.y == this.map.length - 1) {
            this.collide();
            return;
        }

        let nextTile = this.map[this.player.y + 1][this.player.x];

        if (nextTile == 1) {
            this.collide()
            return;
        }

        this.player.y += 1;

        this.player.el.style.top = this.player.y * this.tileDim + 'px';

    };
    /* Moves player based with keyboard cursor */
    movePlayer(event) {
        event.preventDefault();

        //the keycodes 37 to 40 are 4 arrow keys on keyboard
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

    removeWall(posX, posY) {
        let startX = posX - 2;
        let startY = posY - 2;
        let endX = posX + 3;
        let endY = posY + 3;

        //limit area to remove wall
        if (startX < 0) {
            startX = 0;
        }
        if (startY < 0) {
            startY = 0;
        }
        if (endX > this.map[0].length) {
            endX = this.map[0].length;
        }
        if (endY > this.map.length) {
            endY = this.map.length;
        }

        // changing the wall to floor 
        let tilesArea = document.querySelector('#tiles');
        for (let i = startY; i < endY; i++) {
            for (let j = startX; j < endX; j++) {
                tilesArea.childNodes[(i * this.map.length) + j].className = "floor";
                this.map[i][j] = 0;
            }
        }

    }

    //random item effect
    randomItem(num) {
        switch (num) {
            case 0:
                effectArea.classList.add('vfx-flashbang');
                break;
            case 1:
                effectArea.classList.add('vfx-spook');
                break;
            case 2:
                effectItem.classList.add('vfx-nade');
                break;
        }

    }

    /* Check if item has been reached */
    checkItems() {

        for (let i = 0; i < this.items.length; i++) {
            if (this.player.y == this.items[i].y && this.player.x == this.items[i].x) {
                let randomNum = Math.floor(Math.random() * 3)
                this.randomItem(randomNum);
                if (randomNum === 2) {
                    this.removeWall(this.items[i].x, this.items[i].y);

                }
                CenterItemEffect();
                // remove item and sprites after used
                this.items.splice(i, 1);
                document.querySelector('#sprites').childNodes[i].remove();
            }
        };

    }

    /* Check if goal has been reached */
    checkGoal() {

        let body = document.querySelector('body');

        if (this.player.y == this.goal.y && this.player.x == this.goal.x) {
            body.className = 'success';
        }
        else {
            body.className = '';
            this.checkItems();
        }

    }

    /* Change the level */
    changeLevel() {

        //update level index
        this.level_idx++;

        //if higher than max index, set to 0
        if (this.level_idx > levels.length - 1) {
            let maze = document.getElementById("game");
            maze.classList.remove("d-flex");
            maze.classList.add("d-none");
            endGame.classList.remove("d-none");
            endGame.classList.add("d-flex");
        }

        //get the level at this index
        let level = levels[this.level_idx];

        //sync the map and all of its properties
        this.map = level.map;
        this.theme = level.theme;
        this.player = { ...level.player };  //make copy of the player
        this.goal = { ...level.goal };  //make copy of the goal
        this.items = level.items; //make copy of the items

    }

    /* Turn to a new level if goal has been reached */
    addMazeListener() {

        let obj = this;

        // //if continue button is clicked, change levels
        // continueBtn.addEventListener('click', function () {

        //     //if not at the goal, return
        //     if (obj.player.y != obj.goal.y || obj.player.x != obj.goal.x) {
        //         return;
        //     }

        //     //change level by reset new game properties
        //     obj.changeLevel();

        //     //get the layers then clear tiles and sprites
        //     let layers = obj.el.querySelectorAll('.layer');
        //     layers.forEach(layer => {
        //         if (layer.id != 'effect-area') {
        //             layer.innerHTML = '';
        //         }
        //     });

        //     //create new level maze
        //     obj.placeLevel();

        //     //check the goal
        //     obj.checkGoal();

        // });
        returnBtn.addEventListener('click',function(){
            //if not at the goal, return
            if (obj.player.y != obj.goal.y || obj.player.x != obj.goal.x) {
                return;
            }
            
            //get player's score
            let temp={
                'name':obj.name,
                'level':obj.level_idx,
                'footstep':obj.footstep
            }
            window.localStorage.setItem(`${obj.name}`,JSON.stringify(temp));
            window.location = 'index.html';
        });
    };

    /* Add listener to keyboard for moving and checking goal of player */
    keyboardListener() {

        document.addEventListener('keydown', event => {
            this.movePlayer(event);
            this.footstep++;
            this.checkGoal();
            CenterPlayerEffect();
        });

    }

    /* Set message of winning */
    setMessage(msg) {

        let text_el = this.el.querySelector('.text');
        text_el.textContent = msg;

    };

    /* Sizes up the map based on array dimensions */
    sizeUp() {

        //select inner container
        let map = this.el.querySelector('.game-map');

        //set height and width
        map.style.height = this.map.length * this.tileDim + 'px';
        map.style.width = this.map[0].length * this.tileDim + 'px';

    };


    /* Populate the map
       Size up the map based on array dimensions
       Place the goal and player */
    placeLevel() {

        this.populateMap();

        this.sizeUp();

        for (let i = 0; i < this.items.length; i++) {
            this.placeMultiSprite('items', i);
        }

        this.placeSprite('goal');

        //DOM element is returned and stored in playerSprite
        let playerSprite = this.placeSprite('player');
        this.player.el = playerSprite;

    }

    /* Add movement listeners */
    addMovementListeners() {

        this.keyboardListener();

        //create new maze so new level is made
        this.addMazeListener();

    }
}

//function create the game
function createGame(context, index, size) {
    context.init = function () {

        //create an object of maze
        let myGame = new Maze('game-container-1', levels[index], index, size);

        //create multi-level
        myGame.placeLevel();

        //add movement listeners
        myGame.addMovementListeners();

    }
}

/* Start game trigger */
let startBtn = document.getElementById("start-game");
startBtn.addEventListener("click", () => {
    let start = document.getElementById("start");
    start.classList.remove("d-flex");
    start.classList.add("d-none");

    let leader = document.getElementById("leader")
    leader.classList.remove("d-flex");
    leader.classList.add("d-none");

    let maze = document.getElementById("game");
    maze.classList.remove("d-none");
    maze.classList.add("d-flex");

    let levelSelect = document.getElementById("level");
    let value = levelSelect.value;

    if (value == "easy") {
        createGame(app, 0, 30);
        app.init();
    }
    else if (value == "medium") {
        createGame(app, 1, 25);
        app.init();
    }
    else if (value == "hard") {
        createGame(app, 2, 20);
        app.init();
    }
    
});

/* Responsize for maze */
var bp1 = window.matchMedia("(max-width: 650px)");
var bp2 = window.matchMedia("(max-width: 500px)");
var bp3 = window.matchMedia("(max-width: 450px)");

function responsiveMaze() {
    let tilesDiv = document.getElementById("tiles");
    let effectsDiv = document.getElementById("effect-area");
    let spritesDiv = document.getElementById("sprites");
    tilesDiv.innerHTML = '';
    effectsDiv.innerHTML = '';
    spritesDiv.innerHTML = '';

    let levelSelect = document.getElementById("level");
    let value = levelSelect.value;
    if (bp3.matches) {
        if (value == "easy") {
            createGame(app, 0, 15);
            app.init();
        }
        else if (value == "medium") {
            createGame(app, 1, 12);
            app.init();
        }
        else if (value == "hard") {
            createGame(app, 2, 10);
            app.init();
        }
    }
    else if (bp2.matches) {
        if (value == "easy") {
            createGame(app, 0, 20);
            app.init();
        }
        else if (value == "medium") {
            createGame(app, 1, 15);
            app.init();
        }
        else if (value == "hard") {
            createGame(app, 2, 12);
            app.init();
        }
    }
    else if (bp1.matches) {
        if (value == "easy") {
            createGame(app, 0, 25);
            app.init();
        }
        else if (value == "medium") {
            createGame(app, 1, 20);
            app.init();
        }
        else if (value == "hard") {
            createGame(app, 2, 15);
            app.init();
        }
    }
    else {
        if (value == "easy") {
            createGame(app, 0, 30);
            app.init();
        }
        else if (value == "medium") {
            createGame(app, 1, 25);
            app.init();
        }
        else if (value == "hard") {
            createGame(app, 2, 20);
            app.init();
        }
    }
}

$(window).resize(function () {
    responsiveMaze();
});

/*  make the player's effect follow the player coord on the maze */
function CenterPlayerEffect() {
    let playerPos = document.querySelector('.player');

    if (effectPlayer.classList.contains('mpg-flashlight')) {
        document.querySelector('.mpg-flashlight').style.top = (parseInt(playerPos.style.top.replace(/px/, "")) - 513) + "px";
        document.querySelector('.mpg-flashlight').style.left = (parseInt(playerPos.style.left.replace(/px/, "")) - 513) + "px";
    }
    else if (effectPlayer.classList.contains('mpg-memory')) {
        document.querySelector('.mpg-memory').style.top = (parseInt(playerPos.style.top.replace(/px/, "")) - 91) + "px";
        document.querySelector('.mpg-memory').style.left = (parseInt(playerPos.style.left.replace(/px/, "")) - 91) + "px";
    }

}
/* make the items's effect follow the items coord on the maze */
function CenterItemEffect() {
    let playerPos = document.querySelector('.player');
    if (effectItem.classList.contains('vfx-nade')) {
        document.querySelector('.vfx-nade').style.top = (parseInt(playerPos.style.top.replace(/px/, "")) - 50) + "px";
        document.querySelector('.vfx-nade').style.left = (parseInt(playerPos.style.left.replace(/px/, "")) - 50) + "px";
    }
}

// add listener to player/item effect when window resized
window.addEventListener("resize", CenterPlayerEffect);
// remove item effect when its end 
effectArea.addEventListener("animationend", function () {
    console.log("vfx class cleared");
    effectArea.classList.remove('vfx-flashbang');
    effectArea.classList.remove('vfx-spook');
    effectItem.classList.remove('vfx-nade');
}, false);

// update leaderBoard
function updateLeaderBoard()
{
    let output='';
    let player;
    for (let i = 0; i < localStorage.length; i++){
        player = JSON.parse(localStorage.getItem(localStorage.key(i)));
        output+=
        `<article class="leaderboard__profile">   
            <span class="leaderboard__name">${player.name}</span>
            <span class="leaderboard__value">Level ${player.level + 1}</span>
            <span class="leaderboard__value">${player.footstep}</span>
        </article>`
    }
    leaderBoard.innerHTML=output;
}

updateLeaderBoard();
// debug effect
// effectPlayer.classList.add('mpg-flashlight');