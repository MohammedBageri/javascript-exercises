const findTheOldest = function (people) {
  let oldest = {
    name: "test",
    yearOfBirth: 1,
    yearOfDeath: 1,
  };
  for (let i = 0; i < people.length; i++) {
    let birth = people[i].yearOfBirth;
    let deathOrNow = people[i].yearOfDeath
      ? people[i].yearOfDeath
      : new Date().getFullYear();
    console.log(birth);
    console.log(deathOrNow);
    if (
      deathOrNow - birth >
      (oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear()) -
        oldest.yearOfBirth
    ) {
      oldest = people[i];
    }
  }

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
