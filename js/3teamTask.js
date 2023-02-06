const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortStudentsByGroups(candidates) {
  candidates.sort();
  //   console.log(candidates);
  const finalTeam = [];
  const arr = [];
  let counter = 0;

  for (let i = 0; i < 9; i++) {
    if (counter != 3) {
      arr.push(candidates[i]);
      counter++;
    } else {
      finalTeam.push(arr);
      counter = 0;
      arr = [];
    }
  }
  console.log(finalTeam);
  return finalTeam;
}
sortStudentsByGroups(students);
