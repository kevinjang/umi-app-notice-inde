export default {
    namespace: 'global',
    state: {
        collapsed: false,
        notices: []
    },
    effects: {
        *fetchNotices(_, { call, put }) {
            // yield call()
        }
    },
    reducers: {
        'saveNotices': () => { }
    }
}