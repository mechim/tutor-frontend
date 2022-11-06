import { Avatar, Card, Layout } from "antd";
import Meta from "antd/lib/card/Meta";
import Navbar from "../../components/Navbar/Navbar";
import "./Catalog.css"

const { Header, Footer, Sider, Content } = Layout;

export function Catalog(){
    return(
        <div className="catalog">
            <Navbar />
            <Layout>
                <Sider>

                </Sider>
                <Content>
                    <Card>
                        <Meta 
                            avatar= {<Avatar size={200} shape="square" src ="https://capecoraltech.edu/wp-content/uploads/2016/01/tutor-8-3.jpg"/>}
                            title = {<h1>John Doe</h1>}
                            style ={{width: 200}}
                            
                        />
                        
                    </Card>
                </Content>
            </Layout>
            
            
        </div>
    )
}