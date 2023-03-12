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
    //kiểm tra người dùng nhập đầy đủ và đúng thông tin chưa
    if(name && age && email && phone && address && gender){
        console.log(name,age, email, phone, address, gender);
    }

        }