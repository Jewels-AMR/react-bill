// 账单列表相关 store
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: "bill", // 命名空间
  // 数据状态
  initialState: {
    billList: [], // 账单列表
  },
  reducers: {
    setBillList(state, action) {
      // 设置账单列表
      state.billList = action.payload;
    }
  }
}
)

// 编写异步操作
const getBillList = () => { 
  return async (dispatch) => {
    const res = await axios.get("http://localhost:3001/ka")
    dispatch(setBillList(res.data));
  };
}

const { setBillList } = billStore.actions; // 导出 action
export { getBillList }; // 导出 action
export default billStore.reducer; // 导出 reducer
