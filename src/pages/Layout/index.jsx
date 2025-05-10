import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/moules/billStore";
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
};
export default Layout;