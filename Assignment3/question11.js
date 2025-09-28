
// Q.11) Write code to find average as mentioned above. Use array and object methods.
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

const output = Object.keys(input).reduce((acc, student) => {
  const scores = Object.values(input[student]); 
  const sum = scores.reduce((a, b) => a + b, 0); 
  const avg = Math.floor(sum / scores.length); 
  acc[student] = { average: avg };
  return acc;
}, {});

console.log(output);
