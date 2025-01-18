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
    public nom: string;
    public cognoms: string;
    public comandes: Comanda[] = [];
    private DNI: string;
    private targetaCredit: string;

    public afegirComanda() {
        
    }

    public mostrarComandes() {

    }

    constructor(nom: string, cognoms: string, DNI: string, targetaCredit: string) {
        this.nom = nom;
        this.cognoms = cognoms;
        this.DNI = DNI;
        this.targetaCredit = targetaCredit;
    }

    get getDNI() {
        return this.DNI;
    }

    set setDNI(DNI: string) {
        this.DNI = DNI;
    }

    get getTargetaCredit() {
        return this.targetaCredit;
    }

    set setTargetaCredit(targetaCredit: string) {
        this.targetaCredit = targetaCredit;
    }

}

class Comanda {
    public nomPlats: string;
    private ID: number;
    private static contadorID: number = 1;

    constructor(nomPlats: string) {
        this.nomPlats = nomPlats;
        this.ID = Comanda.contadorID++;
    }

    get getNomPlats() {
        return this.nomPlats;
    }

    set setNomPlats(nomPlats: string) {
        this.nomPlats = nomPlats;
    }

    get getID() {
        return this.ID;
    }

}

const clients: Client[] = [];

function afegirClient() {
    const nom: string = (document.getElementById("nom") as HTMLInputElement).value;
    const cognoms: string = (document.getElementById("cognom") as HTMLInputElement).value;
    const DNI: string = (document.getElementById("DNI") as HTMLInputElement).value;
    const targetaCredit: string = (document.getElementById("targetaCredit") as HTMLInputElement).value;

    if(nom == "" || cognoms == "" || DNI == "" || targetaCredit == "") {
        alert("Has d'omplir tots els camps");
        return
    } else if (nom == null || cognoms == null || DNI == null || targetaCredit == null) {
        alert("Has d'omplir tots els camps");
        return;
    } else if(DNI.length !== 9) {
        alert("El DNI ha de tenir 9 caràcters");
        return;
    }

    let client = new Client(nom, cognoms, DNI, targetaCredit);

    clients.push(client);
}

function mostrarClients() {

}