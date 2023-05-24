import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import DisplayCardText from './DisplayCardText';
import { selectFeaturedFrontPage } from './displaySlice';
import { useSelector } from 'react-redux';

const DisplayList = () => {
    const item = useSelector(selectFeaturedFrontPage);
    console.log('fronstpage: ', item);
    return (
        <Row>
            <Col md className='m-1' >
                <DisplayCard item={item} />            
            </Col >
            <Col md className='m-1'>
                <DisplayCardText item={item}/>
            </Col>
        </Row>
    );
};

export default DisplayList;