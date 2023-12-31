import styles from "./HeaderLayout.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const HeaderLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.root}>
        <div className={styles.root_tabs}>
          <h1
            className={styles.root_tabs_item}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </h1>
          <h1
            className={styles.root_tabs_item}
            onClick={() => {
              navigate("/tabs");
            }}
          >
            Tabs
          </h1>
        </div>
        <img src={logo} alt="logo" width={150} height={80} />
      </div>

      <Outlet />
    </>
  );
};

export default HeaderLayout;
