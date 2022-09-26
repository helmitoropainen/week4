import "./styles.css";

const shows = document.getElementById("shows");
const input = document.getElementById("input-show");
const form = document.getElementById("show-form");
const url = "https://api.tvmaze.com/search/shows?q=";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  shows.innerHTML = "";
  getData();
});

async function getData() {
  const inputShow = input.value;
  const Qurl = url + inputShow;

  const dataPromise = await fetch(Qurl);
  const dataJSON = await dataPromise.json();

  dataJSON.forEach((data) => {
    const divData = document.createElement("div");
    divData.setAttribute("class", "show-data");
    const img = document.createElement("img");
    img.setAttribute("src", data?.show?.image?.medium);
    const divInfo = document.createElement("div");
    divInfo.setAttribute("class", "show-info");
    const title = document.createElement("h1");
    title.innerHTML = data?.show?.name;
    const summary = document.createElement("p");
    summary.innerHTML = data?.show?.summary;

    divInfo.appendChild(title);
    divInfo.appendChild(summary);
    divData.appendChild(img);
    divData.appendChild(divInfo);

    shows.appendChild(divData);
  });
}
