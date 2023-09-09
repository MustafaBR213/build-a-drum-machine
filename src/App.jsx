import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      console.log(event.key)
      playSound(event.key.toUpperCase())
    })
  },[])

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];


  function playSound(selector) {
    const audio = document.getElementById(selector);
  
    if (audio) {
      if (audio.paused) {
        audio.play();
        setActiveKey(selector);
      } else {
        // Audio is already playing, you can choose to do nothing or pause/stop it.
        // audio.pause(); // Pause the currently playing audio
        // audio.currentTime = 0; // Rewind the audio to the beginning
      }
    } else {
      console.error(`Audio element with id ${selector} not found.`);
    }
  }
  

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>Drum Machine</h1>
      <div id="display">
        {activeKey}
      </div>
        <div className="drum-pads">
        {drumPads.map((drumPad) => 
          <div 
            key={drumPad.src}
            onClick={() => {
            playSound(drumPad.text)}
            }
            className='drum-pad'
            id={drumPad.src}>
            {drumPad.text}
            <audio
            className='clip'
            id={drumPad.text}
            src={drumPad.src}>
            </audio>
          </div>)}
        </div>
      
      
      </div>      
    </div>
  );
}

export default App;
