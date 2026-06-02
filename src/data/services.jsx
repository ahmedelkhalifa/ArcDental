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
import singleTooth from "../assets/services/dentalImplant/single.webp";
import multipleTooth from "../assets/services/dentalImplant/multiple.webp";
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
      faq: [
        {
          question:
            "How often should I visit the dentist for general check-ups?",
          answer:
            "It is generally recommended to visit the dentist every six months for routine check-ups and cleanings. However, your dentist may recommend more frequent visits based on your individual oral health needs.",
        },
        {
          question: "What services are included in general dentistry?",
          answer:
            "General dentistry includes a wide range of services such as dental exams, cleanings, fillings, preventive care, oral cancer screenings, and early detection of dental issues.",
        },
        {
          question:
            "How can I maintain good oral health between dental visits?",
          answer:
            "Maintaining good oral health involves regular brushing and flossing, a balanced diet, avoiding tobacco products, and scheduling regular dental check-ups for preventive care.",
        },
        {
          question: "Is general dentistry suitable for children?",
          answer:
            "Yes, general dentistry is suitable for patients of all ages, including children. Pediatric dental care focuses on the unique needs of children's oral health, providing preventive care and early treatment to ensure healthy smiles as they grow.",
        },
      ],
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
      beforeAfter: [
        {
          id: 1,
          image: singleTooth,
          title: "Single Tooth Implant",
          description:
            "Replacing a single missing tooth with a dental implant and crown for a natural look.",
        },
        {
          id: 2,
          image: multipleTooth,
          title: "Multiple Teeth Implants",
          description:
            "Replacing multiple missing teeth with a dental implant and crown for a natural look.",
        },
      ],
      faq: [
        {
          question: "How long do dental implants last?",
          answer:
            "With proper care, dental implants can last a lifetime. Regular dental check-ups and good oral hygiene are essential to maintain their longevity.",
        },
        {
          question: "Is the dental implant procedure painful?",
          answer:
            "The procedure is typically performed under local anesthesia, so you should not feel pain during the surgery. Some discomfort and swelling may occur afterward, but it can be managed with prescribed pain medication.",
        },
        {
          question: "Am I a candidate for dental implants?",
          answer:
            "Most people with good overall health and sufficient jawbone density are candidates for dental implants. A thorough evaluation by our dental team will determine if implants are the right option for you.",
        },
        {
          question: "How much do dental implants cost?",
          answer:
            "The cost of dental implants varies depending on factors such as the number of implants needed, the complexity of the procedure, and the geographic location. We offer competitive pricing and financing options to make treatment accessible.",
        },
      ],
    },
  },

  {
    id: 3,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "Orthodontics",
    desc: "Straighten your teeth with modern braces and clear aligner treatments.",
    image: orthodontics,
    icon: <LiaTeethOpenSolid fontSize={24} />,
    processSteps: [
      {
        number: "1",
        title: "Initial Consultation",
        description:
          "We evaluate your teeth and bite to determine the best orthodontic treatment plan for you.",
        icon: <CalendarMonthOutlined fontSize={"large"} />,
      },
      {
        number: "2",
        title: "Treatment Planning",
        description:
          "We create a personalized treatment plan, including the type of braces or aligners that best suit your needs.",
        icon: <TbContract fontSize={36} />,
      },
      {
        number: "3",
        title: "Appliance Placement",
        description:
          "We carefully place your braces or provide you with your custom clear aligners to start your orthodontic journey.",
        icon: <LiaTeethOpenSolid fontSize={36} />,
      },
      {
        number: "4",
        title: "Regular Adjustments",
        description:
          "We schedule regular appointments to adjust your braces or provide new sets of aligners to ensure your treatment progresses as planned.",
        icon: <CalendarMonthOutlined fontSize={"large"} />,
      },
      {
        number: "5",
        title: "Retention Phase",
        description:
          "After your teeth are straightened, we provide retainers to maintain your new smile and prevent relapse.",
        icon: <AutoAwesomeOutlined fontSize={"large"} />,
      },
    ],
    page: {
      title: "What Is Orthodontics",
      description:
        "Orthodontics is a specialized branch of dentistry focused on diagnosing, preventing, and treating dental and facial irregularities. It involves the use of braces, clear aligners, and other appliances to straighten teeth, correct bite issues, and improve overall oral function. Orthodontic treatment not only enhances the appearance of your smile but also promotes better oral health by making it easier to clean your teeth and reducing the risk of dental problems.",
      bullets: [
        "Straightens teeth and corrects bite issues.",
        "Improves oral function and speech.",
        "Enhances appearance and boosts confidence.",
        "Promotes better oral hygiene and health.",
      ],
      sub1: "Effective orthodontic solutions designed to straighten your",
      sub2: "teeth, correct bite issues, and enhance your smile.",
      image: orthodontics,
      processTitle: "The Orthodontic Treatment Process",
      beforeAfter: [
        {
          id: 1,
          image: singleTooth,
          title: "Orthodontic Treatment",
          description:
            "Straightening a single crooked tooth with braces or clear aligners for a natural look.",
        },
        {
          id: 2,
          image: multipleTooth,
          title: "Multiple Teeth Straightening",
          description:
            "Correcting misaligned teeth with braces or clear aligners for a natural look.",
        },
      ],
      faq: [
        {
          question: "How long do dental implants last?",
          answer:
            "With proper care, dental implants can last a lifetime. Regular dental check-ups and good oral hygiene are essential to maintain their longevity.",
        },
        {
          question: "Is the dental implant procedure painful?",
          answer:
            "The procedure is typically performed under local anesthesia, so you should not feel pain during the surgery. Some discomfort and swelling may occur afterward, but it can be managed with prescribed pain medication.",
        },
        {
          question: "Am I a candidate for dental implants?",
          answer:
            "Most people with good overall health and sufficient jawbone density are candidates for dental implants. A thorough evaluation by our dental team will determine if implants are the right option for you.",
        },
        {
          question: "How much do dental implants cost?",
          answer:
            "The cost of dental implants varies depending on factors such as the number of implants needed, the complexity of the procedure, and the geographic location. We offer competitive pricing and financing options to make treatment accessible.",
        },
      ],
    },
  },

  {
    id: 4,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with whitening, veneers, and aesthetic treatments",
    image: cosmeticDentistryImg,
    icon: <AutoAwesomeOutlined fontSize={"medium"} />,
  },
  {
    id: 5,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "Root Canal Treatment",
    desc: "Relieve pain and save your natural teeth with advanced root canal therapy.",
    image: rootCanalImg,
    icon: <TbDental fontSize={24} />,
  },
  {
    id: 6,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "Periodontal Care",
    desc: "Gum disease treatment and maintenance for healthy gums and strong teeth.",
    image: periodontalImg,
    icon: <FaHandHoldingHeart fontSize={24} />,
  },
  {
    id: 7,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "Oral Surgery",
    desc: "Safe and comfortable surgical solutions, including widsom teeth extraction.",
    image: oralSurgeryImg,
    icon: <FaUserDoctor fontSize={24} />,
  },
  {
    id: 8,
    top: "ARC DENTAL . MODERN DENTAL CLINIC",
    title: "Digital Dentistry",
    desc: "Advanced digital technology for percise diagnosis and efficient treatment.",
    image: digitalImg,
    icon: <RiQrScan2Line fontSize={24} />,
  },
];
