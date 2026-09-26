const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export async function api(path, options={}) {
  const res = await fetch(`${API}${path}`, { headers:{'Content-Type':'application/json', ...(options.headers||{})}, ...options });
  const data = await res.json().catch(()=>({}));
  if(!res.ok) throw new Error(data.message || 'Something went wrong');
  return data;
}
export const createQuiz = name => api('/quizzes',{method:'POST',body:JSON.stringify({creatorName:name})});
export const getQuiz = code => api(`/quizzes/${code}`);
export const submitAnswers = (code, payload) => api(`/quizzes/${code}/answers`,{method:'POST',body:JSON.stringify(payload)});
export const getResults = code => api(`/quizzes/${code}/results`);
