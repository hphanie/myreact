import { useState } from "react";
import { Link } from "react-router-dom";
import event from "../../../assets/blog/event.png";
import dev from "../../../assets/blog/dev.png";
import data from "../../../assets/blog/data.png"

function EventNote({title, imgSrc, content, text, linkName}){
  return (
    <div className="flex-row items-center bg-yellow-50 py-2 px-5 shadow-xl  max-w-md rounded-lg">
      <h2 className="text-center text-yellow-500 font-semibold text-2xl mt-4">{title}</h2>
      <img className= "py-4 max-w-[80px] content-center" src={imgSrc} alt="event"/>
      <p className="">{content}</p>
      <Link className= "text-yellow-500 font-bold hover:text-blue-600" to={`${linkName}`}>{text}</Link>
    </div>
  )
};


function Event(){
  const[eventItem] = useState([
    {
      title: "Marketing Digital",
      imgSrc: `${event}`,
      content: "Les événements sont le moyen idéal de présenter à vos clients la culture de votre marque, vos services ou vos produits, que vous les organisiez en personne ou en ligne. Évidemment, votre produit peut être votre événement en lui-même ! Dans les deux cas, votre marketing ne doit pas s’arrêter une fois les portes de votre événement fermées.",
      text: "voir plus",
    },
    {
      title: "Développement Web",
      imgSrc: `${dev}`,
      content: "Les événements sont le moyen idéal de présenter à vos clients la culture de votre marque, vos services ou vos produits, que vous les organisiez en personne ou en ligne. Évidemment, votre produit peut être votre événement en lui-même ! Dans les deux cas, votre marketing ne doit pas s’arrêter une fois les portes de votre événement fermées.",
      text: "voir plus",
    },
    {
      title: "Data Analyst",
      imgSrc: `${data}`,
      content: "Les événements sont le moyen idéal de présenter à vos clients la culture de votre marque, vos services ou vos produits, que vous les organisiez en personne ou en ligne. Évidemment, votre produit peut être votre événement en lui-même ! Dans les deux cas, votre marketing ne doit pas s’arrêter une fois les portes de votre événement fermées.",
      text: "voir plus",
    }
  ])

 

  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-center text-3xl text-yellow-500 py-10 px-2">LES EVENEMENTS</h1>
      <div className="flex flex-row gap-20 px-20 py-10 ">
        {eventItem.map((item)=>
          <EventNote
            title= {item.title}
            imgSrc= {item.imgSrc}
            content= {item.content}
            text= {item.text} 
          />
        )}
      </div>      
    </div>
  );
}

export default Event;
