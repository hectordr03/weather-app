import React from 'react';
import './App.css';
import axios from 'axios';

// Used to hide environmental variables within code
require('dotenv').config();

// const NYC_ID = 5128581;
// const BASE_URL = `api.openweathermap.org/data/2.5/forecast?id=${NYC_ID}&appid=${process.env.API_KEY}`;
const UNSAFE_URL = `HTTPS://api.openweathermap.org/data/2.5/forecast?q=new york city&appid=69a82df7ee6726e168a96d57b2eeaf2e`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      info: [],
    }
  }

  async componentDidMount(){
    await axios.get(UNSAFE_URL)
    .then(res => (
      this.setState({
        info: res.data,
      })
    ))
    .catch(e => console.error(e.message));
    console.log(this.state.info)
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
