import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Footer from '../shared/footer';


const Home = () => {

    // make grid but only use the middle 2 columns
    return (
        <div className='flex flex-col  max-w-full  items-center h-[90vh]  '>
            <div className='flex space-x-4 p-3 w-2/4  h-full'>
                <Card className='max-w-prose w-72 max-h-48'>
                    <CardHeader className='h-1/2'>
                        <CardTitle>Calendrier</CardTitle>
                        <CardDescription > Le calendrier permet de visualiser les disponibilités des véhicules.</CardDescription>
                    </CardHeader>
                    <CardContent className='flex items-end  h-1/2'>
                        <Link to="/calendar">
                            <Button >
                                Voir
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <Card className='max-w-prose w-72 max-h-48'>
                    <CardHeader className='h-1/2'>
                        <CardTitle>Véhicules</CardTitle>
                        <CardDescription> Liste des véhicules enregistrés</CardDescription>
                    </CardHeader>
                    <CardContent className='flex items-end  h-1/2'>
                        <Link to="/vehicules" >
                            <Button >
                                Voir
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>




           

        </div>
    )
}


export default Home;