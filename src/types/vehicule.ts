import { Etat, NiveauEssence } from "./enums";
import { Modele } from "./modele";

export interface Vehicule {
    id: string,
    immatriculation: string,
    couleur : string,
    nombrePlace : number,
    kilometrage : number,
    niveauEssence : NiveauEssence,
    etat: Etat,
    informations: string,
    modele: Modele
}