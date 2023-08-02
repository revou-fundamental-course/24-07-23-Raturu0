
// VALIDATOR
function validateForm() {
  var nama = document.forms["message-form"]["nama"].value;
  var email = document.forms["message-form"]["email"].value;
  var interested = document.forms["message-form"]["interested"].value;
  
  if (nama == "" || email == "" || interested == "") {
    alert("tidak boleh kosong");
    return false;
  }
  
  document.getElementById("sender-nama").innerText = nama;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-interested").innerText = interested;
  return false;

  setSenderUI(nama, email, interested);
}

 // Fungsi untuk menampilkan data input pada UI
 function setSenderUI(nama, email, interested) {
  // Setel konten untuk tampilan sender info
  document.getElementById("sender-nama").innerText = nama;
  document.getElementById("sender-email").innerText = email;
  document.getElementById("sender-interested").innerText = interested;
}




// SLIDER
var slideIndex = 1;
tampilkanDivs(slideIndex);

function plusDivs(n) {
  tampilkanDivs((slideIndex += n));
}

function tampilkanDivs(n) {
  var i;
  var daftarGambar = document.getElementsByClassName("img-slideshow");
  if (n > daftarGambar.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = daftarGambar.length;
  }

  for (i = 0; i < daftarGambar.length; i++) {
    daftarGambar[i].style.display = "none";
  }

  daftarGambar[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 2000);
