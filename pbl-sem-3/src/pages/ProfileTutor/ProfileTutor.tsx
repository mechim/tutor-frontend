import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Rate, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import "./ProfileTutor.css"
import {Course, Review} from "../../redux-toolkit/slices/userSlice/userSlice"
import {logout} from "../../redux-toolkit/slices/loginSlice/loignSlice"
import { killUser } from "../../redux-toolkit/slices/userSlice/userSlice";
export function ProfileTutor(){

    const {user} = useAppSelector((state) => ({...state.user}));   
    const {first_name, last_name, contact_mail, phone_number, courses, reviews, location, about_me, rating_value} = user;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    
    const onLogout = (() => {
        dispatch(logout());
        dispatch(killUser());
        navigate("/");  
    })
    return(
        
            <div className="login">
            <Navbar />
            <div className="container">
            <div className="profileTop">
                <Row>
                    <Col span={4}>
                        <Avatar  size={100} icon={<UserOutlined />}  />
                        
                    </Col>
                </Row>
                
                    <h1 className="studentName">{first_name} {last_name}</h1>
<hr />
                <Row style={{marginBottom: "20px"}}>
                <Col span={12}><Link to = "/editTutorProfile"><Button danger style={{background: "#391400", borderColor:"#391400"}}  type='primary' className="editeazaProfilulButton">Editeaza profilul</Button></Link></Col>
                    <Col span={12} style={{textAlign: "right"}}><h3 className="formatLectii">Formatul lectiilor: Offline ({location})</h3></Col>

                </Row>
                    {courses.map(({subject_name, price}: Course) => (
                        <Row>
                            <Col span={12}><h3>{subject_name}</h3></Col>
                            <Col span={12} style={{textAlign:"right"}}> <h3 className="cost">{price} lei/ora</h3></Col>
                        </Row>
                            
                        ))}
                
                    
                       
                    
               

                
            
            
            <div className="descriereaProfilului">
                <h1>Descrierea Profilului:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2>{about_me}</h2>
                <br />

                <h1>Informație generală:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2><b>Locatie: </b>{location}</h2>
                <h2><b>Telefon: </b>{phone_number}</h2>
                <h2><b>E-mail: </b>{contact_mail}</h2>
                <br/>


                <h1>Recenzii:</h1>
                <hr className="descriereaProfiluluiLine"/>
                {reviews.map(({review_date, author_name, review_text}: Review) => (
                    <Card className="reviewsCardTutorProfile">
                        <Row>
                       <Col span={12} className="reviewsName">{author_name}</Col>
                        <Col span={12} style={{textAlign: "right"}}>{review_date}</Col>
                        </Row>
                        <Row>
                       <Col className="reviewsText">{review_text}</Col>
                        </Row>
                    </Card>
                ))}
                

                {/* <Button className="schimbaParolaButtonContainer">
                Schimba Parola
                </Button>
                <br></br>
                <Row>
                    <Col span={6}><Button className="stergeProfilulButtonContainer">Șterge  profilul</Button></Col>
                    <Col span={12}><h4 className="mesajNuPoateFiAnulat">Această acțiune nu poate fi anulată!</h4></Col>
                   
                </Row> */}
                <Button className="stergeProfilulButtonContainer" onClick={() =>onLogout()}>Log Out</Button>
            </div>
            </div>
            </div>
            </div>
       
    )
    
}
