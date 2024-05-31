export interface Response {
  msg: string;
  L: number;
  C: number;
  R: number;
  G: number;
}



export interface Datos {
  b: number | null;
  a: number | null;
  u: number | null;
  l: number;
  f: number;
  o: number;
  e: number | null;
  c: number | null
  longitud: number[],
  atenuacion: number[]
}

export interface DatosP {
  b: number | null;
  a: number | null;
  u: number | null;
  f: number;
  o: number;
  e: number | null;
}
