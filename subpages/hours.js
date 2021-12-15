// get real time
var time = new Date();
//var hrs = time.getHours();
var hrs = 23;

// set array for hours in text format
var hrsArray = new Array("Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty","Twenty-One","Twenty-Two","Twenty-Three")

var hrsMinusTwo = hrs - 2
var hrsMinusOne = hrs - 1
var hrsPlusOne = hrs + 1
var hrsPlusTwo = hrs + 2

if(hrsMinusTwo < 0) {
    hrsMinusTwo = hrs + 22
};

//console.log(hrsMinusOne)

if(hrsMinusOne < 0) {
    hrsMinusOne = hrs + 23
};

if(hrsPlusOne > 23) {
    hrsPlusOne = hrs - 23
};

if(hrsPlusTwo > 23) {
    hrsPlusTwo = hrs - 22
};




document.getElementById("1").innerHTML = hrsArray[hrsMinusTwo];
document.getElementById("2").innerHTML = hrsArray[hrsMinusOne];
document.getElementById("3").innerHTML = hrsArray[hrs];
document.getElementById("4").innerHTML = hrsArray[hrsPlusOne];
document.getElementById("5").innerHTML = hrsArray[hrsPlusTwo];

