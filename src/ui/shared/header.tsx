import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  



const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { setIsAuthenticated } = useAuth();


    useEffect(()=>{
        if(window.innerWidth < 768){
            setIsMobile(true)
        }
    })

    if(isMobile){
        return (

            <header className="flex w-full border-b lg:h-20 items-center  mb-2 justify-between px-5">
            <Link to="/">
                <div className="flex space-x-2 items-center">
                    <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path>
                        <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path>
                        <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path>
                        <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path>
                    </svg>
                    <h1 className="text-3xl font-semibold font-montserrat ">Mobiligence</h1>
                </div>
            </Link>

            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <div className="flex space-x-2 items-center">
                        <svg id="logo-15" width="40" height="40" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path>
                            <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path>
                            <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path>
                            <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path>
                        </svg>
                        <h1 className="text-2xl font-semibold font-montserrat ">Mobiligence</h1>
                    </div>
               
                    </SheetHeader>

                    <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-center justify-end space-y-4">
                    <NavigationMenuItem>
                        <Link to="/calendar">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Calendrier
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Véhicules</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href={""}
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Véhicules
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            A modal dialog that interrupts the user with important content and expects a response.
                                        </p>
                                    </a>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href={""}
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Modèles
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            A modal dialog that interrupts the user with important content and expects a response.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                               
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>

                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Utiliser un véhicule
                        </NavigationMenuLink>

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link to="/">
                <Button onClick={() => {
                    setIsAuthenticated(false)

                }}>Déconnexion</Button>
            </Link>

                </SheetContent>
                </Sheet>

            


        </header>

        )
    }



    return (
        <header className="flex w-full border-b lg:h-20 items-center  mb-2 justify-between px-5">
            <Link to="/">
                <div className="flex space-x-2 items-center">
                    <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path>
                        <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path>
                        <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path>
                        <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path>
                    </svg>
                    <h1 className="text-3xl font-semibold font-montserrat ">Mobiligence</h1>
                </div>
            </Link>
            <NavigationMenu>
                <NavigationMenuList className="flex items-center justify-end space-x-4">
                    <NavigationMenuItem>

                        <Link to="/calendar">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Calendrier
                            </NavigationMenuLink>
                        </Link>


                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Véhicules</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href={""}
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Véhicules
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            A modal dialog that interrupts the user with important content and expects a response.
                                        </p>
                                    </a>
                                </NavigationMenuLink>

                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href={""}
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Modèles
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            A modal dialog that interrupts the user with important content and expects a response.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>

                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Utiliser un véhicule
                        </NavigationMenuLink>

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link to="/">
                <Button onClick={() => {
                    setIsAuthenticated(false)

                }}>Déconnexion</Button>
            </Link>



        </header>
    )
}

export default Header;
