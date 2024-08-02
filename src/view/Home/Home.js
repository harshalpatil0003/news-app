import React, { useEffect, useState } from "react";
import axios from "axios";
import Newscards from '../../components/news-cards'
import './Home.css'
function Home() {
    const [news, setNews] = useState([])
    const [searchquery, setsearchquery] = useState("Apple")
    const loadnews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${searchquery}&apiKey=${process.env.REACT_APP_API_KEY}`)
            setNews(response.data.articles)
        }
        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        loadnews()
    }, [searchquery])

    // useEffect(() => {
    //     loadnews();
    // }, [loadnews]); 
    return (
        <div>
            <h1 className="text-center">News App</h1>
            <input type="text" value={searchquery}
                onChange={(e) => {
                    setsearchquery(e.target.value)
                }}
                className="form-control mx-auto" />
            <div className="card-container">
                {

                    news.map((newsarticle, index) => {
                        const { author, title, description, url, urlToImage, publishedAt } = newsarticle
                        return (
                            < Newscards author={author} title={title} description={description}
                                url={url} urlToImage={urlToImage} publishedAt={publishedAt} />
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Home