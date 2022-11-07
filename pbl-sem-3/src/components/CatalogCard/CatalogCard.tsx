import { StarFilled } from "@ant-design/icons";
import { Card, Button } from "antd";

export function CatalogCard(){
    return (
        <Card className="catalogCard">
                        <img className="cardImage" src="https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg" alt="" />
                        <div className="catalogCardContainer">
                            <h1>John Doe</h1>
                            <h3>Istoria</h3>
                            <StarFilled /><StarFilled /><StarFilled /><StarFilled /><StarFilled />
                            <h3>Online</h3>
                            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mulla eget rhoncus nisi</p>
                            <a href="/">Mai multe...</a>
                        </div>
                        <div className="catalogCardPrice">
                            <h2>100 lei/ora</h2>
                            <Button className='catalogCardButton' type="primary" danger size="large">Contacteaza</Button>
                        </div>
                    </Card>
    )
};