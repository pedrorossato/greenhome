import Image from 'next/image';
import { FaRegBuilding, FaRegClock } from 'react-icons/fa';
import { GiCrane } from 'react-icons/gi';

import RedirectPropertiesPageButton from '@/components/button/property/redirect-properties-page-button';
import { PropertyMapsComponent } from '@/components/maps/property/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { fetcher } from '@/services/fetcher';
import { type Property } from '@/types/properties/property';
import { PropertyStatus } from '@/types/properties/property-status';
import { ArrowDown } from 'lucide-react';

import backgroundSM from '../../public/fundoSM.png';
import Folder1 from '../../public/mainlogogreen.png';

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
        <div
          className="relative drop-shadow-md w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl"
          style={{ filter: 'drop-shadow(0 0 1.5rem black)' }}
        >
          <Image src={Folder1} alt="banner" />
        </div>
        <div className="bg-white rounded-full p-2 animate-bounce">
          <ArrowDown />
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10">
          <div className="flex justify-center flex-wrap flex-row">
            <div className="w-full md:w-1/2 p-5 text-justify">
              <div className="border-l-4 border-primary-blue px-2">
                <p>Sobre nós</p>
                <h2 className="text-2xl">
                  Construtora e incorportadora de Santa Maria, RS.
                </h2>
              </div>
              <br />
              <p>
                Fundada em 2020, temos trabalhado duro para entregar{' '}
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
            <div className="w-full md:w-1/2 p-5 text-justify">
              <Accordion type="single" defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Missão</AccordionTrigger>
                  <AccordionContent>
                    Nossa missão é transformar sonhos em realidade por meio da
                    construção de lares, espaços comerciais e empreendimentos
                    inovadores, com excelência, sustentabilidade e respeito às
                    necessidades de nossos clientes. Buscamos agregar valor às
                    comunidades em que atuamos, criando ambientes que promovem
                    bem-estar, segurança e desenvolvimento.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Visão</AccordionTrigger>
                  <AccordionContent>
                    Ser referência regional no setor de construção e
                    incorporação, reconhecida pela qualidade de nossos projetos,
                    compromisso com a sustentabilidade e satisfação de nossos
                    clientes. Almejamos liderar o mercado, inovando
                    continuamente e contribuindo para o crescimento urbano e
                    social de forma responsável e eficiente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Valores</AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>
                        <b>Qualidade:</b> Compromisso inabalável com a
                        excelência em cada detalhe de nossos projetos, desde o
                        planejamento até a entrega final.
                      </li>
                      <li>
                        <b>Sustentabilidade:</b> Respeito ao meio ambiente em
                        todas as etapas do processo construtivo, buscando
                        práticas que reduzam impactos e promovam a preservação
                        dos recursos naturais.
                      </li>
                      <li>
                        <b>Inovação:</b> Busca constante por soluções inovadoras
                        que agreguem valor aos nossos empreendimentos e atendam
                        às demandas atuais e futuras de nossos clientes.
                      </li>
                      <li>
                        <b>Transparência:</b> Manter relações éticas, claras e
                        honestas com nossos clientes, fornecedores,
                        colaboradores e comunidades.
                      </li>
                      <li>
                        <b>Compromisso Social:</b> Contribuir para o
                        desenvolvimento das comunidades em que atuamos, gerando
                        empregos, respeitando a cultura local e promovendo o
                        bem-estar social.
                      </li>
                      <li>
                        <b>Segurança:</b> Garantir a segurança de todos os
                        envolvidos no processo construtivo, desde nossos
                        colaboradores até os futuros moradores e usuários de
                        nossos empreendimentos.
                      </li>
                      <li>
                        <b>Valorização das Pessoas:</b> Reconhecer e valorizar o
                        talento e a dedicação de nossos colaboradores,
                        incentivando seu crescimento profissional e pessoal.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10 ">
          <div className="p-5 bg-primary-green text-white rounded-lg flex flex-row flex-wrap justify-center items-center">
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <GiCrane size={50} />
              <h1 className="text-4xl">{constructionCount}</h1>
              empreendimento{constructionCount > 1 ? 's' : ''} em construção
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <FaRegBuilding size={50} />
              <h1 className="text-4xl">{finishedCount}</h1>
              empreendimento{constructionCount > 1 ? 's' : ''} finalizado
              {constructionCount > 1 ? 's' : ''}
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
              <FaRegClock size={50} />
              <h1 className="text-4xl">100%</h1>
              de pontualidade na entrega
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10">
          <div className="p-5 rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-10">Localize nossos empreendimentos</h1>
            <div className="h-72 w-3/4">
              <PropertyMapsComponent properties={properties} />
            </div>
            <RedirectPropertiesPageButton className="mt-10 bg-primary-gray text-primary-blue hover:text-primary-gray" />
          </div>
        </div>
      </section>
    </main>
  );
}
