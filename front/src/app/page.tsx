import Image from 'next/image';
import { FaRegBuilding, FaRegClock } from 'react-icons/fa';
import { GiCrane } from 'react-icons/gi';

import RedirectPropertiesPageButton from '@/components/button/property/redirect-properties-page-button';
import { PropertyMapsComponent } from '@/components/maps/property/index';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { fetcher } from '@/services/fetcher';
import { type Property } from '@/types/properties/property';
import { PropertyStatus } from '@/types/properties/property-status';
import { ArrowDown } from 'lucide-react';

import backgroundSM from '../../public/fundoSM.png';
import Folder2 from '../../public/mainlogogreen.png';

export default async function Home(): Promise<JSX.Element> {
  const properties = await fetcher<Property[]>('/property', 'GET');

  const constructionCount = properties.filter(
    (p) => p.status === PropertyStatus.CONSTRUCTION,
  ).length;
  const finishedCount = properties.filter(
    (p) => p.status === PropertyStatus.FINISHED,
  ).length;

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
      <section className="w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 text-justify">
          <Card
            style={{ backgroundColor: '#F9F9F3' }}
            className="border-primary-blue mx-3 mx-3"
          >
            <CardHeader>
              <CardTitle className="text-primary-green text-center font-[playfair] text-3xl">
                Missão
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6">
              Transformar sonhos em realidade por meio da construção de lares,
              espaços comerciais e empreendimentos inovadores, com excelência,
              sustentabilidade e respeito às necessidades de nossos clientes.
              Buscamos agregar valor às comunidades em que atuamos, criando
              ambientes que promovem bem-estar, segurança e desenvolvimento.
            </CardContent>
          </Card>
          <Card
            style={{ backgroundColor: '#F9F9F3' }}
            className="border-primary-blue mx-3"
          >
            <CardHeader>
              <CardTitle className="text-primary-green text-center font-[playfair] text-3xl">
                Visão
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6">
              Ser referência regional no setor de construção e incorporação,
              reconhecida pela qualidade de nossos projetos, compromisso com a
              sustentabilidade e satisfação de nossos clientes. Almejamos
              liderar o mercado, inovando continuamente e contribuindo para o
              crescimento urbano e social de forma responsável e eficiente.
            </CardContent>
          </Card>
          <Card
            style={{ backgroundColor: '#F9F9F3' }}
            className="border-primary-blue mx-3"
          >
            <CardHeader>
              <CardTitle className="text-primary-green text-center font-[playfair] text-3xl">
                Valores
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-5">
              <ul>
                <li>
                  <b>Qualidade:</b> Excelência em cada etapa, do planejamento à
                  entrega.
                </li>
                <li>
                  <b>Sustentabilidade:</b> Práticas que respeitam o meio
                  ambiente e preservam recursos naturais.
                </li>
                <li>
                  <b>Inovação:</b> Soluções criativas que agregam valor e
                  atendem às demandas atuais e futuras.
                </li>
                <li>
                  <b>Transparência:</b> Relações éticas, claras e honestas com
                  todos os envolvidos.
                </li>
                <li>
                  <b>Compromisso Social:</b> Desenvolvimento comunitário,
                  geração de empregos e valorização da cultura local.
                </li>
                <li>
                  <b>Segurança:</b> Garantia de proteção para colaboradores e
                  futuros usuários.
                </li>
                <li>
                  <b>Valorização das Pessoas:</b> Reconhecimento e incentivo ao
                  crescimento profissional e pessoal.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10">
          <div className="p-5 rounded-3xl flex flex-row flex-wrap justify-center items-center">
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <GiCrane size={50} />
              <h1 className="text-4xl">{constructionCount}</h1>
              empreendimento{constructionCount > 1 ? 's' : ''} em construção
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <FaRegBuilding size={50} />
              <h1 className="text-4xl">{finishedCount}</h1>
              empreendimento{finishedCount > 1 ? 's' : ''} finalizado
              {finishedCount > 1 ? 's' : ''}
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <FaRegClock size={50} />
              <h1 className="text-4xl">100%</h1>
              de pontualidade na entrega
            </div>
          </div>
          <div className="p-5 rounded-lg flex flex-col justify-center items-center">
            <div className="h-72 w-3/4">
              <PropertyMapsComponent properties={properties} />
            </div>
            <RedirectPropertiesPageButton className="mt-10 " />
          </div>
        </div>
      </section>
    </main>
  );
}
