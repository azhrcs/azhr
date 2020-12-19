// American measures in millimeters
// TODO: put in library
X2 = 38
X4 = 89
X6 = X2 + X4
ft = 304.8
inch = ft / 12

width = 25 * ft
depth = 6 * ft
height = 10 * ft
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

stpace = 1.5 * ft
stud = cube({
  size: [X2, -(depth + 3*ft), X6]
})
stud = rotate([-1.5, 0, 0], stud)
l1 = stud.translate([-stpace, ft, height + X2])
l2 = stud.translate([0, ft, height + X2])
l3 = stud.translate([stpace, ft, height + X2])
l4 = stud.translate([2*stpace, ft, height + X2])
l5 = stud.translate([3*stpace, ft, height + X2])
l6 = stud.translate([4*stpace, ft, height + X2])
l7 = stud.translate([5*stpace, ft, height + X2])
l8 = stud.translate([6*stpace, ft, height + X2])
l9 = stud.translate([7*stpace, ft, height + X2])
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
sspace = 1.5 * ft
s1 = slat.translate([-2 * ft, ft / 2, height + X4 * 2 - inch])
s2 = slat.translate([-2 * ft, -sspace + ft / 2, height + X4 * 2 - 0.5*inch])
s3 = slat.translate([-2 * ft, -2*sspace + ft / 2, height + X4 * 2])
s4 = slat.translate([-2 * ft, -3*sspace + ft / 2, height + X4 * 2 + 0.5*inch])
s5 = slat.translate([-2 * ft, -4*sspace + ft / 2, height + X4 * 2 + inch])
s6 = slat.translate([-2 * ft, -5*sspace + ft / 2, height + X4 * 2 + 1.5*inch])
// s7 = slat.translate([-2 * ft, -6*sspace + ft / 2, height + X4 * 2 + 2*inch])
// s8 = slat.translate([-2 * ft, -7*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s9 = slat.translate([-2 * ft, -8*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s10 = slat.translate([-2 * ft, -9*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s11 = slat.translate([-2 * ft, -10*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s12 = slat.translate([-2 * ft, -11*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s13 = slat.translate([-2 * ft, -12*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s14 = slat.translate([-2 * ft, -13*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s15 = slat.translate([-2 * ft, -14*sspace + ft / 2, height + X4 * 2 + 2.5*inch])
// s16 = slat.translate([-2 * ft, -15*sspace + ft / 2, height + X4 * 2 + 2.5*inch])

slats = union(s1, s2, s3, s4, s5, s6)


structA = union(
  pillars,
  structs,
  tops,
  studs,
  slats
)

// Walkway
support = cube({
  size: [X4, X4, height - 1*ft]
})
supspace = 6 * ft
f = -depth - 1*ft
sa = support.translate([width - X4, f, 0])
sb = support.translate([width - X4, f - supspace, 0])
sc = support.translate([width - X4, f - 2*supspace, 0])
sd = support.translate([width - X4, f - 3*supspace, 0])
se = support.translate([width - X4, f - 4*supspace, 0])
sf = support.translate([width - X4, f - 5*supspace, 0])
sg = support.translate([width - X4, f - 6*supspace, 0])

top = cube({
  size: [X4, -36*ft - X4, X4],
}).translate([width - X4, f + X4, height - ft])
sbslat = cube({size: [6 *ft, X2, X6]})
sbslat = rotate([0, 10, 0], sbslat)
sblaspace = 1.5 * ft
w = width - 6 *ft +ft
sla = sbslat.translate([w, f, height+ X2])
slb = sbslat.translate([w, f-sblaspace, height+ X2])
slc = sbslat.translate([w, f-2*sblaspace, height+ X2])
sld = sbslat.translate([w, f-3*sblaspace, height+ X2])
sle = sbslat.translate([w, f-4*sblaspace, height+ X2])
slf = sbslat.translate([w, f-5*sblaspace, height+ X2])
slg = sbslat.translate([w, f-6*sblaspace, height+ X2])
slh = sbslat.translate([w, f-7*sblaspace, height+ X2])
sli = sbslat.translate([w, f-8*sblaspace, height+ X2])
slj = sbslat.translate([w, f-9*sblaspace, height+ X2])

structB = union(
  sa, sb, sc, sd, se, sf, sg,
  top,
  sla, slb, slc, sld, sle, slf, slg, slh, sli, slj
)

scpillar = cube({
  size: [X4, X6, 12 * ft],
})
p1 = scpillar.translate([width - 7 *ft, -depth - 3*ft, 0])
structC = union(
  p1
)

function main() {
  return union(
    structA,
    structB,
    structC
  ).scale(0.01)
}

