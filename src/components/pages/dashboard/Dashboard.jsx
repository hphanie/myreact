import React from 'react';
import './Dashboard.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    // const token = localStorage.getItem("token");
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!token) {
    //         navigate("/login"); 
    //     }
    // }, [token, navigate]);

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="search-bar">
                    <input type="text" placeholder="Rechercher..." />
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/" className="nav-link">Statistiques</NavLink></li>
                    <li><NavLink to="/" className="nav-link">Paramètres</NavLink></li>
                    <li><NavLink to="/about" className="nav-link">En savoir plus</NavLink></li>
                </ul>
            </aside>

            <main className="main-content">
                <h1>Bienvenue sur le Dashboard</h1>
                <p>Gérez vos données, visualisez les statistiques, et configurez vos préférences ici.</p>
            </main>
        </div>
    );
};

export default Dashboard;
