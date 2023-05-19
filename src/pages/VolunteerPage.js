import { Container } from "reactstrap";
import VolunteerFrom from "../components/VolunteerForm";
import SubHeader from "../components/SubHeader";

const VolunteerPage = () => {
    return(
        <Container>
            <SubHeader current={'Volunteer'}/>
            <VolunteerFrom/>
        </Container>
    );
};
export default VolunteerPage;