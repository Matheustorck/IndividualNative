import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/Login/Login'
import Home from './src/screens/Home/Home'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Login />
      {/* <Home/> */}
      
    </View>
  )
}

export default App