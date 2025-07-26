export class IngresoEgreso {
  constructor(
    public descripcion: string,
    public monto: number,
    public tipo: string, // 'ingreso' or 'egreso'
    // public uid?: string // optional, for unique identification
  ) {}
}