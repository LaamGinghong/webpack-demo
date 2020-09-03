import React, { FC, lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router'

const Home = lazy(() => import('./home/home'))
const Person = lazy(() => import('./person/person'))
const School = lazy(() => import('./school/school'))

const Root: FC = () => {
  return (
    <Switch>
      <Route path='/' exact render={() => <Redirect to='/home' />} />
      <Route path='/home' component={Home} />
      <Route path='/person' component={Person} />
      <Route path='/school' component={School} />
    </Switch>
  )
}

export default Root
