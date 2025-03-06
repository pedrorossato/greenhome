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
        className="w-full flex flex-col justify-around items-center h-[calc(100vh-7rem)]"
        style={{
          backgroundImage: `url(${backgroundSM.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
          <Image src={Folder2} alt="banner" />
        </div>
        <div className="bg-white rounded-full p-2 animate-bounce">
          <ArrowDown />
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10">
          <div className="flex justify-center flex-wrap flex-row">
            <div className="w-full p-5 text-justify">
              <div className="border-l-4 border-primary-blue px-2">
                <p>Sobre nós</p>
                <h2 className="text-2xl">
                  Construtora e incorportadora de Santa Maria, RS.
                </h2>
              </div>
              <br />
              <p>
                Fundada em 2019, temos trabalhado duro para entregar{' '}
                <b>residenciais de alta qualidade</b> que atendam às
                necessidades e expectativas dos nossos clientes.
              </p>
              <br />
              <p>
                Desde o início,{' '}
                <b>priorizamos a excelência em cada etapa do processo</b> de
                construção, desde a seleção dos materiais até a execução dos
                projetos arquitetônicos. Além disso, estamos sempre atentos às
                tendências do mercado e às inovações tecnológicas que possam
                aprimorar nossos empreendimentos, garantindo não apenas
                qualidade, mas também{' '}
                <b>sustentabilidade e eficiência energética</b>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full my-20">
        <div className="container flex flex-row flex-wrap text-center">
          <div className="w-full md:w-1/3 p-8 border-b-4 border-primary-green md:border-b-0 md:border-r-4">
            <div className="flex items-center justify-center">
              <Image height={100} src={Missao} alt={'missao'} />
            </div>
            <h2 className="text-center font-[playfair] text-3xl my-4">
              Missão
            </h2>
            <small className="leading-6">
              Transformar sonhos em realidade por meio da construção de lares,
              espaços comerciais e empreendimentos inovadores, com excelência,
              sustentabilidade e respeito às necessidades de nossos clientes.
              Buscamos agregar valor às comunidades em que atuamos, criando
              ambientes que promovem bem-estar, segurança e desenvolvimento.
            </small>
          </div>
          <div className="w-full md:w-1/3 p-8 border-b-4 border-primary-green md:border-b-0 md:border-r-4">
            <div className="flex items-center justify-center">
              <Image height={100} src={Visao} alt={'missao'} />
            </div>
            <h2 className="text-center font-[playfair] text-3xl my-4">Visão</h2>
            <small className="leading-6">
              Ser referência regional no setor de construção e incorporação,
              reconhecida pela qualidade de nossos projetos, compromisso com a
              sustentabilidade e satisfação de nossos clientes. Almejamos
              liderar o mercado, inovando continuamente e contribuindo para o
              crescimento urbano e social de forma responsável e eficiente.
            </small>
          </div>
          <div className="w-full md:w-1/3 p-8">
            <div className="flex items-center justify-center">
              <Image height={100} src={Valores} alt={'missao'} />
            </div>
            <h2 className="text-center font-[playfair] text-3xl my-4">
              Valores
            </h2>
            <small className="leading-6">
              Qualidade; Sustentabilidade; Inovação; Transparência; Compromisso
              Social; Segurança; Valorização das Pessoas
            </small>
          </div>
        </div>
      </section>
      <section className="w-full mt-20 bg-primary-gray">
        <div className="container">
          <h2 className="text-4xl font-[playfair] text-center py-5">
            Nossos Serviços
          </h2>
          <div className="flex flex-wrap flex-row text-center">
            <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center ">
              <Image height={80} src={CompraImoveis} alt="Serviços imoveis" />
              <p>Compra, Venda e Loteamento de Imóveis Próprios</p>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
              <Image height={80} src={Administracao} alt="Serviços imoveis" />
              <p>Administração de Obras</p>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
              <Image height={80} src={Urbanizacao} alt="Serviços imoveis" />
              <p>Obras de Urbanização</p>
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
              <Image height={80} src={Edificios} alt="Serviços imoveis" />
              <p>Construção de Edifícios</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Card className="cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out">
              <div
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
