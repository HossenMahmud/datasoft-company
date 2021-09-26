import './App.css';
import Company from './components/Company/Company';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* Navigation and Heading part */}
      <Header></Header>
      {/* Main body part */}
      <Company></Company>
    </div>
  );
}

export default App;
