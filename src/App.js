import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from  "./Components/Header"
import Feed from "./Components/Feed"
import SearchResult from "./Components/SearchResult"
import VideoDetails from "./Components/VideoDetails"
import { Appcontext } from './context/contextAPI';

function App() {
  return (
    <Appcontext>
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header/>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
          <Route path='/video/:id' element={<VideoDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </Appcontext>
  );
}

export default App;
