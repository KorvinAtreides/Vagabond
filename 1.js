function Vagabond(x, y) {
    this.x=x;
    this.y=y;
    var _x = x;
    var _y = y;
    this.goUp = function () {
        if (_y<document.getElementById("plot").height){
            _y=_y+1;
        }
        this.y=_y;
        return this;
    }
    this.goDown = function () {
        if(_y>0){
            _y=_y-1;
        }
        this.y=_y;
        return this;
    }
    this.goLeft = function () {
        if (_x>0) {
            _x=_x-1;
        }
        this.x=_x;
        return this;
    }
    this.goRight = function () {
        if (_x<document.getElementById("plot").width){
            _x=_x+1;
        }
       this.x=_x;
       return this;
    }
}
let vagabond = new Vagabond (125, 125);

function draw(startX, startY, dX, dY) {
    let canvas = document.getElementById('plot');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.beginPath();
        if ((startY + dY)>=0 && (startY + dY)<=canvas.height && (startX + dX)>=0 && (startX + dX)<=canvas.width){ //don't go out
            ctx.moveTo(startX, canvas.height-startY);
            ctx.lineTo(startX + dX, canvas.height-(startY + dY));
            ctx.stroke();
        }
    }
}


function goVagabond() {
    let move = Math.round(Math.random()*4+0.5);
    pathLength.value++;
    switch(move){
        case 1:
            vagabond.goLeft();
            draw(vagabond.x, vagabond.y, -1, 0);
            break;
         case 2:
            vagabond.goRight();
            draw(vagabond.x, vagabond.y, 1, 0);
            break;        
        case 3:
            vagabond.goUp();
            draw(vagabond.x, vagabond.y, 0, 1);
            break;
        case 4:
            vagabond.goDown()
            draw(vagabond.x, vagabond.y, 0, -1);
            break;  
        default:
            break;
    }
    coordX.value=vagabond.x;
    coordY.value=vagabond.y;
}

containerBtns.addEventListener("click", function (e) {
    let btn = e.target;
    if (btn.type == "button"){
        switch (btn.id) {
            case "left":
                vagabond.goLeft();
                pathLength.value++;
                draw(vagabond.x, vagabond.y, -1, 0);
                break;
            case "right":
                vagabond.goRight();
                pathLength.value++;
                draw(vagabond.x, vagabond.y, 1, 0);
                break;        
            case "up":
                vagabond.goUp();
                pathLength.value++;
                draw(vagabond.x, vagabond.y, 0, 1);
                break;
            case "bottom":
                vagabond.goDown();
                pathLength.value++;
                draw(vagabond.x, vagabond.y, 0, -1);
                break;  
            case "random":
                let goes = setInterval(goVagabond, 10);
            default:
                break;
        }
        coordX.value=vagabond.x;
        coordY.value=vagabond.y;
    }
})
