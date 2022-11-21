import { Input, Checkbox, Button, Form, notification, Spin, Steps, Row, Col   } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { create, creation} from "../../redux-toolkit/slices/registerSlice/registerSlice";
import "../Register/Register.css"
import "./RegisterSecond.css"

export function RegisterSecond(){
    const {newUser, loading, token} = useAppSelector((state) => ({...state.register}))
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
      dispatch(creation(1));
    } ,[])

    let isStudent = false, isTutor = false;

    const choose = async(choice: number) => {
        if (choice === 0){
            isStudent = true;
            isTutor = false;
        } else if (choice === 1){
            isStudent = false;
            isTutor = true;
        }
        console.log(choice);
        
    }

   
    const onFinish = async() => {
        
        if(isStudent){
            navigate('/');
        } else if (isTutor){
            navigate('/catalog');   
        }
        // dispatch(create('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
        
      };
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
            
            <Form form={form}>
                <h3 className="loginLabel" style={{margin: "10px 0 20px 0"}}>Tipuri de utilizatori</h3>
                <Row style={{margin: "10px 0 50px 0"}}>
                    <Col span={12} style={{textAlign : 'center'}}> 
                    <Form.Item
                    // label="Username"
                    name="tutor"
                    rules={[{ required: false}]}
                    >
                        <Button className="registerChoiceButton" onClick={() =>choose(0)}>Inregistreaza-te ca student</Button>
                    </Form.Item></Col>
                    <Col span={12} style={{textAlign : 'center'}}>
                        <Form.Item
                    // label="Password"
                    name="student"
                    rules={[{ required: false }]}
                    >
                    <Button className="registerChoiceButton" onClick={() =>choose(1)}>Inregistreaza-te ca student</Button>
                    </Form.Item>
                    </Col>
                </Row>
               
                

                <Form.Item className="loginButtonContainer">
                  <Button danger className="loginButton" type="primary" onClick={onFinish}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            
              
            </div>
            
        </div>
    )
    
}