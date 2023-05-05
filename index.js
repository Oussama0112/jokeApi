// -----button event------------------
document.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("btn")) {
    const r = e.target.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    e.target.style.setProperty("--tran-or", `${x}px ${y}px`);
  }
});
// -----click event-----------------------------------------
let myjoke = document.querySelector(".joke"),
  btn = document.querySelector(".gen");
const apiKey = "T52LmKKx439ncSH8ft3iaw==FCjUL8vLavjbQi6D";
const options = {
  methods: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
btn.addEventListener("click", updating);
async function updating() {
  try {
    myjoke.innerHTML = "updating...";
    btn.innerHTML = "uploading...";
    btn.disabled = true;
    let response = await fetch(apiUrl, options);
    let data = await response.json();
    myjoke.innerHTML = data[0].joke;
    btn.innerHTML = "generate joke";
    btn.disabled = false;
  } catch (error) {
    myjoke.innerHTML = "data can't be reached try later";
    btn.disabled = false;
  }
}
