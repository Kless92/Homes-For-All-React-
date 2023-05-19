import {Card, CardTitle, CardText, CardBody, Col} from 'reactstrap';

const newsandupdatesDetail = ({news}) => {
    const {name, date, discription} = news;

    return(
        <Col md='12' className='m-4'>
            <Card>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{date}</CardText>
                    <CardText>{discription}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default newsandupdatesDetail;