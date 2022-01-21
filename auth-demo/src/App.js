import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import LoginButton from './componets/LoginButton';
import LogoutButton from './componets/LogoutButton';
import Profile from './componets/Profile';
function App() {


  const {isLoading}=useAuth0();
  if(isLoading) return (<h4>loading....</h4>);
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
