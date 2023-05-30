class Student {
    constructor(id, name, grade, email, date, module) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.email = email;
        this.date = date;
        this.module = module;
    }
}

let student1 = new Student(`HV-0001`, `Lê Thị Cương`, `mầm`, `beyeucuaanh@gmail.com`, `12/12/91`, `module 1`);
let student2 = new Student(`HV-0002`, `Trần Thị Nguyên`, `mầm`, `emdayanhne@gmail.com`, `21/12/92`, `module 1`);
let student3 = new Student(`HV-0003`, `Bùi Thị Hải`, `mầm`, `lamtikhonganh@gmail.com`, `11/11/93`, `module 1`);
studentList = [];
studentList.push(student1, student2, student3);

function displayListStudent(list) {
    let tableStr = `<table border="1px" style="border-collapse: collapse">`
    tableStr += `<tr>
    <th>Stt</th>
    <th>Mã học viên</th>
    <th>Tên</th>
    <th>Lớp</th>
    <th>Email</th>
    <th>Ngày sinh</th>
    <th>Module</th>
</tr>`
    for (let i = 0; i < list.length; i++) {
        tableStr += `<tr>
    <td>${i + 1}</td>
    <td>${list[i].id}</td>
    <td>${list[i].name}</td>
    <td>${list[i].grade}</td>
    <td>${list[i].email}</td>
    <td>${list[i].date}</td>
    <td>${list[i].module}</td>
</tr>`
    }
    tableStr += `</table>`
    document.getElementById('tableList').innerHTML = tableStr;
}

function addStudent() {
    let a = prompt(`Hãy nhập Mã học viên`);
    let b = prompt(`Hãy nhập tên học viên`);
    let c = prompt(`Hãy nhập tên lớp`);
    let d = prompt(`Hãy nhập email học viên`);
    let e = prompt(`Hãy nhập ngày sinh`);
    let f = prompt(`Hãy nhập module`);
    let addStudent = new Student(a, b, c, d, e, f);
    studentList.push(addStudent);
    displayListStudent(studentList);
}

function deleteStudent() {
    let flag = false;
    let mhv = prompt(`Hãy nhập mã học viên cần xoá`);
    for (let i = 0; i < studentList.length; i++) {
        if (mhv === studentList[i].id) {
            if (confirm(`Bạn có muốn xoá không ?`)) {
                studentList.splice(i, 1)
                flag = true;
            }
        }
    }
    if (flag === false) {
        alert(`Mã học viên bạn tìm không có. Xin vui lòng nhập lại`)
    }
    displayListStudent(studentList)
}

function editStudent() {
    let flag = false;
    let mhv = prompt(`Hãy nhập mã học viên bạn muốn sửa!!`)
    for (let i = 0; i < studentList.length; i++) {
        if (mhv === studentList[i].id) {
            studentList[i].id = prompt(`Hãy nhập lại mã học viên mới!`);
            studentList[i].name = prompt(`Hãy nhập lại tên học viên mới!`);
            studentList[i].grade = prompt(`Hãy nhập lại lớp mới!`);
            studentList[i].email = prompt(`Hãy nhập lại email mới!`);
            studentList[i].date = prompt(`Hãy nhập lại ngày sinh mới!`);
            studentList[i].module = prompt(`Hãy nhập lại module mới!`);
            flag = true;
        }
    }
    if (flag === false) {
        alert(`Mã học viên bạn tìm không có. Vui lòng nhập lại!!`);
    }
    displayListStudent(studentList);
}

displayListStudent(studentList);