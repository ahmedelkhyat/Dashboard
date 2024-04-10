import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import "react-circular-progressbar/dist/styles.css";
import styles from "./featured.module.css";

function Featured() {
  const percentage = 70;

  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className={styles.bottom}>
        <div className={styles["featured-chart"]}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
          />
        </div>
        <p className={styles.title}>Total sales made today</p>
        <p className={styles.amount}>$420</p>
        <p className={styles.description}>
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className={styles.summary}>
          <div className={styles.item}>
            <div className={styles["item-title"]}>Target</div>
            <div className={`${styles["item-result"]} ${styles.negative}`}>
              <KeyboardArrowDownIcon fontSize="small" />
              <div className={styles["item-amount"]}>$12.4k</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles["item-title"]}>Last Week</div>
            <div className={`${styles["item-result"]} ${styles.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className={styles["item-amount"]}>$12.4k</div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles["item-title"]}>Last Month</div>
            <div className={`${styles["item-result"]} ${styles.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className={styles["item-amount"]}>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
