import './App.css';

import {AuthProvider} from './context/auth';

import AuthRoute from './providers/AuthRoute';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MenuBar from './components/MenuBar';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import SinglePost from './components/SinglePost';


function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
      
        <Switch>

          <Route exact path="/" component={Home} />
        

          <AuthRoute exact path="/login" component={Login} />
          
          

          <AuthRoute exact path="/register" component={Register} />

          <Route exact path="/posts/:postId" component={SinglePost} />

        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
