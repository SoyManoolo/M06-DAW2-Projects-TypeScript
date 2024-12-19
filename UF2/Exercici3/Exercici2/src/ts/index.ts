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

    constructor(nom: string, cognoms: string, DNI: string, targetaCredit: string) {
        this.nom = nom;
        this.cognoms = cognoms;
        this.DNI = DNI;
        this.targetaCredit = targetaCredit;
    }

    public afegirComanda(comanda: Comanda) {

    }

    public mostrarComandes() {

    }

}

class Comanda {
    public nomPlats: string;
    private ID: number;

    constructor(nomPlats: string) {
        this.nomPlats = nomPlats;
    }
}