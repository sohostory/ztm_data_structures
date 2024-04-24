function reversedString(str: string): string {
  const arrayStr: string[] = str.split("");
  let reversedArray: string[] = [];

  function addToArray(array: any[]) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

console.log(reversedString("yoyo master"));

function reverseStringRecursive(str: string): string {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substring(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive("yoyo master"));
