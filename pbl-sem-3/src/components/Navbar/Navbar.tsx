import "antd/dist/antd.css";
import "./Navbar.css"
import { Col, Row, Button , Layout} from 'antd';
import { Link } from "react-router-dom";
import { Catalog } from "../../pages/Catalog/Catalog";
const { Header, Footer, Sider, Content } = Layout;

function Navbar(){
    return(
        <nav>
        
            <Row className="navbar">
                    <Col span={10}></Col>
                    <Col span={14}>
                        <Link to="/"><Button className="navbar_buttons navbar_buttons_white"><b>Acas&#259;</b> </Button></Link>
                        <Link to="/catalog"  ><Button  className="navbar_buttons"><b>Catalog</b></Button></Link>
                        <Link to ="/login" ><Button  className="navbar_buttons"><b>LOGARE</b></Button></Link>
                        <Link to ="/register"><Button  className="navbar_buttons"><b>&#206;NREGISTRARE</b></Button></Link>
                    </Col>
            </Row>
        </nav>
    )
}

export default Navbar;