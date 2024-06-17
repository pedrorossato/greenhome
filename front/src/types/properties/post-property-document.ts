import { type PropertyDocumentType } from './document/property-document-type';

export interface PostPropertyDocument {
  propertyId: number;
  document: Blob;
  type: PropertyDocumentType;
}
