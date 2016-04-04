namespace app.i {
  export interface ITask {
    _id: any;
    title: string;
    postDate: string;
    dueDate: string;
    checkNotes: {
      id: string,
      title: string,
      dueDate: string,
      check: number
    },
    pomStatus: string;
    color: string;
  }
}
