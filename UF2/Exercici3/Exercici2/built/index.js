"use strict";
/*
Ara utilitzarem OOP per a fer classes per gestionar els clients del restaurant i les comandes que es fan:

Classe Client

Ha de tenir dues propietats públiques:
Nom
Cognoms
Comandes

Ha de tenir dues propietats privades:
DNI
Targeta de crèdit

I dos mètodes públics:
afegirComanda: li arriba com a paràmetre una Comanda i la desa.
mostrarComandes: retorna un string composat pel seu nom i les comandes que ha realitzat.

La classe haurà de tenir els seus getters, setters i constructor.

Classe Comanda

Ha de tenir una propietat pública:
Nom Plats (un string separat per comes. S’ha de comprovar que està al objecte)

Ha de tenir una propietat privada:
ID (autoincremental)

La classe haurà de tenir els seus getters, setters i constructor.

Lògica

A partir d'aquí, afegiu la lògica necessària a l’HTML per:
Poder afegir clients nous
Poder afegir comandes
Poder mostrar els clients
Poder mostrar les comandes
Poder afegir comandes a clients
Poder mostrar les comandes d’un client al HTML
*/
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
}
function mostrarComandesClient() {
}
