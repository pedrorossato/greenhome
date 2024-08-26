import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type Apartment from '@/types/apartments/apartment';
import { CheckCircle, CircleOff } from 'lucide-react';

interface ApartmentTableProps {
  apartments: Apartment[] | undefined;
}
export default function ApartmentTable({
  apartments,
}: ApartmentTableProps): JSX.Element {
  if (!apartments || apartments.length === 0) return <></>;
  return (
    <section className="container flex flex-col items-center py-8">
      {/* <h2 className="text-4xl pb-2 mb-4">Apartamentos</h2> */}
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Apartamento</TableHead>
            <TableHead>Área</TableHead>
            <TableHead>Quartos</TableHead>
            <TableHead>Banheiros</TableHead>
            <TableHead>Sacada</TableHead>
            <TableHead>Garagem</TableHead>
            <TableHead>Churrasqueira</TableHead>
            <TableHead>Área de Serviço</TableHead>
            <TableHead>Closet</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {apartments.map((apartment) => (
            <TableRow key={apartment.id}>
              <TableCell className="font-medium">{apartment.name}</TableCell>
              <TableCell>
                {apartment.area}m<sup>2</sup>
              </TableCell>
              <TableCell>{apartment.bedroomCount}</TableCell>
              <TableCell>{apartment.bathroomCount}</TableCell>
              <TableCell>
                {apartment.hasBalcony ? (
                  <CheckCircle color="green" />
                ) : (
                  <CircleOff color="red" />
                )}
              </TableCell>
              <TableCell>
                {apartment.hasGarage ? (
                  <CheckCircle color="green" />
                ) : (
                  <CircleOff color="red" />
                )}
              </TableCell>
              <TableCell>
                {apartment.hasBarbecueGrill ? (
                  <CheckCircle color="green" />
                ) : (
                  <CircleOff color="red" />
                )}
              </TableCell>
              <TableCell>
                {apartment.hasServiceArea ? (
                  <CheckCircle color="green" />
                ) : (
                  <CircleOff color="red" />
                )}
              </TableCell>
              <TableCell>
                {apartment.hasCloset ? (
                  <CheckCircle color="green" />
                ) : (
                  <CircleOff color="red" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
