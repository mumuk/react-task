import React from 'react';
import ReactDOM from 'react-dom';
import LoadingPage from "./components/LoadingPage"
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {CardsList} from "./components/CardsList"




console.log('MIKE')
ReactDOM.render(<CardsList/>, document.getElementById('app'));