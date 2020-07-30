import HeaderDropdown from '../HeaderDropdown/'
import NoticeIcon from '../NoticeIcon'
import React, { useEffect } from 'react'

import { connect } from 'umi'
// console.log('connect:', connect)

class GlobalHeaderDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'global/fetchNotices'
      })
    }
  }

  render() {
    const { fetchingNotices } = this.props;
    return <HeaderDropdown trigger={['click']} {...this.props} >
      <NoticeIcon loading={fetchingNotices}>
        <NoticeIcon.Tab title="你猜" key={"noticeicon.tab1"}>
          Tab1
        </NoticeIcon.Tab>
      </NoticeIcon>
    </HeaderDropdown>
  }
}

export default connect(({ global, loading }) => {
  console.log('loading:', loading);
  console.log('niv global:', global)
  return {
    fetchingNotices: loading.effects['global/fetchNotices']
  }
})(GlobalHeaderDropdown)