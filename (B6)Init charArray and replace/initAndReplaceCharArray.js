let charArr = new Array();

function initCharArray() {
    let num = +prompt("nhap so phan tu cua mang");
    let count = 0;
    do {
        let charElement = prompt("Nhap ki tu");
        charArr.push(charElement);
        if (charElement.length > 1 || charElement.length == "") {
            alert("Nhap 'KI TU'");
            count--;
            charArr.pop(charElement);
        }
        count++
    } while (count < num);
    for (let i = 0; i < charArr.length; i++) {
        document.getElementById("1").innerHTML += (charArr[i] + " ");
    }
}

function replaceChar() {
    for(let i = 0; i < charArr.length; i++){
        if(charArr[i] == "-"){
            charArr[i] = "_"
        }
    }
    for (let i = 0; i < charArr.length; i++) {
        document.getElementById("1").innerHTML += (charArr[i] + " ");
    }
}