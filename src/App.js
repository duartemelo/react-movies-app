import './App.css';
import Content from "./components/organisms/Content/Content";
import './variables.css';
import ContentLayout from './layouts/ContentLayout/ContentLayout';

function App() {
  return (
    <div className="App">
      <ContentLayout>
        <Content/>
      </ContentLayout>
    </div>
  );
}

export default App;
