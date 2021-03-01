import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [author, setAuthor ] = useState(null);
  const [text, setText ] =  useState(null)

  const handleClick = () => {
    fetch('https://freequote.herokuapp.com/')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setAuthor(data.author);
        setText(data.quote);
      })
  }

  useEffect(() => {
    fetch('https://freequote.herokuapp.com/')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setAuthor(data.author);
        setText(data.quote);
      })
  },[]);

  return (
    <div id="quote-box">
      <div className="text-and-author">
        <p id="text">{ text }</p>
        <p id="author">{ author }</p>
      </div>
      <div className="buttons-wrapper">
      <a id='tweet-quote' title='Tweet Quote' className='tweet-btn' href="twitter.com/intent/tweet" target='_blank'><i className="fab fa-twitter"></i></a>
      <button onClick={handleClick} id="new-quote"><span className='add'>+</span> New Quote</button>
      </div>
    </div>
  );
}

export default App;
