import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const products = [
    { name: "Photoshop", price: "$50" },
    { name: "Illustrator", price: "$40" },
    { name: "Premiere Pro", price: "$70" },
    { name: "After Effects", price: "$100" }
  ]
  return (

    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My first react paragraph</p>
        <h6>people: {person1.name + " " + person1.job}</h6>
        <h6 style={{ color: 'red' }}>people: {person2.name + " " + person2.job}</h6>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Counter></Counter>
        <Users></Users>
        <h1>Adobe Products</h1><br />
        <Products product={products[0]}></Products><br />
        <Products product={products[1]}></Products><br />
        <Products product={products[2]}></Products><br />
        <Products product={products[3]}></Products>



      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(7)
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);

  }
  const handleDecrease = () => {
    const decreaseCount = count - 1;
    setCount(decreaseCount);
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Add to cart</button>
      <button onClick={handleDecrease}>Go Back</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])



  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.email}</li>)
        }

      </ul>
    </div>


  );
}

function Products(props) {

  return (
    <div style={{ border: '2px solid yellow', width: '500px', height: '500px' }}>
      <h3>{props.product.name}</h3>
      <p>Edit, composite, and create beautiful images, graphics, and art on desktop and iPad.</p>
      <h5>Price: {props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  );
}



export default App;
