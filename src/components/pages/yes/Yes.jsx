// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function ArticleList({article}){
//     return(
//         <div>
//            <div><img src={`${article.urlToImage}`} alt="cover"/></div>
//            <h2>{article.title}</h2>
//            <span>{new Date(article.publishedAt).toLocaleString()}</span>
//            <Link to={`/article/${article.publishedAt}`}></Link>
//         </div>
//     )
// }

// function Article(){
    
//     const[article, setArticle] = useState([]);
//     const apiURL = "https://newsapi.org/v2/everything?q=tesla&from=2025-03-17&sortBy=publishedAt&apiKey=f23424d0c86449bb884422fe874f2023"
//     useEffect(()=>{
//         async function getArticle(){
//             try{
//                 const response = await axios.get(apiURL)
//                 const articleData = response.data.article
//                 setArticle(articleData)
//             }catch(error){
//                 console.log(error)
//             };
//         }
//     },[])   


//     return(
//         <div>
//             <h1>Liste des articles</h1>
//             {
//                 article.map((article)=>{
//                     <ArticleList
//                         key={article.publishedAt}
//                         article={article}
//                     />

//             })}
            
//         </div>
//     )
// }

// export default Article;