import React, {useEffect} from 'react';
import './App.css';
import Auth from "./pages/Auth/Auth";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Contacts from "./pages/Contacts/Contacts.container";

function App() {
    const {isAuth} = useTypedSelector(state => state.user)

    return (
      <div className="App">
          {isAuth ? <Contacts /> : <Auth />}
      </div>
    );
}

export default App;
