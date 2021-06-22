function test (){
    var a = "3";
    var b = "8";
    
   var temp = a;
    b = a;
    b = temp;
    alert(temp);

    console.log("a is " + a);
    console.log("b is " + b);
}
