import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <section className="flex-grow">
        <div className="container mx-auto px-4 py-40 text-center">
          <h1 className="text-5xl font-bold text-black-800 mb-4">Bienvenue sur MyReact</h1>
          <p className="text-lg text-black-600 mb-8">
            Explorez nos évènements sur le marketing digital, développement web,et le data analyst.
          </p>
          <Link to="/events"
            className="inline-block bg-yellow-100 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500"
          >
            Voir les évènements
          </Link>
        </div>
      </section>
      <footer>

      </footer>

      
     
    </div>
  );
};

export default Home;