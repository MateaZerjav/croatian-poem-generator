function displayPoem(response) {
  let responseElement = response.data.answer;
  document.getElementById("poem").classList.add("poem2");

  new Typewriter("#poem", {
    strings: responseElement,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
  console.log(response);
}
function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  let insertThemeElement = document.querySelector("#insert-theme");
  let valueElement = insertThemeElement.value;
  let context = `You are AI generating Croatian poems dynamically. 
Only real authors' poetry should be provided.
The poems are intended to be displayed within HTML content, 
with each line of the poem appearing on a new row.
Additionally, the poem should be signed at the end with the name of the author,
written using HTML formatting.`;

  let prompt = `Generate a 4-line Croatian poem on the theme of ${valueElement},
with each line displayed on a new row in HTML format.
Please sign the poem with the name of the author,
written  using HTML formatting.
Provide the author name enclosed within the strong element at the end of the poetry.
Ensure that the poem is sourced from real authors' works.
Make sure that each line is displayed on a new row`;

  let apiKey = "636ft3f4ca7b895f0259dd71a1354d0o";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(insertThemeElement);
  poemElement.innerHTML = "Generating piece of poetry....";
  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
