"use strict";
class Client {
    constructor(nom, cognoms, DNI, targetaCredit) {
        this.comandes = [];
        this.nom = nom;
        this.cognoms = cognoms;
        this.DNI = DNI;
        this.targetaCredit = targetaCredit;
        this.comandes = [];
    }
    get getDNI() {
        return this.DNI;
    }
    set setDNI(DNI) {
        this.DNI = DNI;
    }
    get getTargetaCredit() {
        return this.targetaCredit;
    }
    set setTargetaCredit(targetaCredit) {
        this.targetaCredit = targetaCredit;
    }
    afegirComanda(comanda) {
        this.comandes.push(comanda);
    }
    mostrarComandes() {
        let resultat = "";
        this.comandes.forEach(comanda => {
            resultat += comanda.nomPlats + "\n";
        });
        return resultat;
    }
}
class Comanda {
    constructor(nomPlats) {
        this.nomPlats = nomPlats;
        this._id = Comanda.contadorID++;
    }
    get getNomPlats() {
        return this.nomPlats;
    }
    set setNomPlats(nomPlats) {
        this.nomPlats = nomPlats;
    }
    get getID() {
        return this._id;
    }
}
Comanda.contadorID = 1;
const clients = [];
const comandes = [];
function afegirClient() {
    const nom = document.getElementById("nom");
    const cognoms = document.getElementById("cognom");
    const DNI = document.getElementById("dni");
    const targetaCredit = document.getElementById("targeta");
    if (nom.value == "" || cognoms.value == "" || DNI.value == "" || targetaCredit.value == "") {
        alert("Has d'omplir tots els camps");
        return;
    }
    else if (DNI.value.length !== 9) {
        alert("El DNI ha de tenir 9 caràcters");
        return;
    }
    let client = new Client(nom.value, cognoms.value, DNI.value, targetaCredit.value);
    clients.push(client);
    mostrarClients(clients);
    nom.value = "";
    cognoms.value = "";
    DNI.value = "";
    targetaCredit.value = "";
}
function mostrarClients(clients) {
    const clientsDiv = document.getElementById("clients");
    clientsDiv.innerHTML = "";
    clients.forEach(client => {
        clientsDiv.innerHTML += `${client.nom} ${client.cognoms}<br>`;
    });
}
function afegirComanda() {
    const nomPlats = document.getElementById("nomPlat");
    if (nomPlats.value == "") {
        alert("Has d'omplir el camp");
        return;
    }
    let comanda = new Comanda(nomPlats.value);
    comandes.push(comanda);
    mostrarComandes(comandes);
    nomPlats.value = "";
}
function mostrarComandes(comandes) {
    const comandesDiv = document.getElementById("comandes");
    comandesDiv.innerHTML = "";
    comandes.forEach(comanda => {
        comandesDiv.innerHTML += `${comanda.nomPlats}<br>`;
    });
}
function afegirComandaClient() {
    const comanda = document.getElementById("nomPlatClient");
    const dni = document.getElementById("dniClient");
    if (comanda.value == "" || dni.value == "") {
        alert("Has d'omplir els camps");
        return;
    }
    let client = clients.find(client => client.getDNI == dni.value);
    let comandaObject = comandes.find(c => c.getNomPlats == comanda.value);
    if (client && comandaObject) {
        client.afegirComanda(comandaObject);
        comanda.value = "";
        dni.value = "";
    }
    else {
        alert("El client o la comanda no existeixen");
        comanda.value = "";
        dni.value = "";
    }
}
function mostrarComandesClient() {
    const comandesClientDiv = document.getElementById("comandesClients");
    comandesClientDiv.textContent = "";
    const dni = document.getElementById("dniClientComanda");
    let client = clients.find(client => client.getDNI == dni.value);
    if (client && client.comandes.length > 0) {
        let clientDNI = document.createElement("h3");
        clientDNI.textContent = client.getDNI;
        for (let i = 0; i < client.comandes.length; i++) {
            comandesClientDiv.innerHTML += client.comandes[i].nomPlats + "<br>";
        }
    }
    else {
        alert("El client no existeix o no té comandes");
    }
    dni.value = "";
}
