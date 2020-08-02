import HeaderDropdown from '../HeaderDropdown/'
import NoticeIcon from '../NoticeIcon'
import React, { useEffect } from 'react'


import { connect } from 'umi'
import { Tag } from 'antd';
import groupBy from 'lodash/groupBy'
import moment from 'moment'
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

  getNoticeData = () => {
    const { notices = [] } = this.props;
    if (!notices || notices.length === 0 || !Array.isArray(notices)) {
      return {};
    }

    const newNotices = notices.map(notice => {
      const newNotice = { ...notice };

      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }

      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }

      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold'
        }[newNotice.status];
        newNotice.extra = (
          <Tag color={color} style={{
            marginRight: 0
          }}>
            {newNotice.extra}
          </Tag>
        );
      }

      return newNotice;
    });

    return groupBy(newNotices, 'type');
  }

  getUnreadData = noticeData => {
    const unreadMsg = {};
    Object.keys(noticeData).forEach(key => {
      const value = noticeData[key];

      if (!unreadMsg[key]) {
        unreadMsg[key] = 0;
      }

      if (Array.isArray(value)) {
        unreadMsg[key] = value.filter(item => !item.read).length;
      }
    });

    return unreadMsg;
  }

  render() {
    const { fetchingNotices } = this.props;
    const noticeData = this.getNoticeData();
    const unreadMsg = this.getUnreadData(noticeData);

    console.log('noticedata:', noticeData.notification)
    return (
      <NoticeIcon
        clearText="清空"
        viewMoreText="查看更多"
        loading={fetchingNotices}>
        <NoticeIcon.Tab
          tabKey="notification"
          count={unreadMsg.notification}
          list={noticeData.notification}
          title="通知"
          emptyText="你已查看所有通知"
          showViewMore
        />
        <NoticeIcon.Tab
          tabKey="message"
          count={unreadMsg.message}
          list={noticeData.message}
          title="消息"
          emptyText="没有新消息"
          showViewMore
        />
        <NoticeIcon.Tab
          tabKey="event"
          count={unreadMsg.event}
          list={noticeData.event}
          title="事件"
          emptyText="没有新事件"
          showViewMore
        />
      </NoticeIcon>)
  }
}

export default connect(({ global, loading }) => {
  console.log('loading:', loading);
  console.log('niv global:', global)
  return {
    fetchingNotices: loading.effects['global/fetchNotices'],
    notices: global.notices
  }
})(GlobalHeaderDropdown)