import styles from "./single.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import singleUser from "../../images/single-user.png";
import Chart from "../../components/chart/Chart";
import MainTable from "../../components/mainTable/MainTable";

function Single() {
  return (
    <div className={styles.single}>
      <Sidebar />
      <div className={styles["single-container"]}>
        <Navbar />
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["edit-button"]}>Edit</div>
            <p className={styles.title}>Information</p>
            <div className={styles.item}>
              <img
                src={singleUser}
                alt="Single User Avatar"
                className={styles["item-image"]}
              />
              <div className={styles.details}>
                <h1 className={styles["item-title"]}>Jane Doe</h1>
                <div className={styles["details-item"]}>
                  <span className={styles["item-key"]}>Email:</span>
                  <span className={styles["item-value"]}>
                    janedoe@gmail.com
                  </span>
                </div>
                <div className={styles["details-item"]}>
                  <span className={styles["item-key"]}>Phone:</span>
                  <span className={styles["item-value"]}>+1 2345 67 89</span>
                </div>
                <div className={styles["details-item"]}>
                  <span className={styles["item-key"]}>Address:</span>
                  <span className={styles["item-value"]}>
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className={styles["details-item"]}>
                  <span className={styles["item-key"]}>Country:</span>
                  <span className={styles["item-value"]}>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Chart title="User Spending (Last 6 Months)" aspect={3 / 1} />
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.title}>Last Transactions</p>
          <MainTable />
        </div>
      </div>
    </div>
  );
}

export default Single;
