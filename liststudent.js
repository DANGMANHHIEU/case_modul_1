function checkmail(email){
    return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}

function save() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('mail').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let gender = document.getElementById('gender').value;

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
    if(age.length===0){
        age = '';
        document.getElementById('fullage').innerHTML='Vui lòng nhập tuổi';
    }
    else {
        document.getElementById('fullage').innerHTML='';
    }
    //nhập email
    if(email.length<6){
        email = '';
        document.getElementById('fullmail').innerHTML='Email lớn hơn 8 kí tự';
    }
    else if(!checkmail(email)){
        email = '';
        document.getElementById('fullmail').innerHTML='Email không đúng'
    }
    else {
        document.getElementById('fullmail').innerHTML='';
    }
    // nhập sđt
    if(phone.length===0){
        phone='';
        document.getElementById('fullphone').innerHTML='Nhập số điện thoại';
    }
    else if(phone.length<10 || phone.length>12){
        phone='';
        document.getElementById('fullphone').innerHTML='Số điện thoại không đúng';
    }
    else{
        document.getElementById('fullphone').innerHTML='';
    }
    // nhập địa chỉ
    if(address.length===0){
        address = '';
        document.getElementById('fulladdress').innerHTML='Vui lòng nhập địa chỉ'
    }
    else{
        document.getElementById('fulladdress').innerHTML='';
    }
    //nhập giới tính
    if(gender.length===0){
        gender = '';
        document.getElementById('fullgender').innerHTML='Vui lòng nhập giới tính';
    }
    else {
        document.getElementById('fullgender').innerHTML='';
    }
    //kiểm tra người dùng nhập đầy đủ và đúng thông tin chưa nếu đúng thì lưu lại
    if(name && age && email && phone && address && gender){
        let student = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) :[];
        let item = {
            name: name,
            age: age,
            email: email,
            phone: phone,
            address: address,
            gender: gender,
        }
       student.push(item);
        // chuyển student sang dạng chuỗi
        localStorage.setItem('student',JSON.stringify(student));
      this.displayStudent();
      this.clear() ;
    }
        }

        // hàm hiển thị danh sách
        function displayStudent(){
         let student = localStorage.getItem('student') ? JSON.parse(localStorage.getItem('student')) :[];
         if(student.length ===0){
             document.getElementById('list-student').style.display='none';
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
        <th>${student.name}</th>
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
        if(confirm('Bạn chắc chắn muốn xóa')){   //hiển thị thông báo muốn xóa
        student.splice(id,1);}
        localStorage.setItem('student',JSON.stringify(student));
        displayStudent();
    }


    //hàm sửa sinh viên
    function editStudent(id){
        let student = localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) :[];
            document.getElementById('name').value = student[id].name;
            document.getElementById('age').value = student[id].age;
            document.getElementById('mail').value = student[id].email;
            document.getElementById('phone').value = student[id].phone;
            document.getElementById('address').value = student[id].address;
            document.getElementById('gender').value = student[id].gender
            document.getElementById('index').value = id ;// hấng index

            document.getElementById('save').style.display = 'none';
            document.getElementById('update').style.display = 'inline-block';
        }
        //hàm cập nhập
       function update(){
           let student = localStorage.getItem('student')? JSON.parse(localStorage.getItem('student')) :[];
           let index = document.getElementById('index').value;
           student[index]= {
               name : document.getElementById('name').value,
                age : document.getElementById('age').value,
                email : document.getElementById('mail').value,
                phone : document.getElementById('phone').value,
                address : document.getElementById('address').value,
               gender: document.getElementById('gender').value,
           }

           localStorage.setItem('student',JSON.stringify(student));
           displayStudent();
           clear();
           document.getElementById('save').style.display = 'inline-block';
           document.getElementById('update').style.display = 'none';
       }

        //hàm sau khi nhập thì về ô trống
        function clear(){
    document.getElementById('name').value = "";
    document.getElementById('age').value = "";
    document.getElementById('mail').value ="";
    document.getElementById('phone').value="";
    document.getElementById('address').value="";
    document.getElementById('gender').value="";
        }

