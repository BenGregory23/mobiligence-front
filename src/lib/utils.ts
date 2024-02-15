import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function nomCouleurToTailwind(nomCouleur: string) {
  switch (nomCouleur) {
    case 'Rouge':
      return 'red-500'
    case 'Bleu':
      return 'blue-500'
    case 'Vert':
      return 'green-500'
    case 'Jaune':
      return 'yellow-500'
    case 'Blanc':
      return 'white'
    case 'Noir':
      return 'black'
    case 'Gris':
      return 'gray-500'
    default:
      return 'red-500'
  }
}


export const nomVehiculeToImageLink = (nomVehicule: string) => {
  switch (nomVehicule.toLowerCase()) {
    case 'clio':
      return '/clio.jpg'
    case 'megane':
      return '/megane.jpg'
    case 'captur':
      return '/captur.jpg'
    case 'kadjar':
      return '/kadjar.jpg'
    case 'koleos':
      return '/koleos.jpg'
    case 'scenic':
      return '/scenic.jpg'
    case 'talisman':
      return '/talisman.jpg'
    case 'twingo':
      return '/twingo.jpg'
    case 'zoe':
      return '/zoe.jpg'
    case '208':
      return '/208.jpg'
    case '308':
      return '/308.jpg'
    case '3008':
      return '/3008.jpg'
    case '5008':
      return '/5008.jpg'
    case '508':
      return '/508.jpg'
    case '2008':
      return '/2008.jpg'
    case '3008':
      return '/3008.jpg'
    case '5008':
      return '/5008.jpg'
    case 'partner':
      return '/partner.jpg'
    case 'expert':
      return '/expert.jpg'
    case 'boxer':
      return '/boxer.jpg'
    case 'C1':
      return '/C1.jpg'
    case 'C3':
      return '/C3.jpg'
    case 'C3 Aircross':
      return '/C3 Aircross.jpg'
    case 'C4':
      return '/C4.jpg'
    case 'C4 Cactus':
      return '/C4 Cactus.jpg'
    case 'C4 Picasso':
      return '/C4 Picasso.jpg'
    case 'C5':
      return '/C5.jpg'
    case 'C5 Aircross':
      return '/C5 Aircross.jpg'
    case 'Berlingo':
      return '/Berlingo.jpg'
    case 'Jumper':
      return '/Jumper.jpg'
    case 'Jumpy':
      return '/Jumpy.jpg'
    default:
      return '/clio.jpg'
  }
}

export const marqueVehiculeToImageLink = (marqueVehicule: string) => {
  switch (marqueVehicule.toLowerCase()) {
    case 'renault':
      return 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F9%2FRenault-Logo-PNG-Image.png&f=1&nofb=1&ipt=906dcb70f5f30462a08035e9fd042e7531040ed115c7cce6c873a8ad8d0718b1&ipo=images'
    case 'peugeot':
      return 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2014%2F09%2Fpeugeot-logo-1-1.png&f=1&nofb=1&ipt=7d656cbcb3f00a170a5a4e3e9e08256c460993d7cec1b69b2fe0063c92d4a2e1&ipo=images'
    case 'citroen':
      return 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2019%2F12%2FCitroen-Logo.png&f=1&nofb=1&ipt=70ef2ddeba7f792cd36ccbbf1292ce94bc4dbec2e6d2b307d5a60d73c549aff6&ipo=images'
    default:
      return ''
  }
}
