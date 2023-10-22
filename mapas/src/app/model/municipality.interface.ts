import { AdminsPark } from "./admins-park.interface";
import { CarPark } from "./carpark.interface";

export interface Municipality{

  id: number;
    name: string;
    lat: string;
    lon: string;
    capacity: number;
    adminFk: AdminsPark;
    carParkList: CarPark[];

}

