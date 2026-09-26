import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';import Home from './pages/Home';import Create from './pages/Create';import Created from './pages/Created';import Quiz from './pages/Quiz';import Result from './pages/Result';
import AdBanner from './components/AdBanner';
export default function App(){return <><Navbar/><div className="globalAd"><AdBanner slot={import.meta.env.VITE_AD_SLOT_TOP} /></div><Routes><Route path="/" element={<Home/>}/><Route path="/create" element={<Create/>}/><Route path="/created/:code" element={<Created/>}/><Route path="/quiz/:code" element={<Quiz/>}/><Route path="/result/:code" element={<Result/>}/></Routes><div className="globalAd bottomAd"><AdBanner slot={import.meta.env.VITE_AD_SLOT_BOTTOM} /></div></>}
