let dec = document.getElementById("dec");
let res = document.getElementById("res");
let inc = document.getElementById("inc");
var num = Number(document.getElementById("counterVal").innerHTML);

inc.addEventListener("click", function () {
  num = num + 1;
  document.getElementById("counterVal").innerHTML = num;
});

res.addEventListener("click", function () {
  num = 0;
  document.getElementById("counterVal").innerHTML = num;
});

dec.addEventListener("click", function () {
  num = num - 1;
  document.getElementById("counterVal").innerHTML = num;
});
