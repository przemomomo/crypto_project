
import './App.css'
import Header from './Header'
import CoinDetails from './CoinDetails'
import Items from './Items'
import { useState } from 'react'


// const Item =(props)=>(
// <div className='item flex'>
//   <div className='name'>{`${props.content.name}`} </div>
//   <div className='price'>{`${props.content.price}`} </div>
//   <div className='marketCup'> {`${props.content.marketCup}`} </div> 
//   <button onClick={()=>changeId(props.content.id)}>Check</button>
// </div>
// )

// const checkCoin=(id)=>{
//   console.log(id)
// }
const App =(props:Object)=> {
  // const [id,setId] =useState('')

  // const changeId=()=>{
  //   setId(id)
  // }
 
  

  return (
    <>
    <Header/>
    <CoinDetails/>
    <Items data={props}/>
   
    </>
  )
}

export default App
