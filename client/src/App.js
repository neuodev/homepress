import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './screens/HomeScreen';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import ListingScreen from './screens/ListingScreen';
import SearchScreen from './screens/SearchScreen';
import AddListingScreen from './screens/AddListingScreen';

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
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/listing/:id' exact component={ListingScreen} />
              <Route path='/search' exact component={SearchScreen} />
              <Route path='/addListing' component={AddListingScreen} />
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
