import { useSelector } from 'react-redux';
import {Container, Row, Col} from 'reactstrap';
import {useParams} from 'react-router-dom';
import {selectNewsById} from '../features/news&updates/newsandupdatesSlice';
import NewsandUpdatesDetail from '../features/news&updates/newsandupdatesDetails';
import NewsandUpdatesText from '../features/news&updates/newsandupdatesText';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';

const NewsandUpdatesDetailPage = () => {
    const {newsId} = useParams();
    const newsandupdates = useSelector(selectNewsById(newsId));
    console.log('detial test: ', newsandupdates);

    const isLoading = useSelector((state) => state.newsandupdates.isLoading);
    const errMsg = useSelector((state) => state.newsandupdates.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading/>
    }

    else if (errMsg){
        content = <Error errMsg={errMsg}/>
    }
    else {
        content = (
            <>
                <Col>
                    <NewsandUpdatesDetail newsandupdates={newsandupdates}/> 
                </Col>
                <Col>
                    <NewsandUpdatesText newsandupdates={newsandupdates}/>
                </Col>
            </>
        )
    }

    return(
        <Container>
            {newsandupdates && <SubHeader current={newsandupdates.name} detail={true}/>}
            <Row>{content}</Row>
        </Container>
    );
};

export default NewsandUpdatesDetailPage;