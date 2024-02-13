let billetter = [];

function checkInput(){
    let innAntall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("tlf").value;
    let epost = document.getElementById("epost").value;
    let antall = Number(innAntall);
    let errorCount = 0

    //få rød feilmelding ved mangel på input
    if (antall === 0 || antall == null){
        let antallfeil = document.getElementById("feilAntall");
        antallfeil.innerText = "Må skrive noe inn i antall";
        antallfeil.style.color="red";
        errorCount++
    }
    else {
        document.getElementById("feilAntall").innerText ="";
    }
    if (fornavn==="" || fornavn==null){
        let fornavnfeil = document.getElementById("feilFornavn");
        fornavnfeil.innerText= "Må skrive noe inn i fornavnet";
        fornavnfeil.style.color="red";
        errorCount++
    }
    else{ document.getElementById("feilFornavn").innerText ="";
    }
    if (etternavn==="" || etternavn==null){
        let etternavnfeil = document.getElementById("feilEtternavn");
        etternavnfeil.innerText="Må skrive noe inn i etternavnet";
        etternavnfeil.style.color="red";
        errorCount++
    }
    else {
        document.getElementById("feilEtternavn").innerText="";
    }
    if (telefonnr===""||telefonnr==null){
        let tlfFeil = document.getElementById("feilTlf");
        tlfFeil.innerText="Må skrive noe inn i telefonnr";
        tlfFeil.style.color="red";
        errorCount++
    }
    else {
        document.getElementById("feilTlf").innerText="";
    }
    if (epost===""||epost==null){
        let epostfeil = document.getElementById("feilEpost");
        epostfeil.innerText="Må skrive noe inn i eposten";
        epostfeil.style.color="red";
        errorCount++
    }
    else {
        document.getElementById("feilEpost").innerText="";
    }
    console.log(errorCount)
    if (errorCount > 0){
        return true
    }else{
    return false
    }
}
function kjopBillett(){
    console.log("starter kjøp")
    let film = document.getElementById("velgFilm").value;
    let innAntall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefonnr = document.getElementById("tlf").value;
    let epost = document.getElementById("epost").value;
    let antall = Number(innAntall);

    //let telefonnr = Number(tlf);
    const bestill = {
        film : film,
        antall : innAntall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    };
    console.log(checkInput())
    if (checkInput() === false){
    billetter.push(bestill);
    let ut ="<table><tr>"+
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>"
    for (let b of billetter) {
        ut += "<tr>";
        ut += "<td>" + b.film + "</td><td>" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr +
            "</td><td>" + b.epost + "</td>";
        ut += "</tr>"
    }
        //nullstiller inputtboksene:
        document.getElementById("velgFilm").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("tlf").value="";
        document.getElementById("epost").value="";
        document.getElementById("skrivUt").innerHTML=ut;

    }
    console.log("Kjøp ferdig")
}

function slettBillett(){
    console.log("Biletter: " + billetter); //kan se på loggen Bilettene før sletting.
    billetter = [];
    console.log("Biletter slettet: " + billetter); //kan se på loggen at det er slettet.
    document.getElementById("skrivUt").innerHTML="";


}