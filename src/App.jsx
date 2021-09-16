import React, {useState, useContext} from 'react'
import { Container, IconCon,Img, MobileContainer ,Icon, ImgWrapper, TitleImg,Title,Item, Desc, Line, ToggleMode} from './AppStyle.js'
import { ThemeContext } from './context.js'
import img from './airplane.jpg'

export const App = () => {
  const[mode, setMode] = useState(false)
  const [theme, setTheme]=useContext(ThemeContext)


  const dark={
    icon:`black`,
     title:'black',
     background:'white'  
  }
  const light={
    icon:`white`,
     title:'white',
     background:'black'  
  }
  const onChange=()=>{
    setMode(!mode)
    setTheme(mode ? dark : light)
  }
  return (
    <Container>
      <MobileContainer>
        <IconCon>
          <Icon.Arrow></Icon.Arrow>
          <Icon.Switch></Icon.Switch>
        </IconCon>
        <ImgWrapper>
        <Img src={img} alt="img"/>
        <TitleImg>Airplane</TitleImg>
        <Desc>no one</Desc>
        </ImgWrapper>
        <Item>
          <Icon.Dark/>
          <Title>Dark Mode</Title>
          <ToggleMode 
          onChange={onChange}
          checked={mode}
          
          size={50}
          />
        </Item>
        <Item>
          <Icon.Grid/>
          <Title>Story</Title>
        </Item>
        <Item>
          <Icon.Chat/>
          <Title>Chat Head</Title>
        </Item>
        <Item>
          <Icon.Group/>
          <Title>Groups</Title>
        </Item>
        <Line></Line>
        <Item>
          <Icon.Media/>
          <Title>Media</Title>
        </Item>
        <Item>
          <Icon.Settings/>
          <Title>Settings</Title>
        </Item>
        <Item>
          <Icon.Comment/>
          <Title>Comment</Title>
        </Item>
        <Item>
          <Icon.Bell/>
          <Title>Notification</Title>
        </Item>
      </MobileContainer>
    </Container>
  )
}

export default App
