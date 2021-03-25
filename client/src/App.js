import logo from './logo.svg';
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
  useQuery,
} from '@apollo/client';
import './App.css';
import Home from './components/Home';

const client = new ApolloClient({
  uri: ' http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} className='App'>
      <Home />
    </ApolloProvider>
  );
}

export default App;
