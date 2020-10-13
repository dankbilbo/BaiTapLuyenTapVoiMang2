function createAndCompare(){
    let str1 = prompt("nhap string 1");
    let str2 = prompt("nhap string 2");
    if(str1.length != str2.length){
        document.write("2 strings khong giong nhau");
    }else{
        for(let i = 0; i < str1.length; i++){
            if(str1.charAt(i) != str2.charAt(i)){
                return document.write("2 strings khong giong nhau");
            }
        }
        document.write("2 strings giong nhau")
    }
}