import {Card, CardImg} from 'reactstrap';

const DisplayCard = ({frontpage}) => {
    const {image, name}=frontpage;

    return(
    <div className='table'>
        <Card>
            <CardImg className='flex-row' src={image} alt={name}/>
        </Card>
    </div>
    );
};

export default DisplayCard;