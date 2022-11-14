import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";
import { TutorCard } from '../../redux-toolkit/slices/catalogSlice/catalogSlice';

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
  </Card>
  ))}
</>)
}