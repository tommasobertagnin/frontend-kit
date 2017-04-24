import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import PageA from './components/PageA'
import PageB from './components/PageB'
import Menu from './components/Menu'

export default <div>
  <Menu />
  <Route exact path="/" component={PageA} />
  <Route path="/page-b" component={PageB} />
</div>
