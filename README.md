# 


<!DOCTYPE html>

<html>
<head>
  <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
  <title>oi</title>
</head>
<body>
  <h1>
    oi
  </h1>
</body>
</html>
index.html
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
`