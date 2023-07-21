import { Col, Row } from 'react-bootstrap'
import Data from '../Data/data.json'
import StoreItem from '../Components/StoreItem'
export default function Store() {

  document.title = 'Shopping-Cart/store'
  return (
  <>
  <h1>Store</h1>
      <Row className='g-3 mb-4 pb-3' md={2} xs={1} lg={3} >
        {Data.map(item=>(
        <Col key={item.id} className=''>
           <StoreItem key={item.id} {...item}/>
            </Col>
        )
            )}
      </Row>
      </>
  )
}
