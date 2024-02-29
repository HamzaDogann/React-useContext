import { React, useContext } from 'react' //! useContext Hook Kullanacağımızı söylüyoruz.
import { DataContext } from "../Contexts/Context.jsx"
//! Context yapımızı burada kullanacağımızı söylüyoruz.


const Article = () => {

  const { data } = useContext(DataContext)
  //! Bu şekilde useContext() ile DataContext içine gönderilen (App Component içerisinde) 
  //! Provider ile sarmaladığımız yapımızda bir value değeri göndermiştik.
  //! DataContext şuan da o değerleri tutuyor.

  //! Burada dilediğimiz gibi gelen datayı kullanabiliriz.

  const url = data[0].webSiteLink
  return (
    <div className='article'>
      <h2>Article Component</h2>
      <div>
        <h3>{data[0].name}</h3>
        <p>{data[0].occupation}</p>
        <a href={url}>Link</a>
      </div>
    </div>
  )
}

export default Article