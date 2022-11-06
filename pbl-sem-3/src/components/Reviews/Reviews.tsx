import { StarFilled } from "@ant-design/icons";
import { Row, Col, Card } from "antd";
import "./Reviews.css";

export function Reviews(){
    return(
        <div className="reviews">
        <div className="container">
            <h1 className="reviews-title">Ce spun elevii:</h1>
            <Row gutter={16}>
                <Col span={12}><Card className="reviewsCard">
                     <Row>
                        <Col span={12} className="reviewsName">Alan Marti</Col>
                        <Col span={12} className="reviewsStars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></Col>
                    </Row>
                    <Row>
                        <Col className="reviewsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis magna.</Col>
                    </Row>
                </Card></Col>
                <Col span={12}><Card className="reviewsCard">
                     <Row>
                        <Col span={12} className="reviewsName">Alan Marti</Col>
                        <Col span={12} className="reviewsStars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></Col>
                    </Row>
                    <Row>
                        <Col className="reviewsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis magna.</Col>
                    </Row>
                </Card></Col>
            </Row>
            <Row gutter={16}>
            <Col span={12}><Card className="reviewsCard">
                     <Row>
                        <Col span={12} className="reviewsName">Alan Marti</Col>
                        <Col span={12} className="reviewsStars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></Col>
                    </Row>
                    <Row>
                        <Col className="reviewsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis magna.</Col>
                    </Row>
            </Card></Col>
            <Col span={12}><Card className="reviewsCard">
                     <Row>
                        <Col span={12} className="reviewsName">Alan Marti</Col>
                        <Col span={12} className="reviewsStars"><StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled /></Col>
                    </Row>
                    <Row>
                        <Col className="reviewsText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis magna.</Col>
                    </Row>
            </Card></Col>
            </Row>
        </div>
    </div>
    )
}