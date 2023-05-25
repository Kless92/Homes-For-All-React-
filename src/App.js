import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePages';
import NewsandUpdatePage from './pages/NewsAndUpdatesPage';
import VolunteerPage from './pages/VolunteerPage';
import DonationsPage from './pages/DonationsPage';
import NewsandUpdatesDetailPage from './pages/NewAndUpdatesDetailPage';
import logo from './logo.svg';
import './App.css';
import { fetchFrontPage } from './features/display/displaySlice';
import { fetchNews } from './features/news&updates/newsandupdatesSlice';


function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchFrontPage());
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='news' element={<NewsandUpdatePage/>}/>
          <Route path='news/:newsId' element={<NewsandUpdatesDetailPage/>}/>
          <Route path='volinteer' element={<VolunteerPage/>}/>
          <Route path='donations' element={<DonationsPage/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
