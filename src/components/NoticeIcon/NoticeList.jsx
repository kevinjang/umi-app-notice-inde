import { List, Tabs, Avatar } from 'antd'
const { TabPane } = Tabs
const NoticeList = ({
    data = [],
    onClick,
    onClear,
    title,
    onViewMore,
    emptyText,
    showClear = true,
    clearText,
    viewMoreText,
    showViewMore = false
}) => {
    if (!data || data.length === 0) {
        return (
            <div>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg" alt="not found" />
                <div>{emptyText}</div>
            </div>
        )
    }
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
        </List>
        <div>
            {showClear? (
                <div onClick={onClear}>
                    {clearText} {title}
                </div>
            ): null}
            {showViewMore?(
                <div onClick={e=>{
                    if(onViewMore){
                        onViewMore(e)
                    }
                }}>
                    {viewMoreText}
                </div>
            ): null}
        </div>
    </div>
}

export default NoticeList;