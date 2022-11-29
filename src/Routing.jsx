import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import FormInput from './components/FormInput';
import About from './components/About'


function Routing() {

    const [data, setData] = useState([]);
    const [country, setcountry] = useState("");

    const userAction = async () => {
        let response= await  fetch(`https://restcountries.com/v3.1/name/${country}`)
        let [apiData] = await response.json()

        let flag = apiData.flags.png;
        let common = apiData.name.common;
        let official = apiData.name.official;
        let languages = Object.values(apiData.languages).join();
        let curr = Object.keys(apiData.currencies).join();
        let reg = apiData.region;
        let subreg = apiData.subregion;
        let map = apiData.maps.googleMaps;

        const CuntryObj = {
         flag, common,official, languages, curr, reg, subreg, map
        }
        setData([...data, CuntryObj]);
    }
    

  return (
    <div>
        <Router>
            <Routes>
                <Route exact path = "/" element = {<WelcomePage />}></Route>
                <Route path = "/FormInput/" element = {<FormInput country={country} setcountry={setcountry}  userAction={userAction} data={data}/>}></Route>
                <Route path = "/About/:name" element = {<About data={data}/>}></Route>
            </Routes>
        </Router>
    </div>

    
  )
}

export default Routing