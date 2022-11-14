import { Col, InputNumber, Pagination, RadioChangeEvent, Row, Slider } from 'antd';
import { Space, Input, Button, Card, Layout, Radio  } from "antd";
import { StarFilled } from "@ant-design/icons";
import React, { useState } from 'react';


import Meta from "antd/lib/card/Meta";
import Navbar from "../../components/Navbar/Navbar";
import "./Catalog.css"
import { CatalogCard } from '../../components/CatalogCard/CatalogCard';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

export function Catalog(){

    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return(
        <div className="catalog">
            <Navbar />
            <Layout style={{marginTop :"50px"}}>
                <Sider className="catalogSider" width={400}>
                    <h1 className='filtreText'>Filtreaz&#259;:</h1>
                    <h2 className='filtreSubText'>Materie:</h2>
                    <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1} className="filtreRadio">Matematica</Radio>
                        <Radio value={2} className="filtreRadio">Romana</Radio>
                        <Radio value={3} className="filtreRadio">Engleza</Radio>
                        <Radio value={4} className="filtreRadio">Franceza</Radio>
                        <Radio value={5} className="filtreRadio">Fizica</Radio>
                        <Radio value={6} className="filtreRadio">Informatica</Radio>
                        <Radio value={7} className="filtreRadio">Biologia</Radio>
                        <Radio value={8} className="filtreRadio">Istoria</Radio>
                        <Radio value={9} className="filtreRadio">Geografia</Radio>
                    </Space>
                    </Radio.Group>
                    <h2>Gen:</h2>
                    <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={10} className="filtreRadio">Feminin</Radio>
                        <Radio value={11} className="filtreRadio">Masculin</Radio>
                    </Space>
                    </Radio.Group>
                    <h2>Format:</h2>
                    <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={12} className="filtreRadio">Online</Radio>
                        <Radio value={13} className="filtreRadio">
                        Offline
                        {value === 13? <Input placeholder="Loca&#539;ia..." style={{ width: 100, marginLeft: 10 }} /> : null}
                        </Radio>
                        <Link to ="/profileStudent" ><Button  className="navbar_buttons"><b>profil student</b></Button></Link>
                        <Link to ="/profileTutor" ><Button  className="navbar_buttons"><b>profil tutor</b></Button></Link>
                    </Space>
                    </Radio.Group>
                    
                </Sider>    

                <Content className='catalogContent'>
                    
                   <CatalogCard/>
              
                    

                    <Pagination className='catalogPagination' size='default' defaultCurrent={1} total={50}/>
                </Content>  
            </Layout>
            
            
        </div>
    )
}