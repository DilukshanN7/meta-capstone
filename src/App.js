import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='logo' src='Logo.png' width={250} height={67}></img>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Menu</a>
          <a href='#'>Reservations</a>
          <a href='#'>Order Online</a>
          <a href='#'>Login</a>
        </nav>
      </div>
      <div className='hero'>
        <div className='left'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className='pfirst'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <a className='reservebutton' href=''>
            <button>Reserve a Table</button>
          </a>
        </div>
        <div className='right'>
          <img src='image.png' height={420} width={431}></img>
        </div>
      </div>
      <div className='second'>
        <div className='top'>
          <h1 className='h12'>This week's specials!</h1>
          <a className='orderbutton' href=''>
            <button>Reserve a Table</button>
          </a>
        </div>
        <div className='third'>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
