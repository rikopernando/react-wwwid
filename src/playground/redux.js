import { createStore } from 'redux'

const setArticle = (article) => ({
  type: 'SET_ARTIKEL',
  article
})

const setStartArticle = () => {
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid'
  return (dispatch) => {
    return fetch(url).then((response) => {
        return response.json()
    })
    .then((data) => {
        dispatch(setArticle(data))
        console.log(data)
    })
  }
}

const articleReducers = (state = [], action) => {
  switch(action.type){
    case 'SET_ARTIKEL':
      return action.article
    default:
      return state
  }
}

const store = createStore(articleReducers)


