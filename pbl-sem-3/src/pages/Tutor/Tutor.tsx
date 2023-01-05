import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Form, Input, InputNumber, Rate, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { leaveRating, leaveReview, openProfile } from "../../redux-toolkit/slices/catalogSlice/catalogSlice";
import { Course, Review } from "../../redux-toolkit/slices/userSlice/userSlice";

export function Tutor(){
    useEffect(() => {
        dispatch(openProfile(sessionStorage.getItem('tutor-id')!));
   }, [])



    const [ratingValue, setRating] = useState(1);
    const [form] = useForm();
    const{tutor} =useAppSelector((state) => ({...state.catalog}));    
    const dispatch = useAppDispatch();
    const onLeaveReview = () => {
        const review_text = form.getFieldValue("review");
        const review_by = sessionStorage.getItem('user-token')!;
        const review_for = sessionStorage.getItem('tutor-id')!;
        dispatch(leaveReview({review_by, review_for, review_text})) ;
        console.log(review_text);
    }
    const onRatingChange = () => {
        const rating_value = form.getFieldValue("rating");
        const rating_by = sessionStorage.getItem('user-token')!;
        const rating_for = sessionStorage.getItem('tutor-id')!;
        console.log(form.getFieldValue("rating"));
        dispatch(leaveRating({rating_by, rating_for, rating_value}));
    }
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };

    
    return(

        <>
           <div className="login">
            <Navbar />
            <div className="container">
            <div className="profileTop">
                <Row>
                    <Col span={4}>
                        {/* <Avatar  size={100} icon={<UserOutlined />}  /> */}
                        <img style={{height:"100px", width:"100px", borderRadius:"50%"}}src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                    </Col>
                </Row>
                
                    <h1 className="studentName">{tutor.first_name} {tutor.last_name}</h1>
                    <Rate disabled defaultValue={tutor.rating_value!}></Rate>

<hr />
                <Row style={{marginBottom: "20px"}}>
                    <Col span={12} style={{textAlign: "left"}}><h3 className="formatLectii">Formatul lectiilor: Offline ({tutor.location})</h3></Col>

                </Row>
                    {tutor.courses.map(({subject_name, price}: Course) => (
                        <Row>
                            <Col span={12}><h3>{subject_name}</h3></Col>
                            <Col span={12} style={{textAlign:"right"}}> <h3 className="cost">{price} lei/ora</h3></Col>
                        </Row>
                            
                        ))}
            
            <div className="descriereaProfilului">
                <h1>Descrierea Profilului:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2>{tutor.about_me}</h2>
                <br />

                <h1>Informație generală:</h1>
                <hr className="descriereaProfiluluiLine"/>
                <h2><b>Locatie: </b>{tutor.location}</h2>
                <h2><b>Telefon: </b>{tutor.phone_number}</h2>
                <h2><b>E-mail: </b>{tutor.contact_mail}</h2>
                <br/>


                <h1>Recenzii:</h1>
                <Form form={form}>
                    <Form.Item name="rating">
                    <Select

                        style={{ width: "100px" , height:"40px"}}
                        onChange={handleChange}
                        options={[
                            {
                            value: '1',
                            label: '1',
                            },
                            {
                            value: '2',
                            label: '2',
                            },
                            {
                            value: '3',
                            label: '3',
                            },
                            {
                                value: '4',
                                label: '4',
                                },
                                {
                                    value: '5',
                                    label: '5',
                                    },
                        ]}
                        />
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary"  danger onClick={onRatingChange}>Lasa Rating</Button>
                    </Form.Item>
                </Form>
                <Form form={form}>
                    <Form.Item name="review">
                        <TextArea name="review" rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary"  danger onClick={onLeaveReview}>Lasa Recenzia</Button>
                    </Form.Item>
                </Form>
                
              
                <hr className="descriereaProfiluluiLine"/>
                {tutor.reviews.map(({review_date, author_name, review_text}: Review) => (
                    <Card className="reviewsCardTutorProfile">
                        <Row>
                       <Col span={12} className="reviewsName">{author_name}</Col>
                        <Col span={12} style={{textAlign: "right"}}>{review_date}</Col>
                        </Row>
                        <Row>
                       <Col className="reviewsText">{review_text}</Col>
                        </Row>
                    </Card>
                ))}
                
            </div>
            </div>
            </div>
            </div>

        </>
    )
}