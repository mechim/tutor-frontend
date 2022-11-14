import { Input, Checkbox, Button, Form, notification, Spin, Row  } from "antd";
import Col from "antd/es/grid/col";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import {GetData} from "../../redux-toolkit/slices/resetSlice/resetSlice";
// import "./Login.css"

export function Reset(){
    const {data}= useAppSelector((state) => ({...state.reset}))
    const dispatch = useAppDispatch();

    // useEffect(()=>{
    //   dispatch(authentification(1));
    // } ,[])

    const onFinish = async() => {
        
        const{confirmationCode, password, confirmPassword} = await form.getFieldsValue(); 
        const data = {confirmationCode, password, confirmPassword};
        dispatch(GetData(data));        
      };
    // console.log(user);
    const [form] = useForm();
    
    // if(loading === "pending") return <Spin />

    return(
        <div className="login">
            <Navbar />
            <div className="container">
                <h1 className="loginText">Reseteaza parola:</h1>
            <hr />
            <div className="loginContainer">
            <Form form={form}>
            <h3 className="loginLabel">Cod de confirmatie:</h3>
                <Form.Item
                  // label="Username"
                  name="confirmationCode"
                  rules={[{ required: true, message: 'Please input the confirmation code!' }]}
                >
                  <Input />
                </Form.Item>
                <h3 className="loginLabel">Parola noua:</h3>
                <Form.Item
                  // label="Username"
                  name="password"
                  rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                  <Input />
                </Form.Item>
                <h3 className="loginLabel">Repeta parla:</h3>
                <Form.Item
                  // label="Password"
                  name="confirmPassword"
                  rules={[{ required: true, message: 'Please repeat your new password!' }]}
                >
                  <Input.Password />
                </Form.Item>
                                
                <Form.Item className="loginButtonContainer">
                
                  <Button danger className="loginButton" type="primary" onClick={onFinish}>
                   
                    Reseteaza
                    
                  </Button>
                </Form.Item>
              </Form>
            </div>
              
            </div>
            
        </div>
    )
    
}