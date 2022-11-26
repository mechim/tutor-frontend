import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Card, Button, Rate, Avatar } from "antd";
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { CourseCard } from "../../redux-toolkit/slices/catalogSlice/catalogSlice";
import "./CatalogCard.css"

export function CatalogCard(){

    const {tutorsArray} = useAppSelector((state) => ({...state.tutorCard}));
        // console.log(tutorsArray);
    return (<>
        {tutorsArray.map(({ id, price, profile, subject, lesson_format}: CourseCard) => (
            <Card className="catalogCard">
                      <Avatar shape="square" className="cardImage" size={170} icon={<UserOutlined />} />

                        <img className="cardImage" src="" alt="" />
                        <Rate className="rateTutor" allowHalf defaultValue={0} />
                        <div className="catalogCardContainer">
                            <h1>{profile.first_name} {profile.last_name}</h1>
                            <h3>{subject.subject_name}</h3>
                            <Rate style={{width: "500px"}} className="tutorRatting" disabled defaultValue={2} />
                            <br /> 
                            <h3>{lesson_format === 1 ? <>Online</> : <>Offline</>}</h3>
                            {/* <p>{profile.about_me}</p> */}
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