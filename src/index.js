import { render } from 'react-dom';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom'
import './constans/reset.css'


render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
    
    document.getElementById('root')
)
// prettier