import { CarPark } from "./carpark.interface";
import { Conductor } from "./conductor.interface";

export interface Bus {
  code: string;
  passengers: number;
  conductorFk: Conductor | undefined;
  carParkList?: CarPark[];

}
