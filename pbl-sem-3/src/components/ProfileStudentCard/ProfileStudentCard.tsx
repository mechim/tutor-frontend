import { DeleteFilled, StarFilled } from '@ant-design/icons';
import { Button, Card, Col, Rate, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { CourseCard } from '../../redux-toolkit/slices/catalogSlice/catalogSlice';
import "./ProfileStudentCard.css"

export function ProfileStudentCard(){
  const {tutorsArray} = useAppSelector((state: { tutorCard: any; }) => ({...state.tutorCard}));

  return(<>
  {tutorsArray.map(({profile, price, subject}: CourseCard) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="" />}
  >
  <Meta title= {profile.first_name + " " +profile.last_name} description={subject.subject_name} />
  <Rate disabled defaultValue={2} />

    <Row>
        <Col span={18} ><Button danger type='primary' className="contacteazaButton">Contactează</Button></Col>
        <Col span={6} className="trashButton"><Button><DeleteFilled /></Button></Col>
    </Row>
  </Card>
  ))}
</>)
}