import { UserOutlined } from "@ant-design/icons";
import { Input, Checkbox, Button, Form, notification, Spin, Row, Avatar  } from "antd";
import Col from "antd/es/grid/col";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileStudentCard } from "../../components/ProfileStudentCard/ProfileStudentCard";
import "./ProfileStudent.css"


export function ProfileStudent(){

    return(
        <div className="login">
            <Navbar />
        
        <div className="profileTop">
            <Row>
                <Col span={4}>
                    <Avatar size={100} icon={<UserOutlined />} className="avatar" />
                    
                </Col>
                <Col>
                    <Button type="primary" shape="circle" className="addButton" style={{width: '30px', fontSize:'25px', verticalAlign: "middles"}}><p style={{position: "absolute", top: "-5px", left: "7.5px"}}>+</p></Button>
                </Col>
                <Col span={16}>
                    <h1 className="studentName">Lizzie Bennet</h1>
                    <h4 className="studentEmail">someweirdemail@gmail.com</h4>
                </Col>
                <Col span={4}></Col>
            </Row>

            <div className="container">
                <h1 className="profesoriiMeiText">Profesorii mei</h1>
                <hr className="profesoriiMeiText"/>
            </div>

            <Row>
                <Col><ProfileStudentCard/></Col>
                <Col><ProfileStudentCard/></Col>
                <Col><ProfileStudentCard/></Col>
            </Row>

            <Button className="schimbaParolaButtonContainer">
                Schimba Parola
            </Button>
            <br></br>

            

            <Row>
                <Col span={6}><Button className="stergeProfilulButtonContainer">Șterge  profilul</Button></Col>
                <Col span={12}><h4 className="mesajNuPoateFiAnulat">Această acțiune nu poate fi anulată!</h4></Col>
                <Col span={6}></Col>
            </Row>
            


        </div>  
        </div>
    )
    
}
