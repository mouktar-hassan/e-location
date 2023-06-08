import logo from './logo.svg';
import './App.css';
import './App.css';
import PropertyList from './PropertyList/PropertyList.js';
import BookingList from './BookingList/BookingList.js';
import BookingForm from './BookingForm/BookingForm';
import Auth from './Auth/Login.js';

function App() {
  return (
    <div className="App">
      <Auth />
      <PropertyList />
      <BookingList />
      <BookingForm />
    </div>
  );
}

export default App;