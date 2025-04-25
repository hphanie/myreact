

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
   
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black-800 mb-4">À propos de MyReact</h1>
        <p className="text-lg text-black-600">
          MyReact est votre source d’informations et de conseils sur le développement web, le marketing digital et le data analyst.
        </p>
      </header>

  
      <section className="mb-12">
        <h2 className="text-2xl  text-center font-semibold text-black-600 mb-4">Notre mission</h2>
        <p className="text-black-400  mx-80">
          Nous avons pour ambition de partager des connaissances à jour et des bonnes pratiques pour aider les développeurs,
          marketeurs et travailleurs à distance à exceller dans leurs domaines. Grâce à des articles approfondis,
          nous voulons rendre la technologie accessible et inspirante pour tous.
        </p>
      </section>

     
      <section className="mb-12">
        <h2 className="text-2xl  text-center font-semibold text-black-600 mb-4">Nos valeurs</h2>
        <ul className="list-disc  text-black-400 mx-80 space-y-2">
          <li><strong>Innovation :</strong> Nous suivons les dernières tendances pour vous apporter des insights pertinents.</li>
          <li><strong>Transparence :</strong> Nos articles sont basés sur des sources fiables et des expériences concrètes.</li>
          <li><strong>Communauté :</strong> Nous encourageons l’échange et le partage d’idées au sein de notre audience.</li>
        </ul>
      </section>
      
    </div>
  );
};

export default About;

 