


// Soal Nomor 3

let regex = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
let inputBox = document.querySelector("#inputBox");
let inputButton = document.querySelector("#inputButton");
let display = document.querySelector("#display");

inputButton.addEventListener ("click", () => {

    

    if ( regex.test(inputBox.value)) {

        let summonDiv = document.createElement("div");

        summonDiv.innerHTML += document.querySelector("#inputBox").value.toString();
        
        display.appendChild(summonDiv)

        inputBox.value = "";
    } else {
        alert("Data tidak ditemukan!")
    }


});


// let summonDiv = document.createElement("div");

//         summonDiv.innerHTML = "123aosidh83"
      
//         display.appendChild(summonDiv)










