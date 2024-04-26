const people = [
  { lastName: "Smith", firstName: "John" },
  { lastName: "Doe", firstName: "Alice" },
  { lastName: "Smith", firstName: "Bob" },
  { lastName: "Johnson", firstName: "Carol" },
  { lastName: "Doe", firstName: "Eve" },
];

function stableSort(arr) {
  return arr.sort((a, b) => {
    // First, compare by last name
    const lastNameComparison = a.lastName.localeCompare(b.lastName);

    // If last names are equal, compare by first name
    if (lastNameComparison === 0) {
      return a.firstName.localeCompare(b.firstName);
    }

    return lastNameComparison;
  });
}

const stableResult = stableSort(people);
console.log(stableResult);

function unstableSort(arr) {
  return arr.sort((a, b) => {
    // First, compare by last name only
    return a.lastName.localeCompare(b.lastName);
  });
}

const unstableResult = unstableSort(people);
console.log(unstableResult);
