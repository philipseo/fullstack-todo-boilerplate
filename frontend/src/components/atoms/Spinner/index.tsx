import styled from '@emotion/styled';

export default styled.div`
  &, &:after {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  & {
    position: relative;
    margin: 10px auto;
    border-top: 0.8em solid rgba(0,0,0, 0.2);
    border-right: 0.8em solid rgba(0,0,0, 0.2);
    border-bottom: 0.8em solid rgba(0,0,0, 0.2);
    border-left: 0.8em solid #000000;
    font-size: 1px;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 0.8s infinite linear;
    animation: load8 0.8s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
