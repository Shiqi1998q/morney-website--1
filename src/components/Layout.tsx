import Nav from './Nav';
import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display:flex;
  flex-direction: column;
  max-width:520px;
  margin:0 auto;
  background: #ffffff;
  border-radius:30px;
  
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  &::-webkit-scrollbar{
    display:none;
  }
`;
type Props = {
  [x: string]: ReactNode;
  className?: string;
  scrollTop?: number;
}
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) { return; }
      console.log(props.scrollTop);
      mainRef.current.scrollTop = props.scrollTop!;
      console.log(mainRef.current.scrollTop);
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className} data-x={'frank'}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0
};

export default Layout;