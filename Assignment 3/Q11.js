// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]

// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.
const input = {
  student1: {
    subject1: 44, 
    subject2: 56, 
    subject3: 87, 
    subject4: 97, 
    subject5: 37
  },
  student2: {
    subject1: 44, 
    subject2: 56, 
    subject3: 87, 
    subject4: 97, 
    subject5: 37
  },
  student3: {
    subject1: 44, 
    subject2: 56, 
    subject3: 87, 
    subject4: 97, 
    subject5: 37
  }
};

const studentAverage = Object.keys(input).map(student => {
  const marks = Object.values(input[student]);
  const avg = marks.reduce((a, b) => a + b) / marks.length;
  return { student, average: avg }; 
});

console.log(studentAverage);