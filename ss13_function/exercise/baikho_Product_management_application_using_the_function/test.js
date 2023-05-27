class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

let product1 = new Product(1, `iphone`, 1000);
let product2 = new Product(2, `nokia`, 100);
let product3 = new Product(3, `samsung`, 500);
let productList = [];
let addProductList = productList.push(product1, product2, product3);

function displayProductList(list) {
    let tableStr = `<table border="1" style="border-collapse: collapse"   >`;
    tableStr += `<tr>
        <th>#</th>
        <th>Tên sản phẩm</th>
        <th>Giá tiền($)</th>
        <th>Thao tác</th>
    </tr>`;
    for (let i = 0; i < list.length; i++) {
        tableStr += `<tr>
        <td>${i + 1}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td><button onclick="editBtn(${i})">Chỉnh sửa</button></td>
        <td><button onclick="deleteBtn(${i})">Xoá</button></td> 
    </tr>`;                                                  //thẻ ở trên deleBtn(${i}) dùng để xoá 1 chữ tại vị trí của chữ đó
    }

    tableStr += `</table>`;
    document.getElementById(`tableProduct`).innerHTML = tableStr;

}

function deleteBtn(indexProduct) {                             //tham số của đối số ${i}
    productList.splice(indexProduct, 1);            //xoá 1 chữ tại vị trí của chữ đó
    displayProductList(productList);                          //hiện ra bảng đã xoá 1 chữ
}

//muốn nhập một dữ liệu gì thì ta nên:
//bước 1 : lấy giá trị ở ô mình nhập vào và gán nó vào 1 biến
//bước 2 : Khởi tạo lại product để nó thêm vào mảng đó
//bưóc 3 : thêm vào mảng
//bước 4 : hiển thị mảng đó ra
function addBtn() {
    let id = document.getElementById(`idInp`).value;
    let name = document.getElementById(`nameInp`).value;
    let price = document.getElementById(`priceInp`).value;
    let newProductList = new Product(id, name, price);          //tạo ra 1 đối tượng mới
    productList.push(newProductList);                           //push đối tượng mới này vào mảng trên
    displayProductList(productList);                           //show ra kết quả
    document.getElementById(`idInp`).value = ``;     //sau khi ra kết quả thì phải trả lại ô trống ban đầu
    document.getElementById(`nameInp`).value = ``;   //sau khi ra kết quả thì phải trả lại ô trống ban đầu
    document.getElementById(`priceInp`).value = ``; //sau khi ra kết quả thì phải trả lại ô trống ban đầu

}
//Khi nhấn vào edit thì:
//Bước 1 :nút sửa phải gửi index về
//Bước 2 :dùng index dể lấy pt trong mảng ra
//Buớc 3 :đưa thông tin của pt lên các ô input
//Bước 4 :sửa và lưu
function editBtn() {
}


displayProductList(productList)

