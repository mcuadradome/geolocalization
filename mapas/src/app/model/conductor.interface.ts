import { Bus } from "./bus.interface";

export interface Conductor {
  id?: number;
  name: string;
  busList?: Bus[];
}
