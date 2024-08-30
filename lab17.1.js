function describeCountry(country, population, capitalCity) {
  const trave = `${country} has ${population} milion people and its capital city is Helsinki`;
  return trave;
}
const country1 = describeCountry("Việt Nam", 98, "Hà Nội");
const country2 = describeCountry("Pháp", 65, "Paris");
const country3 = describeCountry("Nhật Bản", 126, "Tokyo");
console.log(country1);
console.log(country2);
console.log(country3);
