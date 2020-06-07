const { cube } = require('@jscad/vtree').api.primitives3d
// const {color} = require('@jscad/vtree').api.color
// const {difference} = require('@jscad/vtree').api.booleanOps
const { translate } = require('@jscad/vtree').api.transformations

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


module.exports = function LizardCage (params) {
    console.log(params)

    return api.union(
        frontbar, rearbar, left, right, ffl, ffr, bfl, bfr, platf
    ).translate([0, 0, 0]).scale(0.05)
}
