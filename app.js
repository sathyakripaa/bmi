var age=document.getElementById("age");
var height=document.getElementById("height");
var weight=document.getElementById("weight");
var form=document.getElementById("form");

validateForm =()=>{
    if(age.value=="" || height.value=="" || weight.value==""){
        alert("all fields required");
        document.getElementById("submit").removeEventListener("click",countBmi);
    
    }else{
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click",validateForm);

countBmi=()=>{
    var p=[age.value,height.value,weight.value];
    form.reset();

    var bmi=Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result='';

    if(bmi<18.5){
        result="you are underweight";
    }
    else if(18.5<=bmi&&bmi<=24.9){
        result="you are healthy";
    }
    else if(25<=bmi&&bmi<=29.9){
        result="got a cut down and go for healthy life";
    }
    else if(30<=bmi&&bmi<=35.9){
        result="exercise and diet will give make you lighter";
    }
    else if(30<=bmi){
        result="you are obese";
    }

    var h1=document.createElement("h1");
    var pr=document.createElement("p");

    var t=document.createTextNode(result);

    var b=document.createTextNode('BMI:');

    var r=document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.appendChild(b);

    h1.appendChild(r);

    pr.appendChild(t);

    document.body.appendChild(h1);
    document.body.appendChild(pr);

    document.getElementById("submit").removeEventListener("click",countBmi);
    document.getElementById("submit").removeEventListener("click",validateForm);
   
}
document.getElementById("submit").addEventListener("click",countBmi);