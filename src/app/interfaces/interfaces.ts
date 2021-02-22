export interface DatosConJwt {
    jwt: string;
} 

export interface Cometidos {
    idcometido: number;
    gasto: number;
    categoria: string;
    lugar: number[];
    fecha: Date;
    id_cuenta: number[];
    comision: number;

}

export interface Cuenta{
    num_cuenta: number;
    tipo: string;
    id_usuario: number;
    saldo: number;
    username: string;
}

export interface Usuario{
    idusuario: number;
    username: string;
    password: string;
    email: string;
    foto: string;
}

export interface Establecimiento{
    idestablecimiento: number;
    nombre: string;

}