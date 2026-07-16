// Animações suaves ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos da galeria
document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});

// Menu suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});index.html
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Portfolio — Seu Nome</title>
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
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container hero-inner">
        <img src="images/foto.jpg" alt="Sua foto" class="avatar" />
        <div>
          <h2>Olá! Eu sou Seu Nome</h2>
          <p>Desenvolvedor(a) | Estudante de Java | Criador(a) de projetos simples e úteis.</p>
          <a class="btn" href="#projetos">Ver projetos</a>
        </div>
      </div>
    </section>

    <section id="sobre" class="container card">
      <h2>Sobre mim</h2>
      <p>Breve descrição sobre você: habilidades, interesses e o que procura. Ex.: "Gosto de programar em Java, construir sites e aprender novas tecnologias."</p>
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
      <p>LinkedIn / GitHub: <a href="#" class="link">seu-perfil</a></p>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>&copy; <span id="ano"></span> — Seu Nome</p>
    </div>
  </footer>

  <script>
    // Atualiza o ano do rodapé automaticamente
    document.getElementById('ano').textContent = new Date().getFullYear();
  </script>
</body>
</html>
```

styles.css
```css
:root{
  --bg:#f4f6fb;
  --primary:#2463eb;
  --text:#1f2937;
  --muted:#556270;
  --radius:10px;
  --gap:16px;
}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter, Arial, sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
.container{max-width:1000px;margin:0 auto;padding:20px}
.site-header{background:#fff;box-shadow:0 2px 8px rgba(0,0,0,0.06)}
.site-header .container{display:flex;align-items:center;justify-content:space-between}
.logo{font-size:1.25rem;color:var(--primary)}
.nav a{margin-left:12px;color:var(--text);text-decoration:none;padding:8px;border-radius:6px}
.nav a:hover{background:rgba(36,99,235,0.08)}

.hero{background:linear-gradient(180deg, rgba(36,99,235,0.06), rgba(36,99,235,0.02));padding:40px 0}
.hero-inner{display:flex;gap:20px;align-items:center}
.avatar{width:120px;height:120px;border-radius:50%;object-fit:cover;border:4px solid #fff;box-shadow:0 6px 18px rgba(0,0,0,0.08)}
.hero-inner h2{margin-bottom:6px;color:var(--primary)}

.btn{display:inline-block;background:var(--primary);color:#fff;padding:10px 14px;border-radius:8px;text-decoration:none;margin-top:8px}
.btn:hover{opacity:0.95}

.card{background:#fff;padding:18px;border-radius:var(--radius);box-shadow:0 6px 18px rgba(0,0,0,0.06);margin:18px 0}
h2{margin-bottom:10px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--gap);margin-top:12px}
.card h3{margin-bottom:8px}
.link{color:var(--primary);text-decoration:none}
.link:hover{text-decoration:underline}

.site-footer{padding:18px;text-align:center;color:var(--muted);margin-top:20px;font-size:0.95rem}

/* Responsivo */
@media (max-width:700px){
  .hero-inner{flex-direction:column;align-items:center;text-align:center}
  .nav{display:none} /* menu simples; posso adicionar um menu hambúrguer se quiser */
  .container{padding:14px}
}
```