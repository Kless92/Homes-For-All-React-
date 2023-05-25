import {Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import DisplayCardText from './DisplayCardText';
import { selectFeaturedFrontPage } from './displaySlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
    const frontpage = useSelector(selectFeaturedFrontPage);
    console.log('frontpage: ', frontpage);
    
    const isLoading = useSelector((state) => state.frontpage.isLoading);
    const errMsg = useSelector((state) => state.frontpage.errMsg);

    if (isLoading) {
        return(
            <Row>
                <Loading/>
            </Row>
        );
    }

    if(errMsg) {
        return(
            <Row>
                <Error errMsg={errMsg}/>
            </Row>
        );
    }

    return (
        <Row>
            <Col md className='m-1' >
                <DisplayCard frontpage={frontpage} />            
            </Col >
            <Col md className='m-1'>
                <DisplayCardText frontpage={frontpage}/>
            </Col>
        </Row>
    );
};

export default DisplayList;