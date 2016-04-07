namespace app.i {
  export interface IChecknote {
    _id: any;
    title: string;
    dueDate: number;
    note: string;
    completeOrnah: boolean;

    task: (string | ITask);
    user: (string | IUser);
  }
}
