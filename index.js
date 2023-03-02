// for in
const person = {fname:"John", lname:"Doe", age:25};
// vòng lặp for in, chạy từ key 1 đến key cuối
// for(let key in person){
    // console.log(key)
// }
let text = ""
for (let x in person){
    // giá trị x là key sẽ được thay đổi theo các key theo từng vòng
    text += person[x];
}
console.log(text);
// cho obj animal = { name:"trâu", age:18, weight:"20kg", height:"1.6m",gender:male}
// lấy ra chiều cao cân nặng bằng for in
let animal = {name:"trâu", age:18, weight:"20kg", height:"3m",gender:"male"}
let container = "";
for(let a in animal){
    if(a === "weight" || a === "height"){
        container += animal[a]
    }
}
console.log(container)
// for of
const cars = ["Toyota", "BMW", "Huyndai"]
let text1 = "";
for(let x of cars){//X chính là các giá trị trong mảng
    text1 += x;
}
console.log(text1);
// cho mảng const numbers = [3, 4, 1, 5, 7, 10, 9, 6, 15, 2, 8]; dùng for of để in ra số lớn nhất
const numbers = [3, 4, 1, 5, 7, 10, 9, 6, 15, 2, 8];
let maxNumber= numbers[0];
for(const number of numbers ){
    if(number > maxNumber) {
        maxNumber = number;
    }
}
console.log('Số lớn nhất là:', maxNumber);
