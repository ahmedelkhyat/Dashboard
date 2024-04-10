import styles from "./list.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

function List() {
  return (
    <div className={styles.list}>
      <Sidebar />
      <div className={styles["list-container"]}>
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default List;
