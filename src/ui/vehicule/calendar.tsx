import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
//import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import frFR from 'date-fns/locale/fr'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useState } from 'react';
import CustomCalendar from '../calendar/custom-calendar';


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


const CalendarUtilisation = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    setIsSheetOpen(true);
  }

  const handleSheetClose = (event) => {
    if (isSheetOpen)
      setIsSheetOpen(false);
  }


  const myEventsList = [
    {
      start: new Date(),
      end: new Date(),
      title: "Ben Gregory [RTY-45-78]"
    },
    {
      start: new Date(),
      end: new Date(),
      title: "Trajet Paris - Marseille"
    }
  ];




  return (
    <div className='p-4 min-h-[80vh] flex justify-center items-center' onClick={handleSheetClose}>
      <CustomCalendar events={myEventsList} onEventClick={handleEventClick} width={"80vw"} height={"80vh"} views={["month","week"]} />

      <Sheet open={isSheetOpen}>
        <SheetContent id='sheet'>
          <SheetHeader>
            <SheetTitle>Information</SheetTitle>
            <SheetDescription>
              Mettre ici les informations à propos de l'utilisation.
              Par exemple :
              <ul>
                <li>Le nom de l'utilisateur</li>
                <li>Le modèle du véhicule</li>
                <li>La date de début de l'utilisation</li>
                <li>La date de fin de l'utilisation</li>
              </ul>


            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>


    </div>
  );

}

export default CalendarUtilisation;