function percentageOfWorld1(population) {
  const worldPopulation = 8000; // Giả định dân số thế giới là 8 tỷ người
  return (population / worldPopulation) * 100;
}

// Hàm mô tả dân số quốc gia và so sánh với dân số thế giới
function describePopulation(country, population) {
  const percent = percentageOfWorld1(population);
  return `${country} có ${population} triệu người, chiếm khoảng ${percent.toFixed(
    2
  )}% dân số thế giới.`;
}

// Gọi hàm cho 3 quốc gia
const country1 = describePopulation("Việt Nam", 98);
const country2 = describePopulation("Ấn Độ", 1380);
const country3 = describePopulation("Hoa Kỳ", 332);

// In kết quả
console.log(country1);
console.log(country2);
console.log(country3);
//lab17.5
const populations = ["Vietnam", "My", "Han", "Nga"];
console.log(populations.length === 4);
