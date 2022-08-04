import React, {useEffect} from 'react';
import './App.css';
import Auth from "./pages/Auth/Auth";
import useActions from "./hooks/useActions";
import {useTypedSelector} from "./hooks/useTypedSelector";

function App() {
    const {user, error, loading} = useTypedSelector(state => state.user)

    // if(loading){
    //     return <p>Идёт загрузка</p>
    // }
    //
    // if(error){
    //     return <p>{error}</p>
    // }

    return (
      <div className="App">
          <Auth />
      </div>
    );
}

export default App;
