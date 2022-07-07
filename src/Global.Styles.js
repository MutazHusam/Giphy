import styled from "styled-components";



export const MainContainer = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;


/*


  width: 100%;
  background-color: grey;
  flex-wrap: wrap;

*/

export const FlexBox = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

