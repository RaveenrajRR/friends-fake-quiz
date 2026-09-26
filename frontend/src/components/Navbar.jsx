import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
export default function Navbar(){return <header className="nav"><Link className="brand" to="/"><span className="brandIcon"><Sparkles size={18}/></span>Friends Are Fake?</Link><Link className="navCreate" to="/create">Create Quiz</Link></header>}
