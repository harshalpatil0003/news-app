import React from 'react'
import '../components/news-card.css'

function Newscards({ author, title, description, url, urlToImage, publishedAt }) {
  return (
  
    <div className="news-card">
    <img src={urlToImage} className="news-article-image" alt="news-img" />
    <h2 className="article-title">{title}</h2>
    <div>
        <p className="article-author">By {author}</p>
        <p className="article-date">Published on {publishedAt}</p>
        <p className="article-content">{description}</p>
        <button type="button" className="btn btn-info"> <a href={url} target="blank" className="read-more">Read More</a>
        </button>
    </div>
</div>
  )
}

export default Newscards
