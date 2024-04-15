function reverseStr(str: string): string {
  if (!str || str.length < 2) {
    return "not a valid input";
  }

  const strArray = str.split("");
  const newArray: string[] = [];

  for (let i = strArray.length - 1; (i = 0); i--) {
    newArray.push(strArray[i]);
  }

  return newArray.join("");
}

console.log(reverseStr(""));
console.log(reverseStr("hello"));
