import React, {useState, useEffect} from 'react';
import './home.css';
import { Header, Navbar} from '../components/general/Navbar';
import { getAllInitiatives } from '../API/crud';
import ChangeView from '../components/ChangeViewByNav';

    
const Home = () => {
  const [view, setView] = useState('');
  const [allInitiatives, setAllInitiatives] = useState([]);
    
  useEffect(() => {
    getAllInitiatives(setAllInitiatives);
  }, []);
  console.log(allInitiatives);
    return (
        <div >
            <Header />
            <div className="home-container-main">
                <Navbar setView={setView} />
                <ChangeView view={view} allInitiatives={allInitiatives} />
            </div>
        </div>
    )
};

export default Home;
