import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Link from 'next/link';

type IProps = {
  href: string
}

const BlogButton = ({href}: IProps) => {
  return (
      <Link href={href}>
        <Box>
          <Text>기술 블로그</Text>
          <IconBox>
            <FontAwesomeIcon icon={faAngleRight} />
          </IconBox>
        </Box>
      </Link>

  );
};

const Box = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--point_color);
  font-size: 1.6rem;
  width: 14.6rem;
  height: 4.6rem;
  border: 1px var(--point_color) solid;
  border-radius: 0.5rem;
`;

const Text = styled.span`
  margin-right: 1rem;
`;

const IconBox = styled.div`
  font-size: 1.6rem;
`;

export default BlogButton;