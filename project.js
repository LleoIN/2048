var size = 4;
var htmlElements;
var cells;
var table;
var score = 0;
var bestScore = 0;
var scorePlus = document.getElementById("scorePlus");
var over = document.getElementById("alert");
var overText = document.getElementById("gameover");
var overBtn = document.getElementById("gameReButton");
var youWin = document.getElementById("win");
var winText = document.getElementById("youWin");
var winBtn = document.getElementById("winReButton");
// 做表格
function createField() {
    table = document.getElementById("field");
    htmlElements = [];
    for (var x = 0; x < size; x++) {
        var tr = document.createElement("tr");
        var trElements = [];
        for (var y = 0; y < size; y++) {
            var td = document.createElement("td");
            var tBlock = document.createElement("div");
            var numberX = x.toString();
            var numberY = y.toString();
            td.setAttribute("class", "cell");
            tBlock.setAttribute("class", "tBlock");
            tBlock.setAttribute("id", "cell" + numberX + numberY);
            td.appendChild(tBlock);
            tr.appendChild(td);
            trElements.push(tBlock);
        }
        htmlElements.push(trElements);
        table.appendChild(tr);
    }
}
// 做陣列
function createCells() {
    cells = [];
    for (var x = 0; x < size; x++) {
        cells.push(new Array(size).fill(0));
    }
}
// 隨機陣列的值=2或4
function generateInEmptyCell() {
    var x, y;
    do {
        x = Math.floor(Math.random() * 4);
        y = Math.floor(Math.random() * 4);
        if (cells[x][y] == 0) {
            cells[x][y] = Math.random() > 0.9 ? 4 : 2;
            gCellAnimate(x,y);
            break;
        }
    } while (true)
}
// 數字動畫
function gCellAnimate(x,y) {
    var xString=x.toString();
    var yString=y.toString();
    var a = document.getElementById("cell"+xString+yString);
    var id;
    if(parseInt(window.innerWidth) <= 500) {
        id = setInterval(cAnimate500, 1);
    }else if(parseInt(window.innerWidth) <= 900) {
        id = setInterval(cAnimate900, 1);
    }else{
        id = setInterval(cAnimate, 1);
    }
    var pos = 0;
    a.setAttribute("style","position: absolute;");
    function cAnimate() {
        if (pos == 130) {
            clearInterval(id);
        } else {
            pos+=5;
            a.style.width = pos + "px";
            a.style.height = pos + "px";
            a.style.left =  105.5+(131*y)+1.6+(3.2*y)- (pos / 2) + "px";
            a.style.top = 105.5+(131*x)+1.6+(3.2*y) - (pos / 2) + "px";

        }
    }
    function cAnimate900() {
        if (pos == 106) {
            clearInterval(id);
        } else {
            pos+=2;
            a.style.width = pos + "px";
            a.style.height = pos + "px";
            a.style.left =  105.5+(131*y)+1.6+(3.2*y)- (pos / 2) + "px";
            a.style.top = 105.5+(131*x)+1.6+(3.2*y) - (pos / 2) + "px";

        }
    }
    function cAnimate500() {
        if (pos == 76) {
            clearInterval(id);
        } else {
            pos+=2;
            a.style.width = pos + "px";
            a.style.height = pos + "px";
            a.style.left =  105.5+(131*y)+1.6+(3.2*y)- (pos / 2) + "px";
            a.style.top = 105.5+(131*x)+1.6+(3.2*y) - (pos / 2) + "px";

        }
    }

}
// 陣列的值填入表格
function draw() {
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            var td = htmlElements[x][y];
            var v = cells[x][y];
            td.innerHTML = v == 0 ? "0" : String(v);
            color(v, td);
        }
    }
}
function color(a, b) {
    switch (a) {
        case 2:
            b.setAttribute("style", "background-color: #F3EDE1;");
            break;
        case 4:
            b.setAttribute("style", "background-color: #EFE3CB;");
            break;
        case 8:
            b.setAttribute("style", "background-color: #F2AA80;");
            break;
        case 16:
            b.setAttribute("style", "background-color: #F3966A;color:#f5f5f0;");
            break;
        case 32:
            b.setAttribute("style", "background-color: #F27166;color:#f5f5f0;");
            break;
        case 64:
            b.setAttribute("style", "background-color: #F25244;color:#f5f5f0;");
            break;
        case 128:
            b.setAttribute("style", "background-color: #EACF76;color:#f5f5f0;font-size: 36px;");
            if (parseInt(window.innerWidth) <= 500) {
                b.setAttribute("style", "background-color: #EACF76;color:#f5f5f0;font-size: 20px;");
            }
            else if (parseInt(window.innerWidth) <= 900) {
                b.setAttribute("style", "background-color: #EACF76;color:#f5f5f0;font-size: 30px;");
            }
            break;
        case 256:
            b.setAttribute("style", "background-color: #F1CD5B;color:#f5f5f0;font-size: 36px;");
            if (parseInt(window.innerWidth) <= 500) {
                b.setAttribute("style", "background-color: #F1CD5B;color:#f5f5f0;font-size: 20px;");
            }
            else if (parseInt(window.innerWidth) <= 900) {
                b.setAttribute("style", "background-color: #F1CD5B;color:#f5f5f0;font-size: 30px;");
            }
            break;
        case 512:
            b.setAttribute("style", "background-color: #EDC65D;color:#f5f5f0;font-size: 36px;");
            if (parseInt(window.innerWidth) <= 500) {
                b.setAttribute("style", "background-color: #EDC65D;color:#f5f5f0;font-size: 20px;");
            }
            else if (parseInt(window.innerWidth) <= 900) {
                b.setAttribute("style", "background-color: #EDC65D;color:#f5f5f0;font-size: 30px;");
            }
            break;
        case 1024:
            b.setAttribute("style", "background-color: #F2D57E;color:#f5f5f0;font-size: 30px;");
            if (parseInt(window.innerWidth) <= 500) {
                b.setAttribute("style", "background-color: #F2D57E;color:#f5f5f0;font-size: 18px;");
            }
            else if (parseInt(window.innerWidth) <= 900) {
                b.setAttribute("style", "background-color: #F2D57E;color:#f5f5f0;font-size: 24px;");
            }
            break;
        case 2048:
            b.setAttribute("style", "background-color: #E7BE52;color:#f5f5f0;font-size: 30px;");
            if (parseInt(window.innerWidth) <= 500) {
                b.setAttribute("style", "background-color: #E7BE52;color:#f5f5f0;font-size: 18px;");
            }
            else if (parseInt(window.innerWidth) <= 900) {
                b.setAttribute("style", "background-color: #E7BE52;color:#f5f5f0;font-size: 24px;");
            }
            break;
        default:
            b.setAttribute("style", "background-color: #CBC2B3;");
    }
}

