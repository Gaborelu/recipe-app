//recipe api
// 0fb8f7851fmsh9eb2f88619520b2p1a1ebejsn2200caf615e6
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import SingleRecipe from './pages/SingleRecipe'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/recipes' exact component={Recipes} />
        <Route path='/recipes/:id' component={SingleRecipe} />
      </Switch>
    </Router>
  )
}

export default App
