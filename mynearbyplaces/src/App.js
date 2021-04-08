import { HashRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Home from './components/Home';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Review from './components/Review';
import Add from './components/Add';
import Businesses from './components/Businesses';

function App() {
  return (
    <HashRouter>
      <Container style={{backgroundImage: `url("https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`, 
    backgroundSize: "cover", backgroundRepeat: "no-repeat"}} fluid>
        <Header />
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/reviews" component={Review}/>
          <Route path="/login" component={Login}/>
          <Route path="/add" component={Add}/>
          <Route path="/business" component={Businesses}/>
        </Switch>
        <Footer />
      </Container>
    </HashRouter>
  );
}

export default App;
