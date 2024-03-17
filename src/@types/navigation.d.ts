export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      'form-meal':
        | undefined
        | {
            id: string
          }
      'feedback-positive': undefined
      'feedback-negative': undefined
      'details-meal': {
        id: string
      }
    }
  }
}
