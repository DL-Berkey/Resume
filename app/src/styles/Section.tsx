import styled from "styled-components";

type Props = {
    children: React.ReactNode;
};

const Section = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

const Container = styled.section`
    margin: 2rem;
    padding-top: 5rem;
    padding-bottom: 5rem;

    border-bottom: 0.1rem solid #a1a1a1;
`;

export default Section;
