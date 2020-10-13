let charArr = new Array();
function createArray(){
    let num = +prompt("nhap so phan tu cua mang");
    let count = 0;
    do{
        let charElement = prompt("Nhap ki tu");
        charArr.push(charElement);
        if(charElement.length > 1){
            alert("Nhap 'KI TU'");
            count--;
            charArr.pop(charElement);
        }
        count++
    }while (count < num);

    for(let i = 0; i < charArr.length; i++){
        document.getElementById("1").innerHTML += (charArr[i] + " ");
    }
}
function reverseArray(){
    for(let i = 0; i < charArr.length / 2; i++){
        let temp = charArr[i];
        charArr[i] = charArr[charArr.length - 1 - i]
        charArr[charArr.length - 1 - i] = temp;
    }
    for(let i = 0; i < charArr.length; i++){
        document.getElementById("2").innerHTML += (charArr[i] + " ");
    }
}