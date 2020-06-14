// American measures in millimeters
// TODO: put in library
X2 = 38
X4 = 89
X6 = X2 + X4
ft = 304.8
inch = ft / 12

width = 8 * ft
depth = 6 * ft
height = 8 * ft
heightr = height + ft

pillar = cube({
  size: [X6, X4, height],
})
bl = pillar.translate([0, -X4, 0])
br = pillar.translate([width - X6, -X4, 0])
fl = pillar.translate([0, -depth + X4, 0])
fr = pillar.translate([width - X6, -depth + X4, 0])
pillars = union(bl, br, fl, fr)

struct = cube({
  size: [X2, -depth + X4, X6],
})
ll = struct.translate([-X2, 0, height - X6])
lr = struct.translate([X6, 0, height - X6])
rl = struct.translate([width - (X6 + X2), 0, height - X6])
rr = struct.translate([width, 0, height - X6])
structs = union(ll, lr, rl, rr)

topwid = cube({
  size: [width + 2*ft - (X6 / 2), X4, X6]
})
topb = topwid.translate([-2*ft, -X4, height])
topf = topwid.translate([-2*ft, -depth + X4, height])
tops = union(topb, topf)

stud = cube({
  size: [X2, -(depth + 3*ft), X6]
})
stud = rotate([-1.5, 0, 0], stud)
l1 = stud.translate([-ft, ft, height + X2])
l2 = stud.translate([0, ft, height + X2])
l3 = stud.translate([ft, ft, height + X2])
l4 = stud.translate([2*ft, ft, height + X2])
l5 = stud.translate([3*ft, ft, height + X2])
l6 = stud.translate([4*ft, ft, height + X2])
l7 = stud.translate([5*ft, ft, height + X2])
l8 = stud.translate([6*ft, ft, height + X2])
l9 = stud.translate([7*ft, ft, height + X2])
// l10 = stud.translate([8*ft, ft, height + X2])


// s = [-ft, ft, height + X2]
// space = ft
// x = -2 * ft
// translates = [stud.translate.apply(null, s)]
// while (x < width) {
//   n = [s[0] + space, s[1], s[2]]
//   translates.push(stud.translate.apply(null, n))
// }
// studs = union.apply(null, translates)
studs = union(l1, l2, l3, l4, l5, l6, l7, l8, l9)


slat = cube({
  size: [width + 2 * ft, X2, X2],
})
s1 = slat.translate([-2 * ft, ft / 2, height + X4 * 2 - inch])
s2 = slat.translate([-2 * ft, -ft + ft / 2, height + X4 * 2 - 0.5*inch])
s3 = slat.translate([-2 * ft, -2*ft + ft / 2, height + X4 * 2])
s4 = slat.translate([-2 * ft, -3*ft + ft / 2, height + X4 * 2 + 0.5*inch])
s5 = slat.translate([-2 * ft, -4*ft + ft / 2, height + X4 * 2 + inch])
s6 = slat.translate([-2 * ft, -5*ft + ft / 2, height + X4 * 2 + 1.5*inch])
s7 = slat.translate([-2 * ft, -6*ft + ft / 2, height + X4 * 2 + 2*inch])
s8 = slat.translate([-2 * ft, -7*ft + ft / 2, height + X4 * 2 + 2.5*inch])

slats = union(s1, s2, s3, s4, s5, s6, s7, s8)



function main() {
  return union(
    pillars,
    structs,
    tops,
    studs,
    slats
  ).scale(0.05)
}

