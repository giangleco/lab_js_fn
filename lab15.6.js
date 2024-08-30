const mark11 = 78;
const mark12 = 1.69;
const mark21 = 95;
const mark22 = 1.88;
const john11 = 92;
const john12 = 1.95;
const john21 = 85;
const john22 = 1.76;
let markHigherBMI = mark11 / (mark12 * mark12);
let johnHigherBMI = john11 / (john12 * john12);
if (markHigherBMI > johnHigherBMI)
  console.log("Mark's BMI is higher than john's!");
else console.log("john's BMI is higher than Mark's!");

console.log(
  `Mark's BMI (${markHigherBMI}) is higher than john's (${johnHigherBMI})!`
);
