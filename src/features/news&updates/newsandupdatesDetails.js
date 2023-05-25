import {Card, CardImg, Col} from 'reactstrap';

const newsandupdatesDetail = ({newsandupdates}) => {
    const {image, name} = newsandupdates;

    return(
        
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name}/>
            </Card>
        </Col>
    );
};

export default newsandupdatesDetail;