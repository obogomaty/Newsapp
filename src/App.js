import React from 'react';
import News from './News';
import Tag from './tag';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Switch>

          <Route exact path="/">
            <Redirect to="/tag" />
          </Route>


          <Route path="/tag">
            <Tag />
          </Route>

          <Route path="/country/:code" render={(props) => <News  {...props} />} />

        </Switch>
      </div>
    </BrowserRouter>
  )

}

export default App;