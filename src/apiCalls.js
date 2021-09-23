const apiCalls = {

  fetchRandomUser = ()  => {
    return fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
  },

  fetchRandomQuote = ()  => {
    return fetch('https://api.quotable.io/random?tags=famous-quotes')
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
  }

}

export default apiCalls;