import styled from "styled-components";
import { withError } from "./../withError";
import CreateNewProductForm from "./CreateNewProductForm";
import { StyledSection } from "./DashboardEditProduct";
import GoBackLink from "../GoBackLink";

export const LinksWrapper = styled.div`
  display: flex;
  margin: 5px 0;
  margin-left: 15px;
  width: max-content;
`;
function DashboardNewProduct() {
  return (
    <StyledSection>
      <LinksWrapper>
        <GoBackLink to="/dashboard/myProducts">To return </GoBackLink>
      </LinksWrapper>

      <CreateNewProductForm />
    </StyledSection>
  );
}
export default withError(DashboardNewProduct);
