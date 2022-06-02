//import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import "./App.css"
import ContentList from './components/ContentList'

function App() {
 
  return (
    <div className="container">
      <Header />
      <ContentList />
      <Footer />
    </div>
  )
}

export default App


