import styled from "styled-components";

type Props = {
    children: React.ReactNode;
};

const Section = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

const Container = styled.section`
    margin: 2rem;
`;

export default Section;
