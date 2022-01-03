import './App.css';
import Login from './componets/Login';
import MailB from './componets/MailB';
const msg=["Hii"];
function App() {
  return (
    <>
      <MailB message={msg}/>
      <Login isLoggedIn={false} />
    </>
  );
}

export default App;
