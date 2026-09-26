import AdBanner from '../components/AdBanner';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export default function Create(){
  const [questions,setQuestions]=useState([]),[name,setName]=useState(''),[answers,setAnswers]=useState({}),[step,setStep]=useState(-1),[loading,setLoading]=useState(true),[err,setErr]=useState('');
  const nav=useNavigate();
  useEffect(()=>{api('/quizzes/prepare',{method:'POST'}).then(d=>setQuestions(d.questions)).catch(e=>setErr(e.message)).finally(()=>setLoading(false))},[]);
  async function finish(){
    if(Object.keys(answers).length!==20)return setErr('Please choose one option for every question.');
    setLoading(true);setErr('');
    try{
      const prepared={questionIds:questions.map(q=>q.id),creatorAnswers:Object.entries(answers).map(([questionId,optionIndex])=>({questionId:Number(questionId),optionIndex}))};
      const data=await api('/quizzes',{method:'POST',body:JSON.stringify({creatorName:name,...prepared})});
      nav(`/created/${data.shareCode}`);
    }catch(e){setErr(e.message)}finally{setLoading(false)}
  }
  if(loading&&questions.length===0)return <main className="center"><div className="loader">Preparing your 20 questions...</div></main>;
  if(step===-1)return <main className="center"><div className="card createCard"><div className="eyebrow">STEP 1 · YOUR NAME</div><h2>Let's make your friendship test.</h2><p>We'll give you 20 random questions from our 60-question bank. Your choices become the answers your friends have to guess.</p><label>Your name</label><input value={name} onChange={e=>setName(e.target.value)} placeholder="e.g. Raveen" maxLength={40}/>{err&&<div className="error">{err}</div>}<button className="primary full" onClick={()=>name.trim()?setStep(0):setErr('Enter your name')}>Choose My Answers →</button></div></main>;
  const q=questions[step],selected=answers[q.id];
  function choose(i){setAnswers(a=>({...a,[q.id]:i}));if(step<19)setTimeout(()=>setStep(s=>s+1),120)}
  return <main className="quizPage"><div className="quizTop"><span>Your answer key</span><span>{step+1} / 20</span></div><div className="progress"><span style={{width:`${((step+1)/20)*100}%`}}/></div><section className="question"><div className="eyebrow">QUESTION {step+1}</div><h2>{q.text}</h2><div className="options">{q.options.map((o,i)=><button key={i} className={`option ${selected===i?'selected':''}`} onClick={()=>choose(i)}><img src={o.image} alt=""/><span>{o.label}</span>{selected===i&&<b>✓</b>}</button>)}</div>{step===19&&<button className="primary submit" onClick={finish}>{loading?'Creating...':'Create & Get My Share Link →'}</button>}{err&&<div className="error">{err}</div>}</section><AdBanner slot={import.meta.env.VITE_AD_SLOT_CREATE} className="pageAd" /> </main>
}
