import React from 'react'
import { connect } from 'react-redux'
import filterArticle from '../store/selectors/article'

const ListArticle = ({articles}) => (
  <div className="container">
      <div className="list__article">
          {
            console.log(articles)
          }
          This is List Article
      </div>
  </div>
)

const mapStateToProps = (state) => ({
  articles: filterArticle(state.article.items)
})

export default connect(mapStateToProps)(ListArticle)
