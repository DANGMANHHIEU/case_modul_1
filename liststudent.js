function checkmail(email){
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function save() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = ''
    if (document.getElementById('make').checked){
        gender= document.getElementById('make').value;
    }
    else if(document.getElementById('femake').checked){
        gender = document.getElementById('femake').value;
    }
    // Nếu không nhập họ tên thông báo vui lòng nhập họ tên
    if(name.length ==0){
        name = '';
        document.getElementById('fullname').innerHTML= 'Vui lòng nhập họ tên';
    }
    else if(name.length<2){
        name ='';
        document.getElementById('fullname').innerHTML = 'Tên phải lớn hơn 2 kí tự';
    }
    else if(name.length>50){
        name = '';
        document.getElementById('fullname').innerHTML= 'Tên nhỏ hơn 50 kí tự';
    }
    else {
        document.getElementById('fullname').innerHTML= '';
    }
    //vui lòng nhập tuổi
    if(age.length==0){
        age = '';
        document.getElementById('fullage').innerHTML='Vui lòng nhập tuổi';
    }
    else {
        document.getElementById('fullage').innerHTML='';
    }
    //nhập email
    if(email.length<6){//nhập email
        email = '';
        document.getElementById('fullmail').innerHTML='email lớn hơn 8 kí tự';
    }
    else if(!checkmail(email)){
        email = '';
        document.getElementById('fullmail').innerHTML='Email không đúng'
    }
    else {
        document.getElementById('fullmail').innerHTML='';
    }
    // nhập sđt
    if(phone.length==0){
        phone='';
        document.getElementById('fullphone').innerHTML='Nhập số điện thoại';
    }
    else if(phone.length<10 || phone.length>12){
        phone='';
        document.getElementById('fullphone').innerHTML='số điện thoại không đúng';
    }
    else{
        document.getElementById('fullphone').innerHTML='';
    }
    // nhập địa chỉ
    if(address.length==0){
        address = '';
        document.getElementById('fulladdress').innerHTML='Vui lòng nhập địa chỉ'
    }
    else{
        document.getElementById('fulladdress').innerHTML='';
    }
    //nhập giới tính
    if(gender.length==0){
        gender = '';
        document.getElementById('fullgender').innerHTML='Vui lòng chọn giới tính';
    }
    else {
        document.getElementById('fullgender').innerHTML='';
    }
    //kiểm tra người dùng nhập đầy đủ và đúng thông tin chưa nếu đúng thì lưu lại
    if(name && age && email && phone && address && gender){

        let student = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) :[];

        student.push({
            fullname: name,
            age: age,
            email: email,
            phone: phone,
            address: address,
            gender: gender,
        })
        // chuyển student sang dạng chuỗi
        localStorage.setItem('student',JSON.stringify(student));
      this.displayStudent();
    }
        }

        // hàm hiển thị danh sách
        function displayStudent(){
         let student = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) :[];
         if(student.length ===0){
             document.getElementById('list-student').style.display='none';
             return false
         }
            document.getElementById('list-student').style.display='block';

         let tableStudent = `<tr>
        <th>STT</th>
        <th>Họ và tên</th>
        <th>Tuổi</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th>Địa chỉ</th>
        <th>Giới tính</th>
        <th>Thao tác</th>
        </tr>`

            student.forEach((student,index) =>{
                let idStudent = index;
                index++;
                tableStudent += `<tr>
        <th>${index}</th>
        <th>${student.fullname}</th>
        <th>${student.age}</th>
        <th>${student.email}</th>
        <th>${student.phone}</th>
        <th>${student.address}</th>
        <th>${student.gender}</th>
        <th><a href="#" onclick="editStudent(${idStudent})" >Edit</a> | <a href="#" onclick="deleteStudent(${idStudent})">Delete</a> </th>
        </tr>`
            })
            document.getElementById('group student').innerHTML = tableStudent;

        }

    // hàm xóa sinh viên
    function deleteStudent(id){
        let student = localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) :[];
        student.splice(id,1);
        localStorage.setItem('student',JSON.stringify(student));
        displayStudent();
    }

    // hàm sửa sinh viên
    function editStudent(id){
        currIndex = id ;
        let student = localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) :[];
        for(let i=0;i<student.length;i++){
            document.getElementById('name').value = student[id].fullname;
            document.getElementById('age').value = student[id].age;
            document.getElementById('mail').value = student[id].email;
            document.getElementById('phone').value = student[id].phone;
            document.getElementById('address').value = student[id].address;
            document.getElementById('update').innerHTML = 'Cập nhập';
            }
        }

