namespace app.i {
  export interface IUser {
    _id: any;
    email: string;
    password: string;
    name: string;
    age?: number;
    gender?: string;
    bio?: string;
    location?: string;
    imageUrl?: string;

    tasks: Array<string | ITask>;
  }
}
