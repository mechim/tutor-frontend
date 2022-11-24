import { Col, InputNumber, Pagination, RadioChangeEvent, Row, Slider } from 'antd';
import { Space, Input, Button, Card, Layout, Radio  } from "antd";
import { StarFilled } from "@ant-design/icons";
import React, { useEffect, useState } from 'react';


import Meta from "antd/lib/card/Meta";
import Navbar from "../../components/Navbar/Navbar";
import "./Catalog.css"
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux-toolkit/hooks/hooks';
import { displayCatalog } from '../../redux-toolkit/slices/catalogSlice/catalogSlice';

const { Header, Footer, Sider, Content } = Layout;

export function Catalog(){
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState(1);

    const onChangeSubject = (e: RadioChangeEvent) => {
        setValue(e.target.value);
        // dispatch(displayCatalog(value));
        // console.log(value);
        
    };

    const onChangeGen = (e: RadioChangeEvent) =>{
        setValue1(e.target.value);
    }

    // useEffect(()=>{
    //     console.log(value);
    //     value && dispatch(displayCatalog());
    // } ,[value])
    useEffect(() => {
        dispatch(displayCatalog());
    })

    
    
    return(
        <div className="catalog">
            <Navbar />
            <Layout style={{marginTop :"50px"}}>
                <Sider className="catalogSider" width={400}>
                    <h1 className='filtreText'>Filtreaz&#259;:</h1>
                    <h2 className='filtreSubText'>Materie:</h2>
                    <Radio.Group onChange={onChangeSubject} value={value} name="Subjects">
                    <Space direction="vertical">
                        <Radio value={"Matematica"} className="filtreRadio">Matematica</Radio>
                        <Radio value={"Romana"} className="filtreRadio">Romana</Radio>
                        <Radio value={"Engleza"} className="filtreRadio">Engleza</Radio>
                        <Radio value={"Franceza"} className="filtreRadio">Franceza</Radio>
                        <Radio value={"Fizica"} className="filtreRadio">Fizica</Radio>
                        <Radio value={"Informatica"} className="filtreRadio">Informatica</Radio>
                        <Radio value={"Biologia"} className="filtreRadio">Biologia</Radio>
                        <Radio value={"Istoria"} className="filtreRadio">Istoria</Radio>
                        <Radio value={"Geografia"} className="filtreRadio">Geografia</Radio>
                    </Space>
                    </Radio.Group>
                    <h2>Gen:</h2>
                    <Radio.Group onChange={onChangeGen} value={value1} name="Gen">
                    <Space direction="vertical">
                        <Radio value={1} className="filtreRadio">Feminin</Radio>
                        <Radio value={2} className="filtreRadio">Masculin</Radio>
                    </Space>
                    </Radio.Group>
                    <h2>Format:</h2>
                    {/* <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={12} className="filtreRadio">Online</Radio>
                        <Radio value={13} className="filtreRadio">
                        Offline
                        {value === 13? <Input placeholder="Loca&#539;ia..." style={{ width: 100, marginLeft: 10 }} /> : null}
                        </Radio>
                        <Link to ="/profileStudent" ><Button  className="navbar_buttons"><b>profil student</b></Button></Link>
                        <Link to ="/profileTutor" ><Button  className="navbar_buttons"><b>profil tutor</b></Button></Link>
                    </Space>
                    </Radio.Group> */}
                    
                </Sider>    

                <Content className='catalogContent'>
                    
                   <CatalogCard/>
              
                    

                    <Pagination className='catalogPagination' size='default' defaultCurrent={1} total={50}/>
                </Content>  
            </Layout>
            
            
        </div>
    )
}