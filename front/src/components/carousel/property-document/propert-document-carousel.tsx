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
    <Carousel className="w-full">
      <CarouselContent>
        {documents.map((doc) => (
          <CarouselItem key={doc.documentUUID}>
            <Card className="h-full">
              <CardContent className="p-0">
                <Dialog modal>
                  <DialogTrigger className="w-full">
                    <img
                      className="w-full h-96 object-cover rounded-lg"
                      alt={doc.id.toString()}
                      src={doc.url}
                    />
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-6xl p-0">
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
