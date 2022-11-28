const firebaseConfig = {
  apiKey: "AIzaSyAItNAo7E4TrNUkgeL7MeGPlhySxkMDYuk",
  authDomain: "sigortaacc.firebaseapp.com",
  databaseURL: "https://sigortaacc-default-rtdb.firebaseio.com",
  projectId: "sigortaacc",
  storageBucket: "sigortaacc.appspot.com",
  messagingSenderId: "280984693600",
  appId: "1:280984693600:web:d0ab3f3276398c6fbd8c05"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()
user = document.querySelector('#user');//id=user
sigorta = document.querySelector('#sigorta');//id=sigorta
danisman = document.querySelector('#danisman');//id=danisman
icerik = document.querySelector('#innerhtml');
thFirma = document.querySelector('#firma');
//fonk. register for firebase
function register() {
  //get radio Buttons (other ways to do this too)
  let radioButtons = document.querySelectorAll("input[name=registerRadio]");
  //send firebase user
  if (radioButtons[0].checked == true) {
    registerUser();
  }
  //send firebase sigorta
  if (radioButtons[1].checked == true) {
    registerSigorta();
  }
  //send firebase danışman
  if (radioButtons[2].checked == true) {
    registerDanisman();
  }

}
// Set up our registeruser function
function registerUser() {

  // Get all our input fields
  name_surname = document.getElementById('name_surname').value
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  phone = document.getElementById('phone').value



  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('email ve Şifre alanını doldurunuz!!')
    return
    // Don't continue running the code
  }
  if (validate_field(name_surname) == false || validate_field(phone) == false) {
    alert('Lütfen Kutucukları Doldurunuz!')
    return
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser

      // Add this user to Firebase Database
      var database_ref = database.ref()

      // Create User data
      var user_data = {
        email: email,
        name_surname: name_surname,
        password: password,
        phone: phone,
        last_login: Date.now()
      }

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)

      // DOne
      alert('Kullanıcı Oluşturuldu!!')
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}
// Set up our registerDanisman function
function registerDanisman() {

  // Get all our input fields
  name_surname = document.getElementById('name_surname').value
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  firma_name = document.getElementById('firma_name').value
  phone = document.getElementById('phone').value



  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('email ve Şifre alanını doldurunuz!!')
    return
    // Don't continue running the code
  }
  if (validate_field(name_surname) == false || validate_field(firma_name) == false || validate_field(phone) == false) {
    alert('Lütfen Kutucukları Doldurunuz!')
    return
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser

      // Add this user to Firebase Database
      var database_ref = database.ref()

      // Create User data
      var user_data = {
        email: email,
        name_surname: name_surname,
        password: password,
        phone: phone,
        firma_name: firma_name,
        last_login: Date.now()
      }

      // Push to Firebase Database
      database_ref.child('danisman/' + user.uid).set(user_data)

      // DOne
      alert('Danışman Kullanıcı Oluşturuldu!!')
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}
// Set up our registerdanışman function
function registerSigorta() {

  // Get all our input fields
  name_surname = document.getElementById('name_surname').value
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  firma_name = document.getElementById('firma_name').value
  phone = document.getElementById('phone').value


  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('email ve Şifre alanını doldurunuz!!')
    return
    // Don't continue running the code
  }
  if (validate_field(name_surname) == false || validate_field(firma_name) == false || validate_field(phone) == false) {
    alert('Lütfen Kutucukları Doldurunuz!')
    return
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser


    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })

  // Add this user to Firebase Database
  var database_ref = database.ref()

  // Create User data
  var user_data = {
    email: email,
    name_surname: name_surname,
    password: password,
    phone: phone,
    firma_name: firma_name,
    last_login: Date.now()
  }

  // Push to Firebase Database
  database_ref.child('sigorta/' + user.uid).set(user_data)

  // DOne
  alert('Sigorta kullanıcı Oluşturuldu!!')
}
// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email veya Şifre Hatalı!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser

      // Add this user to Firebase Database
      var database_ref = database.ref()

      // Create User data
      var user_data = {
        last_login: Date.now()
      }

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)

      // DOne
      alert('Kullanıcı Girişi Yapıldı!!')

    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}
