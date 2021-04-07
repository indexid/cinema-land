import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/nav/Nav';
import Trending from './pages/trending/Trending';
import Search from './pages/search/Search';
import Series from './pages/series/Series';
import Movies from './pages/movies/Movies';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" exact component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
