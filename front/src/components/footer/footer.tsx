import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

export default async function Footer(): Promise<JSX.Element> {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container pt-5 flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <a
            href="https://www.facebook.com/greenhomeconstrutora"
            className="flex flex-row items-center justify-center"
          >
            <FaFacebook className="mr-1" />
            <p>Facebook</p>
          </a>
          <div className="flex flex-row items-center justify-center">
            <FaInstagram className="mr-1" />
            <p>Instagram</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <FaWhatsapp size={25} className="mr-1" />
            <p>(55) 99953-1120</p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <GoMail className="mr-1" />
            <p>greenhomeconstrutora@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <div className="container pt-1 flex flex-col items-center justify-center text-center">
          <Image
            alt="white logo"
            src="/whitelogo.png"
            width={150}
            height={150}
          />
          <p>
            Copyright © {new Date().getFullYear()} - Todos os direitos
            reservados.
            <br />
            <small>
              Desenvolvido por{' '}
              <a href="https://www.linkedin.com/in/phvrossato/">@Pedro</a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
