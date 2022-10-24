import "antd/dist/antd.css";
import styles from "./Navbar.module.css"
import { Col, Row, Button , Layout} from 'antd';
import { Link } from "react-router-dom";
import { Catalog } from "../../pages/Catalog/Catalog";
const { Header, Footer, Sider, Content } = Layout;

function Navbar(){
    return(
        <nav>
        
            <Row className={styles.navbar}>
                    <Col span={10}></Col>
                    <Col span={14}>
                        <Link to="/"><Button type="primary" className={styles.navbar_buttons}><b>Acas&#259;</b> </Button></Link>
                        <Link to="/catalog"  ><Button className={`${styles.navbar_buttons} ${styles.navbar_buttons_white}`}><b>Catalog</b></Button></Link>
                        <Button type='ghost' className={`${styles.navbar_buttons} ${styles.navbar_buttons_white}`}><b>LOG IN</b></Button>
                        <Button type='ghost' className={`${styles.navbar_buttons} ${styles.navbar_buttons_white}`}><b>&#206;NREGISTRARE</b></Button>
                    </Col>
            </Row>
        </nav>


        
    )
}

export default Navbar;