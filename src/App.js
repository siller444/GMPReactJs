import { Content, Footer, Header } from './components';
import './css/app.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
