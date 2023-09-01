import "./App.css";
import "./variables.css";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <div id="portal-wrapper" />
      <div id="content-wrapper">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
