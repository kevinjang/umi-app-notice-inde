import styles from './index.css';
import { Dropdown, Button, Tabs, Menu } from 'antd'
import { BellOutlined } from '@ant-design/icons'

import GlobalHeaderDropdown from '../components/GlobalHeader/NoticeIconView'

export default function () {
  return (
    <div className={styles.normal}>
      {/* <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link"  onClick={e => e.preventDefault()}>
          Click me 
        </a>
      </Dropdown> */}
      <GlobalHeaderDropdown >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {/* Click me  */}
          {<BellOutlined />}
        </a>
      </GlobalHeaderDropdown>
    </div>
  );
}
