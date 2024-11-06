import styled from "styled-components";

import { Link } from "lucide-react";

type Props = {
    href: string;
    text: string;
};

const OutLink = ({ href, text }: Props) => {
    return (
        <LinkComponent href={href} target="_blank">
            {text}
            <Link />
        </LinkComponent>
    );
};

const LinkComponent = styled.a`
    display: inline-flex;

    align-items: center;

    & > svg {
        color: ${({ theme }) => theme.color.main};

        transform: scale(50%, 50%);
    }
`;

export default OutLink;
