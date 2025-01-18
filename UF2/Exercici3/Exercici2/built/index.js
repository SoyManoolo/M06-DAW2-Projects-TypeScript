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
    afegirComanda() {
    }
    mostrarComandes() {
    }
    constructor(nom, cognoms, DNI, targetaCredit) {
        this.comandes = [];
        this.nom = nom;
        this.cognoms = cognoms;
        this.DNI = DNI;
        this.targetaCredit = targetaCredit;
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
}
class Comanda {
    constructor(nomPlats) {
        this.nomPlats = nomPlats;
        this.ID = Comanda.contadorID++;
    }
    get getNomPlats() {
        return this.nomPlats;
    }
    set setNomPlats(nomPlats) {
        this.nomPlats = nomPlats;
    }
    get getID() {
        return this.ID;
    }
}
Comanda.contadorID = 1;
const clients = [];
function afegirClient() {
    const nom = document.getElementById("nom").value;
    const cognoms = document.getElementById("cognom").value;
    const DNI = document.getElementById("DNI").value;
    const targetaCredit = document.getElementById("targetaCredit").value;
    if (nom == "" || cognoms == "" || DNI == "" || targetaCredit == "") {
        alert("Has d'omplir tots els camps");
        return;
    }
    else if (nom == null || cognoms == null || DNI == null || targetaCredit == null) {
        alert("Has d'omplir tots els camps");
        return;
    }
    else if (DNI.length !== 9) {
        alert("El DNI ha de tenir 9 caràcters");
        return;
    }
    let client = new Client(nom, cognoms, DNI, targetaCredit);
    clients.push(client);
}
function mostrarClients() {
}
