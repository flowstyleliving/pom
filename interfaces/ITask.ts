namespace app.i {
  export interface ITask {
    _id: any;
    title: string;
    postDate: number;
    dueDate: number;
    checkNotes: {
      id: string,
      title: string,
      dueDate: number,
      check: number
    },
    pomStatus: string;
    color: string;
  }
}
