//lab15.1
const country = "Việt Nam";
const continent = "Châu Á";
let population = 98.2;
console.log("Tên quốc gia:", country);
console.log("Châu lục:", continent);
console.log("Dân số (triệu dân):", population);
let island = true;
let language = "Vietnam";
console.log(typeof island);
console.log(typeof ipopulation);
console.log(typeof country);
console.log(typeof language);
console.log("Chia cat:", population / 2);
population++;
console.log(population);
console.log(
  "dan so nuoc toi la:",
  population,
  " va lon hon dan so phan lan la:",
  6
);
console.log(
  "dan so nuoc toi la:",
  population,
  " va lon hon dan so trung binh cua 1 quoc gia la:",
  33
);
let description = `${country} and its ${population}  milion people speak ${language}`;
console.log(description);
if (population > 33) console.log(`${country}'s population is above average`);
else
  console.log(
    `${country}'s population is ${33 - population} milion below average`
  );
