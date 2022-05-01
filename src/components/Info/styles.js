import styled from "styled-components";

export const Description = styled.div`
  border-top: 1px solid var(--border);
  width: 88%;
  margin: 0 auto;
  padding: 40px 0;
  > h4 {
    color: var(--text1);
    font-size: 24px;
    margin-bottom: 32px;
    line-height: 30px;
  }
  > p,
  span {
    font-size: 27px;
    color: var(--text3);
    line-height: 20pxpx;
  }
  > hr {
    border-top: 1 px solid var(--text2);
  }
`;
