import React,{Component} from 'react';
import { Layout, Menu,} from 'antd';
import Table from '../components/Table.jsx'

const { Header, Content} = Layout;

class Lay extends Component {
    constructor(props){
      super(props)
      this.props=props
    }
    render() {
        return(
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">查看</Menu.Item>
                    <Menu.Item key="2">修改</Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        Content
                        <Table />
                    </div>
                </Content>
          </Layout>
        )
    }
  }
  export default Lay;