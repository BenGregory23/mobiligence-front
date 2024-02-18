import { Button } from "@/components/ui/button";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "../../calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import frFR from 'date-fns/locale/fr'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Footer from "../shared/footer";
import ParallaxText from "../shared/parallaxText";
import CustomCalendar from "../calendar/custom-calendar";
import { motion, useScroll } from "framer-motion";


const locales = {
    'fr': frFR
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})


const Landing = () => {
    const { setIsAuthenticated } = useAuth();
    const { scrollYProgress } = useScroll();

    const handleTest = () => {
        setIsAuthenticated(true);
    }

    return (
        <div className="flex flex-col min-h-screen h-full w-screen  items-center">
            <div className="flex flex-col items-center justify-center space-y-3  lg:min-h-[100vh]  mb-32  ">
                <section className="flex flex-col items-center justify-center space-y-3 w-full lg:w-fit  mb-32  h-screen ">
                    <div className="flex flex-col items-center space-y-3 mb-8 ">
                        <svg id="logo-15" className="h-12 lg:h-24" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" className="ccustom" fill="#17CF97"></path>
                            <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" className="ccustom" fill="#17CF97"></path>
                            <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" className="ccustom" fill="#17CF97"></path>
                            <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path>
                        </svg>
                        <h1 className="font-montserrat font-semibold text-3xl lg:text-4xl">Mobiligence</h1>
                    </div>

                    <div className="flex flex-col items-center w-4/5 lg:w-fit z-50 space-y-2">
                        <Button variant="default" className="mt-4 w-full" onClick={handleTest}>
                            <Link to="/">
                                Tester
                            </Link>

                        </Button>

                        <p className=" font-regular">
                            ou
                        </p>

                        <Button variant="outline" className=" w-full">

                            <Link to="/register">
                                Créer un compte ou se connecter
                            </Link>

                        </Button>
                    </div>

                </section>



                <section className="w-screen overflow-hidden h-[30vh]">
                    <ParallaxText baseVelocity={-5}>Mobiligence &nbsp;</ParallaxText>
                    <ParallaxText baseVelocity={5}>Mobiligence&nbsp;</ParallaxText>
                </section>


                <section className="h-fit space-x-24 flex justify-center items-center ">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Testez notre outil
                        <p className="text-2xl font-normal">pour gérer vos utilisations de véhicules</p>
                    </h1>
                    <motion.div initial={{ scale: 0 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.55 }}
                    >

                    </motion.div>

                    <motion.div initial={{ scale: 0 }}
                        whileInView={{ scale: 1, rotate: 5 }}
                        transition={{ duration: 0.5, type: "spring", bounce: 0.55 }}
                        className="mt-6">
                        <CustomCalendar showToolbar={false} width={800} defaultView="month" />
                    </motion.div>
                </section>


            </div>


            <div className="blur-3xl w-screen h-screen absolute  overflow-hidden z-49">
                <div className="relative top-[calc(50%-85vh)] left-[calc(75%-0vh)] h-[90vh] w-[90vh] rounded-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-teal-200 to-lime-200  z-49"></div>
                <div className="relative top-[calc(10%-100vh)] right-[calc(25%)] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-teal-200 to-lime-200  z-49"></div>
            </div>

            <Footer className="z-50" />
        </div>
    );
}

export default Landing;