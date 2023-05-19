import {Card, CardImg} from 'reactstrap';

const DisplayCard = ({item}) => {
    const {image, name}=item;

    return(
    <div className='table'>
        <Card>
            <CardImg className='flex-row' src={image} alt={name}/>
        </Card>
    </div>
    );
};

export default DisplayCard;