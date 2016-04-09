namespace app.i {
  export interface ITask {
    _id: any;
    title: string;
    postDate: number;
    dueDate: Date;
    pomStatus: string;
    color: string;
    completeOrnah: boolean,

    checknotes: [string | IChecknote];
    user: (string | IUser);
  }
}
