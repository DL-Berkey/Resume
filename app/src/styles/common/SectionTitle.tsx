import styled from "styled-components";

type Props = {
    children: string;
};

const SectionTitle = ({ children }: Props) => {
    return <Title>{children}</Title>;
};

const Title = styled.h2`
    font-size: 3rem;

    margin-bottom: 0.8rem;
`;

export default SectionTitle;
