X2 = 38
X4 = 89
ft = 304.8
inch = ft / 12

width = 3.5 * ft
height = 2.667 * ft
depth = 2 * ft

// First we make the box at the bottom
// Frontbar
frontbar = cube({
    size: [X2, X4, width],
})
frontbar = rotate([90, 0, 0], frontbar)
frontbar = translate([
    0,
    width/2,
    4 * inch
], frontbar)
// Sidebars


function main () {
  return union(
    frontbar
  ).translate([0, 0, 0]).scale(0.05)
}
