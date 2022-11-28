//login type changes 
user=document.querySelector('#user');//id=user
sigorta=document.querySelector('#sigorta');//id=sigorta
danisman=document.querySelector('#danisman');//id=danisman
icerik=document.querySelector('#innerHtml');//id=innerhtml for h2 content

//admin
function clickAdmin(){
    icerik.innerHTML="Admin Oturum Aç";
}
//user
function clickUser(){
     icerik.innerHTML="Kullanıcı Oturum Aç";
}
//sigorta
function clickSigorta(){
    icerik.innerHTML="Sigorta Firması Oturum Aç";
}
//danışman
function clickDanisman(){
    icerik.innerHTML="Danışman Firması Oturum Aç";
}
  


