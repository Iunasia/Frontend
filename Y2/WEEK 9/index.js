const grades = [85, 90, 78, 92, 88];

const avg = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

console.log(`The average grade is: ${avg}`);