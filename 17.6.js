const neighbours = ["Viet nam", "Lao", "Campuchia"];
//thêm 1 phần tử vào cuối mảng
neighbours.push("Utopia");
console.log("Sau khi thêm 1 phần tử vào cuối mảng là:");
console.log(neighbours);
//xóa 1 phần tử cuối mảng
neighbours.pop();
console.log("Sau khi xóa 1 phần tử cuối mảng là:");
console.log(neighbours);
if (!neighbours.includes("Germany"))
  console.log("Probably not a central European country :D");
let thay;
if (neighbours.indexOf("Campuchia")) {
  thay = neighbours.indexOf("Campuchia");
}
neighbours[thay] = "ThaiLan";
console.log(neighbours);
