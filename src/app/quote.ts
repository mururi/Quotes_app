export class Quote {
  upVote: number;
  downVote: number;

  constructor(public content: string, public author: string, public submittedBy: string, public date: Date) {
    this.upVote = 0;
    this.downVote = 0;
  }
}
