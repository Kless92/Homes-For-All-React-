import { useSelector } from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';
import {selectNewsById} from '../features/news&updates/newsandupdatesSlice';
import NewsandUpdatesDetail from '../features/news&updates/newsandupdatesDetails';
import NewsandUpdatesText from '../features/news&updates/newsandupdatesText';
import SubHeader from '../components/SubHeader';

const NewsandUpdatesDetailPage = () => {
    const {newsId} = useParams();
    const news = useSelector(selectNewsById(newsId));
    console.log('detial test: ', news);
    return(
        <Container>
            <SubHeader current={news.name} detail={true}/> 
            <Row>
                <Col>
                    <NewsandUpdatesDetail news={news}/> 
                </Col>
                <Col>
                    <NewsandUpdatesText news={news}/>
                </Col>
            </Row>
        </Container>
    );
};

export default NewsandUpdatesDetailPage;