import { series } from "./series.js";
import { Serie } from "./Serie.js";

const table = document.getElementById("series-table")!;
const avgSeasons = document.getElementById("avg-seasons")!;
const cardContainer = document.getElementById("series-card")!;

function renderTable(seriesList: Serie[]): void {
  table.innerHTML = `
    <thead class="thead-dark">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Channel</th>
        <th>Seasons</th>
      </tr>
    </thead>
    <tbody>
      ${seriesList.map(s => `
        <tr style="cursor:pointer" data-id="${s.id}">
          <td>${s.id}</td>
          <td><a href="#">${s.name}</a></td>
          <td>${s.channel}</td>
          <td>${s.seasons}</td>
        </tr>
      `).join("")}
    </tbody>
  `;
  
  document.querySelectorAll("tr[data-id]").forEach(row => {
    row.addEventListener("click", () => {
      const id = Number(row.getAttribute("data-id"));
      const serie = series.find(s => s.id === id);
      if (serie) showCard(serie);
    });
  });
}

function showAverage(seriesList: Serie[]): void {
  const avg = seriesList.reduce((sum, s) => sum + s.seasons, 0) / seriesList.length;
  avgSeasons.innerText = `Seasons average: ${avg.toFixed(1)}`;
}

function showCard(serie: Serie): void {
  cardContainer.innerHTML = `
    <div class="card">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" target="_blank" class="card-link">${serie.link}</a>
      </div>
    </div>
  `;
}

renderTable(series);
showAverage(series);
