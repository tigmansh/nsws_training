const tbody = document.getElementById("tbody");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const filterBtn = document.getElementById("filterBtn");

var currentPage = 1;

function fetchingData(page) {
  tbody.innerHTML = null;
  let url = `https://jsonmock.hackerrank.com/api/football_matches?page=${page}`;
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      //   console.log(res.data);
      res.data.forEach((ele) => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${ele.competition}</td>
            <td>${ele.year}</td>
            <td>${ele.round}</td>
            <td>${ele.team1}</td>
            <td>${ele.team2}</td>
            <td>${ele.team1goals}</td>
            <td>${ele.team2goals}</td>
            `;

        tbody.append(tr);
      });
      prev.disabled = page === 1;
      next.disabled = res.page === res.totalPages;
    })
    .catch((err) => console.log(err));
}

prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchingData(currentPage);
  }
});

next.addEventListener("click", () => {
  currentPage++;
  fetchingData(currentPage);
});

fetchingData(currentPage);

filterBtn.addEventListener("click", () => {
  window.location.href = "filter.html";
});
