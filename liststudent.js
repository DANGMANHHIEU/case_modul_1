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
        document.getElementById('fullname').innerHTML= 'Vui lòng nhập họ tên';
    }
    else {
        document.getElementById('fullname').innerHTML= '';
    }
    //vui lòng nhập tuổi
    if(age.length==0){
        document.getElementById('fullage').innerHTML='Vui lòng nhập tuổi';
    }
    else {
        document.getElementById('fullage').innerHTML='';
    }
    //nhập email
    if(email.length<6){//nhập email
        document.getElementById('fullmail').innerHTML='email lớn hơn 8 kí tự';
    }
    else {
        document.getElementById('fullmail').innerHTML='';
    }
    // nhập sđt
    if(phone.length<9){
        document.getElementById('fullphone').innerHTML='Nhập số điện thoại';
    }
    else{
        document.getElementById('fullname').innerHTML='';
    }
    // nhập địa chỉ
    if(address.length==0){
        document.getElementById('fulladdress').innerHTML='Vui lòng nhập địa chỉ'
    }
    else{
        document.getElementById('fulladdress').innerHTML='';
    }
    //nhập giới tính
    if(gender.length==0){
        document.getElementById('fullgender').innerHTML='Vui lòng chọn giới tính';
    }
    else {
        document.getElementById('fullgender').innerHTML='';
    }

        }