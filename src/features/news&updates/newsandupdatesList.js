import {Col, Row} from 'reactstrap';
import NewsandupdatesCard from './newsandupdatesCard';
import { selectAllNews } from "./newsandupdatesSlice";
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';


const NewsandupdatesList = () => {
    const newsandupdates = useSelector(selectAllNews);
    console.log('news: ', newsandupdates);

    const isLoading = useSelector((state) => state.newsandupdates.isLoading);
    const errMsg = useSelector((state) => state.newsandupdates.errMsg);
    
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
    
    return(
        <Row className='ms-auto'>
            {newsandupdates.map((newsandupdates) => {
                return(
                    <Col md='5' lg='4' xl='3' className='m-4' key={newsandupdates.id}>
                        <NewsandupdatesCard newsandupdates={newsandupdates}/>
                    </Col>
                );
            })}
        </Row>
    );
};
export default NewsandupdatesList