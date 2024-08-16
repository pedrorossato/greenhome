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
              <Accordion
                type="multiple"
                defaultValue={['item-1', 'item-2', 'item-3']}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>Missão</AccordionTrigger>
                  <AccordionContent>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Visão</AccordionTrigger>
                  <AccordionContent>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Valores</AccordionTrigger>
                  <AccordionContent>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a.
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
            <h1 className="w-full text-center text-4xl mb-10">
              Nossos Serviços
            </h1>
            <div className="w-full md:w-1/2">Contrução</div>
            <div className="w-full md:w-1/2">Incorporação</div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container py-10">
          <div className="p-5 bg-primary-blue text-white rounded-lg flex flex-col justify-center items-center">
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
