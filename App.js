import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/reducer'
import { AirplaneBookingStack } from './src/route'

export const MyContext = React.createContext()

export default function App() {
  return (
    <Provider store={store}>
      <MyContext.Provider value={{name:'Akash',age: 21}} >
        <AirplaneBookingStack />
      </MyContext.Provider>
    </Provider>
  )
}