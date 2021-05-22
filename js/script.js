let switch_box = document.querySelector('.switch_box');
let switch_t = document.querySelector('.switch');
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let span = document.getElementsByTagName('span');
let screen1 = document.querySelector('.screen');
let continer = document.querySelector('.continer');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');
let nums = document.getElementsByClassName('nums');


switch_box.onclick = function () {

  if (switch_t.style.left == "0px") {

    switch_t.style.left = "30px";

    switch_box.style.backgroundColor = "#111";

    moon.style.display = "none";

    sun.style.display = "block";
  } else {
    switch_t.style.left = "0px";

    switch_box.style.backgroundColor = "#1488CC";

    sun.style.display = "none";

    moon.style.display = "block";
  }
}
switch_box.addEventListener('click', function () {

  if (switch_t.style.left == "30px") {

    continer.style.backgroundColor = "#d1d8e0";

    sun_num_color();
    var val = equal_function();
    value_control(val, "#eb3b5a");
  } else {
    continer.style.backgroundColor = "#111";

    moon_num_color();
    var val = equal_function();
    value_control(val, "#fff");
  }
});

for (var i = 0; i < span.length; i++) {
  span[i].addEventListener('click', function () {
    if (screen1.value == "0") {
      screen1.value = " ";
    }
    screen1.value += this.textContent;
  });
}


equal.addEventListener('click', equal_function);

function equal_function() {
  if (screen1.value == "0") {
    screen1.value = "0";
  } else {
    var result = screen1.value = eval(screen1.value);
  }
  return result;
}

clear.onclick = function () {
  screen1.value = "0";
}

function sun_num_color() {
  for (var i = 0; i < nums.length; i++) {
    nums[i].style.color = "#111";
  }
}

function moon_num_color() {
  for (var i = 0; i < nums.length; i++) {
    nums[i].style.color = "#fff";
  }
}

function value_control(par, color) {
  if (screen1.value == par) {
    screen1.style.color = color;
  }
}