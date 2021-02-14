export interface DatosConJwt {
    jwt: string;
} 

export interface Cometidos {
    idcometido: number;
    gasto: number;
    categoria: string;
    lugar: number;
    fecha: Date;
    id_cuenta: number;
    comision: number;

}