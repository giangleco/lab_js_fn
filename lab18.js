const myCountry = {
  country: "Viet Nam",
  capital: "Ha Noi",
  language: "Tieng viet",
  population: 92.5,
  neighbours: "Thai Lan",
  describe:
    "Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki",
  checklsand: true,
};

console.log(
  `${myCountry["country"]} has ${myCountry["population"]} milion finish-speaking people, 3 ${myCountry["neighbours"]} countries and a capital callde ${myCountry["capital"]}`
);
const tang = myCountry.population + 2;
console.log(tang);
const giam = myCountry["population"] - 2;
console.log(giam);
