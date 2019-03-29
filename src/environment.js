import { Environment, Network, RecordSource, Store } from "relay-runtime";

const GRAPHQL = "http://localhost:8000/";

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
  return fetch(GRAPHQL, {
    method: "POST",
    headers: {
      // Add authentication and other headers here
      Authorization: sessionStorage.getItem("access_token"),
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log("ERROR", err);
    });
};

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);
const handlerProvider = null;

export default new Environment({
  handlerProvider, // Can omit.
  network,
  store
  //   ... other options
});
