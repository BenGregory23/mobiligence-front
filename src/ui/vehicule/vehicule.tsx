import { Button } from "@/components/ui/button";
import { Etat } from "@/types/enums";
import { Vehicule } from "@/types/vehicule";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { marqueVehiculeToImageLink } from "@/lib/utils";

const etatUtilisationVehicule = (etat: Etat) => {
    switch (etat) {
        case Etat.DISPONIBLE:
            return (
                <Button variant="default" className="bg-custom-green" >
                    Utiliser ce véhicule
                </Button>
            )
        case Etat.EN_UTILISATION:
            return (
                <Button variant="destructive" className="bg-custom-green" disabled >
                    Véhicule en cours d'utilisation
                </Button>
            )
        case Etat.EN_REPARATION:
            return (
                <Button variant="destructive" className="bg-custom-green" disabled >
                    En réparation
                </Button>
            )
        case Etat.BESOIN_ESSSENCE:
            return <Button variant="destructive" disabled>
                Essence faible
            </Button>
    }
}


const Vehicule = ({ vehicule }: { vehicule: Vehicule }) => {
    console.log(vehicule);
    const [logo, setLogo] = useState<string>("");

    useEffect(() => {
        setLogo(marqueVehiculeToImageLink(vehicule.modele.marque));
    }, [vehicule.modele.marque]);


    return (
        <Card className="flex flex-col justify-between pb-2  lg:min-h-48 lg:max-h-64 lg:max-w-90 rounded-sm  ">
            <CardHeader className="h-fit flex flex-row items-center  space-x-4">
                <img src={logo} alt="logo" className="h-12 " />


                <div className="flex flex-col ">
                    <h2 className="flex text-2xl font-semibold  ">   {vehicule.modele.marque} {vehicule.modele.modele}</h2>
                    <p className=" text-sm text-muted-foreground">{vehicule.immatriculation} |  {vehicule.nombrePlace} places</p>
                </div>

            </CardHeader>


            <CardContent className="h-1/3">
                <p className="text-md text-muted-foreground">
                    Kilométrage :
                    <span className="text-black font-semibold text-lg">
                        {" "}{vehicule.kilometrage}  km
                    </span>

                </p>

                <p className="text-md text-muted-foreground">
                    Niveau de carburant :
                    <span className="text-black font-semibold text-lg">
                        {" "}{vehicule.niveauEssence} <span className="text-md font-thin text-muted-foreground">
                            ({vehicule.modele.typeCarburant.toLowerCase()})</span>
                    </span>
                </p>



            </CardContent>

            <CardFooter className="h-1/3 w-full">
                {
                    etatUtilisationVehicule(vehicule.etat)
                }
            </CardFooter>
        </Card>
    )
}

export default Vehicule;