declare interface IQuestion {
  id: string
  type: QuestionType
  question: string
}

declare interface IAnswer {
  id: string
  answer: string
}

declare interface IMultiQuestion extends IQuestion {
  answers: IAnswer[]
}

declare interface IRatingQuestion extends IQuestion {
  min: Number
  max: Number
}
