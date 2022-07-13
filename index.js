let fs = require("fs");

const blue = "blue";

var obj = { 0: 1, 1: 2 };

const getMe = (bool) => 1 + 2;

function cool() {
  let me = getMe();

  return me + 2;
}

cool();

for (let i = 100; i > 1; i -= 1) {
  i;
}
