import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './screens/HomeScreen';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2563EB',
    },
    secondary: {
      main: '#3B82F6',
    },
  },
});

const client = new ApolloClient({
  uri: ' http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} className='App'>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
