import logo from './logo.svg';
import './App.css';
import Megjelenit from './components/Megjelenit';
import FormComponet from './components/FormComponent';

function App() {
    return (
      <div className="App">
        <header className="p-2 text-center">
          <h1>Képfeltöltés React - Laravel</h1>
        </header>
        <article>
          <FormComponet />
          <Megjelenit />
        </article>
        <footer></footer>
      </div>
    );

}

export default App;
