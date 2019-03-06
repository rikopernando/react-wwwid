
export const setArticle = (article) => ({
  type: 'SET_ARTIKEL',
  article
})

export const setStartArticle = () => {
  const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid'
  return (dispatch) => {
    return fetch(url).then((response) => {
        return response.json()
    })
    .then((data) => {
        dispatch(setArticle(data))
    })
  }
}

