import './App.css';
import React, { Component } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from 'react-router-dom';
import HomePages from './Home/HomePages';
import RootLayout from './Layout/RootLayout';
import SinglePage from './components/watch/singlePage';

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<HomePages/>} />
      <Route path="/singlePage/:id" element={<SinglePage/>}/>
      <Route path="*" element={<h1>Page not found</h1>}/>
    </Route>
  )
)

class App extends Component {
  render() { 
    return (
      <>
        <RouterProvider router={router}/>
      </>
    );
  }
}
 
export default App;

