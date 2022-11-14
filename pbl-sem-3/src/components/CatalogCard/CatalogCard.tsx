import { StarFilled } from "@ant-design/icons";
import { Card, Button, Rate } from "antd";
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { TutorCard } from "../../redux-toolkit/slices/catalogSlice/catalogSlice";
import "./CatalogCard.css"

export function CatalogCard(){

    const {tutorsArray} = useAppSelector((state) => ({...state.tutorCard}));
    console.log(tutorsArray);
    return (<>
        {tutorsArray.map(({tutorImage, tutorName, tutorSubject, id, format, rating, description, price}: TutorCard) => (
            <Card className="catalogCard">
                        <img className="cardImage" src={tutorImage} alt="" />
                        <Rate className="rateTutor" allowHalf defaultValue={0} />
                        <div className="catalogCardContainer">
                            <h1>{tutorName}</h1>
                            <h3>{tutorSubject}</h3>
                            <Rate className="tutorRatting" disabled defaultValue={2} />
                            <br /> 
                            <h3>{format}</h3>
                            <p>{description}</p>
                            <a href="/">Mai multe...</a>
                        </div>
                        <div className="catalogCardPrice">
                            <h2>{price} lei/ora</h2>
                            <Button className='catalogCardButton' type="primary" danger size="large">Contacteaza</Button>
                        </div>
                    </Card>
    ))}
        
        </>)
};