import Item from "./Item"

const Items =(props)=>{
    const coins=props.data.coins
    const items = coins.map(coin =><Item data ={props} key ={coin.id} content ={coin}/>) 
    return(
        <h2>{items}</h2>
    )
}
export default Items