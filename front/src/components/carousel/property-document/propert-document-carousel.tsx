import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { type PropertyDocument } from '@/types/properties/document/property-document';

interface PropertyDocumentCarouselProps {
  documents: PropertyDocument[];
}

export default function PropertyDocumentCarousel({
  documents,
}: PropertyDocumentCarouselProps): JSX.Element {
  if (documents.length === 0) {
    return <p>Sem conteúdo</p>;
  }
  return (
    <Carousel className="w-1/2">
      <CarouselContent>
        {documents.map((doc) => (
          <CarouselItem key={doc.documentUUID}>
            <Card>
              <CardContent>
                <Dialog modal>
                  <DialogTrigger>
                    <img
                      className="object-cover"
                      alt={doc.id.toString()}
                      src={doc.url}
                    />
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-4xl p-0">
                    <img
                      className="w-full h-full object-contain"
                      alt={doc.id.toString()}
                      src={doc.url}
                    />
                  </DialogContent>
                </Dialog>
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
