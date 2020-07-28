import HeaderDropdown from '../HeaderDropdown/'
import {Menu} from 'antd'
import NoticeIcon from '../NoticeIcon'

const GlobalHeaderDropdown = ({...restProps})=>{
    
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
      </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  )

    return <HeaderDropdown trigger={['click']} {...restProps} >
        <NoticeIcon>
            <NoticeIcon.Tab key={"noticeicon.tab1"}>
                Tab1
            </NoticeIcon.Tab>
        </NoticeIcon>
    </HeaderDropdown>
}
export default GlobalHeaderDropdown