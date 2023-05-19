import { Container} from "reactstrap";
import NewsandUpdatesList from "../features/news&updates/newsandupdatesList"; 
import SubHeader from "../components/SubHeader";

const NewsandUpdatePage = () => {
    return(
        <Container>
            <SubHeader current="News and Updates"/>
            <NewsandUpdatesList/>
        </Container>
    );
};
export default NewsandUpdatePage;