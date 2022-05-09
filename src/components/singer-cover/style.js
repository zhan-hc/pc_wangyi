import styled from 'styled-components'

export const SingerCoverWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e9e9e9;
  cursor: pointer;
  background: #fafafa;
  margin-top: 14px;
  box-sizing: border-box;
  height: 62px;
  &:hover {
    background: #f4f4f4;
  }
  .cover-left {
    position: relative;

    & > img {
      width: 62px;
      height: 62px;
    }
  }

  .cover-right {
    flex: 1;
    padding-left: 14px;
    .name {
      font-size: 16px;
      font-weight: bold;
    }
    .desc {
      margin: 8px 8px 0 0;
      color: #666;
    }
  }
`
