interface LocationType {
  name: string;
  address: string;
}
export interface JobType {
  pickup: LocationType;
  destination: LocationType;
  id: string;
  price: number;
  estimatedMillisecond: number;
}