// Validate Functions
function validate_email(x) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(x) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}
function validate_password(y) {
  // Firebase only accepts lengths greater than 6
  if (y < 6) {
    return false
  } else {
    return true
  }
}
function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
//Email Kontrol Fonksiyonu
function checkEmail() {
  email = document.querySelector('#email');//id=email
  var filter = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter.test(email.value)) {
    alert('lütfen geçerli email tipi giriniz.');
    email.focus;
    return false;
  }
  else {
    alert('email doğru formatta');
  }
}
//phone Kontrol Fonksiyonu
function checkPhone() {
  phone = document.querySelector('#phone');//id=phone
  var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!filter.test(phone.value)) {
    alert('lütfen geçerli numara tipi giriniz.');
    phone.focus;
    return false;
  }
  else {
    alert(' numara  doğru formatta');
  }
}
////////////////////////////////////////////////////
/*FİREBASE CRUD OPERASYONLARI */

//User get users
function readWithGetUser() {
  clearTable();
  icerik.innerHTML = "Kullanıcı Tablosu";
  thFirma.style.display = "none";
  var leadsRef = database.ref('users');
  leadsRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      //Create html elements, TRs, TD,s etc.
      var row = document.createElement("tr");
      var col1 = document.createElement("td");
      var col2 = document.createElement("td");
      var col3 = document.createElement("td");
      var col4 = document.createElement("td");
      //Add data to the new elements.
      col1.innerText = childSnapshot.child("name_surname").val();
      col2.innerText = childSnapshot.child("email").val();
      col3.innerText = childSnapshot.child("password").val();
      col4.innerText = childSnapshot.child("phone").val();
      //Append the cells into the row and the row into the table body.
      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      row.appendChild(col4);
      table.appendChild(row);
    });
  });

}

//Sigorta get users
function readWithGetSigorta() {
  clearTable();
  icerik.innerHTML = " Sigorta Firması Kullanıcı Tablosu";
  thFirma.style.display = "block";
  var leadsRef = database.ref('sigorta');
  leadsRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      //Create html elements, TRs, TD,s etc.
      var row = document.createElement("tr");
      var col1 = document.createElement("td");
      var col2 = document.createElement("td");
      var col3 = document.createElement("td");
      var col4 = document.createElement("td");
      var col5 = document.createElement("td");
      //Add data to the new elements.
      col1.innerText = childSnapshot.child("name_surname").val();
      col2.innerText = childSnapshot.child("email").val();
      col3.innerText = childSnapshot.child("password").val();
      col4.innerText = childSnapshot.child("firma_name").val();
      col5.innerText = childSnapshot.child("phone").val();
      //Append the cells into the row and the row into the table body.
      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      row.appendChild(col4);
      row.appendChild(col5);
      table.appendChild(row);
    });
  });

}

//Danışman get users
function readWithGetDanisman() {
  clearTable();
  icerik.innerHTML = "Danışman Firması Kullanıcı Tablosu";
  thFirma.style.display = "block";
  var leadsRef = database.ref('danisman');
  leadsRef.once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
     
      //Create html elements, TRs, TD,s etc.
      var row = document.createElement("tr");
      var col1 = document.createElement("td");
      var col2 = document.createElement("td");
      var col3 = document.createElement("td");
      var col4 = document.createElement("td");
      var col5 = document.createElement("td");
      //Add data to the new elements.
      col1.innerText = childSnapshot.child("name_surname").val();
      col2.innerText = childSnapshot.child("email").val();
      col3.innerText = childSnapshot.child("password").val();
      col4.innerText = childSnapshot.child("firma_name").val();
      col5.innerText = childSnapshot.child("phone").val();
      //Append the cells into the row and the row into the table body.
      row.appendChild(col1);
      row.appendChild(col2);
      row.appendChild(col3);
      row.appendChild(col4);
      row.appendChild(col5);
      table.appendChild(row);
      

    });
  });

}

function clearTable() {
  var Table = document.querySelector("#table");
  Table.innerHTML = "";
}
// function readOnceWithGet(userId) {
//   // [START rtdb_read_once_get]
//   const dbRef = firebase.database().ref();
//   dbRef.child("users").child(userId).get().then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   }).catch((error) => {
//     console.error(error);
//   });
//   // [END rtdb_read_once_get]
// }

