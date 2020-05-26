import React from 'react'

import { Switch, Route } from 'react-router-dom'

import { Dashboard } from '../pages/Dashboard'
import { Sobre } from '../pages/Sobre'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/sobre" component={Sobre}/>
    </Switch>
  )
}

export default Routes