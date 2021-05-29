import "./navbar.css"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-bar">
      <Navbar color="white" light expand="md">
        <NavbarBrand href="/"><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT5aDPrTDpB3jL3ttrioeWCU3d0ztDqYbsR5QxOub1xTqQcAHcJ_eF7qx4sZcXEt6edNM&usqp=CAU" alt=""/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink  href="/components/"><p className="nav-items">Home</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap"><p className="nav-items">About us</p></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  pitching tools
                </DropdownItem>
                <DropdownItem>
                  bussines plans
                </DropdownItem>
                
                <DropdownItem>
                  pitchdesk
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href=""><p className="nav-items">Funding</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href=""><p className="nav-items">Contact us</p></NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

