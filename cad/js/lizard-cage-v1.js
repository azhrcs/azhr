// Run this with JSCAD desktop
X2 = 38
X4 = 89
ft = 304.8
inch = ft / 12

width = 3.5 * ft
depth = 2 * ft
plat_height = 2*X2 + 0.5*inch
cage_height = 16 * inch
height = 2.5 * ft

// Feet
foot = cube({
    size: [X2, X4, 2*X2]
})
lff = foot.translate([X2, X2, 0])
rff = foot.translate([width - 2*X2, X2, 0])
lbf = rotate([0, 0, -90], foot)
rbf = rotate([0, 0, 90], foot)
lbf = lbf.translate([X2, depth - X2, 0])
rbf = rbf.translate([width - X2, depth - 2*X2, 0])
feet = union(lff, rff, lbf, rbf)
// endfeed

// Long pieces - 3.5 ft
widthp = cube({
    size: [width, X2, X2],
})
widthp = widthp.setColor([0.8, 0.25, 0.3, 0.7])
// 3.5 ft - 2 * X2
widthminus = cube({
    size: [width - X2 * 2, X2, X2],
})
widthminus = widthminus.setColor([0.1, 0.7, 0.1, 0.8])
// Side pieces - depth - 2*X2
sidep = cube({
    size: [X2, depth - 2 * X2, X2],
})
sidep = sidep.setColor([0, 0.0, 0.5])
// Pillars
pillar = cube({
    size: [X2, X2, cage_height],
})
pillar = pillar.setColor([0.1, 0.8, 0.1, 0.1])

bpillar = cube({
    size: [X2, X2, cage_height + ft],
})
bpillar = bpillar.setColor([0.2, 0.1, 0.3, 0.1])

// base
fb = widthp.translate([0, 0, X2])
bb = widthp.translate([0, depth - X2, X2])
fndl = sidep.translate([0,X2,X2])
fndr = sidep.translate([width - X2, X2, X2])
base = union(fb, bb, fndl, fndr)

// cage
fb = widthminus.translate([X2, 0, plat_height])
ft_ = widthminus.translate([X2, 0, plat_height + cage_height - X2])
bb = widthminus.translate([X2, depth - X2, plat_height])
bt = widthminus.translate([X2, depth - X2, plat_height + cage_height - X2])
bl = sidep.translate([0, X2, plat_height])
br = sidep.translate([width - X2, X2, plat_height])
tl = sidep.translate([0, X2, plat_height + cage_height - X2])
tr = sidep.translate([width - X2, X2, plat_height + cage_height - X2])
lfp = pillar.translate([0, 0, plat_height])
rfp = pillar.translate([width - X2, 0, plat_height])
rbp = bpillar.translate([width - X2, depth - X2, plat_height])
lbp = bpillar.translate([0, depth - X2, plat_height])

tbar = widthp.translate([0, 0, plat_height + cage_height])
cage = union(fb, ft_, bb, bt, bl, br, tl, tr, lfp, lbp, rfp, rbp, tbar)

blen = depth - (2 * X2)
hght = 1 * ft
len_slant = Math.sqrt((blen**2) + hght ** 2)
console.log(len_slant / ft)

slant = cube({
    size: [X2, X2, len_slant],
})
// .rotate([63, 0, 0])
// slant = rotate([26.565 - 90, 0, 0], slant)
slant = rotate([-63.435, 0, 0], slant)
slantl = slant.translate([0, X2, cage_height + plat_height])
slantr = slant.translate([width - X2, X2, cage_height + plat_height])
slants = union(slantl, slantr)

backbar = widthminus.translate([X2, depth - X2, cage_height + plat_height + ft - X2])


// slant = cube

// front top
// ft = widthp.translate([0, 0, plat_height + cage_height - X2])

// widthp2 = cube({
//     size: [width - 2 * X2, X2, X2],
// })
// widthp2 = widthp2.setColor([0.2, 0.4, .7, 0.9])
// fb2 = widthp2.translate([X2, 0, plat_height])
// bb2 = widthp2.translate([X2, depth - X2, plat_height])
// bt = widthp2.translate([X2, depth - X2, plat_height + cage_height - X2])

plywood = cube({
    size: [width, depth, 0.5 * inch]
})
plywood = translate([0, 0, 2 * X2], plywood)
plywood = plywood.setColor([0.1, 0.1, 0.1, 0.1])

// p = polyhedron({
//     // openscad-like (e.g. pyramid)
//     points: [
//         [0, X2, cage_height + plat_height],
//         [X2, X2, cage_height + plat_height],
//         [0, 2*X2, cage_height + plat_height],
//         [X2, 2*X2, cage_height + plat_height],
//         // [10,10,0], [10,-10,0], [-10,-10,0], [-10,10,0],
//         // [0,0,10],
//     ],
//     triangles: [
//         [0,1,2],
//         [0,2,3],
//         [1,2,3],
//         // [2,3,4], [3,0,4],
//         // [1,0,3], [2,1,3],
//     ]
// // }).setColor([1, 1, 1, 1])
// })

function main() {
    return union(
        feet,
        base,
        // ft, bt,
        // fb2, bb2,
        plywood,
        cage,
        slants,
        backbar
        // p
    ).scale(0.05)
}
