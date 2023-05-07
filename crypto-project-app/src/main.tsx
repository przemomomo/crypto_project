import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
const data:Object ={
  coins:[
    {
      id:1,
      name:"bitcoin",
      price:30000,
      marketCup:40000000
    },
    {
      id:2,
      name:"Etherum",
      price:1800,
      marketCup:8000000
    },
    {
      id:3,
      name:"Chainlink",
      price:30000,
      marketCup:7000000
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
)
