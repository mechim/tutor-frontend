import { Input, Checkbox, Button, Form, notification, Spin, Row  } from "antd";
import Col from "antd/es/grid/col";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { auth, authentification, getUser} from "../../redux-toolkit/slices/loginSlice/loignSlice";
import "./Login.css"

export function Login(){
    const {user, loading, token} = useAppSelector((state) => ({...state.login}))
    const dispatch = useAppDispatch();

    useEffect(()=>{
      dispatch(authentification(1));
    } ,[])

    const onFinish = async() => {
        
        const{email, password} = await form.getFieldsValue(); 
        const user = {email, password};
        dispatch(getUser(user));
        dispatch(auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
        
      };
    // console.log(user);
    const [form] = useForm();
    
    console.log(loading);
    // if(loading === "pending") return <Spin />

    return(
        <div className="login">
            <Navbar />
            <div className="container">
                <h1 className="loginText">Reseteaza parola:</h1>
            <hr />
            <div className="loginContainer">
            <Form form={form}>
                <h3 className="loginLabel">Parola noua:</h3>
                <Form.Item
                  // label="Username"
                  name="email"
                  rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                  <Input />
                </Form.Item>
                <h3 className="loginLabel">Repeta parla:</h3>
                <Form.Item
                  // label="Password"
                  name="password"
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