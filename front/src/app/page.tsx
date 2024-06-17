import Image from 'next/image';

import RedirectPropertiesPageButton from '@/components/button/redirect-properties-page-button';
import { PropertyMapsComponent } from '@/components/maps/property/index';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { fetcher } from '@/services/fetcher';
import { type Property } from '@/types/properties/property';
import { ArrowDown } from 'lucide-react';

import backgroundSM from '../../public/fundoSM.png';
import Folder1 from '../../public/mainlogogreen.png';

export default async function Home(): Promise<JSX.Element> {
  const properties = await fetcher<Property[]>('/property', 'GET', undefined, [
    'properties',
  ]);
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
        <div className="bg-primary-gray rounded-full p-2 animate-bounce">
          <ArrowDown />
        </div>
      </section>
      <section className="w-full">
        <div className="container flex justify-center flex-wrap flex-row py-20">
          <div className="w-full md:w-1/2 px-5 py-5 text-justify">
            <div className="border-l-4 border-primary-blue px-2">
              <p>Sobre nós</p>
              <h2 className="text-2xl">
                Construtora e incorportadora de Santa Maria, RS.
              </h2>
            </div>
            <br />
            <p>
              Fundada em 2020, temos trabalhado duro para entregar{' '}
              <b>residenciais de alta qualidade</b> que atendam às necessidades
              e expectativas dos nossos clientes.
            </p>
            <br />
            <p>
              Desde o início,{' '}
              <b>priorizamos a excelência em cada etapa do processo</b> de
              construção, desde a seleção dos materiais até a execução dos
              projetos arquitetônicos. Além disso, estamos sempre atentos às
              tendências do mercado e às inovações tecnológicas que possam
              aprimorar nossos empreendimentos, garantindo não apenas qualidade,
              mas também <b>sustentabilidade e eficiência energética</b>.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-5 py-5 text-justify">
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>Missão</AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Visão</AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Valores</AccordionTrigger>
                <AccordionContent>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary-green text-white py-10">
        <div className="container flex flex-row flex-wrap justify-center items-center">
          <h1 className="w-full text-center text-4xl mb-10">Nossos Serviços</h1>
          <div className="w-full md:w-1/2">Contrução</div>
          <div className="w-full md:w-1/2">Incorporação</div>
        </div>
      </section>
      <section className="w-full bg-primary-blue text-white py-10">
        <div className="container flex flex-col justify-center items-center">
          <h1 className="text-4xl mb-10">Conheça nossos empreendimentos</h1>
          <PropertyMapsComponent properties={properties} />
          <RedirectPropertiesPageButton className="mt-10 bg-primary-gray text-primary-blue hover:text-primary-gray" />
        </div>
      </section>
    </main>
  );
}
