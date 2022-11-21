import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Button, Rate, Card } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./ProfileTutor.css"


export function ProfileTutor(){

    

    return(
        
            <div className="login">
            <Navbar />
            <div className="container">
            <div className="profileTop">
                <Row>
                    <Col span={4}>
                        <Avatar  size={100} icon={<UserOutlined />}  />
                        
                    </Col>
                    <Col span={11}>
                        <h1 className="studentName">Lizzie Bennet</h1>
                        <h4>Franceza</h4>
                        <h4>Istoria</h4>
                    </Col>
                    <Col span={9} style={{textAlign:"right"}}>
                        <Rate disabled defaultValue={2} />
                        <h4 className="cost">100 lei/ora</h4>
                        <h4 className="cost">150 lei/ora</h4>
                    </Col>
                </Row>

                <Row>
                    <Link to = "/editTutorProfile"><Col span={4}><Button danger style={{background: "#391400", borderColor:"#391400"}}  type='primary' className="editeazaProfilulButton">Editeaza profilul</Button></Col></Link>
                    <Col span={11}><h2 className="formatLectii">Formatul lectiilor: Offline(locatia)</h2></Col>
                    <Col span={9}></Col>
                </Row>
            
            
            <div className="descriereaProfilului">
                <h1>Descrierea Profilului:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus odio eu gravida hendrerit. Morbi rutrum vehicula ipsum ac pellentesque. Nunc luctus iaculis metus sed sagittis. Aliquam vestibulum ante vitae ante facilisis finibus. Sed gravida porta scelerisque. Nam finibus ut risus vel consequat. Duis ac diam dolor.</h2>
                <br />

                <h1>Informație generală:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2><b>Locatie: </b>Chisinau</h2>
                <h2><b>Telefon: </b>069112233</h2>
                <h2><b>E-mail: </b>someweirdemail@gmail.com</h2>
                <h2><b>Gen: </b>masculin</h2>
                <br/>

                <h1>Certificate:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <br/>

                <h1>Educatie:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h1>Universitatea de Stat a Moldovei</h1>
                <h2>Facultatea de limbi straine</h2>
                <h3>Idk ce specialitate</h3>
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
            </div>
            </div>
       
    )
    
}
