index.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Portfolio Dark — Seu Nome</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1 class="logo">Seu Nome</h1>
      <nav class="nav">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
      <button id="btnToggle" class="toggle" aria-label="Alternar tema">🌙</button>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-inner">
        <img src="images/foto.jpg" alt="Sua foto" class="avatar" />
        <div>
          <h2>Olá! Eu sou Seu Nome</h2>
          <p>Desenvolvedor(a) • Estudante de Java • Criador(a) de projetos simples e funcionais.</p>
          <a class="btn" href="#projetos">Ver projetos</a>
        </div>
      </div>
    </section>

    <section id="sobre" class="container card">
      <h2>Sobre mim</h2>
      <p>Breve descrição sobre você: habilidades, interesses e o que busca profissionalmente.</p>
    </section>

    <section id="projetos" class="container">
      <h2>Projetos</h2>
      <div class="grid">
        <article class="card">
          <h3>Projeto 1</h3>
          <p>Descrição curta do projeto. Tecnologias usadas.</p>
          <a href="#" class="link">Ver mais</a>
        </article>
        <article class="card">
          <h3>Projeto 2</h3>
          <p>Descrição curta do projeto. Tecnologias usadas.</p>
          <a href="#" class="link">Ver mais</a>
        </article>
        <article class="card">
          <h3>Projeto 3</h3>
          <p>Descrição curta do projeto. Tecnologias usadas.</p>
          <a href="#" class="link">Ver mais</a>
        </article>
      </div>
    </section>

    <section id="contato" class="container card">
      <h2>Contato</h2>
      <p>Email: <a href="mailto:seu-email@example.com">seu-email@example.com</a></p>
      <p>GitHub / LinkedIn: <a href="#" class="link">seu-perfil</a></p>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>&copy; <span id="ano"></span> — Seu Nome</p>
    </div>
  </footer>

  <script>
    // Atualiza ano no rodapé
    document.getElementById('ano').textContent = new Date().getFullYear();

    // Toggle Dark Mode com persistência no localStorage
    const btn = document.getElementById('btnToggle');
    const root = document.documentElement;
    const saved = localStorage.getItem('theme'); // 'dark' ou 'light'

    if (saved === 'light') root.classList.remove('dark');
    else root.classList.add('dark'); // padrão: dark

    function updateIcon() {
      btn.textContent = root.classList.contains('dark') ? '🌙' : '☀️';
    }
    updateIcon();

    btn.addEventListener('click', () => {
      root.classList.toggle('dark');
      const theme = root.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      updateIcon();
    });
  </script>
</body>
</html>
```

styles.css
```css
:root{
  --bg:#0b1020;
  --surface:#0f1724;
  --card:#111827;
  --muted:#98a2b3;
  --primary:#7c5cff;
  --accent:#00d4ff;
  --text:#e6eef8;
  --radius:12px;
  --gap:16px;
  --glass: rgba(255,255,255,0.03);
}

*{box-sizing:border-box;margin:0;padding:0}
body{
  font-family: Inter, Arial, sans-serif;
  background: linear-gradient(180deg, #05060b 0%, var(--bg) 100%);
  color:var(--text);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
.container{max-width:1000px;margin:0 auto;padding:20px}
.site-header{backdrop-filter: blur(6px); background: transparent; padding:14px 0; position:sticky; top:0; z-index:50}
.site-header .container{display:flex;align-items:center;gap:12px;justify-content:space-between}
.logo{font-size:1.25rem;color:var(--primary);font-weight:600}
.nav a{margin-left:12px;color:var(--muted);text-decoration:none;padding:8px;border-radius:8px}
.nav a:hover{background:var(--glass); color:var(--text)}

.toggle{
  background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--text);padding:8px 10px;border-radius:8px;cursor:pointer;font-size:1rem;
}
.toggle:hover{transform:translateY(-2px);transition:transform .12s ease}

.hero{padding:48px 0; display:flex;align-items:center}
.hero-inner{display:flex;gap:20px;align-items:center}
.avatar{width:110px;height:110px;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,0.04);box-shadow:0 8px 30px rgba(2,6,23,0.7)}
.hero-inner h2{margin-bottom:6px;color:var(--text)}
.hero-inner p{color:var(--muted)}

.btn{display:inline-block;background:linear-gradient(90deg,var(--primary),var(--accent));color:#021; padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600;box-shadow:0 8px 30px rgba(124,92,255,0.12)}
.btn:hover{transform:translateY(-3px);transition:transform .12s ease}

.card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:18px;border-radius:var(--radius);box-shadow:0 6px 24px rgba(2,6,23,0.6);margin:18px 0;border:1px solid rgba(255,255,255,0.03)}
h2{margin-bottom:10px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--gap);margin-top:12px}
.card h3{margin-bottom:8px;color:var(--text)}
.link{color:var(--accent);text-decoration:none}
.link:hover{text-decoration:underline}

.site-footer{padding:18px;text-align:center;color:var(--muted);margin-top:20px;font-size:0.95rem}

/* Light theme overrides quando a classe .dark NÃO está presente */
:root:not(.dark){
  --bg:#fafafa;
  --surface:#ffffff;
  --card:#ffffff;
  --muted:#5b6470;
  --primary:#2463eb;
  --accent:#00a6ff;
  --text:#111827;
  background: linear-gradient(180deg,#fff 0%, #f4f6fb 100%);
}
:root:not(.dark) .site-header{background:#fff; box-shadow:0 2px 8px rgba(2,6,23,0.04)}
:root:not(.dark) .toggle{border:1px solid rgba(0,0,0,0.06); color:var(--text)}

/* Responsivo */
@media (max-width:800px){
  .hero-inner{flex-direction:column;align-items:center;text-align:center}
  .nav{display:none}
  .container{padding:14px}
}