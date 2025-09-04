<!-- README – InkNeko-Studio/RiftRivals -->
<!-- Dica: pode colar este HTML dentro do README.md que o GitHub renderiza normalmente. -->
<div id="top"></div>

<h1 align="center">Rift Rivals</h1>
<p align="center">
  <em>Um projeto da InkNeko Studio</em><br/>
  <strong>⚔️ Entre fendas. Enfrente rivais. Domine o Rift.</strong>
</p>

<p align="center">
  <img alt="Versão" src="https://img.shields.io/badge/version-0.1.0-blue">
  <img alt="Estado" src="https://img.shields.io/badge/status-em%20desenvolvimento-orange">
  <img alt="Licença" src="https://img.shields.io/badge/license-MIT-green">
  <img alt="Unity" src="https://img.shields.io/badge/engine-Unity-black">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#recursos">Recursos</a> •
  <a href="#desenvolvimento">Desenvolvimento</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#licença">Licença</a> •
  <a href="#contato">Contato</a>
</p>

<hr/>

<h2 id="sobre">📖 Sobre</h2>
<p>
  <strong>Rift Rivals</strong> é um jogo de <em>ação/estratégia</em> ambientado em um mundo fragmentado por fendas (Rifts). 
  Heróis de facções rivais disputam objetivos, controlam territórios e manipulam poderes das fendas para virar o jogo.
</p>
<ul>
  <li><strong>Gênero:</strong> Ação/Estratégia (PvE/PvP, focado em partidas rápidas)</li>
  <li><strong>Plataformas alvo:</strong> PC (Windows) — <span style="opacity:.8">mobile e consoles (planejado)</span></li>
  <li><strong>Motor:</strong> Unity (2021+ recomendada)</li>
</ul>

<blockquote>
  <strong>Pitch curto:</strong> partidas táticas intensas em arenas dinâmicas, com heróis únicos e mecânicas de “rift powers”.
</blockquote>

<h2 id="recursos">✨ Recursos</h2>
<ul>
  <li><strong>Heróis únicos:</strong> habilidades assinaturas, sinergias e contra-jogadas claras.</li>
  <li><strong>Arenas dinâmicas:</strong> modificadores de terreno e eventos de fenda por rodada.</li>
  <li><strong>Progressão justa:</strong> desbloqueios cosméticos e trilhas de domínio por herói.</li>
  <li><strong>Modos de jogo:</strong> Treino, Desafios PvE e Skirmish (PvP local/online*).</li>
  <li><strong>Acessibilidade:</strong> remapeamento de controles, daltônico, legendas e escalabilidade de UI.</li>
</ul>
<p style="font-size:12px;opacity:.8">* PvP online listado como planejado no roadmap.</p>

<h3>Desenvolvedores (Projeto Unity)</h3>
<ol>
  <li>Clone o repositório: <code>git clone https://github.com/InkNeko-Studio/RiftRivals.git</code></li>
  <li>Abra via <strong>Unity Hub</strong> (versão recomendada: 2021.3 LTS ou superior).</li>
  <li>Deixe o Unity importar dependências (URP/Input System, se aplicável).</li>
  <li>Abra a cena principal em <code>Assets/_Project/Scenes/Main.unity</code> e aperte <kbd>Play</kbd>.</li>
</ol>


<h2 id="desenvolvimento">🛠️ Desenvolvimento</h2>
<h3>Estrutura sugerida</h3>
<pre><code>.
├─ Assets/
│  ├─ _Project/
│  │  ├─ Art/
│  │  ├─ Audio/
│  │  ├─ Scripts/
│  │  │  ├─ Core/         # sistemas base (GameLoop, DI, Events)
│  │  │  ├─ Gameplay/     # heróis, habilidades, estados
│  │  │  ├─ UI/           # HUD, menus, popup
│  │  │  └─ Netcode/      # multiplayer (planejado)
│  │  ├─ Scenes/
│  │  └─ Settings/
├─ Docs/
│  ├─ GDD.md
│  ├─ Roadmap.md
│  └─ Changelog.md
└─ docs/                  # GitHub Pages (opcional)
   └─ media/
</code></pre>

<h3>Dependências (exemplos)</h3>
<ul>
  <li>Unity Input System</li>
  <li>URP (Pipeline Universal de Renderização) – opcional</li>
  <li>Cinemachine – opcional</li>
</ul>

<h3>Build</h3>
<ol>
  <li><em>Unity</em> → <strong>File &gt; Build Settings…</strong></li>
  <li>Selecione a plataforma (Windows) → <strong>Build</strong></li>
  <li>Saída em <code>Builds/Windows/</code></li>
</ol>

<h2 id="roadmap">🗺️ Roadmap</h2>
<ul>
  <li>[0.1] Protótipo jogável (local) – <em>atual</em></li>
  <li>[0.2] 3 heróis + 1 arena dinâmica</li>
  <li>[0.3] Progressão básica + customização visual</li>
  <li>[0.4] PvP local</li>
  <li>[0.5] PvP online (teste fechado)</li>
</ul>

<details>
  <summary><strong>Changelog (resumo)</strong></summary>
  <ul>
    <li><strong>0.1.0</strong> – Loop básico de partida, HUD mínima, 1 herói protótipo.</li>
  </ul>
</details>

<h2 id="faq">❓ FAQ</h2>
<p><strong>O jogo terá microtransações?</strong><br/>
A visão atual é manter monetização <em>cosmética</em> apenas (sem “pay-to-win”). Detalhes podem mudar conforme o desenvolvimento.</p>
<p><strong>Meu PC roda?</strong><br/>
Requisitos aproximados: CPU i5/Ryzen 3, GPU integrada moderna ou dedicada básica, 8GB RAM.</p>

<h2 id="licença">📄 Licença</h2>
<p>
  Distribuído sob a licença <strong>MIT</strong>. Veja <code>LICENSE</code> para mais informações.
</p>

<h2 id="créditos">🏷️ Créditos</h2>
<ul>
  <li><strong>InkNeko Studio</strong> – direção, design e desenvolvimento</li>
  <li>Fontes/Áudio/Arte de terceiros listados em <code>Docs/Credits.md</code> (quando aplicável)</li>
</ul>

<h2 id="contato">📬 Contato</h2>
<ul>
  <li>Studio: <a href="mailto:contato@inkneko.studio">contato@inkneko.studio</a></li>
  <li>Issues e sugestões: abra uma <a href="https://github.com/InkNeko-Studio/RiftRivals/issues">Issue</a></li>
</ul>

<p align="right"><a href="#top">⬆️ Voltar ao topo</a></p>
