//  dùng hàm sort
let arr = [1, 10, 9, 6, 4, 7, 8, 3];
arr.sort((a, b) => b - a);
console.log(arr);

// không dùng hàm sort
let array1 = [1, 4, 3, 6, 5, 7, 8, 2];
let number = array1.length;
for (let i = 0; i < number - 1; i++) {
    for (let j = 0; j < number - i - 1; j++) {
        if (array1[j] < array1[j + 1]) {

            let temple = array1[j];
            array1[j] = array1[j + 1];
            array1[j + 1] = temple;
        }
    }
}
console.log(array1);


