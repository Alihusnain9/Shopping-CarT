import { Button, Card } from 'react-bootstrap';
import Formatter from '../fomater/formatter'
import useShoppingCart from '../Content/ShoppingCartContext';
type Pops ={
    id:number;
    price:number
    name:string 
    imgUrl: string
}

export default function StoreItem({id,name,imgUrl,price}:Pops) {
    const {increaseCartQuantity,decreaseCartQuantity,removeFromCart,getItemsQuantity}=useShoppingCart()
    const quantity = getItemsQuantity(id)
    
  return (

    <Card className='p-0'>
        <Card.Img src={imgUrl} style={{height:'200px',objectFit:'cover',}} variant='top' />
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-center'>
                <div className='fs-2'>{name}</div>
                <div className='text-muted'>{Formatter(price)}</div>
            </Card.Title>
{quantity===0?(
<Button variant='primary w-100' onClick={()=>increaseCartQuantity(id)}>
    + Add to cart
</Button>
):( 
    <div className='d-flex justify-content-center align-items-center flex-column'>
    <div className='d-flex '>
        <Button variant='primary' className='' onClick={()=>decreaseCartQuantity(id)}>-</Button>
        <div className='mx-2'><span className='fs-4'>{quantity}</span>in cart</div>
        <Button variant='primary' className='' onClick={()=>increaseCartQuantity(id)}>+</Button>
    </div>
    <div><Button variant='danger' className='btn-sm mt-2' onClick={()=>removeFromCart(id)}>Remove</Button></div>
</div>
 )}
        </Card.Body>

    </Card>
    
  )
}
