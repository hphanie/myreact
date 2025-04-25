import axios from "axios";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function ArticleDoc({articles}){
    return(
        <div className="flex flex-nowrap py-5 px-80 ">
            <div><img className="max-w-sm"  src={`${articles.urlToImage}`} alt="cover"/></div>
            <div className="px-10">
                <h1 className="text-xl font-semibold py-5">{articles.title}</h1>
                
                <span>{new Date(articles.publishedAt).toLocaleString()}</span>
                <Link to={`/article/${articles.publishedAt}`} className="text-blue-500 hover:text-yellow-500">Lire plus</Link>
                
            </div>
        </div>
    )
}
function Articles(){
    const apiURL = "https://newsapi.org/v2/everything?q=tesla&from=2025-03-17&sortBy=publishedAt&apiKey=f23424d0c86449bb884422fe874f2023 "
    const [articles, setArticles]= useState([]) 
    async function getArticles() {
        try{
            const response = await axios.get(apiURL)
            const articlesData = response.data.articles;
            setArticles(articlesData)
        }catch(error){
            console.log(error)
        };
    }


    useEffect(()=>{
        getArticles();
    },[])
    
    return(
        <div>
            <h1 className="text-5xl text-center py-5 text-yellow-500">Listes des articles</h1>
            {
                articles.map((articles)=>(
                    <ArticleDoc
                    key={articles.publishedAt}
                    articles={articles}/>
                ))
            }
        </div>
    );
};

export default Articles;