import { Input, Checkbox, Button, Form, notification, Spin, Steps, Row, Col   } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { create, creation, postUser} from "../../redux-toolkit/slices/registerSlice/registerSlice";
import "./Register.css"

export function Register(){
    const {user, loading, token} = useAppSelector((state) => ({...state.login}))
    const dispatch = useAppDispatch();

    useEffect(()=>{
      dispatch(creation(1));
    } ,[])

    const onFinish = async() => {
        
        const{email, password, confirmPassword} = await form.getFieldsValue(); 
        const user = {email, password, confirmPassword};
        dispatch(postUser(user));
        dispatch(create('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
        
      };
    // console.log(user);
    const [form] = useForm();
    const { Step } = Steps;

    
    console.log(loading);
    if(loading === "pending") return <Spin />

    return(
        <div className="login">
            <Navbar />
            <div className="container">
            <h1 className="loginText">Inregistreaza te:</h1>
            <hr />
           
            {/* <Row>
              <Col span={12}><div className="stepLine"></div></Col>
              <Col span={12}> <div className="stepline"></div></Col>
            </Row> */}

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
                >
                  <Input.Password />
                </Form.Item>
                <h3 className="loginLabel">Confirm Parola:</h3>
                <Form.Item
                  // label="Password"
                  name="confirmPassword"
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