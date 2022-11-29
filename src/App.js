import './App.css';
import Content from './Components/Content/content';
import Header from './Components/header/header';
import Nav from  './Components/Nav/Nav';
import axios from 'axios';
const App = ()=> {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
    axios.defaults.params ={
        api_key: 'adc2fc808bb96bd1483f9526634c6061',
    };
    return <div className='try'>
        <Nav />
        <Header />
        <Content />
    </div>;
};
export default App;