import billReducer from './moules/billStore'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        bill: billReducer, // 账单列表相关 store
    }
})
export default store