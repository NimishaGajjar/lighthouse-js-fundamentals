const ageCalculator = function(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return name + ' is ' + age + ' years old.';
};
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));