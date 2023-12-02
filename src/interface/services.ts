import { IAssurance } from "./works";

type TServiceItem = {
    id: number;
    description: string;
}
export interface IService {
    id: number;
    pathImage: string;
    altDescription: string;
    serviceName: string;
    description: string;
    serviceList: Array<TServiceItem>;
}