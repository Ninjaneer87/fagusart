import { FormControls } from "@/types/form-controls.type";
import { Validators } from "./Validators";
import FactoryIcon from '@mui/icons-material/Factory';
import CategoryIcon from '@mui/icons-material/Category';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from "@mui/icons-material/Home";
import { SectionNames } from "context/sectionContext";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { getPhotoObject } from "./utility";

export const EMAIL_REGEX = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,})+$/;

export const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/fagusart.apatin/",
    icon: <FacebookIcon color="primary" />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/amidzicfagusart",
    icon: <InstagramIcon color="primary" />,
  },
  {
    name: "Lokacija",
    link: "https://google.com/",
    icon: <LocationOnIcon color="primary" />,
  },
];


type NavItems = {
  id: number;
  name: SectionNames;
  text: string;
  icon: JSX.Element
}[];

export const navItems: NavItems = [
  {
    id: 0,
    name: 'hero',
    text: "FagusArt",
    icon: <HomeIcon />,
  },
  {
    id: 1,
    name: 'about',
    text: "O nama",
    icon: <FactoryIcon />,
  },
  {
    id: 2,
    name: 'products',
    text: "Ponuda",
    icon: <CategoryIcon />,
  },
  {
    id: 3,
    name: 'gallery',
    text: "Galerija",
    icon: <FolderSpecialIcon />,
  },
  {
    id: 4,
    name: 'contact',
    text: "Kontakt",
    icon: <EmailIcon />,
  }
];

export const contactFormInputs: FormControls = {
  fullName: {
    elementType: "text-input",
    label: "Ime i prezime *",
    value: "",
    validators: [Validators.required],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
  email: {
    elementType: "text-input",
    label: "Vaš e-mail *",
    value: "",
    validators: [Validators.required, Validators.email],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
  subject: {
    elementType: "text-input",
    label: "Naslov *",
    value: "",
    validators: [Validators.required],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
  message: {
    elementType: "text-area",
    label: "Poruka *",
    value: "",
    validators: [Validators.required],
    validationErrorMessage: "",
    required: true,
    valid: false,
    touched: false,
  },
};


export const aboutItems = [
  {
    id: 0,
    icon: <AutoFixHighIcon color="primary" fontSize="large" />,
    desc: <div>
      U potrazi za savršenim nameštajem po meri?
      <br />
      Naše preduzeće je specijalizovano za izradu nameštaja prema vašim željama i potrebama.
      <br />
      <br />
      Od modernih dizajnova do tradicionalnih stilova, mi smo tu da ispunimo sve vaše želje.
    </div>,
  },
  {
    id: 1,
    icon: <EmojiEventsIcon color="primary" fontSize="large" />,
    desc: <div>
      Bavimo se izradom nameštaja po meri od 2007. godine.
      <br />
      <br />
      Mi smo stručni tim sa dugogodišnjim iskustvom u projektovanju i izradi kvalitetnog nameštaja prema vašim željama.
    </div>,
  },
  {
    id: 2,
    icon: <HandshakeIcon color="primary" fontSize="large" />,
    desc: <div>
      Naša prednost je što prilagođavamo svoje proizvode svakom pojedinačnom klijentu, garantujemo kvalitet i preciznost u svakom detalju, sa ciljem da stvorimo savršen ambijent u vašem domu ili poslovnom prostoru.
    </div>,
  },
];

export const featuredProducts = [
  {
    id: 0,
    img: "images/icons/kitchen.svg",
    label: 'Kuhinje',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, a quos, laboriosam, nihil odit omnis maiores.'
  },
  {
    id: 1,
    img: "images/icons/bedroom.svg",
    label: 'Spavaće sobe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, a quos, laboriosam, nihil odit omnis maiores.'
  },
  {
    id: 2,
    img: "images/icons/office.svg",
    label: 'Kancelarijski nameštaj',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, a quos, laboriosam, nihil odit omnis maiores.'
  },
  {
    id: 3,
    img: "images/icons/closet.svg",
    label: 'Plakari',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, a quos, laboriosam, nihil odit omnis maiores.'
  },
  {
    id: 4,
    img: "images/icons/door.svg",
    label: 'Sobna vrata',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, a quos, laboriosam, nihil odit omnis maiores.'
  },
  {
    id: 5,
    img: "images/icons/living-room.svg",
    label: 'Dnevni boravak',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, a quos, laboriosam, nihil odit omnis maiores.'
  },
];

export const otherProducts = [
  "Građevinsku stolariju",
  "Stepeništa",
  "Predsoblja",
  "Kupatila",
  "Opremu enterijera",
];

export const galleryImages = [
  {
    src: "images/gallery/1.jpg",
    width: 901,
    height: 1187
  },
  {
    src: "images/gallery/2.jpg",
    width: 894,
    height: 1192
  },
  {
    src: "images/gallery/3.jpg",
    width: 825,
    height: 878
  },
  {
    src: "images/gallery/4.jpg",
    width: 1080,
    height: 1440
  },
  {
    src: "images/gallery/5.jpg",
    width: 1080,
    height: 1440
  },
  {
    src: "images/gallery/6.jpg",
    width: 877,
    height: 902
  },
  {
    src: "images/gallery/7.jpg",
    width: 1171,
    height: 1200
  },
  {
    src: "images/gallery/8.jpg",
    width: 1166,
    height: 1166
  },
  {
    src: "images/gallery/9.jpg",
    width: 959,
    height: 840
  },
  {
    src: "images/gallery/10.jpg",
    width: 820,
    height: 848
  },
  {
    src: "images/gallery/11.jpg",
    width: 472,
    height: 796
  },
  {
    src: "images/gallery/12.jpg",
    width: 1088,
    height: 1182
  },
  {
    src: "images/gallery/13.jpg",
    width: 900,
    height: 1346
  },
  {
    src: "images/gallery/14.jpg",
    width: 1052,
    height: 1520
  },
  {
    src: "images/gallery/15.jpg",
    width: 1189,
    height: 895
  },
  {
    src: "images/gallery/16.jpg",
    width: 1500,
    height: 1000
  },
];

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

export const photos = galleryImages.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: photo.src,
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);

      return {
        src: photo.src,
        width: breakpoint,
        height
      };
    })
  };
});