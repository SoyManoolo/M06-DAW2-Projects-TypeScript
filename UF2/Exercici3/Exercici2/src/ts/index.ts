class Client {
    public nom: string;
    public cognoms: string;
    public comandes: Comanda[] = [];
    private DNI: string;
    private targetaCredit: string;

    constructor(nom: string, cognoms: string, DNI: string, targetaCredit: string) {
        this.nom = nom;
        this.cognoms = cognoms;
        this.DNI = DNI;
        this.targetaCredit = targetaCredit;
        this.comandes = [];
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

    public afegirComanda(comanda: Comanda) {
        this.comandes.push(comanda);
    }

    public mostrarComandes() {
        let resultat: string = "";

        this.comandes.forEach(comanda => {
            resultat += comanda.nomPlats + "\n";
        });

        return resultat;
    }

}

class Comanda {
    public nomPlats: string;
    private _id: number;

    private static contadorID: number = 1;

    constructor(nomPlats: string) {
        this.nomPlats = nomPlats;
        this._id = Comanda.contadorID++;
    }

    get getNomPlats() {
        return this.nomPlats;
    }

    set setNomPlats(nomPlats: string) {
        this.nomPlats = nomPlats;
    }

    get getID() {
        return this._id;
    }

}

const clients: Client[] = [];
const comandes: Comanda[] = [];

function afegirClient() {
    const nom: HTMLInputElement = document.getElementById("nom") as HTMLInputElement;
    const cognoms: HTMLInputElement = document.getElementById("cognom") as HTMLInputElement;
    const DNI: HTMLInputElement = document.getElementById("dni") as HTMLInputElement;
    const targetaCredit: HTMLInputElement = document.getElementById("targeta") as HTMLInputElement;

    if(nom.value == "" || cognoms.value == "" || DNI.value == "" || targetaCredit.value == "") {
        alert("Has d'omplir tots els camps");
        return
    } else if(DNI.value.length !== 9) {
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

function mostrarClients(clients: Client[]): void {
    const clientsDiv: HTMLDivElement = document.getElementById("clients") as HTMLDivElement;

    clientsDiv.innerHTML = "";

    clients.forEach(client => {
        clientsDiv.innerHTML += `${client.nom} ${client.cognoms}<br>`;
    });
}

function afegirComanda(): void {
    const nomPlats: HTMLInputElement = document.getElementById("nomPlat") as HTMLInputElement;

    if(nomPlats.value == "") {
        alert("Has d'omplir el camp");
        return;
    }

    let comanda = new Comanda(nomPlats.value);

    comandes.push(comanda);

    mostrarComandes(comandes);

    nomPlats.value = "";
}

function mostrarComandes(comandes: Comanda[]): void {
    const comandesDiv: HTMLDivElement = document.getElementById("comandes") as HTMLDivElement;

    comandesDiv.innerHTML = "";

    comandes.forEach(comanda => {
        comandesDiv.innerHTML += `${comanda.nomPlats}<br>`;
    });
}

function afegirComandaClient(): void {
    const comanda: HTMLInputElement = document.getElementById("nomPlatClient") as HTMLInputElement;
    const dni: HTMLInputElement = document.getElementById("dniClient") as HTMLInputElement;

    if(comanda.value == "" || dni.value == "") {
        alert("Has d'omplir els camps");
        return;
    }

    let client: Client = clients.find(client => client.getDNI == dni.value) as Client;
    let comandaObject: Comanda = comandes.find(c => c.getNomPlats == comanda.value) as Comanda;

    if (client && comandaObject) {
        client.afegirComanda(comandaObject);
        comanda.value = "";
        dni.value = "";
    } else {
        alert("El client o la comanda no existeixen");
        comanda.value = "";
        dni.value = "";
    }
}

function mostrarComandesClient(): void {
    const comandesClientDiv: HTMLDivElement = document.getElementById("comandesClients") as HTMLDivElement;
    comandesClientDiv.textContent = "";

    const dni: HTMLInputElement = document.getElementById("dniClientComanda") as HTMLInputElement;
    let client: Client = clients.find(client => client.getDNI == dni.value) as Client;

    if (client && client.comandes.length > 0) {
        let clientDNI: HTMLElement = document.createElement("h3");
        clientDNI.textContent = client.getDNI;
        for (let i = 0; i < client.comandes.length; i++) {
            comandesClientDiv.innerHTML += client.comandes[i].nomPlats + "<br>";
        }
    } else {
        alert("El client no existeix o no té comandes");
    }

    dni.value = "";
}