import { Col, Form, InputNumber, Pagination, RadioChangeEvent, Row, Slider } from 'antd';
import { Space, Input, Button, Card, Layout, Radio  } from "antd";
import { StarFilled } from "@ant-design/icons";
import React, { useEffect, useState } from 'react';
import Meta from "antd/lib/card/Meta";
import Navbar from "../../components/Navbar/Navbar";
import "./Catalog.css"
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux-toolkit/hooks/hooks';
import { displayCatalog, getLocation, getSubject, getFormat, getMin, getMax } from '../../redux-toolkit/slices/catalogSlice/catalogSlice';
import { useForm } from 'antd/lib/form/Form';

const { Header, Footer, Sider, Content } = Layout;


export function Catalog(){
    const dispatch = useAppDispatch();
    const {query} = useAppSelector((state) => ({...state.catalog}))
    const [value, setValue] = useState("");
    const [formatValue, setFormat] = useState("");
    const [form] = useForm();
    const[maxValue, setMax] = useState(1);
    const[minValue, setMin] = useState(1);
    let subject = "", lesson_format = "", location = "", min = "", max = "";
    const onChangeSubject = (e: RadioChangeEvent) => {
        setValue(e.target.value); 
        dispatch(getSubject(e.target.value));

    };

  
    const onChangeFormat = (e: RadioChangeEvent) =>{
        setFormat(e.target.value);
        dispatch(getFormat(e.target.value));
    }


    const onSaveLocation = async() => {
        const location =  await form.getFieldValue("location"); 
        console.log(location);
        dispatch(getLocation(location));
    }

    const onChangeMin = (newValue:0 | 100 | 1000 | null) => {
        console.log(String(newValue));
        dispatch(getMin(newValue!.toString()));
    }
    const onChangeMax = (newValue:0 | 300 | 1000| null ) => {
        console.log(String(newValue));
        dispatch(getMax(newValue!.toString()));
    }
    const submitFilters = () => {
        console.log("I submitted filters");
        dispatch(displayCatalog({subject: query.subject,lesson_format: query.lesson_format, location:query.location,min:query.min,max: query.max}));
    }
    useEffect(() => {
        dispatch(displayCatalog({subject: "",lesson_format: "", location:"",min:"0",max: "900"}));
    }, [])

    
    
    return(
        <div className="catalog">
            <Navbar />
            <Layout style={{marginTop :"50px"}}>
                <Sider className="catalogSider" width={400}>
                    <h1 className='filtreText'>Filtreaz&#259;:</h1>
                    <h2 className='filtreSubText'>Materie:</h2>
                    <Radio.Group onChange={onChangeSubject} value={value} name="Subjects">
                    <Space direction="vertical">
                        <Radio value={""} className="filtreRadio">Toate Subiecte</Radio>
                        <Radio value={"1"} className="filtreRadio">Matematica</Radio>
                        <Radio value={"2"} className="filtreRadio">Engleza</Radio>
                        <Radio value={"3"} className="filtreRadio">Franceza</Radio>
                    </Space>
                    </Radio.Group>
                   
                    <h2>Format:</h2>
                    <Radio.Group onChange={onChangeFormat} value={formatValue} defaultValue={0}>
                    <Space direction="vertical">
                        <Radio value={""} className="filtreRadio">Nu conteaza</Radio>
                        <Radio value={"1"} className="filtreRadio">Online</Radio>
                        <Radio value={"2"} className="filtreRadio">
                        Offline
                        {formatValue === "2"?<>
                            <br /> 
                            <Form form ={form}>
                                <Form.Item
                                name = "location">
                                    
                                    <Input placeholder="Loca&#539;ia..." style={{ width: "200px"}} /> 
                                </Form.Item>
                                <Form.Item>
                                    <Button onClick={onSaveLocation} danger type="primary">Salveaza</Button>
                                </Form.Item>
                            </Form>
                           
                            
                            </> : null}
                        </Radio>
                    </Space>
                    </Radio.Group>
                    <h2>Price:</h2>
                    <InputNumber addonBefore="MIN " name='min' min={0} max={1000} defaultValue={100} step={10} onChange={onChangeMin} style={{ width: "200px" ,margin: '0 10px 10px 0' }}/>
                    <InputNumber addonBefore="MAX " name='max' min={0} max={1000} defaultValue={300} step={10} onChange={onChangeMax} style={{ width: "200px",margin: '0 10px 0 0' }}/>
                    {/* <Slider style={{ width: "200px"}} step={10}  range min={50} max={1000} onChange={onChangePrice} defaultValue={[100, 200]} tooltip={{ open:false}} /> */}
                    <Button style={{textAlign:"center", width: "200px", marginBottom: "100px", marginTop: "10px"}} type="primary" danger onClick={submitFilters}>Filter</Button>
                </Sider>    

                <Content className='catalogContent'>
                    
                   <CatalogCard/>
              
                    

                    {/* <Pagination className='catalogPagination' size='default' defaultCurrent={1} total={50}/> */}
                </Content>  
            </Layout>
            
            
        </div>
    )
}