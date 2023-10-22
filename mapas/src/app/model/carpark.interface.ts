import { Bus } from "./bus.interface";
import { Municipality } from "./municipality.interface";

export interface CarPark {
  id?: number;
  origen: string;
  destino: string;
  departureTime: Date;
  arrivalTime: Date;
  timeOfStay: number;
  busFk: Bus | undefined;
  municipalityFk: Municipality;
}
