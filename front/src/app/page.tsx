import Image from 'next/image';
import Link from 'next/link';

import { Card } from '@/components/ui/card';

import { ArrowDown } from 'lucide-react';

import Administracao from '../../public/administracao.png';
import CompraImoveis from '../../public/compraimoveis.png';
import Contato from '../../public/contato.jpg';
import Edificios from '../../public/edificios.png';
import backgroundSM from '../../public/fundoSM.png';
import Folder2 from '../../public/mainlogogreen.png';
import Missao from '../../public/missao.png';
import Planejamento from '../../public/planejamento.jpg';
import Urbanizacao from '../../public/urbanizacao.png';
import Valores from '../../public/valores.png';
import Visao from '../../public/visao.png';

export default async function Home(): Promise<JSX.Element> {
  return (
    <main>
      <section
        className="relative w-full flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundSM.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: 'calc(100vh - 7rem)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4 text-center max-w-6xl mx-auto pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl animate-fade-in-up">
            <div className="relative">
              <Image
                src={Folder2}
                alt="Green Home - Construtora e Incorporadora"
                className="drop-shadow-2xl w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-primary-green/20 rounded-lg blur-xl opacity-50"></div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 animate-fade-in-up animation-delay-300 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[playfair] text-white font-bold leading-tight drop-shadow-2xl bg-black/30 backdrop-blur-sm px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-2xl mx-auto max-w-4xl">
              Construindo{' '}
              <span className="text-primary-blue drop-shadow-lg">sonhos</span> e
              transformando{' '}
              <span className="text-primary-green drop-shadow-lg">
                realidades
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4 animate-fade-in-up animation-delay-500 justify-center items-center">
              <Link
                href="/empreendimentos"
                className="w-full sm:w-auto border-2 border-white/30 bg-gradient-to-r from-primary-blue to-secondary-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out text-center text-sm sm:text-base lg:text-lg"
              >
                Ver Empreendimentos
              </Link>
              <Link
                href="/contato"
                className="w-full sm:w-auto border-2 border-white/30 bg-gradient-to-r from-primary-green to-secondary-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out text-center text-sm sm:text-base lg:text-lg"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/30 transition-colors duration-300">
            <ArrowDown className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="text-sm font-semibold text-primary-green uppercase tracking-wider bg-primary-green/10 px-4 py-2 rounded-full">
                      Sobre nós
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-[playfair] text-gray-800 leading-tight">
                    Construtora e incorporadora de{' '}
                    <span className="text-primary-blue">Santa Maria, RS</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-green rounded-full"></div>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Fundada em{' '}
                    <span className="font-semibold text-primary-blue">
                      2019
                    </span>
                    , temos trabalhado duro para entregar{' '}
                    <span className="font-semibold text-primary-green bg-primary-green/10 px-2 py-1 rounded">
                      residenciais de alta qualidade
                    </span>{' '}
                    que atendam às necessidades e expectativas dos nossos
                    clientes.
                  </p>

                  <p className="text-lg">
                    Desde o início,{' '}
                    <span className="font-semibold text-primary-blue bg-primary-blue/10 px-2 py-1 rounded">
                      priorizamos a excelência em cada etapa do processo
                    </span>{' '}
                    de construção, desde a seleção dos materiais até a execução
                    dos projetos arquitetônicos. Além disso, estamos sempre
                    atentos às tendências do mercado e às inovações tecnológicas
                    que possam aprimorar nossos empreendimentos, garantindo não
                    apenas qualidade, mas também{' '}
                    <span className="font-semibold text-primary-green bg-primary-green/10 px-2 py-1 rounded">
                      sustentabilidade e eficiência energética
                    </span>
                    .
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center p-4 bg-gradient-to-br from-primary-blue/5 to-primary-blue/10 rounded-xl">
                    <div className="text-3xl font-bold text-primary-blue mb-2">
                      5+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Anos de experiência
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-primary-green/5 to-primary-green/10 rounded-xl">
                    <div className="text-3xl font-bold text-primary-green mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Compromisso com qualidade
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-primary-blue/10 to-primary-green/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-primary-green/5 rounded-3xl"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        2019
                      </span>
                    </div>
                    <h3 className="text-2xl font-[playfair] text-gray-800 mb-2">
                      Nossa História
                    </h3>
                    <p className="text-gray-600">
                      Construindo sonhos desde o início
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-16 h-16 bg-primary-blue/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary-green/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-8 h-8 bg-orange-500/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <span className="text-sm font-semibold text-primary-green uppercase tracking-wider mb-2 block">
                Nossa empresa
              </span>
              <h2 className="text-4xl md:text-6xl font-[playfair] text-gray-800 mb-6 relative">
                Missão, Visão e Valores
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-green rounded-full"></div>
              </h2>
            </div>
            <p className="text-gray-600 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Os pilares que{' '}
              <span className="font-semibold text-primary-blue">
                orientam nossa atuação
              </span>{' '}
              e
              <span className="font-semibold text-primary-green">
                {' '}
                fortalecem nosso compromisso
              </span>{' '}
              com a excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 p-8 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue to-primary-green"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    height={60}
                    width={60}
                    src={Missao}
                    alt="Missão"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-[playfair] text-gray-800 mb-4 group-hover:text-primary-blue transition-colors duration-300">
                  Missão
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Transformar sonhos em realidade por meio da construção de
                  lares, espaços comerciais e empreendimentos inovadores, com
                  excelência, sustentabilidade e respeito às necessidades de
                  nossos clientes. Buscamos agregar valor às comunidades em que
                  atuamos, criando ambientes que promovem bem-estar, segurança e
                  desenvolvimento.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 p-8 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-green to-secondary-green"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-green/10 to-primary-green/5 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    height={60}
                    width={60}
                    src={Visao}
                    alt="Visão"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-[playfair] text-gray-800 mb-4 group-hover:text-primary-green transition-colors duration-300">
                  Visão
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Ser referência regional no setor de construção e incorporação,
                  reconhecida pela qualidade de nossos projetos, compromisso com
                  a sustentabilidade e satisfação de nossos clientes. Almejamos
                  liderar o mercado, inovando continuamente e contribuindo para
                  o crescimento urbano e social de forma responsável e
                  eficiente.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 p-8 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    height={60}
                    width={60}
                    src={Valores}
                    alt="Valores"
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-[playfair] text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Valores
                </h3>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      'Qualidade',
                      'Sustentabilidade',
                      'Inovação',
                      'Transparência',
                      'Compromisso Social',
                      'Segurança',
                      'Valorização das Pessoas',
                    ].map((valor, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gradient-to-r from-orange-500/10 to-orange-600/10 text-orange-700 text-xs font-medium px-3 py-1 rounded-full border border-orange-200 group-hover:bg-gradient-to-r group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all duration-300"
                      >
                        {valor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-20 bg-gradient-to-br from-primary-gray to-gray-100 py-16">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <span className="text-sm font-semibold text-primary-green uppercase tracking-wider mb-2 block">
                O que fazemos
              </span>
              <h2 className="text-4xl md:text-6xl font-[playfair] text-gray-800 mb-6 relative">
                Nossos Serviços
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary-blue to-primary-green rounded-full"></div>
              </h2>
            </div>
            <p className="text-gray-600 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Oferecemos{' '}
              <span className="font-semibold text-primary-blue">
                soluções completas
              </span>{' '}
              em construção e incorporação imobiliária, transformando{' '}
              <span className="font-semibold text-primary-green">
                sonhos em realidade
              </span>{' '}
              com excelência e inovação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-8 text-center">
              <div className="bg-gradient-to-br from-primary-blue to-secondary-blue rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  height={50}
                  width={50}
                  src={CompraImoveis}
                  alt="Compra e Venda de Imóveis"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-blue transition-colors duration-300">
                Compra e Venda
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compra, Venda e Loteamento de Imóveis Próprios
              </p>
            </div>

            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-8 text-center">
              <div className="bg-gradient-to-br from-primary-green to-secondary-green rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  height={50}
                  width={50}
                  src={Administracao}
                  alt="Administração de Obras"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-green transition-colors duration-300">
                Administração
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Administração de Obras
              </p>
            </div>

            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-8 text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  height={50}
                  width={50}
                  src={Urbanizacao}
                  alt="Obras de Urbanização"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                Urbanização
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Obras de Urbanização
              </p>
            </div>

            <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-8 text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  height={50}
                  width={50}
                  src={Edificios}
                  alt="Construção de Edifícios"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                Construção
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Construção de Edifícios
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Card className="cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div
                className="transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: `url(${Planejamento.src})`,
                  backgroundBlendMode: 'overlay',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: 'rgba(0, 0, 0, 0.486)',
                }}
              >
                <Link
                  className="h-80 flex items-center justify-center w-full text-2xl text-white text-center"
                  href="/empreendimentos"
                >
                  <p>Visualize Nossos Empreendimentos</p>
                </Link>
              </div>
            </Card>
            <Card className="cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div
                className="transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: `url(${Contato.src})`,
                  backgroundBlendMode: 'overlay',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundColor: 'rgba(0, 0, 0, 0.486)',
                }}
              >
                <Link
                  className="h-80 flex items-center justify-center w-full text-2xl text-white text-center"
                  href="/contato"
                >
                  <p>Entre em contato</p>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
