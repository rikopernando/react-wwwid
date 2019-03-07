import React from 'react'
import { connect } from 'react-redux'
import ListArticleItem from './ListArticleItem'
import filterArticle from '../store/selectors/article'

const ListArticle = ({articles}) => (
  <div className="container">
      <div className="list__line">
          {
            articles.map((article, key) => {
              return (
                <ListArticleItem key={key} {...article} />
              )
            })
          }
      </div>
  </div>
)

const mapStateToProps = (state) => ({
  articles: filterArticle(state.article.items)
})

export default connect(mapStateToProps)(ListArticle)
