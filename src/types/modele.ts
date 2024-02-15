import { TypeCarburant } from "./enums";

export interface Modele {
    id: string,
    marque: string,
    modele: string,
    typeCarburant: TypeCarburant,
}