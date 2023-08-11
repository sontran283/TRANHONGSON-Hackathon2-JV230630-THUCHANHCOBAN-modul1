// TÌM PHẦN TỬ LỚN NHẤT TRONG MẢNG
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < max) {
        max = array[i];
    }
}
console.log("giá trị lớn nhất của mảng là: " + max)
