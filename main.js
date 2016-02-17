console.log(items)
var total = 0;
items.forEach(function (object) {
  total += object.price;
})

var avg = total / items.length;


document.getElementById("answer1").innerHTML=avg;

// *****Number 2

var costFilter = items.filter(function (el) {
  return el.price >= 14 && el.price <= 18;
});

var costArr = costFilter.map(function (el) {
  return "\n" + el.title;
})

document.getElementById("answer2").innerHTML = costArr;


// ******* Number 3

var GBPItem = items.filter( function(el) {
return el.currency_code === "GBP";
})

var GBPTitle = GBPItem.map( function (el) {
  return el.title + ",  $" +  el.price;
})

document.getElementById("answer3").innerHTML = GBPTitle;

// ****** Number 4'


var mat = items.filter( function (el) {
    return el.materials.indexOf("wood") !== -1;
})

var wood = mat.map( function (el) {
  return "\n" + el.title ;
})

document.getElementById("answer4").innerHTML = wood;

// ******** Number 5
var matList = items.filter (function (el) {
  return el.materials.length >= 8;
})

var displayList = matList.map (function (el) {
  return {
    title: el.title,
    materials: el.materials.length,
    list: el.materials
  }
})

var listString = ""
displayList.forEach( function (el) {
  listString += "\n" + el.title + "\n" + el.materials + "\n" + el.list +"\n";
})

document.getElementById("answer5").innerHTML = listString;


// *************** Number  6
var manufac = items.filter(function (el) {
  return el.who_made === "i_did"
})

var mapMan = manufac.map(function (el) {
  return "\n" + el.title;
})

document.getElementById("answer6").innerHTML = mapMan;