function cleanFilter(ab) {
    return ab.filter(function (b) { return b !== 0; });
}
// 滑動時的數字處理
function slide(array) {
    array = cleanFilter(array);
    for (var x = 0; x < array.length; x++) {
        if (array[x] == array[x + 1]) {
            array[x] *= 2;
            array[x + 1] = 0;
            score += array[x];
            scorePlus.innerHTML = "+" + array[x];
            plusAnimate()
        }
    }
    array = cleanFilter(array);
    if (score >= bestScore) {
        bestScore = score;
    }
    return array;
}
// 加分動畫
function plusAnimate() {
    var id = setInterval(pAnimate, 1);
    if (parseInt(window.innerWidth) <= 900) {
        var pos = 300;
        scorePlus.setAttribute("style", "left:40%;display:unset")
    } else {
        var pos = 125;
        scorePlus.setAttribute("style", "left:60%;display:unset")
    }
    function pAnimate() {
        if (pos == 40) {
            clearInterval(id);
            scorePlus.setAttribute("style", "display:none")
        } else {
            pos--;
            scorePlus.style.top = pos + "px";
        }
    }
}
// 做4次滑動數字處理+空陣列補0
function slideLeft() {
    var changed = false;
    for (var x = 0; x < size; x++) {
        var old = Array.from(cells[x]);
        cells[x] = slide(cells[x]);
        for (var y = 0; y < size; y++) {
            if (cells[x].length < size) {
                cells[x].push(0);
            }
            if (cells[x][y] == 2048) {
                youWin.setAttribute("style", "animation: winAnimate 1s linear both;")
                winText.setAttribute("style", "animation: winTextAnimate 1s linear both;")
                winBtn.setAttribute("style", "animation: winBtnAnimate 1s linear both;")
            }
        }
        changed = changed || (cells[x].join(',') != old.join(','));
    }
    return changed;
}
// 陣列左右互換做四次
function reverse() {
    for (var x = 0; x < size; x++) {
        cells[x] = swap(cells[x]);
    }
}
// 單列陣列左右互換
function swap(array) {
    var temp = 0;
    var y1 = 0;
    var y2 = 4;
    for (var x = 0; x < y2; x++) {
        y2--;
        temp = array[y1];
        array[y1] = array[y2];
        array[y2] = temp;
        y1++;
    }
    return array;
}
function upDownReverse() {
    var a = [];
    for (var x = 0; x < size; x++) {
        a.push(new Array(size).fill(0));
    }
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            a[x][y] = cells[y][x];
        }
    }
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            cells[x][y] = a[x][y];
        }
    }
}
function moveLeft() {
    return slideLeft();
}
function moveRight() {
    reverse();
    var chg = slideLeft();
    reverse();
    return chg;
}
function moveUP() {
    upDownReverse();
    var chg = slideLeft();
    upDownReverse();
    return chg;
}
function moveDown() {
    upDownReverse();
    reverse();
    var chg = slideLeft();
    reverse();
    upDownReverse();
    return chg;
}
function gameOver() {
    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            if (cells[y][x] == 0) {
                return false;
            }
        }
    }
    for (var y = 0; y < size - 1; y++) {
        for (var x = 0; x < size - 1; x++) {
            var c = cells[y][x];
            if (c != 0 && (c == cells[y + 1][x] || c == cells[y][x + 1])) {
                return false;
            }
            if (cells[3][y] == cells[3][y + 1] || cells[3][y] == cells[2][y]) {
                return false;
            }
            if (cells[y][3] == cells[y + 1][3] || cells[y][3] == cells[y][2]) {
                return false;
            }
        }
        if (cells[3][3] == cells[2][3] || cells[3][3] == cells[3][2]) {
            return false;
        }
    }
    return true;
}
document.addEventListener("keydown", function (a) {
    a.preventDefault()
    var e = a.key;
    var ok;
    switch (e) {
        case "ArrowUp":
            ok = moveUP();
            break;
        case "ArrowDown":
            ok = moveDown();
            break;
        case "ArrowLeft":
            ok = moveLeft();
            break;
        case "ArrowRight":
            ok = moveRight();
            break;
        case "r":
            newGame();
            break;
        case "R":
            newGame();
            break;
        default:
            break;
    }
    if (ok) {
        generateInEmptyCell();
        draw();
        document.getElementById("score").innerHTML = score;
        document.getElementById("bestScore").innerHTML = bestScore;
    }
    if (gameOver()) {
        over.setAttribute("style", "animation: overAnimate 1s linear both;")
        overText.setAttribute("style", "animation: overTextAnimate 1s linear both;")
        overBtn.setAttribute("style", "animation: overBtnAnimate 1s linear both;")
    }
})
// button
function newGame() {
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            cells[x][y] = 0;
        }
    }
    generateInEmptyCell();
    draw();
    score = 0;
    document.getElementById("score").innerHTML = score;
    over.setAttribute("style", "z-index: 1;");
    youWin.setAttribute("style", "z-index: 1;")
}
// =================================
function start() {
    createField();
    createCells();
    generateInEmptyCell();
    draw();
    document.getElementById("score").innerHTML = score;
    document.getElementById("bestScore").innerHTML = bestScore;
}
start();



