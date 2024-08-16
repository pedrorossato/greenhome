import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { type PropertyDocument } from '@/types/properties/document/property-document';

interface PropertyDocumentCarouselProps {
  documents: PropertyDocument[];
}

export default function PropertyDocumentCarousel({
  documents,
}: PropertyDocumentCarouselProps): JSX.Element {
  if (documents.length === 0) {
    return (
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent>
                <p>Sem conteúdo</p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
  return (
    <Carousel className="w-1/2">
      <CarouselContent>
        {documents.map((doc) => (
          <CarouselItem key={doc.documentUUID}>
            <Card>
              <CardContent>
                <img
                  className="object-cover"
                  alt={doc.id.toString()}
                  src={doc.url}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
