function createArray(){
    let arr = new Array();
    let arrRow = +prompt("nhap so hang");
    let arrCol = +prompt("nhap so cot")
    for(let i = 0; i < arrRow; i++){
        for (let j = 0; j < arrCol; j++) {
            arr[i, j] = prompt("nhap phan tu tai vi tri " + i + "," + j);
            // console.log(arr[i, j] + "---" + i + "---" + j);
            document.getElementById("1").innerHTML += (arr[i, j] + "(" + i + "," + j + ")" );
            if(j == (arrCol -1)){
                document.getElementById("1").innerHTML += "<br>";
            }
        }
    }
}