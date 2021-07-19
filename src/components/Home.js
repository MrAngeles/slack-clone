import styled from "styled-components";
import ListOfAllUsers from "./ListOfAllUsers";

export default function Home() {
  return <Sh1>
    SLACK CLONE APP 
    <HideLists>
        <ListOfAllUsers/>
    </HideLists>
    </Sh1>;
}

const Sh1 = styled.h1`
  display: grid;
  place-items: center;
`;


const HideLists = styled.div`
  display:none;
`