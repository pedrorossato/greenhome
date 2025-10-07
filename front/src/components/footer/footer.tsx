import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

export default async function Footer(): Promise<JSX.Element> {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container py-8 px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
            <a
              href="https://www.facebook.com/greenhomeconstrutora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center hover:text-blue-400 transition-colors duration-200"
            >
              <FaFacebook className="mr-2 text-xl" />
              <p>Facebook</p>
            </a>
            <a
              href="https://www.instagram.com/greenhomeconstrutora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center hover:text-pink-400 transition-colors duration-200"
            >
              <FaInstagram className="mr-2 text-xl" />
              <p>Instagram</p>
            </a>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
            <a
              href="https://wa.me/5555999531120"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center hover:text-green-400 transition-colors duration-200"
            >
              <FaWhatsapp size={20} className="mr-2" />
              <p>(55) 99953-1120</p>
            </a>
            <a
              href="mailto:greenhomeconstrutora@gmail.com"
              className="flex flex-row items-center justify-center hover:text-blue-300 transition-colors duration-200"
            >
              <GoMail className="mr-2 text-xl" />
              <p>greenhomeconstrutora@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="container py-6 px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <Image
              alt="white logo"
              src="/whitelogo.png"
              width={120}
              height={120}
              className="opacity-90"
            />
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                Copyright © {new Date().getFullYear()} - Todos os direitos
                reservados.
              </p>
              <p className="text-xs text-gray-400">
                Desenvolvido por{' '}
                <a
                  href="https://www.linkedin.com/in/phvrossato/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  @Pedro
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
