

// Soal Nomor 2

// 2. Buat sebuah program untuk memvalidasi format nomor handphone
// Nomor handphone minimum 10 digit dan maksimum 12 digit
// Hanya menerima digit karakter


let regexCheck = /\d{10,12}/
let inputBox = document.querySelector("#inputBox");
let inputButton = document.querySelector("#inputButton");
let display = document.querySelector("#display");


inputButton.addEventListener ("click" , () => {


    if ( regexCheck.test(inputBox.value) && inputBox.value.length < 13 ){
        alert("ok")
    } else if (inputBox.value = "") {
        alert("kosong")
    } else {
        alert("Nomor handphone minimum 10 digit dan maksimum 12 digit")
    }

});