import styled from "styled-components";

import Section from "../styles/common/Section";
import SectionTitle from "../styles/common/SectionTitle";

const SkillSection = () => {
    return (
        <Section>
            <SectionTitle>Skill</SectionTitle>
            <SkillContainer>
                <article>
                    <h3>Language</h3>
                    <ul>
                        <li>Javascript</li>
                        <li>Typescript</li>
                    </ul>
                </article>
                <article>
                    <h3>FrontEnd</h3>
                    <ul>
                        <li>React</li>
                        <li>Nextjs</li>
                        <li>Styled Components</li>
                        <li>Recoil</li>
                        <li>React-Router-Dom</li>
                        <li>Axios</li>
                    </ul>
                </article>
                <article>
                    <h3>BackEnd</h3>
                    <ul>
                        <li>Express</li>
                    </ul>
                </article>
                <article>
                    <h3>Etc</h3>
                    <ul>
                        <li>Git</li>
                        <li>Supabase</li>
                    </ul>
                </article>
            </SkillContainer>
        </Section>
    );
};

const SkillContainer = styled.div`
    display: flex;
    gap: 5rem;

    & > article {
        padding: 0 1rem;
    }

    & > article > h3 {
        margin-bottom: 0.5rem;
    }

    & > article > ul > li {
        list-style-type: circle;

        line-height: 1.5;
    }
`;

export default SkillSection;
