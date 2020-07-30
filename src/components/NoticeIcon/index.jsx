import { Spin, Tabs } from 'antd'
import NoticeList from './NoticeList'
import React from 'react'

const { TabPane } = Tabs;
const NoticeIcon = (props) => {

    const { children } = props;
    const getNotificationBox = () => {
        const panes = [];
        React.Children.forEach(children, child => {
            panes.push(
                <TabPane key={"tabpane1"} >
                    <NoticeList {...child.props}></NoticeList>
                </TabPane>
            )
        })

        return panes;
    }

    return <Spin delay={300}>
        <Tabs>
            {getNotificationBox()}
        </Tabs>
    </Spin>
}

NoticeIcon.Tab = NoticeList;

export default NoticeIcon;