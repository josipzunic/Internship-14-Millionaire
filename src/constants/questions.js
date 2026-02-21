class Question {
  constructor(question, answers) {
    this.question = question;
    this.answers = answers;
  }
}

export const questions = [
  new Question("Can a match box?", [
    { answer: "Yes", isCorrect: false },
    { answer: "No", isCorrect: false },
    { answer: "No, but a tin can", isCorrect: true },
    { answer: "Yes, one beat Mike Tyson", isCorrect: false },
  ]),
];
