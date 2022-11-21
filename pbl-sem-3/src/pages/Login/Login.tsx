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
        const isLogged = true;
        const user = {email, password, isLogged};
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
              <Row>
                <Col span={12}><h1 className="loginText">Logare:</h1></Col>
                <Col span={12} style={{textAlign:"right"}}><h1 className="nologinText">Nu ai cont? <Link style={{color:"red"}} to= "/register">Inregistrează-te</Link></h1></Col>
              </Row>
            <hr />
            <div className="loginContainer">
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
                  style={{
                    marginBottom: '5px'
                  }}
                >
                  <Input.Password />
                </Form.Item>
                <Link className="forgotLink" to="/forgot"><a>Ai uitat parola?</a></Link>
                                
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