function calc(operation){
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let output;
    if(operation=='Add'){
        output=`Sum of number is ${Number(a)+Number(b)}`
    }
    else if(operation=='Sub'){
        output=`Sub of number is ${Number(a)-Number(b)}`
    }
    else if(operation=='Mul'){
        output=`Multiplication of number is ${Number(a)*Number(b)}`
    }
    else if(operation=='Divide'){
        output=`Division of number is ${Number(a)/Number(b)}`
    }
    document.getElementsByClassName('output')[0].innerText=output;
}