import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
//import "react-big-calendar/lib/css/react-big-calendar.css";
import "./custom-calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import frFR from 'date-fns/locale/fr'
import { Vehicule } from '@/types/vehicule';
import { Utilisation } from '@/types/utilisation';
import { Utilisateur } from '@/types/utilisateur';
import { useMemo } from 'react';


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

interface CustomCalendarProps {
    events?: any
    vehicules?: Vehicule[]
    utilisations?: Utilisation[]
    utilisateurs?: Utilisateur[]
    showToolbar?: boolean
    height?: number | string
    width?: number | string
    defaultView?: "month" | "week" | "day" | "agenda",
    onEventClick?: (event: any) => void,
    views?: string[]
}

// Todo : implements functions to fetch the correspondings event for vehicules, utilisations and utilisateurs

const CustomCalendar = ({ events, vehicules, utilisations, utilisateurs, showToolbar, height, width, defaultView, onEventClick, views }: CustomCalendarProps) => {

    const components = useMemo(() => ({
        event: CustomEvent,
    }), [])



    return (

        <Calendar
           
            localizer={localizer}
            events={events ? events : []}
            startAccessor="start"
            endAccessor="end"
            defaultView={defaultView ? defaultView : "month"}
            onSelectEvent={onEventClick}
            toolbar={showToolbar}
            onTileClick={(event) => console.log(event)}
            style={{
                height: height ? height : 500,
                width: width ? width : 500
            }}
            views={views ? views : ["month", "week", "day", "agenda"]}
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
    )

}

export default CustomCalendar
