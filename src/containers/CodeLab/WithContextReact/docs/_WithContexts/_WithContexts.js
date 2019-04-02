import React, { Component } from 'react'
// JSX
import { WithContexts } from 'with-context-react'
import { Context as ButtonContext, Provider as ButtonProvider } from 'react-png-button'
import { ThemeContext } from '../../../../../hoc/Layout/ThemeContext/ThemeContext'
import ClassComponent from './ClassComponent_WithContexts'

class App extends Component {
  render () {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'column', alignItems: 'center' }}>
        <WithContexts
          providers={[ButtonProvider]}
          contexts={{ buttonContext: ButtonContext, themeContext: ThemeContext }}>
          <ClassComponent title={'First Class Component (while using WithContexts)'} />
          <ClassComponent title={'Second Class Component (while using WithContexts)'} />
        </WithContexts>
      </div>
    )
  }
}

export default App
