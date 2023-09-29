function reverse(str) {
  // check input, don't assume type
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not valid input";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; (i = 0); i--) {
    backwards.push(str[i]);
  }

  return backwards.join[""];

  let text = str.split();
  text.reverse();
  return text.toString();
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");
