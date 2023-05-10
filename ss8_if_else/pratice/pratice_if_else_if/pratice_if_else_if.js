let username = prompt("Who's there?",'');
if (username == 'Admin'){
    let pass = prompt("Password?", '')
if (pass == 'TheMaster'){
    alert("Welcome");
}else if (pass == null ){
    alert('Canceled');
}else {
    alert('Wrong password');
}
}else if (username == null){
    alert('Canceled')
}else{
    alert('Idont know you');
}
