interface LocationType {
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
export interface JobType {
  pickup: LocationType;
  destination: LocationType;
  id: string;
  price: number;
  estimatedMillisecond: number;
  vehicleId: string;
  date: string;
}
