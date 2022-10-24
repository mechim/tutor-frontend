import "antd/dist/antd.css";
import './Landing.css';
import heroPic from '../../assets/hero-picture.png';
import Navbar from "../../components/Navbar/Navbar";
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { Image } from 'antd';
import { Card, Layout } from 'antd';
import { useEffect } from "react";
import axios from "axios";
const { Header, Footer, Sider, Content } = Layout;

function Landing(){
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/2').then(res=>{console.log(res.data)})
    },[])
    
    return(
        <div>
        <div className="hero">
            <Navbar />
            <div className="container">
                <Row>
                    <Col span={12} className="hero-call-to-action"><h1 className="hero-main-text">Ai nevoie de ad&#259;ug&#259;tor? G&#259;seste unul chiar acum!</h1>
                    <Button danger type="primary" className="hero-main-button">CATALOG</Button>
                    </Col>
                    <Col span={12} className='hero-image'><Image width={475} src={heroPic}/></Col>
                </Row>
                <Row>
                    <Col span={12}></Col>
                </Row>
            </div>
        </div>
       
      
        <div className="reviews">
            <div className="container">
                <h1 className="reviews-title">Ce spun elevii:</h1>
                <Row gutter={16}>
                    <Col span={12}><Card>Alan Marti</Card></Col>
                    <Col span={12}><Card></Card></Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}><Card></Card></Col>
                    <Col span={12}><Card></Card></Col>
                </Row>
            </div>
        </div>
    </div>
        
        
    )
}

export default Landing;