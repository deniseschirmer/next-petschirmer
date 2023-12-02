export interface IWork {
    id?: number;
    description: string;
    isHome?: boolean
}
export interface IAssurance {
    assuranceList: { id: number; description: string }[];
}