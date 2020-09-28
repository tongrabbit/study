import React,{useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [image, setImage] = useState('');

 const handleChange = () =>{
    axios
      .get(
        'https://api.generated.photos/api/v1/faces?api_key=EkHY1pCgFvEgnNUkYC3GXQ&gender=female&hair_color=brown'
      )
    .then(res=>{
      const url = res.data.faces[1].urls[4][512];
      url && setImage(url);
      //console.log(res.data.faces[0].urls[4][512]);
    })
    .catch(err=>{
      console.log(err.message);
    });
  };

  return (
    <div className='App'>
      <h1>AI Photo Generator</h1>
      {image && <img src={image} alt="ai face" />}
      <button type='button' onClick={handleChange}>
        New Image
      </button>
    </div>
  );
}

export default App;
