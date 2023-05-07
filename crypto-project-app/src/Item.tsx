const Item =(props)=>(
    <div className='item flex'>
      <div className='name'>{`${props.content.name}`} </div>
      <div className='price'>{`${props.content.price}`} </div>
      <div className='marketCup'> {`${props.content.marketCup}`} </div> 
      <button onClick={()=>changeId(props.content.id)}>Check</button>
    </div>
    )

    export default Item