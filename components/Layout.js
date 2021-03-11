// import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import TopHeader from "./TopHeader";
function Layout({ children }) {
  return (
    <>
      <TopHeader />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
