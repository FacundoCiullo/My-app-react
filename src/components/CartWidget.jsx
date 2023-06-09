import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
  return (
    <Button variant="dark">
    <i class="bi bi-cart3"></i> 
    <Badge bg="danger">0</Badge>
    <span className="visually-hidden">unread messages</span>
    </Button>
  )
}

export default CartWidget
