import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"


const Filtre = () => {
    const [filtre, setFiltre] = useState({ marque: '', modele: '' });

    const handleChange = (e) => {
        setFiltre({ ...filtre, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex justify-center  space-x-4 w-full h-20 mb-5  px-10  items-center  p-4  shadow-md border-b ">
            <Input name="marque" value={filtre.marque} onChange={handleChange} placeholder="Rechercher" className="w-[250px]" />
         
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Marque" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Modele" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}


export default Filtre;