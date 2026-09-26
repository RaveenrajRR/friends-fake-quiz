import AdBanner from '../components/AdBanner';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Link2, Trophy, Image as ImageIcon } from 'lucide-react';
export default function Home(){return <main className="heroPage"><section className="hero"><div className="pill">20 QUESTIONS · 4 CHOICES · 1 FRIENDSHIP TEST</div><h1>Are your friends<br/><span>actually real?</span></h1><p>Create a fun personality quiz, send the link to your friends and discover how closely they know you.</p><Link className="primary" to="/create">Create My Quiz <ArrowRight size={19}/></Link><div className="features"><div><Users/><b>Share with friends</b><small>One simple link</small></div><div><ImageIcon/><b>Visual questions</b><small>Pick from 4 photos</small></div><div><Trophy/><b>See scores</b><small>Compare every answer</small></div></div></section><AdBanner slot={import.meta.env.VITE_AD_SLOT_HOME} className="pageAd" />
</main>}
