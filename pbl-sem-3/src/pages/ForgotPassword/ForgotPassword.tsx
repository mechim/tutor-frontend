import { Button, Form, Input } from "antd";
import form from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { getEmail } from "../../redux-toolkit/slices/forgotPasswordSlice/forgotPasswordSlice";
import "./ForgotPassword.css"
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks/hooks";

export function ForgotPassword(){
  const {email} = useAppSelector((state) => ({...state.forgot}))
  const dispatch = useAppDispatch();


    const onFinish = async() => {
        
        const {email} = await form.getFieldsValue();
        const e = {email};
        dispatch(getEmail(e.email));
      };
    
    const [form] = useForm();

    return(
      <div className="forgotPassword">
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
        
                <Form.Item style={{marginBottom: 'auto'}} className="loginButtonContainer">
                  <Button danger className="loginButton" type="primary" onClick={onFinish}>
                  <Link to={'/reset'}>
                    Reseteaza
                    </Link>
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
