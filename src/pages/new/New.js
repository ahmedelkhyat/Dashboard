import { useState } from "react";
import styles from "./new.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import newImage from "../../images/new-image.jpg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function New({ title, inputs }) {
  const [file, setFile] = useState("");
  return (
    <div className={styles.new}>
      <Sidebar />
      <div className={styles["new-container"]}>
        <Navbar />
        <div className={styles.top}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <img
              src={file ? URL.createObjectURL(file) : newImage}
              alt="new"
              className={styles.image}
            />
          </div>
          <div className={styles.right}>
            <form>
              <div className={styles["form-input"]}>
                <label htmlFor="file" className={styles.file}>
                  Image:
                  <DriveFolderUploadOutlinedIcon className={styles.icon} />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className={styles["form-input"]} key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button className={styles["send-button"]}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
