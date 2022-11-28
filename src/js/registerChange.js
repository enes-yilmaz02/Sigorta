user=document.querySelector('#user');
sigorta=document.querySelector('#sigorta');
danisman=document.querySelector('#danisman');
firmaAdi=document.querySelector('#firma_name');
icerik=document.querySelector('#innerHtml');
function clickUser(){
    console.log('sçildi');
     firmaAdi.style.display="none";
     icerik.innerHTML="Kullanıcı Hesap Oluştur";
}
function clickSigorta(){
    firmaAdi.style.display="block";
    icerik.innerHTML="Sigorta Firması Hesap Oluştur";
}
function clickDanisman(){
    firmaAdi.style.display="block";
    icerik.innerHTML="Danışman Firması Hesap Oluştur";
}
  