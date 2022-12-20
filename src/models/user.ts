export enum Roles {
  ADMIN = 'admin',
  EXTERNAL = 'external'
}

export class User implements IUser {
  id: string;
  name: string;
  email: string
  token: string;
  role: Roles;
  constructor(
    userData: IUser
  ) {
    this.id = userData.id;
    this.name = userData.name;
    this.email = userData.email;
    this.token = userData.token;
    this.role = userData.role
  }

  get isAdmin() {
    return this.role === Roles.ADMIN
  }
}