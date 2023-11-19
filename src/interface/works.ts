export interface IWork {
    id?: number;
    description: string;
}
export interface IAssurance {
    assuranceList: { id: number; description: string }[];
}