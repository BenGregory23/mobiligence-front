import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Home = () => {

    // make grid but only use the middle 2 columns
    return (
        <div className='flex flex-col  max-w-full  items-center h-[90vh] py-5  '>
            <div className='w-5/6 lg:w-1/3 flex h-full flex-col  justify-center items-center  space-y-4'>



                <Card className="relative max-h-96  w-full h-full lg:w-full rounded-sm lg:col-span-2 lg:row-span-2  ">
                    <img src="https://images.unsplash.com/photo-1536825591064-574efec257f2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='top-0 absolute rounded-sm w-full h-full object-cover z-0 opacity-95' />

                    <h2 className='absolute bottom-0 text-white text-2xl font-semibold p-4 bg-transparent z-50'>
                        Utiliser un véhicule
                        <p className='text-sm '>
                            Vous pouvez accéder au formulaire d'utilisation de véhicule pour enregistrer une utilisation.
                        </p>
                    </h2>
                    <Link to={"/utilisations/new"}>
                        <Button className='absolute top-0 right-0 m-4 px-10 py-5 ' variant='default' >
                            Let's go →
                        </Button>
                    </Link>
                    <div className='absolute top-1/2 left-0 w-full h-1/2  opacity-50 rounded-sm  bg-gradient-to-t from-black to-transparent z-0'>
                    </div>
                </Card>

                <div className='flex space-x-2 lg:space-x-4  w-full   h-fit justify-center'>
                    <Card className='w-1/2 max-h-48 m-0 rounded-sm min-h-58'>
                        <CardHeader className='h-1/2'>
                            <CardTitle>Calendrier</CardTitle>
                            <CardDescription > Le calendrier permet de visualiser les disponibilités des véhicules.</CardDescription>
                        </CardHeader>
                        <CardContent className='flex items-end  h-1/2'>
                            <Link to="/calendar" className='w-full'>
                            <Button className='w-full'>
                                    Y Aller →
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className=' w-1/2 max-h-48 m-0 rounded-sm min-h-58'>
                        <CardHeader className='h-1/2'>
                            <CardTitle>Véhicules</CardTitle>
                            <CardDescription> Liste des véhicules enregistrés</CardDescription>
                        </CardHeader>
                        <CardContent className='flex items-end w-full   h-1/2'>
                            <Link to="/vehicules" className='w-full' >
                                <Button className='w-full'>
                                    Y Aller →
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>

                <Accordion type="single" collapsible className="z-50  w-full min-w-max ">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Je ne peux pas ajouter de véhicule c'est normal ?</AccordionTrigger>
                        <AccordionContent className='max-w-prose'>
                            Oui, c'est normal. Seuls les administrateurs peuvent ajouter des véhicules ou des modèles. Si ce projet était destiné à être utilisé ces fonctionnalités seraient disponibles pour des comptes non-administrateurs.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Pourquoi faire ce projet ?</AccordionTrigger>
                        <AccordionContent className='max-w-prose' >
                            J'ai ce projet pour montrer mes compétences en développement web tout en répondant un besoin que j'avais rencontré lors de ma précedente expérience professionnelle.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Quelles sont les technologies utilisées ?</AccordionTrigger>
                        <AccordionContent className='max-w-prose'>
                            {/* react and java spring boot and a postgres db */}
                            Pour le front-end, j'ai utilisé React et Tailwind CSS. Pour le back-end, j'ai utilisé Java Spring Boot et une base de données Postgres.

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>



            </div>









        </div>
    )
}


export default Home;