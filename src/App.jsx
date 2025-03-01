import './App.css';
import FoodCard from './components/FoodCard';
import umbrella from './assets/umbrella.png';
import grilledCheese from './assets/gc.png';
import tacoTruck from './assets/tt.png'
import kogi from './assets/kogi.png'

const foodTrucks = [
  {
    id: 1,
    name: "Grilled Cheeserie",
    cuisine: "American",
    image: grilledCheese,
    url: "https://grilledcheeserie.com/"
  },
  {
    id: 2,
    name: "Fukubuger Truck",
    cuisine: "American/Japanese",
    image: tacoTruck,
    url: "https://www.fukuburger.com/"
  },
  {
    id: 3,
    name: "Kogi BBQ",
    cuisine: "Korean",
    image: kogi,
    url: "https://kogibbq.com/",
  }
];

const App = () => {
  return (
    <div className="app">
      <div className="content-wrapper">
        <img src={umbrella} alt="Umbrella" height="200px" width="60%" className='umbrella' />
        <h1>Food Truck Favorites</h1>
        <div className="food-truck-container">
          {foodTrucks.map(truck => (
            <FoodCard key={truck.id} {...truck} />
          ))}
        </div>
      </div>
    </div >
  )
}

export default App