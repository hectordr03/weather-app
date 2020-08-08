import React from 'react';
import './App.css';
import axios from 'axios';

// Used to hide environmental variables within code
require('dotenv').config();

const cityName = "new york city";
// const BASE_URL = `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.API_KEY}`;
const UNSAFE_URL = `HTTPS://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=69a82df7ee6726e168a96d57b2eeaf2e`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  async componentDidMount(){
    await axios.get(UNSAFE_URL)
    .then(res => (
      this.setState({
        info: res.data,
        list: res.data.list,
      })
    ))
    .catch(e => console.error(e.message));
    console.log(this.state.list[0].main)
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    )
  }

}

export default App;
