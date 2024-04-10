import styles from "./home.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import MainTable from "../../components/mainTable/MainTable";

function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles["home-container"]}>
        <Navbar />
        <div className={styles.widgets}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className={styles.charts}>
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className={styles["list-container"]}>
          <div className={styles["list-title"]}>Latest Transactions</div>
          <MainTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
