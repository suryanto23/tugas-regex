


// Soal Nomor 1

// Buat sebuah program untuk mengecek apakah karakter pertama dalam sebuah string mengandung huruf besar atau tidak.
// Jika huruf pertama adalah huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf besar’
// Jika huruf pertama bukan huruf besar. Program akan menampilkan/console.log ‘Huruf pertama adalah huruf kecil’

let regexUp = /[A-Z]/;
let regexDown = /[a-z]/;
let inputBox = document.querySelector("#inputBox");
let inputButton = document.querySelector("#inputButton");
let display = document.querySelector("#display");

inputButton.addEventListener ("click" , () => {

    if ( regexUp.test(inputBox.value) ) {
        console.log("Huruf pertama adalah huruf besar")
        alert("Huruf pertama adalah huruf besar")
    } else if ( regexDown.test(inputBox.value) ) {
        console.log("Huruf pertama adalah huruf kecil")
        alert("Huruf pertama adalah huruf kecil")
    } else if (inputBox.value == "" ) {
        console.log("Empty")
        alert("Empty")
    
    } else {
        console.log("Inputan bukan huruf");
        alert("Inputan bukan huruf")
    };

    inputBox.value = "";

});