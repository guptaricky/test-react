import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pagination from './pagination';
import ToggleText from './toggleText';
import Counter from './counter'
import FormSubmit from './formSubmit'
import DynamicStyliing from './dynamicStyling'
import ParentChild from './parentChild'
import TaskScheduler from './taskScheduler'
import MainComponent from './lazyLoading1'
import reportWebVitals from './reportWebVitals';


const items = [
  {id:1,firstname:"mayank"},
  {id:2,firstname:"Pankaj"},
  {id:3,firstname:"Gagan"},
  {id:4,firstname:"Alok"},
  {id:5,firstname:"Deepak"},
  {id:6,firstname:"Harsh"},
  {id:7,firstname:"Ravi"},
];
const itemsPerPage = 3;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Pagination items = {items} itemsPerPage={itemsPerPage}/> */}
    {/* <Counter /> */}
    {/* <ToggleText /> */}
    {/* <FormSubmit /> */}
    {/* <DynamicStyliing /> */}
    {/* <ParentChild /> */}
    <MainComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
