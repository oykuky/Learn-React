import {ListGroup,ListGroupItem} from 'reactstrap';

function List2 (props)
{
    return (
        <div>
          <h3>{props.title}</h3>
             <ListGroup>
            <ListGroupItem>
              Cras justo odio
            </ListGroupItem>
            <ListGroupItem>
              Dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem>
              Morbi leo risus
            </ListGroupItem>
            <ListGroupItem>
              Porta ac consectetur ac
            </ListGroupItem>
            <ListGroupItem>
              Vestibulum at eros
            </ListGroupItem>
          </ListGroup>
        </div>
    ) 

    
}

export default List2;