import HeaderDropdown from '../HeaderDropdown/'
import { Menu } from 'antd'
import NoticeIcon from '../NoticeIcon'

import { connect } from 'react-redux'

const GlobalHeaderDropdown = ({ fetchingNotices, ...restProps }) => {
  console.log('GlobalHeaderDropdown fetchingNotices:', fetchingNotices)
  return <HeaderDropdown trigger={['click']} {...restProps} >
    <NoticeIcon>
      <NoticeIcon.Tab key={"noticeicon.tab1"}>
        Tab1
            </NoticeIcon.Tab>
    </NoticeIcon>
  </HeaderDropdown>
}
export default connect(({ global, loading }) => {
  console.log('loading:', loading);
  console.log('niv global:', global)
  return {
    fetchingNotices: loading.effects['global/fetchNotices']
  }
})(GlobalHeaderDropdown)