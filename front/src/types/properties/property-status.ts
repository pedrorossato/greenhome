export enum PropertyStatus {
  CONSTRUCTION = 'CONSTRUCTION',
  FINISHED = 'FINISHED',
}

export const PropertyStatusLabel = new Map<string, string>([
  [PropertyStatus.CONSTRUCTION, 'Em Construção'],
  [PropertyStatus.FINISHED, 'Entregue'],
]);

export const PropertyStatusColor = new Map<string, string>([
  [PropertyStatus.CONSTRUCTION, '#326EC6'],
  [PropertyStatus.FINISHED, '#0A6847'],
]);
