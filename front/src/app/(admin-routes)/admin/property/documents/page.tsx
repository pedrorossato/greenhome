import DeletePropertyDocumentButton from '@/components/button/delete-property-document-button';
import PropertyDocumentForm from '@/components/forms/properties/documents/property-document-form';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';

import { fetcher } from '@/services/fetcher';
import { type PropertyDocument } from '@/types/properties/document/property-document';
import { PropertyDocumentType } from '@/types/properties/document/property-document-type';

export default async function PropertyDocumentsPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}): Promise<JSX.Element> {
  const propertyId = Number(searchParams.propertyId);
  const propertyDocuments = await fetcher<PropertyDocument[]>(
    `/property/${propertyId}/document`,
    'GET',
    undefined,
    ['propertyDocuments', `${propertyId}`],
  );
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1 className="text-3xl">Capa</h1>
      <PropertyDocumentForm
        propertyId={propertyId}
        type={PropertyDocumentType.COVER}
      />
      {propertyDocuments.some(
        (doc) => PropertyDocumentType[doc.type] === PropertyDocumentType.COVER,
      ) ? (
        <Carousel className="w-64">
          <CarouselContent>
            {propertyDocuments
              .filter(
                (doc) =>
                  PropertyDocumentType[doc.type] === PropertyDocumentType.COVER,
              )
              .map((doc) => (
                <CarouselItem key={doc.documentUUID}>
                  <Card>
                    <CardContent>
                      <img
                        className="object-cover "
                        alt={doc.id.toString()}
                        src={doc.url}
                      />
                    </CardContent>
                    <CardFooter>
                      <DeletePropertyDocumentButton
                        propertyDocumentId={doc.id}
                      />
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <></>
      )}

      <Separator className="m-10" />

      <h1 className="text-3xl">Planta Humanizada</h1>
      <PropertyDocumentForm
        propertyId={propertyId}
        type={PropertyDocumentType.FLOOR_PLAN}
      />
      {propertyDocuments.some(
        (doc) =>
          PropertyDocumentType[doc.type] === PropertyDocumentType.FLOOR_PLAN,
      ) ? (
        <Carousel className="w-64">
          <CarouselContent>
            {propertyDocuments
              .filter(
                (doc) =>
                  PropertyDocumentType[doc.type] ===
                  PropertyDocumentType.FLOOR_PLAN,
              )
              .map((doc) => (
                <CarouselItem key={doc.documentUUID}>
                  <Card>
                    <CardContent>
                      <img
                        className="object-cover "
                        alt={doc.id.toString()}
                        src={doc.url}
                      />
                    </CardContent>
                    <CardFooter>
                      <DeletePropertyDocumentButton
                        propertyDocumentId={doc.id}
                      />
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <></>
      )}

      <Separator className="m-10" />

      <h1 className="text-3xl">Fotos</h1>
      <PropertyDocumentForm
        propertyId={propertyId}
        type={PropertyDocumentType.GALLERY}
      />
      {propertyDocuments.some(
        (doc) =>
          PropertyDocumentType[doc.type] === PropertyDocumentType.GALLERY,
      ) ? (
        <Carousel className="w-64">
          <CarouselContent>
            {propertyDocuments
              .filter(
                (doc) =>
                  PropertyDocumentType[doc.type] ===
                  PropertyDocumentType.FLOOR_PLAN,
              )
              .map((doc) => (
                <CarouselItem key={doc.documentUUID}>
                  <Card>
                    <CardContent>
                      <img
                        className="object-cover "
                        alt={doc.id.toString()}
                        src={doc.url}
                      />
                    </CardContent>
                    <CardFooter>
                      <DeletePropertyDocumentButton
                        propertyDocumentId={doc.id}
                      />
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <></>
      )}

      <Separator className="m-10" />

      <h1 className="text-3xl">Vídeos</h1>
      <PropertyDocumentForm
        propertyId={propertyId}
        type={PropertyDocumentType.VIDEO}
      />
      {propertyDocuments.some(
        (doc) => PropertyDocumentType[doc.type] === PropertyDocumentType.VIDEO,
      ) ? (
        <Carousel className="w-64">
          <CarouselContent>
            {propertyDocuments
              .filter(
                (doc) =>
                  PropertyDocumentType[doc.type] === PropertyDocumentType.VIDEO,
              )
              .map((doc) => (
                <CarouselItem key={doc.documentUUID}>
                  <Card>
                    <CardContent>
                      <video controls>
                        <source src={doc.url} type="video/mp4" />
                      </video>
                    </CardContent>
                    <CardFooter>
                      <DeletePropertyDocumentButton
                        propertyDocumentId={doc.id}
                      />
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <></>
      )}
    </div>
  );
}
