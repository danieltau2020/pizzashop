import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
} from './SidebarElements'

const Sisebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarLink to='/'>Pizza</SidebarLink>
      <SidebarLink to='/'>Desserts</SidebarLink>
      <SidebarLink to='/'>Full Menu</SidebarLink>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sisebar
