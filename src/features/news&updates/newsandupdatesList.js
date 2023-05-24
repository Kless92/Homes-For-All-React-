import {Col, Row} from 'reactstrap';
import NewsandupdatesCard from './newsandupdatesCard';
import { selectAllNews } from "./newsandupdatesSlice";
import { useSelector } from 'react-redux';

const NewsandupdatesList = () => {
    const news = useSelector(selectAllNews);
    console.log('news: ', news);
    return(
        <Row className='ms-auto'>
            {news.map((news) => {
                return(
                    <Col md='5' lg='4' xl='3' className='m-4' key={news.id}>
                        <NewsandupdatesCard news={news}/>
                    </Col>
                );
            })}
        </Row>
    );
};
export default NewsandupdatesList