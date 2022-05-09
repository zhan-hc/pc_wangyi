import styled from 'styled-components'

export const LoginWrapper = styled.div`
  height: 126px;
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat;
  text-align:center;
  p {
    padding: 16px 0;
    width: 205px;
    margin 0 auto;
    color: #666;
  }
  button{
    width: 100px;
    height: 31px;
    line-height: 31px;
    border-radius: 5px;
    text-shadow: 0 1px 0 #8a060b;
    color: #fff;
    background: #c20c0c;
  }
`
