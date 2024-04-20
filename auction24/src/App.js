import{BrowserRouter , Routes,Route} from 'react-router-dom';
import Authentication from './components/Authentication';
import { useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './components/Navbar';
import BidingPage from './components/BidingPage';
import Result from './components/Result';

function App() {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [auctionitemid, setAuctionitemid] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      localStorage.setItem('user', user.displayName)
      setUser(user.email)
      setUsername(user.displayName)
      // console.log(user.email);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar user={username} setUsername={ setUsername } setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Authentication setUser={setUser} user={user}/>} />
          <Route path="/result" element={<Result  />} />
          <Route path="/bidingpage" element={<BidingPage auctionitemid={auctionitemid} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;


