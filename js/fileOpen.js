
function getElementType(className) {
    return className.includes("building") ? "building" :
        className.includes("resources") ? "resources" :
            className.includes("misc") ? "misc" : "fog";
};

function createNew() {
    var data = JSON.parse('{"player":{"x":4344,"y":215},"factions":[],"building":[],"resources":[],"misc":[],"fog":[{"class":"","img":"fog","name":"a1","elementType":"fogOfWar","top":"211","left":"145","faction":"None"},{"class":"","img":"fog","name":"a2","elementType":"fogOfWar","top":"211","left":"373","faction":"None"},{"class":"","img":"fog","name":"a3","elementType":"fogOfWar","top":"211","left":"602","faction":"None"},{"class":"","img":"fog","name":"a4","elementType":"fogOfWar","top":"211","left":"831","faction":"None"},{"class":"","img":"fog","name":"a5","elementType":"fogOfWar","top":"211","left":"1059","faction":"None"},{"class":"","img":"fog","name":"a6","elementType":"fogOfWar","top":"211","left":"1288","faction":"None"},{"class":"","img":"fog","name":"a7","elementType":"fogOfWar","top":"211","left":"1516","faction":"None"},{"class":"","img":"fog","name":"a8","elementType":"fogOfWar","top":"211","left":"1745","faction":"None"},{"class":"","img":"fog","name":"a9","elementType":"fogOfWar","top":"211","left":"1974","faction":"None"},{"class":"","img":"fog","name":"a10","elementType":"fogOfWar","top":"211","left":"2203","faction":"None"},{"class":"","img":"fog","name":"a11","elementType":"fogOfWar","top":"211","left":"2432","faction":"None"},{"class":"","img":"fog","name":"a12","elementType":"fogOfWar","top":"211","left":"2660","faction":"None"},{"class":"","img":"fog","name":"a13","elementType":"fogOfWar","top":"211","left":"2888","faction":"None"},{"class":"","img":"fog","name":"a14","elementType":"fogOfWar","top":"211","left":"3117","faction":"None"},{"class":"","img":"fog","name":"a15","elementType":"fogOfWar","top":"211","left":"3346","faction":"None"},{"class":"","img":"fog","name":"a16","elementType":"fogOfWar","top":"211","left":"3575","faction":"None"},{"class":"","img":"fog","name":"a17","elementType":"fogOfWar","top":"211","left":"3803","faction":"None"},{"class":"","img":"fog","name":"a18","elementType":"fogOfWar","top":"211","left":"4032","faction":"None"},{"class":"","img":"fog","name":"a19","elementType":"fogOfWar","top":"211","left":"4261","faction":"None"},{"class":"","img":"fog","name":"a20","elementType":"fogOfWar","top":"211","left":"4490","faction":"None"},{"class":"","img":"fog","name":"a21","elementType":"fogOfWar","top":"211","left":"4718","faction":"None"},{"class":"","img":"fog","name":"a22","elementType":"fogOfWar","top":"211","left":"4947","faction":"None"},{"class":"","img":"fog","name":"a23","elementType":"fogOfWar","top":"211","left":"5176","faction":"None"},{"class":"","img":"fog","name":"a24","elementType":"fogOfWar","top":"211","left":"5404","faction":"None"},{"class":"","img":"fog","name":"a25","elementType":"fogOfWar","top":"211","left":"5633","faction":"None"},{"class":"","img":"fog","name":"a26","elementType":"fogOfWar","top":"211","left":"5862","faction":"None"},{"class":"","img":"fog","name":"a27","elementType":"fogOfWar","top":"211","left":"6090","faction":"None"},{"class":"","img":"fog","name":"b1","elementType":"fogOfWar","top":"408","left":"30","faction":"None"},{"class":"","img":"fog","name":"b2","elementType":"fogOfWar","top":"408","left":"258","faction":"None"},{"class":"","img":"fog","name":"b3","elementType":"fogOfWar","top":"408","left":"487","faction":"None"},{"class":"","img":"fog","name":"b4","elementType":"fogOfWar","top":"408","left":"716","faction":"None"},{"class":"","img":"fog","name":"b5","elementType":"fogOfWar","top":"408","left":"944","faction":"None"},{"class":"","img":"fog","name":"b6","elementType":"fogOfWar","top":"408","left":"1173","faction":"None"},{"class":"","img":"fog","name":"b7","elementType":"fogOfWar","top":"408","left":"1402","faction":"None"},{"class":"","img":"fog","name":"b8","elementType":"fogOfWar","top":"408","left":"1631","faction":"None"},{"class":"","img":"fog","name":"b9","elementType":"fogOfWar","top":"408","left":"1859","faction":"None"},{"class":"","img":"fog","name":"b10","elementType":"fogOfWar","top":"408","left":"2088","faction":"None"},{"class":"","img":"fog","name":"b11","elementType":"fogOfWar","top":"408","left":"2318","faction":"None"},{"class":"","img":"fog","name":"b12","elementType":"fogOfWar","top":"408","left":"2546","faction":"None"},{"class":"","img":"fog","name":"b13","elementType":"fogOfWar","top":"408","left":"2774","faction":"None"},{"class":"","img":"fog","name":"b14","elementType":"fogOfWar","top":"408","left":"3002","faction":"None"},{"class":"","img":"fog","name":"b15","elementType":"fogOfWar","top":"408","left":"3231","faction":"None"},{"class":"","img":"fog","name":"b16","elementType":"fogOfWar","top":"408","left":"3460","faction":"None"},{"class":"","img":"fog","name":"b17","elementType":"fogOfWar","top":"408","left":"3688","faction":"None"},{"class":"","img":"fog","name":"b18","elementType":"fogOfWar","top":"408","left":"3918","faction":"None"},{"class":"","img":"fog","name":"b19","elementType":"fogOfWar","top":"408","left":"4146","faction":"None"},{"class":"","img":"fog","name":"b20","elementType":"fogOfWar","top":"408","left":"4376","faction":"None"},{"class":"","img":"fog","name":"b21","elementType":"fogOfWar","top":"408","left":"4603","faction":"None"},{"class":"","img":"fog","name":"b22","elementType":"fogOfWar","top":"408","left":"4833","faction":"None"},{"class":"","img":"fog","name":"b23","elementType":"fogOfWar","top":"408","left":"5060","faction":"None"},{"class":"","img":"fog","name":"b24","elementType":"fogOfWar","top":"408","left":"5289","faction":"None"},{"class":"","img":"fog","name":"b25","elementType":"fogOfWar","top":"408","left":"5518","faction":"None"},{"class":"","img":"fog","name":"b26","elementType":"fogOfWar","top":"408","left":"5748","faction":"None"},{"class":"","img":"fog","name":"b27","elementType":"fogOfWar","top":"408","left":"5976","faction":"None"},{"class":"","img":"fog","name":"b28","elementType":"fogOfWar","top":"408","left":"6204","faction":"None"},{"class":"","img":"fog","name":"c1","elementType":"fogOfWar","top":"606","left":"144","faction":"None"},{"class":"","img":"fog","name":"c2","elementType":"fogOfWar","top":"606","left":"373","faction":"None"},{"class":"","img":"fog","name":"c3","elementType":"fogOfWar","top":"606","left":"602","faction":"None"},{"class":"","img":"fog","name":"c4","elementType":"fogOfWar","top":"606","left":"830","faction":"None"},{"class":"","img":"fog","name":"c5","elementType":"fogOfWar","top":"606","left":"1059","faction":"None"},{"class":"","img":"fog","name":"c6","elementType":"fogOfWar","top":"606","left":"1288","faction":"None"},{"class":"","img":"fog","name":"c7","elementType":"fogOfWar","top":"606","left":"1516","faction":"None"},{"class":"","img":"fog","name":"c8","elementType":"fogOfWar","top":"606","left":"1745","faction":"None"},{"class":"","img":"fog","name":"c9","elementType":"fogOfWar","top":"606","left":"1974","faction":"None"},{"class":"","img":"fog","name":"c10","elementType":"fogOfWar","top":"606","left":"2203","faction":"None"},{"class":"","img":"fog","name":"c11","elementType":"fogOfWar","top":"606","left":"2432","faction":"None"},{"class":"","img":"fog","name":"c12","elementType":"fogOfWar","top":"606","left":"2660","faction":"None"},{"class":"","img":"fog","name":"c13","elementType":"fogOfWar","top":"606","left":"2888","faction":"None"},{"class":"","img":"fog","name":"c14","elementType":"fogOfWar","top":"606","left":"3117","faction":"None"},{"class":"","img":"fog","name":"c15","elementType":"fogOfWar","top":"606","left":"3346","faction":"None"},{"class":"","img":"fog","name":"c16","elementType":"fogOfWar","top":"606","left":"3574","faction":"None"},{"class":"","img":"fog","name":"c17","elementType":"fogOfWar","top":"606","left":"3803","faction":"None"},{"class":"","img":"fog","name":"c18","elementType":"fogOfWar","top":"606","left":"4032","faction":"None"},{"class":"","img":"fog","name":"c19","elementType":"fogOfWar","top":"606","left":"4261","faction":"None"},{"class":"","img":"fog","name":"c20","elementType":"fogOfWar","top":"606","left":"4489","faction":"None"},{"class":"","img":"fog","name":"c21","elementType":"fogOfWar","top":"606","left":"4718","faction":"None"},{"class":"","img":"fog","name":"c22","elementType":"fogOfWar","top":"606","left":"4947","faction":"None"},{"class":"","img":"fog","name":"c23","elementType":"fogOfWar","top":"606","left":"5175","faction":"None"},{"class":"","img":"fog","name":"c24","elementType":"fogOfWar","top":"606","left":"5404","faction":"None"},{"class":"","img":"fog","name":"c25","elementType":"fogOfWar","top":"606","left":"5633","faction":"None"},{"class":"","img":"fog","name":"c26","elementType":"fogOfWar","top":"606","left":"5861","faction":"None"},{"class":"","img":"fog","name":"c27","elementType":"fogOfWar","top":"606","left":"6090","faction":"None"},{"class":"","img":"fog","name":"d1","elementType":"fogOfWar","top":"804","left":"30","faction":"None"},{"class":"","img":"fog","name":"d2","elementType":"fogOfWar","top":"804","left":"259","faction":"None"},{"class":"","img":"fog","name":"d3","elementType":"fogOfWar","top":"804","left":"488","faction":"None"},{"class":"","img":"fog","name":"d4","elementType":"fogOfWar","top":"804","left":"716","faction":"None"},{"class":"","img":"fog","name":"d5","elementType":"fogOfWar","top":"804","left":"945","faction":"None"},{"class":"","img":"fog","name":"d6","elementType":"fogOfWar","top":"804","left":"1174","faction":"None"},{"class":"","img":"fog","name":"d7","elementType":"fogOfWar","top":"804","left":"1402","faction":"None"},{"class":"","img":"fog","name":"d8","elementType":"fogOfWar","top":"804","left":"1631","faction":"None"},{"class":"","img":"fog","name":"d9","elementType":"fogOfWar","top":"804","left":"1860","faction":"None"},{"class":"","img":"fog","name":"d10","elementType":"fogOfWar","top":"804","left":"2088","faction":"None"},{"class":"","img":"fog","name":"d11","elementType":"fogOfWar","top":"804","left":"2317","faction":"None"},{"class":"","img":"fog","name":"d12","elementType":"fogOfWar","top":"804","left":"2546","faction":"None"},{"class":"","img":"fog","name":"d13","elementType":"fogOfWar","top":"804","left":"2775","faction":"None"},{"class":"","img":"fog","name":"d14","elementType":"fogOfWar","top":"804","left":"3003","faction":"None"},{"class":"","img":"fog","name":"d15","elementType":"fogOfWar","top":"804","left":"3232","faction":"None"},{"class":"","img":"fog","name":"d16","elementType":"fogOfWar","top":"804","left":"3460","faction":"None"},{"class":"","img":"fog","name":"d17","elementType":"fogOfWar","top":"804","left":"3689","faction":"None"},{"class":"","img":"fog","name":"d18","elementType":"fogOfWar","top":"804","left":"3918","faction":"None"},{"class":"","img":"fog","name":"d19","elementType":"fogOfWar","top":"804","left":"4147","faction":"None"},{"class":"","img":"fog","name":"d20","elementType":"fogOfWar","top":"804","left":"4375","faction":"None"},{"class":"","img":"fog","name":"d21","elementType":"fogOfWar","top":"804","left":"4604","faction":"None"},{"class":"","img":"fog","name":"d22","elementType":"fogOfWar","top":"804","left":"4833","faction":"None"},{"class":"","img":"fog","name":"d23","elementType":"fogOfWar","top":"804","left":"5061","faction":"None"},{"class":"","img":"fog","name":"d24","elementType":"fogOfWar","top":"804","left":"5290","faction":"None"},{"class":"","img":"fog","name":"d25","elementType":"fogOfWar","top":"804","left":"5519","faction":"None"},{"class":"","img":"fog","name":"d26","elementType":"fogOfWar","top":"804","left":"5747","faction":"None"},{"class":"","img":"fog","name":"d27","elementType":"fogOfWar","top":"804","left":"5976","faction":"None"},{"class":"","img":"fog","name":"d28","elementType":"fogOfWar","top":"804","left":"6204","faction":"None"},{"class":"","img":"fog","name":"e1","elementType":"fogOfWar","top":"1002","left":"145","faction":"None"},{"class":"","img":"fog","name":"e2","elementType":"fogOfWar","top":"1002","left":"373","faction":"None"},{"class":"","img":"fog","name":"e3","elementType":"fogOfWar","top":"1002","left":"602","faction":"None"},{"class":"","img":"fog","name":"e4","elementType":"fogOfWar","top":"1002","left":"831","faction":"None"},{"class":"","img":"fog","name":"e5","elementType":"fogOfWar","top":"1002","left":"1059","faction":"None"},{"class":"","img":"fog","name":"e6","elementType":"fogOfWar","top":"1002","left":"1288","faction":"None"},{"class":"","img":"fog","name":"e7","elementType":"fogOfWar","top":"1002","left":"1517","faction":"None"},{"class":"","img":"fog","name":"e8","elementType":"fogOfWar","top":"1002","left":"1745","faction":"None"},{"class":"","img":"fog","name":"e9","elementType":"fogOfWar","top":"1002","left":"1974","faction":"None"},{"class":"","img":"fog","name":"e10","elementType":"fogOfWar","top":"1002","left":"2203","faction":"None"},{"class":"","img":"fog","name":"e11","elementType":"fogOfWar","top":"1002","left":"2432","faction":"None"},{"class":"","img":"fog","name":"e12","elementType":"fogOfWar","top":"1002","left":"2661","faction":"None"},{"class":"","img":"fog","name":"e13","elementType":"fogOfWar","top":"1002","left":"2889","faction":"None"},{"class":"","img":"fog","name":"e14","elementType":"fogOfWar","top":"1002","left":"3117","faction":"None"},{"class":"","img":"fog","name":"e15","elementType":"fogOfWar","top":"1002","left":"3346","faction":"None"},{"class":"","img":"fog","name":"e16","elementType":"fogOfWar","top":"1002","left":"3575","faction":"None"},{"class":"","img":"fog","name":"e17","elementType":"fogOfWar","top":"1002","left":"3803","faction":"None"},{"class":"","img":"fog","name":"e18","elementType":"fogOfWar","top":"1002","left":"4032","faction":"None"},{"class":"","img":"fog","name":"e19","elementType":"fogOfWar","top":"1002","left":"4261","faction":"None"},{"class":"","img":"fog","name":"e20","elementType":"fogOfWar","top":"1002","left":"4490","faction":"None"},{"class":"","img":"fog","name":"e21","elementType":"fogOfWar","top":"1002","left":"4718","faction":"None"},{"class":"","img":"fog","name":"e22","elementType":"fogOfWar","top":"1002","left":"4947","faction":"None"},{"class":"","img":"fog","name":"e23","elementType":"fogOfWar","top":"1002","left":"5175","faction":"None"},{"class":"","img":"fog","name":"e24","elementType":"fogOfWar","top":"1002","left":"5404","faction":"None"},{"class":"","img":"fog","name":"e25","elementType":"fogOfWar","top":"1002","left":"5633","faction":"None"},{"class":"","img":"fog","name":"e26","elementType":"fogOfWar","top":"1002","left":"5862","faction":"None"},{"class":"","img":"fog","name":"e27","elementType":"fogOfWar","top":"1002","left":"6090","faction":"None"},{"class":"","img":"fog","name":"f1","elementType":"fogOfWar","top":"1199","left":"30","faction":"None"},{"class":"","img":"fog","name":"f2","elementType":"fogOfWar","top":"1199","left":"259","faction":"None"},{"class":"","img":"fog","name":"f3","elementType":"fogOfWar","top":"1199","left":"488","faction":"None"},{"class":"","img":"fog","name":"f4","elementType":"fogOfWar","top":"1199","left":"716","faction":"None"},{"class":"","img":"fog","name":"f5","elementType":"fogOfWar","top":"1199","left":"945","faction":"None"},{"class":"","img":"fog","name":"f6","elementType":"fogOfWar","top":"1199","left":"1174","faction":"None"},{"class":"","img":"fog","name":"f7","elementType":"fogOfWar","top":"1199","left":"1402","faction":"None"},{"class":"","img":"fog","name":"f8","elementType":"fogOfWar","top":"1199","left":"1631","faction":"None"},{"class":"","img":"fog","name":"f9","elementType":"fogOfWar","top":"1199","left":"1860","faction":"None"},{"class":"","img":"fog","name":"f10","elementType":"fogOfWar","top":"1199","left":"2088","faction":"None"},{"class":"","img":"fog","name":"f11","elementType":"fogOfWar","top":"1199","left":"2317","faction":"None"},{"class":"","img":"fog","name":"f12","elementType":"fogOfWar","top":"1199","left":"2546","faction":"None"},{"class":"","img":"fog","name":"f13","elementType":"fogOfWar","top":"1199","left":"2774","faction":"None"},{"class":"","img":"fog","name":"f14","elementType":"fogOfWar","top":"1199","left":"3003","faction":"None"},{"class":"","img":"fog","name":"f15","elementType":"fogOfWar","top":"1199","left":"3232","faction":"None"},{"class":"","img":"fog","name":"f16","elementType":"fogOfWar","top":"1199","left":"3460","faction":"None"},{"class":"","img":"fog","name":"f17","elementType":"fogOfWar","top":"1199","left":"3689","faction":"None"},{"class":"","img":"fog","name":"f18","elementType":"fogOfWar","top":"1199","left":"3918","faction":"None"},{"class":"","img":"fog","name":"f19","elementType":"fogOfWar","top":"1199","left":"4146","faction":"None"},{"class":"","img":"fog","name":"f20","elementType":"fogOfWar","top":"1199","left":"4375","faction":"None"},{"class":"","img":"fog","name":"f21","elementType":"fogOfWar","top":"1199","left":"4604","faction":"None"},{"class":"","img":"fog","name":"f22","elementType":"fogOfWar","top":"1199","left":"4832","faction":"None"},{"class":"","img":"fog","name":"f23","elementType":"fogOfWar","top":"1199","left":"5061","faction":"None"},{"class":"","img":"fog","name":"f24","elementType":"fogOfWar","top":"1199","left":"5290","faction":"None"},{"class":"","img":"fog","name":"f25","elementType":"fogOfWar","top":"1199","left":"5519","faction":"None"},{"class":"","img":"fog","name":"f26","elementType":"fogOfWar","top":"1199","left":"5747","faction":"None"},{"class":"","img":"fog","name":"f27","elementType":"fogOfWar","top":"1199","left":"5976","faction":"None"},{"class":"","img":"fog","name":"f28","elementType":"fogOfWar","top":"1199","left":"6204","faction":"None"},{"class":"","img":"fog","name":"g1","elementType":"fogOfWar","top":"1397","left":"145","faction":"None"},{"class":"","img":"fog","name":"g2","elementType":"fogOfWar","top":"1397","left":"373","faction":"None"},{"class":"","img":"fog","name":"g3","elementType":"fogOfWar","top":"1397","left":"602","faction":"None"},{"class":"","img":"fog","name":"g4","elementType":"fogOfWar","top":"1397","left":"831","faction":"None"},{"class":"","img":"fog","name":"g5","elementType":"fogOfWar","top":"1397","left":"1059","faction":"None"},{"class":"","img":"fog","name":"g6","elementType":"fogOfWar","top":"1397","left":"1288","faction":"None"},{"class":"","img":"fog","name":"g7","elementType":"fogOfWar","top":"1397","left":"1517","faction":"None"},{"class":"","img":"fog","name":"g8","elementType":"fogOfWar","top":"1397","left":"1745","faction":"None"},{"class":"","img":"fog","name":"g9","elementType":"fogOfWar","top":"1397","left":"1974","faction":"None"},{"class":"","img":"fog","name":"g10","elementType":"fogOfWar","top":"1397","left":"2203","faction":"None"},{"class":"","img":"fog","name":"g11","elementType":"fogOfWar","top":"1397","left":"2431","faction":"None"},{"class":"","img":"fog","name":"g12","elementType":"fogOfWar","top":"1397","left":"2660","faction":"None"},{"class":"","img":"fog","name":"g13","elementType":"fogOfWar","top":"1397","left":"2889","faction":"None"},{"class":"","img":"fog","name":"g14","elementType":"fogOfWar","top":"1397","left":"3118","faction":"None"},{"class":"","img":"fog","name":"g15","elementType":"fogOfWar","top":"1397","left":"3346","faction":"None"},{"class":"","img":"fog","name":"g16","elementType":"fogOfWar","top":"1397","left":"3575","faction":"None"},{"class":"","img":"fog","name":"g17","elementType":"fogOfWar","top":"1397","left":"3804","faction":"None"},{"class":"","img":"fog","name":"g18","elementType":"fogOfWar","top":"1397","left":"4033","faction":"None"},{"class":"","img":"fog","name":"g19","elementType":"fogOfWar","top":"1397","left":"4261","faction":"None"},{"class":"","img":"fog","name":"g20","elementType":"fogOfWar","top":"1397","left":"4490","faction":"None"},{"class":"","img":"fog","name":"g21","elementType":"fogOfWar","top":"1397","left":"4718","faction":"None"},{"class":"","img":"fog","name":"g22","elementType":"fogOfWar","top":"1397","left":"4947","faction":"None"},{"class":"","img":"fog","name":"g23","elementType":"fogOfWar","top":"1397","left":"5175","faction":"None"},{"class":"","img":"fog","name":"g24","elementType":"fogOfWar","top":"1397","left":"5404","faction":"None"},{"class":"","img":"fog","name":"g25","elementType":"fogOfWar","top":"1397","left":"5633","faction":"None"},{"class":"","img":"fog","name":"g26","elementType":"fogOfWar","top":"1397","left":"5862","faction":"None"},{"class":"","img":"fog","name":"g27","elementType":"fogOfWar","top":"1397","left":"6091","faction":"None"},{"class":"","img":"fog","name":"h1","elementType":"fogOfWar","top":"1594","left":"30","faction":"None"},{"class":"","img":"fog","name":"h2","elementType":"fogOfWar","top":"1594","left":"259","faction":"None"},{"class":"","img":"fog","name":"h3","elementType":"fogOfWar","top":"1594","left":"487","faction":"None"},{"class":"","img":"fog","name":"h4","elementType":"fogOfWar","top":"1594","left":"716","faction":"None"},{"class":"","img":"fog","name":"h5","elementType":"fogOfWar","top":"1594","left":"945","faction":"None"},{"class":"","img":"fog","name":"h6","elementType":"fogOfWar","top":"1594","left":"1174","faction":"None"},{"class":"","img":"fog","name":"h7","elementType":"fogOfWar","top":"1594","left":"1402","faction":"None"},{"class":"","img":"fog","name":"h8","elementType":"fogOfWar","top":"1594","left":"1631","faction":"None"},{"class":"","img":"fog","name":"h9","elementType":"fogOfWar","top":"1594","left":"1860","faction":"None"},{"class":"","img":"fog","name":"h10","elementType":"fogOfWar","top":"1594","left":"2088","faction":"None"},{"class":"","img":"fog","name":"h11","elementType":"fogOfWar","top":"1594","left":"2317","faction":"None"},{"class":"","img":"fog","name":"h12","elementType":"fogOfWar","top":"1594","left":"2546","faction":"None"},{"class":"","img":"fog","name":"h13","elementType":"fogOfWar","top":"1594","left":"2774","faction":"None"},{"class":"","img":"fog","name":"h14","elementType":"fogOfWar","top":"1594","left":"3003","faction":"None"},{"class":"","img":"fog","name":"h15","elementType":"fogOfWar","top":"1594","left":"3232","faction":"None"},{"class":"","img":"fog","name":"h16","elementType":"fogOfWar","top":"1594","left":"3460","faction":"None"},{"class":"","img":"fog","name":"h17","elementType":"fogOfWar","top":"1594","left":"3689","faction":"None"},{"class":"","img":"fog","name":"h18","elementType":"fogOfWar","top":"1594","left":"3918","faction":"None"},{"class":"","img":"fog","name":"h19","elementType":"fogOfWar","top":"1594","left":"4147","faction":"None"},{"class":"","img":"fog","name":"h20","elementType":"fogOfWar","top":"1594","left":"4375","faction":"None"},{"class":"","img":"fog","name":"h21","elementType":"fogOfWar","top":"1594","left":"4604","faction":"None"},{"class":"","img":"fog","name":"h22","elementType":"fogOfWar","top":"1594","left":"4833","faction":"None"},{"class":"","img":"fog","name":"h23","elementType":"fogOfWar","top":"1594","left":"5061","faction":"None"},{"class":"","img":"fog","name":"h24","elementType":"fogOfWar","top":"1594","left":"5290","faction":"None"},{"class":"","img":"fog","name":"h25","elementType":"fogOfWar","top":"1594","left":"5519","faction":"None"},{"class":"","img":"fog","name":"h26","elementType":"fogOfWar","top":"1594","left":"5747","faction":"None"},{"class":"","img":"fog","name":"h27","elementType":"fogOfWar","top":"1594","left":"5976","faction":"None"},{"class":"","img":"fog","name":"h28","elementType":"fogOfWar","top":"1594","left":"6205","faction":"None"},{"class":"","img":"fog","name":"i1","elementType":"fogOfWar","top":"1792","left":"145","faction":"None"},{"class":"","img":"fog","name":"i2","elementType":"fogOfWar","top":"1792","left":"373","faction":"None"},{"class":"","img":"fog","name":"i3","elementType":"fogOfWar","top":"1792","left":"602","faction":"None"},{"class":"","img":"fog","name":"i4","elementType":"fogOfWar","top":"1792","left":"831","faction":"None"},{"class":"","img":"fog","name":"i5","elementType":"fogOfWar","top":"1792","left":"1059","faction":"None"},{"class":"","img":"fog","name":"i6","elementType":"fogOfWar","top":"1792","left":"1288","faction":"None"},{"class":"","img":"fog","name":"i7","elementType":"fogOfWar","top":"1792","left":"1517","faction":"None"},{"class":"","img":"fog","name":"i8","elementType":"fogOfWar","top":"1792","left":"1745","faction":"None"},{"class":"","img":"fog","name":"i9","elementType":"fogOfWar","top":"1792","left":"1974","faction":"None"},{"class":"","img":"fog","name":"i10","elementType":"fogOfWar","top":"1792","left":"2203","faction":"None"},{"class":"","img":"fog","name":"i11","elementType":"fogOfWar","top":"1792","left":"2431","faction":"None"},{"class":"","img":"fog","name":"i12","elementType":"fogOfWar","top":"1792","left":"2660","faction":"None"},{"class":"","img":"fog","name":"i13","elementType":"fogOfWar","top":"1792","left":"2888","faction":"None"},{"class":"","img":"fog","name":"i14","elementType":"fogOfWar","top":"1792","left":"3117","faction":"None"},{"class":"","img":"fog","name":"i15","elementType":"fogOfWar","top":"1792","left":"3346","faction":"None"},{"class":"","img":"fog","name":"i16","elementType":"fogOfWar","top":"1792","left":"3575","faction":"None"},{"class":"","img":"fog","name":"i17","elementType":"fogOfWar","top":"1792","left":"3803","faction":"None"},{"class":"","img":"fog","name":"i18","elementType":"fogOfWar","top":"1792","left":"4032","faction":"None"},{"class":"","img":"fog","name":"i19","elementType":"fogOfWar","top":"1792","left":"4261","faction":"None"},{"class":"","img":"fog","name":"i20","elementType":"fogOfWar","top":"1792","left":"4489","faction":"None"},{"class":"","img":"fog","name":"i21","elementType":"fogOfWar","top":"1792","left":"4718","faction":"None"},{"class":"","img":"fog","name":"i22","elementType":"fogOfWar","top":"1792","left":"4947","faction":"None"},{"class":"","img":"fog","name":"i23","elementType":"fogOfWar","top":"1792","left":"5175","faction":"None"},{"class":"","img":"fog","name":"i24","elementType":"fogOfWar","top":"1792","left":"5404","faction":"None"},{"class":"","img":"fog","name":"i25","elementType":"fogOfWar","top":"1792","left":"5633","faction":"None"},{"class":"","img":"fog","name":"i26","elementType":"fogOfWar","top":"1792","left":"5862","faction":"None"},{"class":"","img":"fog","name":"i27","elementType":"fogOfWar","top":"1792","left":"6090","faction":"None"},{"class":"","img":"fog","name":"j1","elementType":"fogOfWar","top":"1989","left":"30","faction":"None"},{"class":"","img":"fog","name":"j2","elementType":"fogOfWar","top":"1989","left":"259","faction":"None"},{"class":"","img":"fog","name":"j3","elementType":"fogOfWar","top":"1989","left":"487","faction":"None"},{"class":"","img":"fog","name":"j4","elementType":"fogOfWar","top":"1989","left":"716","faction":"None"},{"class":"","img":"fog","name":"j5","elementType":"fogOfWar","top":"1989","left":"945","faction":"None"},{"class":"","img":"fog","name":"j6","elementType":"fogOfWar","top":"1989","left":"1174","faction":"None"},{"class":"","img":"fog","name":"j7","elementType":"fogOfWar","top":"1989","left":"1402","faction":"None"},{"class":"","img":"fog","name":"j8","elementType":"fogOfWar","top":"1989","left":"1631","faction":"None"},{"class":"","img":"fog","name":"j9","elementType":"fogOfWar","top":"1989","left":"1860","faction":"None"},{"class":"","img":"fog","name":"j10","elementType":"fogOfWar","top":"1989","left":"2088","faction":"None"},{"class":"","img":"fog","name":"j11","elementType":"fogOfWar","top":"1989","left":"2317","faction":"None"},{"class":"","img":"fog","name":"j12","elementType":"fogOfWar","top":"1989","left":"2546","faction":"None"},{"class":"","img":"fog","name":"j13","elementType":"fogOfWar","top":"1989","left":"2774","faction":"None"},{"class":"","img":"fog","name":"j14","elementType":"fogOfWar","top":"1989","left":"3003","faction":"None"},{"class":"","img":"fog","name":"j15","elementType":"fogOfWar","top":"1989","left":"3232","faction":"None"},{"class":"","img":"fog","name":"j16","elementType":"fogOfWar","top":"1989","left":"3460","faction":"None"},{"class":"","img":"fog","name":"j17","elementType":"fogOfWar","top":"1989","left":"3689","faction":"None"},{"class":"","img":"fog","name":"j18","elementType":"fogOfWar","top":"1989","left":"3918","faction":"None"},{"class":"","img":"fog","name":"j19","elementType":"fogOfWar","top":"1989","left":"4147","faction":"None"},{"class":"","img":"fog","name":"j20","elementType":"fogOfWar","top":"1989","left":"4375","faction":"None"},{"class":"","img":"fog","name":"j21","elementType":"fogOfWar","top":"1989","left":"4604","faction":"None"},{"class":"","img":"fog","name":"j22","elementType":"fogOfWar","top":"1989","left":"4833","faction":"None"},{"class":"","img":"fog","name":"j23","elementType":"fogOfWar","top":"1989","left":"5061","faction":"None"},{"class":"","img":"fog","name":"j24","elementType":"fogOfWar","top":"1989","left":"5290","faction":"None"},{"class":"","img":"fog","name":"j25","elementType":"fogOfWar","top":"1989","left":"5519","faction":"None"},{"class":"","img":"fog","name":"j26","elementType":"fogOfWar","top":"1989","left":"5747","faction":"None"},{"class":"","img":"fog","name":"j27","elementType":"fogOfWar","top":"1989","left":"5976","faction":"None"},{"class":"","img":"fog","name":"j28","elementType":"fogOfWar","top":"1989","left":"6205","faction":"None"}]}');
    createMapDecoration(data);
    displayColorPicker();
    addFaction();
};

