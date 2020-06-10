import styled from 'styled-components';

export const Video = styled.div`
  video {
    flex: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
    max-width: 100%;
  }
  canvas {
    display: none;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: center;
  align-items: center;
`;

export const ScanMarker = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .label {
    color: #fff;
    font-size: 14px;
    font-style: italic;
    margin-top: 20px;
  }
`;
