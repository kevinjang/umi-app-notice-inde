import { queryNotices } from "@/services/user"

const GlobalModel = {
    namespace: 'global',
    state: {
        collapsed: false,
        notices: []
    },
    effects: {
        *fetchNotices(_, { call, put }) {
            // yield call()
            const data = yield call(queryNotices);
            yield put({
                type: 'saveNotices',
                payload: data
            })
        }
    },
    reducers: {
        'saveNotices': (state, { payload }) => {
            // const data = [...payload]
            // console.log('saveNotices:', data)
            return {
                collapsed: false,
                ...state,
                notices: payload
            }
        }
    }
}
export default GlobalModel