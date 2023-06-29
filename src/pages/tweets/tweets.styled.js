import styled from 'styled-components';

export const TweetsList = styled.ul `
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: flex-start;
list-style:none;
gap: 16px
`

export const TweetsItem = styled.li `
width:380px;
height:460px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
`

export const TweetsPhoto = styled.img `
width:80px;
height:80px;
display: flex;
margin: 0 auto;
border-radius:50%;
object-fit: cover;
`

export const TweetsLogo = styled.img `
padding: 20px 0 0 20px`

export const TweetsTopPhoto = styled.img `
padding: 0px 36px 0 36px;
margin: -14px 0 0 0;`

export const TweetsText = styled.p `
color: #EBD8FF;
font-size: 20px;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
line-height: normal;
text-transform: uppercase;
display: flex;
justify-content: center;
`

export const TweetsBtn = styled.button `
display: flex;
width: 196px;
padding: 14px 28px;
justify-content: center;
align-items: center;
gap: 6px;
border-radius: 10.311px;
background: #EBD8FF;
box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px rgba(0, 0, 0, 0.25);
margin: 0 auto
`