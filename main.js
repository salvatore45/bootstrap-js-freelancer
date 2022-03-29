let fname = document.modulo.fname.value;
let lname = document.modulo.lname.value;
var email = document.modulo.email.value;
var hour = document.modulo.hour.value;
var code = document.modulo.code.value;
var work = document.modulo.work.option[document.modulo.work.selectedIndex].value;
let codicivalidi=["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"]
console.log("Carico lista codici validi");
let trovato=false;
for(let i=0;i<codicivalidi.length;i++){
    if(codicivalidi[i] == code){
        trovato=true;
        break;
    }
}
if(trovato){
    if(work='Backed Development'){ 
        prezzoT=hour*20.5*25/100;
    }else if(work='Frontend Development'){
        prezzoT=hour*15.3*25/100;
    }else if(work="Project Analisys"){
        perzzoT=hour*33.6*25/100;
    }else{
        alert('selezionare che lavoro vuole commissionare');
    }
}else{
    if(work='Backed Development'){ 
    prezzoT=hour*20.5;
}else if(work='Frontend Development'){
    prezzoT=hour*15.3;
}else if(work="Project Analisys"){
    perzzoT=hour*33.6;
}else{
    alert('selezionare che lavoro vuole commissionare');
}
}