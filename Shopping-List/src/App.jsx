import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './components/ShoppingList.jsx'

function App() {
  return (
    <div className="shoppinglist">
      <ShoppingList></ShoppingList>
    </div>
  )
}

export default App
