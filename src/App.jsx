// Hooks - Architecture
import { useState } from "react"

import {DataContext} from "./Contexts/Context.jsx" 
//! React Context Yapısı Oluşturduğumuz Dosyadır.

// Components
import Article from "./Components/Article"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

// Datas
import Data from "./Data/Data.js"

function App() {

  const [data, setData] = useState(Data)
  //! Bir Adet verimizi App Componentden bütün Componentlere yaymak istiyoruz.
  

  //? Provider ile Context Yapımızı kullanarak componentlerimizi sarmalıyoruz.
  //! Bir adet Value değeri alıyor buraya göndereceğimiz Props,State gibi verileri yazabiliriz.
  return (
    <div className="App"> 
      <DataContext.Provider value={{data, setData}}>
        <Header />
        <Article />
        <Footer />
      </DataContext.Provider>
    </div>

  )
}

export default App
