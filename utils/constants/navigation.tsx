import FactoryIcon from '@mui/icons-material/Factory';
import CategoryIcon from '@mui/icons-material/Category';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from "@mui/icons-material/Home";
import { SectionNames } from "context/sectionContext";

type NavItems = {
  id: number;
  name: SectionNames;
  text: string;
  icon: JSX.Element
}[];

export const NAV_ITEMS: NavItems = [
  {
    id: 0,
    name: 'hero',
    text: "Fagus Art",
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