function loadFile() {
    $("#openData").click();

    $("#openData").change(function (e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            var data = JSON.parse(e.target.result);
            createMapDecoration(data);
            centerviewOnPlayerToken();
            displayColorPicker();
        };
        reader.readAsText(file);
    });
};

function createMapDecoration(data) {
    cleanMap();

    addPlayerToMap(data.player);
    addFactions(data.factions);

    addElementToMap(data.fog, "fogOfWar");
    addElementToMap(data.building, "buildingSection");
    addElementToMap(data.resources, "resourcesSection");
    addElementToMap(data.misc, "miscSection");

    simplifyBorders();

    tooltip();
    menuDisplayer();

    isMapLoaded = true;
};

function centerviewOnPlayerToken() {
    var pos = getElementPos(".player");

    var heightSize = $(window)[0].innerHeight;
    var scrollV = pos.top - heightSize / 2;

    var widthSize = $(window)[0].innerWidth;
    var scrollH = pos.left - widthSize / 2;

    window.scrollTo(scrollH, scrollV);
};

function menuDisplayer() {
    $(".openOrCreateMap").hide();
    $(".editorBackground").hide();
    $(".wrapper").show();

    $(".editorBackground").click(function () {
        closeMenuDecoration();
        unselectElement();
    })
};

function addPlayerToMap(player) {
    $(".player")[0].style.left = player.x + "px";
    $(".player")[0].style.top = player.y + "px";
};


function addElementToMap(item, sectionName) {
    if (item) {
        $(".mapDecoration").append("<div class='" + sectionName + "'> </div>");
        var div = $("." + sectionName);

        for (var i = 0; i < item.length; i++) {
            var obj = item[i];

            var visited = obj.visited && obj.visited == true ? "visited" : "";
            var name = obj.name ? obj.name : "";
            var cssClass = obj.class ? obj.class : "";
            var title = obj.title ? obj.title.replace("'", "&#39;") : "";
            var faction = obj.faction ? obj.faction : "";

            var additionalClass = "";
            if (sectionName === "fogOfWar") {
                title = visited ? "Click to add" : "Click to remove";
                additionalClass = "fog";
            }
            else {
                additionalClass = "tooltip tap-target";
            }

            var img = createElement(idElement, obj.img, name, cssClass, visited, additionalClass, obj.top, obj.left, title, sectionName.replace("Section", ""), faction);
            div.append(img);

            idElement++;
        }
    }
};

