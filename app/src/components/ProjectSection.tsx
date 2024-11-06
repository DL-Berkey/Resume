// import styled from "styled-components";

import styled from "styled-components";

import { Link } from "lucide-react";

import Section from "../styles/Section";
import SectionTitle from "../styles/SectionTitle";

const ProjectSection = () => {
    return (
        <Section>
            <SectionTitle>Project</SectionTitle>
            <article>
                <ArticleHeader>
                    <ProjectName>AI ChatBot</ProjectName>
                    <ProjectLinkWrapper>
                        <OutLink
                            href="https://berkey-chat-bot.vercel.app/login"
                            target="_blank"
                        >
                            바로가기
                            <Link />
                        </OutLink>
                        <OutLink
                            href="https://github.com/DL-Berkey/AI-ChatBot-Project"
                            target="_blank"
                        >
                            깃허브
                            <Link />
                        </OutLink>
                    </ProjectLinkWrapper>
                </ArticleHeader>
                <ArticleContent>
                    <ProjectDetail>
                        openai의 GhatGPT API와 네이버의 CLOVA API를 사용하여
                        만든 대화형 챗봇 웹어플리케이션입니다.
                    </ProjectDetail>
                    <UsingSkill>
                        <p>Skill</p>
                        <ul>
                            <li>
                                <span>Front</span>: typescript, nextjs, shadcn,
                                tailwind, openai
                            </li>
                            <li>
                                <span>Etc</span>: supabase
                            </li>
                        </ul>
                    </UsingSkill>
                    <Feature>
                        <p>Feature</p>
                        <ul>
                            <li>
                                로그인 / 회원가입 / 아이디 찾기 / 비밀번호 변경
                            </li>
                            <li>채팅방 생성 / 삭제</li>
                            <li>ChatGPT와의 채팅</li>
                            <li>다크모드</li>
                            <li>반응형 디자인</li>
                        </ul>
                    </Feature>
                </ArticleContent>
            </article>
        </Section>
    );
};

const ProjectName = styled.span`
    font-size: 2rem;
    color: ${({ theme }) => theme.color.main};
`;

const ProjectLinkWrapper = styled.span`
    display: inline-flex;
    gap: 1rem;

    margin-left: 1rem;
`;

const OutLink = styled.a`
    display: inline-flex;

    align-items: center;

    & > svg {
        color: ${({ theme }) => theme.color.main};

        transform: scale(50%, 50%);
    }
`;

const ArticleHeader = styled.div`
    margin-bottom: 1rem;
`;

const ArticleContent = styled.div`
    padding: 0 1rem;
`;

const ProjectDetail = styled.p`
    margin-bottom: 1rem;

    font-size: 1.2rem;
`;

const UsingSkill = styled.div`
    margin-bottom: 2rem;

    font-weight: 700;

    & > p {
        margin-bottom: 0.5rem;

        font-size: 2rem;
    }

    & > ul > li {
        font-size: 1.2rem;

        font-weight: 100;
    }

    & > ul > li > span {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.color.main};
        font-weight: 600;
    }
`;

const Feature = styled(UsingSkill)``;

export default ProjectSection;
