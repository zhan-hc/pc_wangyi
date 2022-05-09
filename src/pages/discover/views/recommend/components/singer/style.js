import styled from 'styled-components'

export const SingerWrapper = styled.div`
  padding: 15px;
  button {
    display: block;
    margin: 14px auto;
    color: #333;
    width: 170px;
    font-weight: bold;
    height: 31px;
    background-image: url(${require('@/assets/img/sprite_button2.png')});
    background-repeat: no-repeat;
    background-size: 0 9999px;
    background-position: right -100px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button:hover {
    background-position: right -182px;
    cursor: pointer;
  }
`
