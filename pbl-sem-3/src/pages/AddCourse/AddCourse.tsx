import { Button, Form, Input, InputNumber, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import Navbar from "../../components/Navbar/Navbar";
import { useAppDispatch } from "../../redux-toolkit/hooks/hooks";
import {createCourse} from "../../redux-toolkit/slices/userSlice/userSlice"

export function AddCourse(){
    const [form] = useForm();
    const onSubmit = () => {
        const {subject, lesson_format, location, price } = form.getFieldsValue();
        const token = sessionStorage.getItem('user-token')!;
        console.log({ token,subject, lesson_format, location, price });
        dispatch(createCourse({ token,subject, lesson_format, location, price }));
    }

    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };

    return (
        <>
            <Navbar/>
            <Form form={form} style={{textAlign: "center", margin: "100px"}}>
                <Form.Item name="subject">
                <Select

                    defaultValue="Matematica"
                    style={{ width: "300px" , height:"40px"}}
                    onChange={handleChange}
                    options={[
                        {
                        value: '1',
                        label: 'Matematica',
                        },
                        {
                        value: '2',
                        label: 'Engleza',
                        },
                        {
                        value: '3',
                        label: 'Franceza',
                        },
                    ]}
                />

                </Form.Item>
                <Form.Item name="lesson_format">
                <Select
                    defaultValue="Online"
                    style={{ width: "300px" , height:"40px"}}
                    onChange={handleChange}
                    options={[
                        {
                        value: '1',
                        label: 'Online',
                        },
                        {
                        value: '2',
                        label: 'Offline',
                        },
                    ]}
                />

                </Form.Item>
                <Form.Item name="location">
                    <Input  style={{width: "300px", backgroundColor:"white", height:"40px", border:"0"}} name="location" placeholder="   Oras"/>
                </Form.Item>
                <Form.Item name="price">
                    <InputNumber style={{width: "300px"}} name="price" placeholder="Pret (pe ora)"/>
                </Form.Item>
                <Form.Item>
                     <Button type="primary" danger style={{width: "300px", height:"40px"}} onClick ={onSubmit}>Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}