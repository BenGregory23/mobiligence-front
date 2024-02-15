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
import {useState } from 'react';


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

  const handleEventClick = (event:Event) => {
    setIsSheetOpen(true);
  }

  const handleSheetClose = (event) => {
    if(isSheetOpen)
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
    <div className='p-4 h-[80vh]' onClick={handleSheetClose}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        onSelectEvent={(event) => {
            handleEventClick(event);
        }}
       

        style={{ height: "100%" }}
        culture="fr"
        messages={{
          next: "Suivant",
          previous: "Précédent",
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          agenda: "Agenda",
          date: "Date",
          time: "Heure",
          event: "Événement",
          allDay: "toute la journée",

        }}
      />

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