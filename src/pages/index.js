import styles from './index.css';
import { Dropdown, Button, Tabs, Menu } from 'antd'
import { ArrowDownOutline, DownOutlined } from '@ant-design/icons'

import GlobalHeaderDropdown from '../components/GlobalHeader/NoticeIconView'

export default function () {
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
  return (
    <div className={styles.normal}>
      {/* <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link"  onClick={e => e.preventDefault()}>
          Click me 
        </a>
      </Dropdown> */}
      <GlobalHeaderDropdown overlay={menu} trigger={['click']} >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Click me
        </a>
      </GlobalHeaderDropdown>
    </div>
  );
}
