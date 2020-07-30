import { Spin, Tabs, Badge } from 'antd'
import NoticeList from './NoticeList'
import React from 'react'
import HeaderDropdown from '../HeaderDropdown'
import { BellOutlined } from '@ant-design/icons'

const { TabPane } = Tabs;
const NoticeIcon = (props) => {


    const getNotificationBox = () => {
        const {
            children,
            loading,
            onClear,
            onTabChange,
            onItemClick,
            onViewMore,
            clearText,
            viewMoreText
        } = props;

        if (!children) {
            return null;
        }
        const panes = [];
        React.Children.forEach(children, child => {
            if (!child)
                return;
            const {list, title,count,tabKey, showClear,showViewMore} = child.props;
            const len = list && list.length ? list.length: 0;
            const msgCount = count || count === 0 ? count: len;
            const tabTitle = msgCount > 0? `${title} (${msgCount})`: title;
            panes.push(
                <TabPane tab={tabTitle} key={tabKey} >
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

    const {count} = props;

    const trigger = (
        <span>
            <Badge count={count} > {<BellOutlined ></BellOutlined>}</Badge>
        </span>
    );

    return <HeaderDropdown trigger={['click']} overlay={getNotificationBox()}>
       {trigger}
    </HeaderDropdown>
}

NoticeIcon.Tab = NoticeList;

export default NoticeIcon;