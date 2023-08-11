let month = +prompt("Nhập tháng bạn muốn tìm kiếm");
let dayMonth = [1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if (month >= 1 && month <= 12) {
    document.write(`Số ngày trong tháng ${month} là ${dayMonth[month]}`);
} else {
    console.error("không hợp lệ");
}
