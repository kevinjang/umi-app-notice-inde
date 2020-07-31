import { List, Tabs, Avatar } from 'antd'
const { TabPane } = Tabs
const NoticeList = ({ data, onClick, ...restProps }) => {
    return <div>
        <List
                dataSource={data}
                renderItem={(item, i) => {
                    const leftIcon = item.avatar ? (
                        typeof item.avatar === 'string' ? (
                            <Avatar src={item.avatar}></Avatar>
                        ) : (
                                <span>{item.avatar}</span>
                            )
                    ) : null;

                    return (
                        <List.Item
                            key={item.key || i}
                            onClick={() => onClick && onClick(item)}>
                            <List.Item.Meta
                                avatar={leftIcon}
                                title={
                                    <div>
                                        {item.title}
                                        <div>{item.extra}</div>
                                    </div>
                                }
                                description={
                                    <div>
                                        <div>{item.description}</div>
                                        <div>{item.datetime}</div>
                                    </div>
                                }>

                            </List.Item.Meta>
                        </List.Item>
                    )
                }}>
                {/* <List.Item>
                    <List.Item.Meta title={"独立回忆写Notice"} description={"来一遍"} ></List.Item.Meta>
                </List.Item> */}
            </List>
    </div>
}

export default NoticeList;