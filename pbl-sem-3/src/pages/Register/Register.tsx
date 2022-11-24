import { Input, Button, Form, Spin, Steps, Row, Col, message   } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { create, createUser, NewUser} from "../../redux-toolkit/slices/registerSlice/registerSlice";
import "./Register.css"

export function Register(){
    const {newUser, loading, token, error} = useAppSelector((state) => ({...state.register}))
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [messageApi, contextHolder] = message.useMessage();


    const onFinish = async() => {
        
        const{email, password, confirm_password} = await form.validateFields(); 
        const user = {email, password, confirm_password};

        const errorMessage = (message: string | undefined) => {
          messageApi.open({
            type: 'error',
            content: message,
          });
        };
        // dispatch(create('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));

        if (user != {} as NewUser){
            dispatch(create(user));
            dispatch(createUser({email, password, confirm_password}));
            if (error === null && loading === "fulfilled"){
                navigate("/registerSecond");
            } else if (error !== null){
              errorMessage(error.message);
            }
        }
        
      };
    // console.log(user);
    const [form] = useForm();
    const { Step } = Steps;

    
    console.log(loading);
    if(loading === "pending") return <Spin />

    return(
        <div className="login">
            <Navbar />
            {contextHolder}
            <div className="container">
            <Row>
                <Col span={12}><h1 className="loginText">Inregistreaza-te:</h1></Col>
                <Col style={{textAlign : "right"}} span={12}><h1 className="nosigninText">Ai cont? <Link style={{color:"red"}} to= "/login">Intră</Link></h1></Col> 
                
            </Row>
            <hr />
            <Steps current={0} size="default" style={{padding: "0 200px"}} >
                <Step  />
                <Step  />
            </Steps>

            <div className="registerContainer">
            <Form form={form}>
                <h3 className="loginLabel">E-mail:</h3>
                <Form.Item
                  // label="Username"
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input />
                </Form.Item>
                <h3 className="loginLabel">Parola:</h3>
                <Form.Item
                  // label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>
                <h3 className="loginLabel">Confirm Parola:</h3>
                <Form.Item
                  // label="Password"
                  name="confirm_password"
                  rules={[{ required: true, message: 'Please confirm your password!' }]}
                >
                  <Input.Password />
                </Form.Item>



                <Form.Item className="loginButtonContainer">
                  <Button danger className="loginButton" type="primary" onClick={onFinish}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
              
            </div>
            
        </div>
    )
    
}