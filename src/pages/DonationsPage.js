import { Container } from "reactstrap";
import DonationsForm from "../components/DonationsForm";
import SubHeader from "../components/SubHeader";

const DonationsPage = () => {
    return(
        <Container>
            <SubHeader current={'Donations'}/>
            <DonationsForm/>
        </Container>
    );
};
export default DonationsPage;