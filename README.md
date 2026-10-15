# Convite de aniversário — tema ursinhos

Site estático responsivo em HTML, CSS e JavaScript. Não precisa instalar backend, banco de dados ou dependências.

## 1. Pré-requisitos
- Um navegador moderno.
- Um editor de texto. Recomendado: Visual Studio Code (https://code.visualstudio.com/).
- Uma conta gratuita no GitHub (https://github.com/), para publicar.

Não é obrigatório instalar Node.js nem Python.

## 2. Abrir o site no computador
1. Extraia o ZIP para uma pasta.
2. Abra a pasta `convite_ursinhos` no Visual Studio Code.
3. Abra `index.html` no navegador para uma prévia simples.
4. Para uma experiência melhor, instale a extensão **Live Server** no VS Code, clique com o botão direito em `index.html` e selecione **Open with Live Server**.

## 3. Personalizar textos e data
Abra `index.html` e procure os textos demonstrativos:
- Nome da criança e mensagem principal.
- Data e horário.
- Nome do salão e endereço.
- Legendas das fotos.
Substitua os exemplos pelos dados reais. O modelo já contém 05 de dezembro de 2026 como data ilustrativa a confirmar.

## 4. Adicionar fotos
No `index.html`, localize os cartões dentro de `id="photo-track"`. Substitua cada URL `https://images.unsplash.com/...` pelo caminho da sua foto, por exemplo:
`assets/fotos/foto-1.jpg`
Depois, coloque a imagem nessa pasta. Use JPG, PNG ou WebP, de preferência com tamanho otimizado para web.

## 5. Adicionar vídeos
1. Copie seus vídeos para `assets/videos/`.
2. Renomeie-os para `video-1.mp4` e `video-2.mp4`, ou ajuste os caminhos no HTML.
3. Para mais vídeos, duplique um bloco `<figure class="media-card video-card">...</figure>` dentro de `id="video-track"`.
4. Prefira MP4/H.264 e arquivos comprimidos para facilitar o carregamento em celulares.

## 6. Adicionar música
1. Coloque o arquivo de áudio em `assets/musica/`.
2. Renomeie para `musica.mp3`.
3. O botão já controla reproduzir/pausar e o controle deslizante altera o volume.
4. O áudio não começa automaticamente, porque navegadores normalmente bloqueiam reprodução automática com som. Use uma música que você tenha direito de compartilhar.

## 7. Configurar confirmação de presença
Abra `script.js` e altere:
`const RSVP_URL = "https://example.com";`
para a URL real do formulário/site de confirmação. O botão no final da página será direcionado para esse endereço.

## 8. Publicar grátis no GitHub Pages
O GitHub Pages hospeda sites estáticos. No plano gratuito, o repositório precisa ser público; considere que os arquivos do site ficarão acessíveis a qualquer pessoa.

1. Crie uma conta em https://github.com/ e entre nela.
2. Clique em **New repository**.
3. Dê um nome, por exemplo `convite-aniversario`, marque **Public** e crie o repositório.
4. Dentro do repositório, clique em **Add file > Upload files**.
5. Envie os arquivos e pastas que estão dentro da pasta `convite_ursinhos` — `index.html`, `style.css`, `script.js`, `README.md` e `assets/`. Envie o conteúdo da pasta, não apenas o ZIP.
6. Clique em **Commit changes**.
7. Abra **Settings > Pages**.
8. Em **Build and deployment**, selecione **Deploy from a branch**.
9. Escolha a branch `main` e a pasta `/(root)` e clique em **Save**.
10. Aguarde alguns minutos e volte a **Settings > Pages**. O GitHub mostrará o endereço publicado, normalmente no formato `https://SEU-USUARIO.github.io/convite-aniversario/`.

A publicação pode levar alguns minutos. Consulte a documentação oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 9. Atualizar o site
Edite os arquivos no computador e envie novamente pelo botão **Add file > Upload files**, ou edite diretamente no GitHub. Faça commit das alterações e aguarde a publicação.

## 10. Checklist antes de compartilhar
- [ ] Corrigir nome, data, horário e endereço.
- [ ] Trocar as fotos demonstrativas por fotos próprias.
- [ ] Adicionar os vídeos e a música.
- [ ] Trocar `RSVP_URL` pelo link correto.
- [ ] Testar o site no celular.
- [ ] Testar o botão de música e o botão de confirmação.
- [ ] Conferir se o repositório não contém informações privadas.

## Observações
- O GitHub Pages é hospedagem estática: não processa código de servidor nem armazena confirmações. Como o botão direciona para um formulário externo, não é necessário backend para esse fluxo.
- O endereço gratuito será um subdomínio `github.io`; comprar um domínio próprio é opcional.
- O site depende de internet para carregar as fontes e as imagens externas de demonstração. Substitua as imagens por arquivos próprios para ter controle total sobre elas.
