interface LocationType {
  name: string;
  address: string;
}
export interface JobType {
  pickup: LocationType;
  destination: LocationType;
  id: number;
  price: number;
  estimatedMillisecond: number;
}
