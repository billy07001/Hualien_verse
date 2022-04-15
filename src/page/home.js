import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './home.css'
import Allscenelist from './allscenelist'
import { Navbar, Container, Nav } from 'react-bootstrap'

function TopNavbar() {
    return (
        <div>
            <div className='topnav'>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">花蓮verse之畢業快樂出7玩</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">景點列表</Nav.Link>
                                <Nav.Link href="#pricing">最愛景點</Nav.Link>
                                <Nav.Link href="#pricing">上傳照片</Nav.Link>
                                <Nav.Link href="#pricing">所有照片</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">我的團隊</Nav.Link>
                                <Nav.Link href="#memes">個人資訊</Nav.Link>
                                <Nav.Link href="#pricing">登入</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <Allscenelist />
        </div>
    )
}

function Home() {
    return (
        <div>
            <TopNavbar />
        </div>
    )
}

export default Home;