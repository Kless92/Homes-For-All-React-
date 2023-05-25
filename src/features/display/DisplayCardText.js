import {Card, CardText, CardBody, CardTitle} from 'reactstrap';

const DisplayCardText = ({frontpage}) => {
    const {name, date, discription}=frontpage;

    return(
    <div className='table'>
        <Card>
            <CardBody>
                <CardTitle >{name}</CardTitle>
                <CardText>{date}</CardText>
                <CardText>{discription}</CardText>
            </CardBody>
        </Card>
    </div>
    );
};

export default DisplayCardText;

