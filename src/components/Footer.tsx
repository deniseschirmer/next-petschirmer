import { AiOutlineClockCircle } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti";
import { BiEnvelope } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex bg-xlight-brown font-nunito py-5 md:py-6 lg:py-7 px-4 md:px-6 lg:px-12 gap-6 items-center justify-center">
      <div className="flex flex-col gap-3 mb-6 ">
        <h3 className="flex text-sm md:text-lg font-nunito gap-3 font-bold">
          Pet Schirmer
        </h3>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center">
            <Link
              href="https://www.instagram.com/petschirmer/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <BsInstagram width={"25px"} /> <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/petschiirmer/"
              passHref
              className="flex items-center gap-3"
            >
              <TbBrandFacebook width={"30px"} /> <span>Facebook</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 mb-6 ">
        <h3 className="flex text-sm md:text-lg font-nunito gap-3 font-bold items-center">
          <AiOutlineClockCircle size={20} style={{ verticalAlign: "middle" }} />
          Horário de funcionamento
        </h3>
        <p className="pl-8 font-medium">Segunda a Sexta: 09h30 às 17h30</p>
        <p className="pl-8 font-medium">Sábado: 09h00 às 14h00</p>
      </div>
      <div className="flex flex-col mb-6">
        <p className="flex text-sm md:text-lg font-nunito gap-3 items-center">
          <LuPhone />
          (41) 3042-4820
        </p>
        <p className="flex text-sm md:text-lg font-nunito gap-3 items-center">
          <BiEnvelope size={20} />
          pet_schirmer@hotmail.com
        </p>
        <p className="flex text-sm md:text-lg font-nunito gap-3 items-center">
          <TiLocationOutline size={20} />
          Rua Ildefonso Stockler de França, 48 - Loja 04. Curitiba/PR
        </p>
      </div>
    </footer>
  );
};

export default Footer;
