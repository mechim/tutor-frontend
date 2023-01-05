import { Input, Checkbox, Button, Form, notification, Spin, Steps, Row, Col, Radio, RadioChangeEvent   } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { create, createStudent, createTutor, createUser} from "../../redux-toolkit/slices/registerSlice/registerSlice";
import "../Register/Register.css"
import "./RegisterSecond.css"

export function RegisterSecond(){
    const {newUser, loading, token} = useAppSelector((state) => ({...state.register}))
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [profileType, setProfileType] = useState("");

    // useEffect(()=>{
    //   dispatch(createUser(1));
    // } ,[])

    let isStudent = false, isTutor = false;

  const onChangeProfileType = (e: RadioChangeEvent) => {
    setProfileType(e.target.value);
  } 
   
  const onSubmitStudent = async() => {
    const first_name = form.getFieldValue("first_name");
    const last_name = form.getFieldValue("last_name");
    const user_id = sessionStorage.getItem('user-id')!;
    const phone_number = form.getFieldValue("phone_number");
    const profile_type = "2";
    await dispatch(createStudent({first_name, last_name, user_id, profile_type, phone_number}));  
    navigate("/login");

  }

  const onSubmitTutor = async() => {
    const first_name = form.getFieldValue("first_name");
    const last_name = form.getFieldValue("last_name");
    const location = form.getFieldValue("city");
    const contact_mail = form.getFieldValue("contact_email");
    const phone_number = form.getFieldValue("phone_number");
    const user_id = sessionStorage.getItem('user-id')!;
    const profile_type = "1";
    await dispatch(createTutor({first_name, last_name, location, user_id, profile_type, contact_mail, phone_number}));
    navigate("/login");
    sessionStorage.removeItem('user-id');
  }
    // console.log(user);
    const [form] = useForm();
    const { Step } = Steps;



    return(
        <div className="login">
            <Navbar />
            <div className="container">
            <Row>
                <Col span={12}><h1 className="loginText">Inregistreaza-te:</h1></Col>
                <Col style={{textAlign : "right"}} span={12}><h1 className="nosigninText">Ai cont? <Link style={{color:"red"}} to= "/login">Intră</Link></h1></Col> 
                
            </Row>
            <hr />

            <Steps current={1} size="default" style={{margin: "30px 0 40px 0", padding: "0 200px" }}>
                <Step  />
                <Step  />
            </Steps>
            
           
                <h3 className="loginLabel" style={{margin: "10px 0 20px 0"}}>Tipuri de utilizatori</h3>
                <Row style={{margin: "10px 0 50px 0", textAlign: "center"}}>
                <Radio.Group size="large" style={{margin: "auto", textAlign: "center"}} value={profileType} onChange={onChangeProfileType} >
                    <Radio.Button value="1" style={{width:"300px", height: "50px", margin: "0 40px 0 0"}}>Tutor</Radio.Button>
                    <Radio.Button value="2" style={{width:"300px", height: "50px", margin: "0 0 0 40px"}}>Student</Radio.Button>
                </Radio.Group>
                </Row>
                {profileType ==="1"?<>
                            <div style={{textAlign:"center"}}>
                                <Form form ={form}>
                                    <Form.Item name = "first_name">
                                        <Input placeholder="First Name" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item name = "last_name">
                                        <Input placeholder="Last Name" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item name = "city">
                                        <Input placeholder="City" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item name = "phone_number">
                                        <Input placeholder="Phone Number" prefix="+373" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item name = "contact_email">
                                        <Input placeholder="Contact Email" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={onSubmitTutor} danger type="primary">Salveaza</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                </>:
                
                profileType === "2"?<>
                            <div style={{textAlign:"center"}}>
                                <Form form ={form}>
                                    <Form.Item name = "first_name">
                                        <Input placeholder="First Name" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item name = "last_name">
                                        <Input placeholder="Last Name" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item name = "phone_number">
                                        <Input placeholder="Phone Number" prefix="+373" style={{ width: "300px"}} /> 
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={onSubmitStudent} danger type="primary">Salveaza</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                </> : null}
              
            </div>
            
        </div>
    )
    
}