import {Col, Row, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const SubHeader =({current, detail}) => {

    return(
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>Home</Link>
                    </BreadcrumbItem>
                    {detail && (
                        <BreadcrumbItem>
                            <Link to='/news'>News and Updates</Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>{current}</BreadcrumbItem>
                </Breadcrumb>
                <h2>{current}</h2>
                <h1/>
            </Col>
        </Row>
    );
};

export default SubHeader;