const year = document.getElementById("year");

const team1 = document.getElementById("team1");

const team2 = document.getElementById("team2");

const tbody = document.getElementById("tbody");

year.addEventListener("change", () => {
  console.log(year.value, team1.value, team2.value);
  filteringData(year.value, team1.value, team2.value);
});

team1.addEventListener("change", () => {
  // console.log(team1.value);
  filteringData(year.value, team1.value, team2.value);
});

team2.addEventListener("change", () => {
  // console.log(team2.value);
  filteringData(year.value, team1.value, team2.value);
});

function filteringData(x, y, z) {
  // console.log(1);
  tbody.innerHTML = null;
  let url = `https://jsonmock.hackerrank.com/api/football_matches?year=${x}&team1=${y}&team2=${z}`;

  if (y === "empty") {
    url = `https://jsonmock.hackerrank.com/api/football_matches?year=${x}&team2=${z}`;
  }

  if (z === "empty") {
    url = `https://jsonmock.hackerrank.com/api/football_matches?year=${x}&team1=${y}`;
  }

  if (z === "empty" && y === "empty") {
    url = `https://jsonmock.hackerrank.com/api/football_matches?year=${x}`;
  }
  else {
    url = url;
  }
  
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
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
    })
    .catch((err) => console.log(err));
}

filteringData(2011, "empty", "empty");
