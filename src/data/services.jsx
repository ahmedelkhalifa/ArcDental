import {
  AutoAwesomeOutlined,
  CalendarMonthOutlined,
  East,
} from "@mui/icons-material";
import generalDentistryImg from "../assets/services/service1.webp";
import dentalImplantImg from "../assets/services/service2.webp";
import orthodontics from "../assets/services/service3.webp";
import cosmeticDentistryImg from "../assets/services/service4.webp";
import rootCanalImg from "../assets/services/service5.webp";
import periodontalImg from "../assets/services/service6.webp";
import oralSurgeryImg from "../assets/services/service7.webp";
import digitalImg from "../assets/services/service8.webp";
import { FaTooth } from "react-icons/fa";
import { GiAncientScrew } from "react-icons/gi";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { TbContract, TbDental } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiQrScan2Line } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import generalDentistry from "../assets/services/service1.webp";
import dentalImplant from "../assets/services/service2.webp";
export const services = [
  {
    id: 1,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "General Dentistry",
    desc: "Routine check-ups, cleaning, and preventive care to maintain your oral health.",
    image: generalDentistry,
    icon: <FaTooth fontSize={24} />,
    page: {
      title: "What Is General Dentistry",
      description:
        "General dentistry encompasses a wide range of dental services focused on maintaining and improving your oral health. It includes routine check-ups, cleanings, fillings, preventive care, and early detection of dental issues. Our general dentistry services aim to keep your teeth and gums healthy, prevent dental problems, and provide personalized care for a lifetime of smiles.",
      bullets: [
        "Comprehensive oral health care for all ages.",
        "Early detection and treatment of dental issues.",
        "Personalized preventive care and education.",
        "Maintaining healthy teeth and gums for life.",
      ],
      sub1: "Comprehensive care designed to maintain your",
      sub2: "oral health and keep your smile shining.",
      image: generalDentistry,
      processTitle: "Our General Dentistry Services",
    },
    processSteps: [
      {
        number: "1",
        title: "Oral Examination",
        description:
          "Our dentists perform a thorough examination of your teeth, gums, and mouth to assess your oral health and identify any issues.",
        icon: <FaTooth fontSize={36} />,
      },
      {
        number: "2",
        title: "Dental Cleaning",
        description:
          "We provide professional dental cleanings to remove plaque and tartar, promoting healthy gums and fresh breath.",
        icon: <CalendarMonthOutlined fontSize={"large"} />,
      },
      {
        number: "3",
        title: "Preventive Care",
        description:
          "We provide personalized preventive care and education to help you maintain optimal oral health and prevent future dental problems.",
        icon: <AutoAwesomeOutlined fontSize={"large"} />,
      },
    ],
  },

  {
    id: 2,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "Dental Implants",
    desc: "Permanent, natural-looking solutions for missing teeth with long-lasting results.",
    icon: <GiAncientScrew fontSize={24} />,
    image: dentalImplant,
    processSteps: [
      {
        number: "1",
        title: "Consultation & Assessment",
        description:
          "Our initial consultation involves a thorough examination of your oral health and discussion of your treatment goals.",
        icon: <RiQrScan2Line fontSize={36} />,
      },
      {
        number: "2",
        title: "Treatment Planning",
        description:
          "We create a personalized treatment plan based on your needs, including implant placement and restoration options.",
        icon: <TbContract fontSize={36} />,
      },
      {
        number: "3",
        title: "Implant Placement",
        description:
          "Our skilled surgeons place the dental implant into the jawbone with precision and care.",
        icon: <GiAncientScrew fontSize={36} />,
      },
      {
        number: "4",
        title: "Healing & Osseointegration",
        description:
          "The implant fuses with the jawbone over several months, providing a strong foundation for the replacement tooth.",
        icon: <MdOutlineHealthAndSafety fontSize={36} />,
      },
      {
        number: "5",
        title: "Final Restoration",
        description:
          "Once healed, we attach a custom-made crown, bridge, or denture to the implant for a natural-looking smile.",
        icon: <TbDental fontSize={36} />,
      },
    ],
    page: {
      title: "What Are Dental Implants",
      description:
        "Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. They provide a strong foundation for fixed or removable replacement teeth, designed to match your natural teeth. Implants help restore function and aesthetics, allowing you to eat, speak, and smile with confidence.",
      bullets: [
        "Durable and long-lasting solution for tooth loss.",
        "Preserves jawbone health and prevents bone loss.",
        "Improves speech and chewing ability.",
        "Enhances appearance and boosts self-confidence.",
      ],
      sub1: "Permanent solutions designed to restore your",
      sub2: "smile, confidence and oral function.",
      image: generalDentistry,
      processTitle: "The Dental Implant Process",
    },
  },

  {
    id: 3,
    title: "Orthodontics",
    desc: "Straighten your teeth with modern braces and clear aligner treatments.",
    image: orthodontics,
    icon: <LiaTeethOpenSolid fontSize={24} />,
  },
  {
    id: 4,
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with whitening, veneers, and aesthetic treatments",
    image: cosmeticDentistryImg,
    icon: <AutoAwesomeOutlined fontSize={"medium"} />,
  },
  {
    id: 5,
    title: "Root Canal Treatment",
    desc: "Relieve pain and save your natural teeth with advanced root canal therapy.",
    image: rootCanalImg,
    icon: <TbDental fontSize={24} />,
  },
  {
    id: 6,
    title: "Periodontal Care",
    desc: "Gum disease treatment and maintenance for healthy gums and strong teeth.",
    image: periodontalImg,
    icon: <FaHandHoldingHeart fontSize={24} />,
  },
  {
    id: 7,
    title: "Oral Surgery",
    desc: "Safe and comfortable surgical solutions, including widsom teeth extraction.",
    image: oralSurgeryImg,
    icon: <FaUserDoctor fontSize={24} />,
  },
  {
    id: 8,
    title: "Digital Dentistry",
    desc: "Advanced digital technology for percise diagnosis and efficient treatment.",
    image: digitalImg,
    icon: <RiQrScan2Line fontSize={24} />,
  },
];
