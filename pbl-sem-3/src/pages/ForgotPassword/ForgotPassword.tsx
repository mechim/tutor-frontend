import { Button, Form, Input } from "antd";
import form from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export function ForgotPassword(){

    const onFinish = async() => {
        
        const{email, password} = await form.getFieldsValue(); 
        const user = {email, password};
        dispatch(getUser(user));
        dispatch(auth('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
        
      };
    
    const [form] = useForm();

    return(
        <div className="login">
            <Navbar/>
            <div className="container">
                <h1 className="loginText">Ai uiat parola?</h1>
                <hr/>
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

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}


function getUser(user: { email: any; password: any; }): any {
    throw new Error("Function not implemented.");
}


function auth(arg0: string): any {
    throw new Error("Function not implemented.");
}
