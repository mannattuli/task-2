import "./App.css";
const logo =
  "https://raw.githubusercontent.com/techsyndicate/website/main/public/assets/images/ts.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://techsyndicate.club">
          <h1>Tech Syndicate</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
