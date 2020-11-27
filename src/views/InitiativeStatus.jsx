import React, {useState, useEffect} from 'react';
import { Header, Navbar} from '../components/general/Navbar';
import { getAllInitiatives } from '../API/crud';
import Status from '../components/Status';
import { useHistory } from 'react-router-dom';
// import ChangeView from '../components/ChangeViewByNav';

    
const InitiativeStatus = () => {
  const [view] = useState('');
  const history = useHistory();
  const [allInitiatives, setAllInitiatives] = useState([]);
    
  useEffect(() => {
    getAllInitiatives(setAllInitiatives);
  }, []);
  console.log(allInitiatives);
    return (
        <div >
            <Header />
            <div className="home-container-main">
                <Navbar setView={()=>history.push('/home/initiatives')}  />
                <Status view={view} allInitiatives={allInitiatives} />
            </div>
        </div>
    )
};

export default InitiativeStatus;

