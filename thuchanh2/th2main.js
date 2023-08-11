// viết chương trình chuẩn hóa một câu
// loại bỏ các khoảng trắng(space) ở đầu và cuối câu,
// các từ cách nhau 1 khoảng trắng(space),
// ký tự đầu ở mỗi từ viết hoa, các ký tự khác trong từ viết thường,

let array1 = "heLlo riKkei academy";
let arr = array1.toLowerCase().split("");
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr[i] != " ") {
        newArr.push(arr[i].toUpperCase());
        continue;
    }
    if (arr[i] != " ") {
        if (arr[i - 1] == " ") {
            newArr.push(' ');
            newArr.push(arr[i].toUpperCase());
            i++;
        }
        newArr.push(arr[i]);
    }
}
console.log(newArr.join(""));

