import styled from "styled-components";

import Section from "../styles/common/Section";

const GreetingSection = () => {
    return (
        <Section>
            <GreetingMessage>
                안녕하세요, <br />
                저는 김영준입니다.
            </GreetingMessage>
            <Introduce>
                저는 빠르게 초기작을 개발하고, 피드백을 통해 지속적으로 개선하는
                과정을 즐기는 개발자입니다. 협업을 통해 더 나은 결과를 만들어낼
                수 있다고 믿으며, 다양한 의견을 나누고 서로의 경험을 공유하는
                과정이 매우 소중하다고 생각합니다.
            </Introduce>
        </Section>
    );
};

const GreetingMessage = styled.h1`
    position: relative;

    margin-bottom: 1rem;

    font-size: 3rem;

    &::before {
        content: "";

        position: absolute;
        bottom: -1px;
        left: 6rem;

        width: 8rem;
        height: 0.3rem;

        background: ${({ theme }) => theme.color.main};
    }
`;

const Introduce = styled.p`
    margin-bottom: 0.8rem;

    font-size: 1.3rem;

    line-height: 1.4;
`;

export default GreetingSection;
