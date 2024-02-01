function sum(){
    let a=parseInt(document.getElementById("first").value);
    let b=parseInt(document.getElementById("second").value);

    let c=a+b;

    document.getElementById("add").innerHTML="The sum of "+a+"and "+b+"is: "+c;

}