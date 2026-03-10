const games = (window.GAMES_WEB && window.GAMES_WEB.games) || [];
const container = document.getElementById("gamesList");

if (container) {
  const visibleGames = games
    .filter(game => game.visible)
    .sort((a, b) => (a.sort || 999) - (b.sort || 999));

  container.innerHTML = visibleGames.map(game => `
    <a class="game-card" href="https://${game.host}" target="_self">
      <div class="game-card-top">
        <h2>${escapeHtml(game.name)}</h2>
        <span class="status status-${escapeHtml(game.status)}">${escapeHtml(game.status)}</span>
      </div>
      <p>${escapeHtml(game.description || "")}</p>
      <span class="open-link">Open</span>
    </a>
  `).join("");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
