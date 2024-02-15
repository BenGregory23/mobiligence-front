import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {useQuery} from '@tanstack/react-query'
import { getModeles } from "@/api/queries";
import { Modele } from "@/types/modele";


const Filtre = ({setFiltreParent}:any) => {
    const [filtre, setFiltre] = useState({ marque: '', modele: '', places: ''});
    const { data, isLoading, isError } = useQuery({queryFn: getModeles, queryKey: ['modeles']})
    
    useEffect(() => {
        console.log(filtre);
    }
    ,[filtre])


    return (
        <div className="flex justify-center  space-x-4 w-full h-20 mb-5  px-10  items-center  p-4  shadow-md border-b ">
            <Input name="marque" value={filtre.marque}  placeholder="Rechercher" className="w-[250px]" />

            <Select onValueChange={(value) => setFiltre({ ...filtre, marque: value })} >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Marque" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Tous">
                        Tous
                    </SelectItem>
                    {data && data.map((modele: Modele) => (
                        <SelectItem key={modele.id} value={modele.marque} >
                            {modele.marque}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select onValueChange={(value) => setFiltre({ ...filtre, modele: value })} >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Modele" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Tous">
                        Tous
                    </SelectItem>
                    {data && data.map((modele: Modele) => (
                        <SelectItem key={modele.id} value={modele.modele}>
                            {modele.modele}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Input name="places" value={filtre.places}  placeholder="Places" className="w-[80px]" />
        </div>
    );
}


export default Filtre;