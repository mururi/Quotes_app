export class Quote {
  upVote: number;
  downVote: number;
  date: Date;

  constructor(public content: string, public author: string, public submittedBy: string) {
    this.upVote = 0;
    this.downVote = 0;
    this.date = new Date();
  }
}
