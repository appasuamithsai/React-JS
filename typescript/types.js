//primitives in JS 
var myBool = false;
console.log(myBool);
var window1 = "closed";
console.log(window1);
var bottle = "ice";
console.log(bottle);
var myWOrds = "life is a journey";
getLength(myWOrds);
getLength(["hello", "worlded"]);
function getLength(obj) {
    if (typeof obj === "string") {
        console.log(obj + " " + obj.length);
    }
    else {
        obj.map(function (e) { return console.log(e + " " + e.length); });
    }
}
console.log(typeof getLength);
console.log(Array.isArray(["hel"]));
function printPoints(p) {
    console.log(" { x- " + p.x + " , y- " + p.y + "}");
}
var p = { x: 10, y: 10 };
printPoints(p);
var rect = { x: 100, y: 10, z: 190 };
printPoints(rect);
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var vp = new VirtualPoint(100, 200);
printPoints(vp);
