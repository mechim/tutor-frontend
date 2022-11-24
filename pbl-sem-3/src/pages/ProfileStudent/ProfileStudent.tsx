import { UserOutlined } from "@ant-design/icons";
import { Input, Checkbox, Button, Form, notification, Spin, Row, Avatar  } from "antd";
import Col from "antd/es/grid/col";
import { useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { ProfileStudentCard } from "../../components/ProfileStudentCard/ProfileStudentCard";
import "./ProfileStudent.css"
import {getUser, IUser, logout} from "../../redux-toolkit/slices/loginSlice/loignSlice"
import { useAppSelector, useAppDispatch } from "../../redux-toolkit/hooks/hooks";
import {displayUser, killUser} from "../../redux-toolkit/slices/userSlice/userSlice"

export function ProfileStudent(){
    const {user} = useAppSelector((state) => ({...state.user}));   
    const {first_name, last_name, contact_mail, phone_number} = user;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onLogout = (() => {
        dispatch(logout());
        dispatch(killUser());
        navigate("/");  
    })

    return(
        <div className="profile-student">
            <div className="login">
            <Navbar />
        
            <div className="container">
            <div className="profileTop">
                <Row>
                    <Col span={3}>
                        <Avatar size={100} icon={<UserOutlined />} className="avatar" />
                        
                    </Col>
                    <Col span={1}>
                        <Button type="primary" shape="circle" className="addButton" style={{marginLeft:"-50px", marginTop: "70px", width: '30px', fontSize:'25px'}}><p style={{position: "absolute", top: "-5px", left: "7.5px"}}>+</p></Button>
                    </Col>
                    <Col span={16}>
                        <h1 className="studentName">{first_name} {last_name}</h1>
                        <h4 className="studentEmail">{contact_mail}</h4>
                    </Col>
                    {/* <Col span={4}></Col> */}
                </Row>
               
{/* 
            <Button className="schimbaParolaButtonContainer">
                Schimba Parola
            </Button>
            <br></br> */}

            

            {/* <Row>
                <Col span={6}><Button className="stergeProfilulButtonContainer">Șterge  profilul</Button></Col>
                <Col span={12}><h4 className="mesajNuPoateFiAnulat">Această acțiune nu poate fi anulată!</h4></Col>
                <Col span={6}></Col>
            </Row> */}
            <Button className="stergeProfilulButtonContainer" onClick={() =>onLogout()}>Log Out</Button>

            </div>  
            </div>
            </div>
        </div>
            

            

       
    )
    
}
