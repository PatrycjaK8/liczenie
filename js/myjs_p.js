let ileWierszy, ilePytan, n='n', Suma;

function nowaGra(){
document.getElementById("ileWierszy").disabled=false;
document.getElementById("ilePytan").disabled=false;
document.getElementById("start").disabled=false;
czysc();
}
function start(){
    document.getElementById("ileWierszy").disabled=true;
    document.getElementById("ilePytan").disabled=true;
    document.getElementById("sprawdz").disabled=false;
    document.getElementById("suma").disabled=false;
    document.getElementById("start").disabled=true;
    ileWierszy=document.getElementById("ileWierszy").value;
    ilePytan=document.getElementById("ilePytan").value;
    document.getElementById("wynik").innerHTML=0;
    zadanie();
 
}
function zadanie(){
    document.getElementById("zadanie").disabled=true;
    document.getElementById("suma").disabled=false;
    if(ilePytan > 0){
        document.getElementById("sprawdz").disabled=false;

    }
    czysc();
    ilePytan -= 1;
    Suma= noweLiczby(ileWierszy*2+1);

}
function noweLiczby(N){
    let suma =0;
    let liczba;
    for(let i=1;i<N;i++){
        liczba=Math.ceil(Math.random()*9);
        suma+=liczba;
        document.getElementById(n+i).innerHTML=liczba;
    }
    return suma;

}
function czysc(){
for(let i=6;i>0;i--){
    document.getElementById(n+i).innerHTML= '';
}

}
function sprawdz(){
    let wynik =parseInt(document.getElementById("wynik").innerHTML)
    let suma=document.getElementById("suma").value;
    wynik+= (Suma == suma)*2 - 1;
    document.getElementById("wynik").innerHTML = wynik;
    
    document.getElementById("sprawdz").disabled=true;
    document.getElementById("suma").disabled=true;
    document.getElementById("zadanie").disabled=false;
    if(ilePytan==0){
        document.getElementById("zadanie").disabled=true;
    }

}
