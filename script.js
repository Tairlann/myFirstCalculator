var x = document.getElementById("sc");

function inp(value) {
  if (x.value === "0") {
    x.value = "" + value;
  } else {
    x.value += value;
  }
}

function del() {
  x.value = "0";
}
function dec() {
  if (x.value == "") {
    x.value += "0.";
  }
  x.value += ".";
}

function zer() {
  if (x.value === "0") {
    return;
  } else {
    x.value += "0";
  }
}
function operate(value) {
  // x.value += value;
  if (x.value.includes("+")) {
    return;
  } else if (x.value.includes("-")) {
    return;
  } else if (x.value.includes("/")) {
    return;
  } else if (x.value.includes("*")) {
    return;
  } else {
    x.value += value;
  }
}

function isEqual() {
  x.value = eval(x.value);
}
