import { Spin, Tabs } from 'antd'
import NoticeList from './NoticeList'
import React from 'react'
import HeaderDropdown from '../HeaderDropdown'
import { BellOutlined } from '@ant-design/icons'

const { TabPane } = Tabs;
const NoticeIcon = (props) => {

    const { children, loading } = props;
    const getNotificationBox = () => {
        const panes = [];
        React.Children.forEach(children, child => {
            panes.push(
                <TabPane key={"tabpane1"} >
                    <NoticeList {...child.props}>极大四六级</NoticeList>
                </TabPane>
            )
        })

        console.log('noticeicon loading:', loading);
        return <Spin delay={300} spinning={loading}>
            <Tabs>
                {panes}
            </Tabs>
        </Spin>;
    }

    return <HeaderDropdown trigger={['click']} overlay={getNotificationBox()}>
        {<BellOutlined ></BellOutlined>}
    </HeaderDropdown>
}

NoticeIcon.Tab = NoticeList;

export default NoticeIcon;