function createAndCount() {
    let str = prompt("Nhap chuoi");
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) % 1 == 0){
            count++;
        }
    }
    document.write("So trong chuoi la " + count);
}
