export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public uid?: string
  ) {}

  static fromFirebase(user: any): Usuario {
    return new Usuario(
      user.displayName || '',
      user.email || '',
      undefined
    );
  }

  toJSON() {
    return {
      nombre: this.nombre,
      email: this.email,
      uid: this.uid
    };
  }
}