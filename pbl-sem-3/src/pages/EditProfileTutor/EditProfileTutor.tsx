import { LinkOutlined, StarFilled, UserOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Rate, Card, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./EditProfileTutor.css"


export function EditProfileTutor(){

    

    return(
        
            <div className="login">
            <Navbar />
            <div className="container">
            <div className="profileTop">
                <Row>
                    <Col span={3}>
                        <Avatar size={100} icon={<UserOutlined />}  />
                        
                    </Col>
                    <Col span={1}>
                        <Button type="primary" shape="circle" className="addButton" style={{marginLeft:"-50px", marginTop: "70px", width: '30px', fontSize:'25px'}}><p style={{position: "absolute", top: "-5px", left: "7.5px"}}>+</p></Button>
                    </Col>
                    <Col span={11}>
                        <h1 className="studentName"><Input defaultValue="Lizzie Bennet" /*allowClear style={{background:"#FFF5EF"}}*/ /></h1>
                        <br />
                        <h4><Input defaultValue="Franceza"/></h4>
                        <h4><Input defaultValue="Istoria"/></h4>
                    </Col>
                    <Col span={9} style={{textAlign:"right"}} >
                        <Rate disabled defaultValue={2} />
                        <div className="costEdit">
                        <br />
                        <h4 className="cost"><Input style={{ borderColor:"red",color:"red"}} defaultValue="100 lei/ora"/></h4>
                        <h4 className="cost"><Input style={{ borderColor:"red",color:"red"}} defaultValue="150 lei/ora"/></h4>
                        </div>
                    </Col>
                </Row>
                <Button type="link" style={{color:"red", marginLeft:"300px"}}>+ Adauga inca un obiect</Button>
                <Row>
                    <Col span={4}><Button danger  type='primary' className="editeazaProfilulButton">Contacteaza</Button><LinkOutlined className="linkButton"/></Col>
                    <Col span={11}><h2 className="formatLectiiEdit"><Input defaultValue="Formatul lectiilor: Offline(locatia)"/></h2></Col>
                    <Col span={9}></Col>
                </Row>
            
            
            <div className="descriereaProfilului">
                <h1>Descrierea Profilului:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2><TextArea rows={4} style={{backgroundColor:"#FFF5EF"}} defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus odio eu gravida hendrerit. Morbi rutrum vehicula ipsum ac pellentesque. Nunc luctus iaculis metus sed sagittis. Aliquam vestibulum ante vitae ante facilisis finibus. Sed gravida porta scelerisque. Nam finibus ut risus vel consequat. Duis ac diam dolor." allowClear  /></h2>
                <br />

                <h1>Informație generală:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2><b>Locatie: </b><Input defaultValue="Chisinau"/></h2>
                <h2><b>Telefon: </b><Input defaultValue="069112233"/></h2>
                <h2><b>E-mail: </b><Input defaultValue="someweirdemail@gmail.com"/></h2>
                <h2><b>Gen: </b><Input defaultValue="masculin"/></h2>
                <br/>

                <h1>Certificate:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <Button type="link" style={{color:"red", marginLeft:"200px"}}>+ Adauga inca un certificat</Button>
                <br/>

                <h1>Educatie:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h1>Universitatea de Stat a Moldovei</h1>
                <h2>Facultatea de limbi straine</h2>
                <h3>Idk ce specialitate</h3>
                <Button type="link" style={{color:"red", marginLeft:"-20px"}}>+ Adauga inca o diploma</Button>
                <br/>

                <h1>Recenzii:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <Card className="reviewsCardTutorProfile">
                     <Row>
                        <Col span={12} className="reviewsName">Alan Marti</Col>
                        <Col span={12} className="reviewsStars"><Rate disabled defaultValue={5} /></Col>
                    </Row>
                    <Row>
                        <Col className="reviewsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis magna.</Col>
                    </Row>
                </Card>
                <Card className="reviewsCardTutorProfile">
                     <Row>
                        <Col span={12} className="reviewsName">Alan Marti</Col>
                        <Col span={12} className="reviewsStars"><Rate disabled defaultValue={5} /></Col>
                    </Row>
                    <Row>
                        <Col className="reviewsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis magna.</Col>
                    </Row>
                </Card>

                <Button danger style={{background: "#391400", borderColor:"#391400"}}  type='primary' className="editeazaProfilulButton">Salveaza</Button>
            </div>
            </div>
            </div>
            </div>
       
    )
    
}
