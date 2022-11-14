import { DeleteFilled, StarFilled } from '@ant-design/icons';
import { Button, Card, Col, Rate, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import "./ProfileStudentCard.css"

export function ProfileStudentCard(){
    return(<>

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <h1 className="tutorName">John Doe</h1>
    <h2 className="tutorSubject">Istoria</h2>
    <Rate disabled defaultValue={2} />

    <Row>
        <Col span={18} ><Button danger type='primary' className="contacteazaButton">Contactează</Button></Col>
        <Col span={6} className="trashButton"><Button><DeleteFilled /></Button></Col>
    </Row>
  </Card>
</>)
}