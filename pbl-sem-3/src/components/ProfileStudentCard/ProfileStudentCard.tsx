import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';

export function ProfileStudentCard(){
    return(<>

  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
</>)
}