function functionOK(){
    var kh = parseInt(document.getElementById('').value);
    var kh = parseInt(document.getElementById('').value);
    var y = document.getElementById('');
    var value = y.options[y.selectedIndex].value;

    var result;
    if(price<10000){
        alert("Tiền của bạn không đủ để mua")
    }else{
        var sum=money-10000;
        document.getElementById("kq").innerHTML="Sản phẩm bạn mua là: "+nuocngot+ " Có giá là: "+ 10000 +" Số tiền của bạn: "+ money +" Tiền dư là: " + sum
    }
    if(price<30000){
        alert("Tiền của bạn không đủ để mua")
    }else{
        var sum=money-30000;
        document.getElementById("kq").innerHTML="Sản phẩm bạn mua là: "+traicay+ " Có giá là: "+ 30000 +" Số tiền của bạn: "+ money +" Tiền dư là: " + sum
    }
}

function functionCancle(){
    document.getElementById('s1').value ="";
    document.getElementById('s2').value= "";
    document.getElementById('sum').value="";
}