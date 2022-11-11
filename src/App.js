import './App.css';
import Products from './Components/Products';
import CartState from './context/cart/CartState';

function App() {
  const json = {
    "data": [
      {
        "name": "Cosmetics",
        "productList": [
          {
            "id": 1,
            "name": "Hair Oil",
            "price": "120.00"
          },
          {
            "id": 2,
            "name": "Face wash",
            "price": "90.00"
          }
        ]
      },
      {
        "name": "Household",
        "productList": [
          {
            "id": 3,
            "name": "Brushes",
            "price": "30.00"
          },
          {
            "id": 4,
            "name": "Combs",
            "price": "89.00"
          },
        ]
      }
    ]
  }
  // console.log(json.data[0].name)
  return (
    <>
      <CartState>
        <div className='container'>
          <h1 className='heading'>Front End Shopping Site</h1>
          {
            json.data.map((element) => {
              return <div key={element.name}><h4>{element.name}</h4><hr /><Products products={element.productList} category={element.name} /></div>
            })
          }
        </div>
      </CartState>
    </>
  );
}

export default App;
