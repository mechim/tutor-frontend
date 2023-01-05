import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Card, Button, Rate, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { CourseCard, openProfile } from "../../redux-toolkit/slices/catalogSlice/catalogSlice";
import { userInfo } from "../../redux-toolkit/slices/userSlice/userSlice";
import "./CatalogCard.css"

export function CatalogCard(){
    const {tutorsArray} = useAppSelector((state) => ({...state.tutorCard}));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const OpenProfile = async(id: number) => {
        await dispatch(openProfile(id.toString()));
        sessionStorage.setItem('tutor-id', id.toString());
        navigate("/tutor");
    }
    return (<>
        {tutorsArray.map(({ id, price, profile, subject, lesson_format}: CourseCard) => (
            <Card className="catalogCard">
                      {/* <Avatar shape="square" className="cardImage" size={170} icon={<UserOutlined />} /> */}

                        <img className="cardImage" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                        {/* <Rate className="rateTutor" allowHalf defaultValue={0} /> */}
                        <div className="catalogCardContainer">
                            <h1>{profile.first_name} {profile.last_name}</h1>
                            <h3>{subject.subject_name}</h3>
                            <Rate style={{width: "500px"}} className="tutorRatting" disabled defaultValue={profile.rating_value!} />
                            <br /> 
                            <h3>{lesson_format === 1 ? <>Online</> : <>Offline</>}</h3>
                            {/* <p>{profile.about_me}</p> */}
                            {sessionStorage.getItem("is-logged")? <><a onClick={() => {OpenProfile(profile.user.id)}}>Mai multe...</a></> : <>
                            <a href="/login">Mai multe...</a>
                            </>}
                            
                        </div>
                        <div className="catalogCardPrice">
                            <h2>{price} lei/ora</h2>
                            <Button className='catalogCardButton' type="primary" danger size="large">Contacteaza</Button>
                        </div>
                    </Card>
    ))}
        
        </>)
};