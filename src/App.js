import {useState} from "react";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import './App.css';


function App() {
  const [city,setCity] = useState("");
  const[results,setResults] = useState({
  country : "",
  cityName : "",
  temperature : "",
  conditionText : "",
  icon : ""
    }
  );
  
  
  const getWeather = (e) => {
    e.preventDefault();
    axios.get(`http://api.weatherapi.com/v1/current.json?key=3f321d50f27248e4abe64203210910&q=city&aqi=no`
      )
      .then(res => {
        setResults({
          country : res.data.location.country,
          cityName : res.data.location.name,
          temperature : res.data.current.temp_c,
          conditionText : res.data.current.condition.text,
          icon :res.data.current.condition.icon  
        })
      })
    }
    return (
      <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />    
      <Results results={results}/>
    </div>
  );
}
//FormにsetCityという名前でsetCityを渡す.getWeatherも



export default App;