function szamolas(){
    let futas = parseInt(document.getElementById("futszam").value);

    let talaj = parseInt(document.getElementById("talszam").value);

    let eredm = futas + talaj

    let nev = document.getElementById("nev").value;

    document.getElementById("eredmeny").innerHTML =  nev + " " + "eredménye a teszten: " + eredm + " " + "pont!";
}