for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}




let dollar = 27;
for (let i = 10; i <= 100; i += 10) {
  console.log(dollar * i);
}





const n = prompt("Enter any integer value.");

for (let i = 1; i <= Math.sqrt(n); i++) {
  if (Math.sqrt(n) <= 100) {
    console.log(i);
  } else {
    alert("Number is bigger than 100");
  }
  break;
}




const integer = prompt(
  `Please enter your integer number (must be bigger then 1)`
);

for (let i = 2; i < integer; i++) {
  if (integer % i == 0) {
    alert("Not an integer");
  } else {
    alert("Integer");
  }
  break;
}





let number = +prompt("Enter your number");

while (number > 1 && number % 3 === 0) {
  number /= 3;
}
if (number === 1) {
  alert("YES");
} else {
  alert("NO");
}
