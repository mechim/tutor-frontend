import { UserOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Rate } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import "./ProfileTutor.css"


export function ProfileTutor(){

    

    return(
        
            <div className="login">
            <Navbar />
            <div className="container">
            <div className="profileTop">
                <Row>
                    <Col span={3}>
                        <Avatar size={100} icon={<UserOutlined />} className="avatar" />
                        
                    </Col>
                    <Col span={1}>
                        <Button type="primary" shape="circle" className="addButton" style={{marginLeft:"-30px", marginTop: "70px", width: '30px', fontSize:'25px'}}><p style={{position: "absolute", top: "-5px", left: "7.5px"}}>+</p></Button>
                    </Col>
                    <Col span={11}>
                        <h1 className="studentName">Lizzie Bennet</h1>
                        <h4>Franceza</h4>
                        <h4>Istoria</h4>
                    </Col>
                    <Col span={9}>
                        <Rate disabled defaultValue={2} />
                        <h4 className="cost">100 lei/ora</h4>
                        <h4 className="cost">150 lei/ora</h4>
                    </Col>
                </Row>

                <Row>
                    <Col></Col>
                </Row>
            </div>

            </div>

            </div>
       
    )
    
}
