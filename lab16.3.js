const country = prompt("Where are you from?");
const language = prompt("What is language?");
const population = prompt("How many population in the country?");
if (language === "english" && population < 50)
  console.log(`You should live in ${country}`);
else console.log(`${country} does not meet your criteria :(`);
