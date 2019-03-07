const stateDefaultArticle = []

export default (state = stateDefaultArticle, action) => {
  switch(action.type){
    case 'SET_ARTIKEL':
      return action.article
    default:
      return state
  }
}

