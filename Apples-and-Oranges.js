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
const arrow = "A"
const otherarrow = "a"

setLegend(
  [ player, bitmap`
................
................
.........C......
......44.1C.....
......C4.1.C....
......C..1..C...
..000.C.000..C..
.0030000000...C.
.0333300330000C.
.0330333030...C.
.0333333330..C..
.0333000330.C...
.003333330.C....
..00000000C.....
...0....0.......
...0....0.......` ],
  [ player2, bitmap`
................
................
.....44..C......
.....44..1C.....
.....C...1.C....
...00000.1..C...
..0999990000.C..
.0999999990...C.
.0999999990000C.
.0990999090...C.
.0999999990..C..
.0999900990.C...
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
................`]
)

setSolids([])

let level = 0
const levels = [
  map`
.......
.......
p......
.......
.......
.......
P......
.......`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("s", () => {
  getFirst(player).y += 1
})
onInput("d",() => {
  addSprite(getFirst(player).x+1,getFirst(player).y,arrow)
})

onInput("i", () => {
  getFirst(player2).y -= 1
})
onInput("k", () => {
  getFirst(player2).y += 1
})
onInput("l",() => {
  addSprite(getFirst(player2).x+1,getFirst(player2).y,otherarrow)
})



afterInput(() => {
  
})
