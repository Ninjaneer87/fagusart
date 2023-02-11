import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { FormControls } from "@/types/form-controls.type";
import { Validators } from "../Validators";

export const LOCATION_URL = "https://www.google.com/maps/dir//fagusart+lokacija/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x475cc7b1012e997d:0x5343fb2aa44136a8?sa=X&ved=2ahUKEwjdtYmSkIH9AhXsxIsKHYlMCWAQ9Rd6BAg_EAU&hl=sr";

export const SOCIAL_ITEMS = [
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
    link: LOCATION_URL,
    icon: <LocationOnIcon color="primary" />,
  },
];

export const CONTACT_ITEMS = [
  {
    icon: <PhoneIphoneIcon />,
    href: "tel:+38163557542",
    target: "",
    label: "+381 63 / 557 542 ↗",
    copyValue: "+38163557542",
    message: 'Broj telefona kopiran'
  },
  {
    icon: <PhoneIphoneIcon />,
    href: "tel:+381638088423",
    target: "",
    label: "+381 63 / 88 58 391 ↗",
    copyValue: "+381638088423",
    message: 'Broj telefona kopiran'
  },
  {
    icon: <MailOutlineIcon />,
    href: "mailto:fagusartdoo@gmail.com",
    target: "",
    label: "fagusartdoo@gmail.com ↗",
    copyValue: "fagusartdoo@gmail.com",
    message: 'E-mail adresa kopirana'
  },
  {
    icon: <LocationOnOutlinedIcon />,
    href: LOCATION_URL,
    target: "_blank",
    label: "Preduzetnička 2b, Apatin ↗",
    copyValue: LOCATION_URL,
    message: 'Lokacija kopirana'
  }
]

export const CONTACT_FORM_INPUTS : FormControls = {
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

