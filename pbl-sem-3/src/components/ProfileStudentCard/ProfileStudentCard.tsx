import { DeleteFilled, StarFilled } from '@ant-design/icons';
import { Button, Card, Col, Rate, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { TutorCard } from '../../redux-toolkit/slices/catalogSlice/catalogSlice';
import "./ProfileStudentCard.css"

export function ProfileStudentCard(){
  const {tutorsArray} = useAppSelector((state) => ({...state.tutorCard}));

  return(<>
  {tutorsArray.map(({tutorImage, tutorName, tutorSubject, id, format, rating, description, price}: TutorCard) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={tutorImage} />}
  >
  <Meta title={tutorName} description={tutorSubject} />
  <Rate disabled defaultValue={2} />

    <Row>
        <Col span={18} ><Button danger type='primary' className="contacteazaButton">Contactează</Button></Col>
        <Col span={6} className="trashButton"><Button><DeleteFilled /></Button></Col>
    </Row>
  </Card>
  ))}
</>)
}