'use client';
import { useEffect, useState } from 'react';

type Question = {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  useEffect(() => {
    fetch('/data/questions.json')
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const categories = ['الكل', ...Array.from(new Set(questions.map(q => q.category)))];

  const filtered = selectedCategory === 'الكل'
    ? questions
    : questions.filter(q => q.category === selectedCategory);

  return (
    <div style={{ direction: 'rtl', padding: '2rem' }}>
      <h1>اختبار الكفاءات التربوية (250 سؤالًا)</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>اختر القسم: </label>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {filtered.map((q) => (
        <div key={q.id} style={{ marginBottom: '2rem', background: '#fff', padding: '1rem', borderRadius: '8px' }}>
          <h3>{q.id}. {q.question}</h3>
          <ul>
            {q.options.map((opt, i) => (
              <li key={i} style={{ color: i === q.answer ? 'green' : 'black' }}>
                {String.fromCharCode(0x0623 + i)}. {i === q.answer ? <strong>{opt}</strong> : opt}
              </li>
            ))}
          </ul>
          <p style={{ color: '#555' }}>💡 {q.explanation}</p>
        </div>
      ))}
    </div>
  );
}
