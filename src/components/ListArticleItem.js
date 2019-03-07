import React from 'react'
import moment from 'moment'

const ListArticleItem = ({thumbnail, title, description, author, pubDate}) => (
  <div className="list__article">
      <div className="list__article-image">
          <img src={thumbnail} alt="Article" />
      </div>
      <div className="list__article-title">
          <h4>{title}</h4>
          <p>{description.substr(0,125).replace(/<[^>]*>/g,'') + '...'}</p>
          <span>{author} - { moment(pubDate).format('D/M/YYYY') }</span>
      </div>
  </div>
)

export default ListArticleItem
