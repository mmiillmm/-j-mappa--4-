function szamolas(){
    let futas = document.getElementById("futszam").value;

    let talaj = document.getElementById("talszam").value;

    let eredm = futas * talaj

    let nev = document.getElementById("nev").value;

    document.getElementById("eredmeny").innerHTML =  nev + " " + "eredménye a teszten: " + eredm + " " + "pont!";

    console.log(futas, talaj, eredm, nev)
}