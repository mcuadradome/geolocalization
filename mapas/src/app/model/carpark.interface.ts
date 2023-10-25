import { Bus } from "./bus.interface";
import { Municipality } from "./municipality.interface";

export interface CarPark {
  id?: number;
  origen: string;
  destino: string;
  departureTime: string;
  arrivalTime: string;
  timeOfStay: number;
  busFk: Bus | undefined;
  municipalityFk: Municipality;
}
