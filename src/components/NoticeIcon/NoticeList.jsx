import { List, Tabs } from 'antd'
const { TabPane } = Tabs
const NoticeList = ({ ...restProps }) => {
    return <div>
        <TabPane {...restProps}>
            <List>
                <List.Item>
                    <List.Item.Meta title={"独立回忆写Notice"} description={"来一遍"} ></List.Item.Meta>
                </List.Item>
            </List>
        </TabPane>
    </div>
}

export default NoticeList;