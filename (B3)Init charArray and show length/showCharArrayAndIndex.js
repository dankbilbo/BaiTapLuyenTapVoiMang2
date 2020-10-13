let charArr = new Array();
function createArray(){
    let num = +prompt("nhap so phan tu cua mang");
    let count = 0;
    do{
        let charElement = prompt("Nhap ki tu");
        // if(charElement == " "){
        //     charElement =
        // }
        charArr.push(charElement);
        if(charElement.length > 1 || charElement == ""){
            alert("Nhap 'KI TU'");
            count--;
            charArr.pop(charElement);
        }
        count++
    }while (count < num);

    for(let i = 0; i < charArr.length; i++){
        document.getElementById("1").innerHTML += (charArr[i] + "-");
    }
    document.getElementById("2").innerHTML = "kich thuoc mang la :" + charArr.length;
}