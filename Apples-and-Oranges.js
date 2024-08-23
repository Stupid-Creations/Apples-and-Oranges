/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Archery
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const player2 = "P"
const target = "T"
const othertarget = 't'
const arrow = "A"
const otherarrow = "a"
let score = 0
let score2 = 0
let timer = 60

setLegend(
  [player, bitmap`
................
................
.........C......
......44.1C.....
......C4.1.C....
......C..1..C...
..000.C.00...C..
.0030000000...C.
.0333333330000C.
.0333303030...C.
.0333303030..C..
.0333333330.C...
.003333330.C....
..00000000C.....
...0....0.......
...0....0.......`],
  [player2, bitmap`
................
................
.....44..C......
.....44..1C.....
.....C...1.C....
...00000.1..C...
..0999990000.C..
.0999999990...C.
.0999909090000C.
.0999909090...C.
.0999999990..C..
.0999999990.C...
.009999990.C....
..0000000CC.....
...0....0.......
...0....0.......`],
  [target, bitmap`
................
.........3333...
........332233..
.......33233233.
.......32333323.
.......32322323.
.......32322323.
.......32322323.
.......32333323.
.......33233233.
........332233..
.........3333...
..........CC....
......CCCCCCCCCC
.......CCCCCCCC.
........CCCCCC..`], [arrow, bitmap`
................
................
................
................
................
................
...3.3.....0....
....3.3.....0...
...00000000000..
....3.3.....0...
...3.3.....0....
................
................
................
................
................`],
  [otherarrow, bitmap`
................
................
................
................
................
................
...9.9.....0....
....9.9.....0...
...00000000000..
....9.9.....0...
...9.9.....0....
................
................
................
................
................`], [othertarget, bitmap`
................
.........3333...
........332233..
.......33233233.
.......32333323.
.......32322323.
.......32322323.
.......32322323.
.......32333323.
.......33233233.
........332233..
.........3333...
..........CC....
......CCCCCCCCCC
.......CCCCCCCC.
........CCCCCC..`]
)

setSolids([target, othertarget])
let threshold = 0.35
let level = 0
const levels = [
  map`
.........
..p......
.........
.........
.........
.........
..P......
.........`
]

setMap(levels[level])

setPushables({
  [player]: []
})

const updateArrows = () => {
  if(getAll(arrow).length > 0){
    if (getFirst(arrow).x >= 8) {
      getFirst(arrow).remove()
    }else{
    getFirst(arrow).x += 1
    }
  if(tilesWith(arrow,target).length > 0 || tilesWith(arrow,othertarget).length > 0){
    clearTile(getFirst(arrow).x,getFirst(arrow).y)
    score+=1
  }
}
}

const updateotherArrows = () => {
  if(getAll(otherarrow).length > 0){
    if (getFirst(otherarrow).x >= 8) {
      getFirst(otherarrow).remove()
    }else{
    getFirst(otherarrow).x += 1
    }
  if(tilesWith(otherarrow,target).length > 0 || tilesWith(otherarrow,othertarget).length > 0){
    clearTile(getFirst(otherarrow).x,getFirst(otherarrow).y)
    score2 += 1
  }
}
  addText("P1: \n" + score.toString(),{x:1,y:1})
  addText("P2: \n" + score2.toString(),{x:1,y:13})
  addText(timer.toString(),{x:1,y:6})
}

const updateTarget = () => {
  if (Math.random() > threshold) {
    if (Math.random() > 0.5) {
      addSprite(Math.floor(Math.random() * 5) + 4, 0, target)
    } else {
      addSprite(Math.floor(Math.random() * 5) + 4, 7, othertarget)
    }
  }
  for(let i = 0; i < getAll(target).length; i++){
        if (getAll(target)[i].y === height-1) {
      getAll(target)[i].remove()
    }
  }
  for (let i = 0; i < getAll(target).length; i++) {
    getAll(target)[i].y += 1;
  }
  for(let i = 0;  i < getAll(othertarget).length; i++){
        if (getAll(othertarget)[i].y === 0) {
      getAll(othertarget)[i].remove()
    }
  }
  for (let i = 0; i < getAll(othertarget).length; i++) {
    getAll(othertarget)[i].y -= 1;
  }
}

const updateTimer = () =>{
  timer-=1;
}

setInterval(updateArrows, 100);
setInterval(updateotherArrows, 100);
setInterval(updateTarget, 500);
setInterval(updateTimer, 1000);

onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("s", () => {
  getFirst(player).y += 1
})
onInput("d", () => {
  if(tilesWith(arrow).length === 0){
  addSprite(getFirst(player).x + 1, getFirst(player).y, arrow)
  }
})

onInput("i", () => {
  getFirst(player2).y -= 1
})
onInput("k", () => {
  getFirst(player2).y += 1
})
onInput("l", () => {
  if(tilesWith(otherarrow).length === 0){
  addSprite(getFirst(player2).x + 1, getFirst(player2).y, otherarrow)
  }
})



afterInput(() => {

})
