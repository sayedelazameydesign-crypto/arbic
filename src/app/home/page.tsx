'use client';

export default function HomeLinks() {
  const files = [
    { name: 'صفحة الأسئلة', path: '/q.html' },
    { name: 'صفحة عربية', path: '/ARBIC.html' },
    { name: 'صفحة ش', path: '/ش.html' },
    { name: 'صفحة 2', path: '/2.html' },
    { name: 'نص جديد', path: '/New Text Document.html' },
    { name: 'نص جديد 4', path: '/New4 Text Document.html' },
    { name: 'نص جديد l', path: '/Newl Text Document.html' },
    { name: 'SVG - globe', path: '/globe.svg' },
    { name: 'SVG - file', path: '/file.svg' },
    { name: 'SVG - next', path: '/next.svg' },
    { name: 'SVG - vercel', path: '/vercel.svg' },
    { name: 'SVG - window', path: '/window.svg' }
  ];

  return (
    <div style={{ direction: 'rtl', padding: '2rem' }}>
      <h1>📂 روابط صفحات HTML وملفات ثابتة</h1>
      <ul>
        {files.map((file, i) => (
          <li key={i} style={{ marginBottom: '0.5rem' }}>
            <a href={file.path} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
              🔗 {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
