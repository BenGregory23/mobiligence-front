import { getVehicules } from '../../api/queries';
import { Vehicule as VehiculeType } from '../../types/vehicule';
import Vehicule from './vehicule';
import { useQuery } from '@tanstack/react-query';
import Filtre from './filtre';
const Vehicules = () => {

   
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['vehicules'],
        queryFn: getVehicules,
      })

      if (isLoading) {
        return <div>Loading...</div>
      }

        if (isError) {
            return <div>Error: </div>
        }


    return (
        <div className=' h-[80vh] flex flex-col items-center'>
            <Filtre />
            <div className='grid grid-cols-5 gap-4 h-full'>
                {data.map((vehicule:VehiculeType) => (
                    <Vehicule key={vehicule.id} vehicule={vehicule} />
                ))}
            </div>
        </div>
    );
}

export default Vehicules;
