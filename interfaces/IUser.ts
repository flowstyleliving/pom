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

    checknotes: Array<string | IChecknote>;
    tasks: Array<string | ITask>;
  }
}
