import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import SubHeader from "../components/SubHeader";
import Error from "../components/Error";
import Loading from "../components/Loading";

const HomePage = () => {
    return(
        <Container>
            <SubHeader current='Home'/>
            <DisplayList/>
        </Container>
    );
};
export default HomePage;