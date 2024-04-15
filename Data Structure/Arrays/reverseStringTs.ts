function reverseStr(str: string): string {
  const strArray = str.split("");
  const newArray: string[] = [];

  for (let i = strArray.length - 1; i >= 0; i--) {
    newArray.push(strArray[i]);
  }

  return newArray.join("");
}

console.log(reverseStr("hello"));
