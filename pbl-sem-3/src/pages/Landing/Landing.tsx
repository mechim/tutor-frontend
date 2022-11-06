import "antd/dist/antd.css";
import './Landing.css';
import heroPic from '../../assets/hero-picture.png';
import Navbar from "../../components/Navbar/Navbar";
import { Button } from 'antd';
import { Col, Row } from 'antd';
import { Image } from 'antd';
import axios from "axios";
import { Numbers } from "../../components/Numbers/Numbers";
import { Reviews } from "../../components/Reviews/Reviews";

function Landing(){
    
    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/todos/2').then(res=>{console.log(res.data)})
    // },[])
    
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
       
    <Numbers />
    <Reviews />
    </div>
        
        
    )
}

export default Landing;