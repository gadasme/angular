export class Usuario {
  
  static fromFirebase(firebaseUser: any): Usuario {
    return new Usuario(firebaseUser.nombre, firebaseUser.email, firebaseUser.uid);
  }
  constructor(
    public nombre: string,
    public email: string,
    public uid?: string
  ) {}


  toJSON() {
    return {
      nombre: this.nombre,
      email: this.email,
      uid: this.uid
    };
  }
}