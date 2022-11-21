import "antd/dist/antd.css";
import "./Navbar.css"
import { Col, Row, Button , Layout, Avatar, Tooltip} from 'antd';
import { Link } from "react-router-dom";
import { Catalog } from "../../pages/Catalog/Catalog";
import { useLayoutEffect } from "react";
import {getUser} from "../../redux-toolkit/slices/loginSlice/loignSlice"
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

function Navbar(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const {user} = useAppSelector((state) => ({...state.login}))

    

    return(
        <nav>
        
            <Row className="navbar">
                    <Col span={10}></Col>
                    <Col span={14}>
                        {user.isLogged ? <>
                        <div className="logedInNavbar">
                            <Link to="/"><Button className="navbar_buttons navbar_buttons_white"><b>Acas&#259;</b> </Button></Link>
                            <Link to="/catalog"  ><Button  className="navbar_buttons"><b>Catalog</b></Button></Link>
                            <Tooltip className="avatarButtonNavbar" title="profile">
                                <Button shape="circle" icon={<Avatar size={40} icon={<UserOutlined />} className="avatarNavbar"  />} />
                            </Tooltip>
                            <Link to ="/profileStudent"><h3>{user.email}</h3></Link>
                        </div>
                        </> 
                        : <>
                            <Link to="/"><Button className="navbar_buttons navbar_buttons_white"><b>Acas&#259;</b> </Button></Link>
                            <Link to="/catalog"  ><Button  className="navbar_buttons"><b>Catalog</b></Button></Link>
                            <Link to ="/login" ><Button  className="navbar_buttons"><b>LOGARE</b></Button></Link>
                            <Link to ="/register"><Button  className="navbar_buttons"><b>&#206;NREGISTRARE</b></Button></Link>
                        </> }
                    </Col>
            </Row>
        </nav>
    )
}

export default Navbar;