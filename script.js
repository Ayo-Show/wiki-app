async function handleSubmit(event) {
  event.preventDefault();
  const inputValue = document.querySelector(".js-search-input").value;
  const searchQuery = inputValue.trim();

  try {
    const results = await searchWikipedia(searchQuery);

    console.log(results);
  } catch (err) {
    console.log(err);

    alert("Failed to search wikipedia");
  }
}

async function searchWikipedia(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  return json;
}

const form = document.querySelector('.js-search-form');
form.addEventListener('submit', handleSubmit);

