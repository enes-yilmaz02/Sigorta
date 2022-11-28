//mail gönderici
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ey684241@gmail.com",
        Password : "1C70A298A5F7BF52BE9335608B83C0815DF6",
        To :  document.getElementById("email").value,
        From :'ey684241@gmail.com',
        Subject : "Subject",
        Body :"Kayıt için onay kodunuz:"+ makeid() + " Lütfen bu e-postayı onaylayınız "
    }).then(
      message => alert(message)
    );
    
}

//cod üretici
var code;
function makeid() {
    var result           = [];
    var characters       = '0123456789';
    var charactersLength = 6;
    for ( var i = 0; i < charactersLength; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   code= result.join('');
   return code;
}


