import styled from 'styled-components'
import {Settings} from '@styled-icons/evaicons-solid/Settings'
import {IosArrowLeft} from '@styled-icons/fluentui-system-filled/IosArrowLeft'
import {Switch} from '@styled-icons/icomoon/Switch'
import {MoonFill} from '@styled-icons/bootstrap/MoonFill'
import {Grid} from '@styled-icons/bootstrap/Grid'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {PermMedia} from '@styled-icons/material-outlined/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-regular/CommentDots'
import {Bell} from '@styled-icons/boxicons-solid/Bell'

import Toggle from 'react-dark-mode-toggle'

export const ToggleMode = styled(Toggle)`
margin-left:auto;
`;

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100wh;
height: fit-content;
padding: 50px 300px;
box-sizing: border-box;

`;

export const MobileContainer = styled.div`
width:400px;
height: 700px;
background-color: whitesmoke;
box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);

`;

export const SettingIcon = styled(Settings)`
`;


export const IconCon = styled.div`
display: flex;
width: 100%;
padding: 20px;
box-sizing: border-box;
`;

export const Icon = styled.div`
`
Icon.Arrow = styled(IosArrowLeft)`
color: black;
width: 30px;
height: 30px;
cursor: pointer;
`

Icon.Switch = styled(Switch)`
color: black;
width: 30px;
height: 30px;
cursor: pointer;
margin-left:auto;
`;

export const ImgWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;


export const Img = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
padding: 20px;
border: 0.5px solid black;
`;

export const TitleImg = styled.div`
font-size: 22px;
font-weight:bold;
font-family: 5F Pro Display;
`;

export const Desc = styled.div`
font-size: 16px;
font-weight:bold;
font-family: 5F Pro Display;
`;

export const Item = styled.div`
display: flex;
align-items:center;
padding: 10px 30px;

`;

export const Title = styled.div`
font-size: 16px;
font-weight:bold;
font-family: 5F Pro Display;
`;

export const Line = styled.div`
width: 85%;
height: 1px;
background-color: #e9e9e9;
margin: 10px 30px;
box-sizing:border-box;
`;



Icon.Dark = styled(MoonFill)`
width: 20px;
height: 20px;
color: black;
margin-right: 10px;
`;

Icon.Grid = styled(Grid)`
width: 20px;
height: 20px;
color: #fbb65c;
margin-right: 10px;
`;

Icon.Chat = styled(UserCheck)`
width: 30px;
height: 30px;
color: #ff7eb0;
margin-right: 10px;
`;

Icon.Group = styled(UserPlus)`
width: 30px;
height: 30px;
color: #36e3ff;
margin-right: 10px;
`;


Icon.Media = styled(PermMedia)`
width: 20px;
height: 20px;
color: #5476ff;
margin-right: 10px;
`;

Icon.Settings = styled(Settings)`
width: 20px;
height: 20px;
color: #5476ff;
margin-right: 10px;
`;

Icon.Comment = styled(CommentDots)`
width: 20px;
height: 20px;
color: #0bc630;
margin-right: 10px;
`;

Icon.Bell = styled(Bell)`
width: 20px;
height: 20px;
color: #a394c2;
margin-right: 10px;
`;