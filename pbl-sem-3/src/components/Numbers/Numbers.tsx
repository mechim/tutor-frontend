import { Row, Col, Card } from "antd";
import "./Numbers.css"

export function Numbers(){
    return(
        <div className="numbers">
<div className="container">
    <h1 className="numbers-main-text">Ni&#x15F;te cifre</h1>
    <Row>
        <Col span={8}>
            <Card className="numbers-card" size="small" bordered={true}>
            <h2 className="numbers-card-numbers">100+</h2>
            <p className="numbers-card-description">Tutori</p>
            </Card>
        </Col>
        <Col span={8}>
            <Card className="numbers-card" size="small" bordered={true}>
            <h2 className="numbers-card-numbers">500+</h2>
            <p className="numbers-card-description">Studenti</p>
            </Card>
        </Col>
        <Col span={8}>
            <Card className="numbers-card" size="small" bordered={true}>
            <h2 className="numbers-card-numbers">1000+</h2>
            <p className="numbers-card-description">Ore de adaugator</p>
            </Card>
        </Col>
     </Row>
    </div>
    
</div>
    )
}

