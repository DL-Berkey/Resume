import styled from "styled-components";

import { Github } from "lucide-react";

import Section from "../styles/Section";

const LinkSection = () => {
    return (
        <Section>
            <Title>
                <span>•</span>
                Link
            </Title>
            <LinkList>
                <a
                    target="_blank"
                    href="https://github.com/DL-Berkey?tab=repositories&q=&type=public&language=&sort="
                >
                    <Github size={14} />
                    Github
                </a>
            </LinkList>
        </Section>
    );
};

const Title = styled.p`
    margin-bottom: 0.3rem;

    font-size: 1.2rem;

    & > span {
        color: #c6e7ff;

        margin-right: 0.1rem;
    }
`;

const LinkList = styled.div`
    padding: 0 1rem;

    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.1rem;

        width: 5rem;
        height: 1.4rem;

        color: white;

        background: black;

        border-radius: 0.6rem;
    }
`;

export default LinkSection;
