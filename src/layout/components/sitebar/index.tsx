import { Col, Layout, Row } from "antd";
import Logo from "../../../conponents/logo";
import MyMenu from "../../../conponents/menu";
import UserCard from "../../../conponents/userCard";
const { Sider } = Layout;
const SideBar = () => {
  return (
    <Sider>
      <Row>
        <Logo />
        <MyMenu />
        <UserCard />
      </Row>
    </Sider>
  );
};

export default SideBar;
