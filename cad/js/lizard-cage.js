X2 = 38
X4 = 89
ft = 304.8
inch = ft / 12

width = 3.5 * ft
height = 2.667 * ft
depth = 2 * ft

function main () {

// First we make the box at the bottom
// Frontbar
frontbar = cube({
    size: [width, X2, X2],
})
frontbar = translate([-width/2, 0, X2], frontbar)
rearbar = cube()
Object.assign(rearbar, frontbar)
rearbar = translate([0, -depth + X2, 0], rearbar)
// Sidebars
left = cube({
    size: [X2, depth - (X2 * 2), X2],
})
left = translate([
    -2 * ft + X2*2, -width /2, X2
], left)
right = cube()
Object.assign(right, left)
right = translate([
    width - X2, 0, 0
], right)
// The front feet
ffeet = [X2, X4, X2 * 2]
ffl = cube({size: ffeet})
ffl = translate([width/2 - 2*X2, -2*X2, 0], ffl)
ffr = cube({size: ffeet})
ffr = translate([-width/2 + X2, -2*X2, 0], ffr)
// The back feet
bfeet = [X4, X2, X2 * 2]
bfl = cube({size: bfeet})
bfl = translate([width/2 - X2 - X4, -depth + 2 * X2, 0], bfl)
bfr = cube({size: bfeet})
bfr = translate([-width/2 + X2, -depth+ 2 * X2, 0], bfr)

// 1/2 inch plywood
platf = cube({
    size: [width, depth, 0.5* inch],
})
platf = platf.setColor([1, 0.25, 0.3, 0.95])
platf = translate([-width/2, -depth + X2, 2*X2], platf)

cagefb = cube({
  size: [width - 2*X2, X2, X2]
})
cagefb = translate([-width/2 + X2, 0, 0.5 *inch + 2*X2], cagefb)
cagebb = cube()
Object.assign(cagebb, cagefb)
cagebb = translate([0, -depth+X2, 0], cagebb)
cageft = cube()
Object.assign(cageft, cagefb)
cageft = translate([0, 0, 8 *inch - X2], cageft)
cagebt = cube()
Object.assign(cagebt, cagefb)
cagebt = translate([0, -depth + X2, 8 *inch - X2], cagebt)

wallfl = cube({size: [X2, X2, 8 * inch ]})
wallfl = translate([width/2 - X2, 0, 2*X2 + 0.5 * inch], wallfl)
wallfr = cube()
Object.assign(wallfr, wallfl)
wallfr = translate([-width + X2, 0, 0], wallfr)

wallbl = cube()
Object.assign(wallbl, wallfl)
wallbl = translate([0, -depth + X2, 0], wallbl)
wallbr = cube()
Object.assign(wallbr, wallfl)
wallbr = translate([-width + X2, -depth + X2, 0], wallbr)


cagebl = cube({
    size: [X2, depth - (X2 * 2), X2],
})
cagebl = translate([
    width /2 - X2, -depth + 2* X2, 2*X2 + 0.5 * inch
], cagebl)
cagebr = cube()
Object.assign(cagebr, cagebl)
cagebr = translate([
    -width + X2, 0, 0
], cagebr)
cagetl = cube()
Object.assign(cagetl, cagebl)
cagetl = translate([0,0, 8* inch - X2], cagetl)
cagetr = cube()
Object.assign(cagetr, cagetl)
cagetr = translate([-width+X2, 0, 0], cagetr)


return union(
frontbar, rearbar, left, right,
ffl, ffr, bfl, bfr,
platf,
cagefb, cagebb, cageft, cagebt,
wallfl, wallfr, wallbr, wallbl,
cagebl, cagebr, cagetl, cagetr
).translate([0, 0, 0]).scale(0.05)
}
