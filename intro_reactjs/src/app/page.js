import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div id="locationList" class="locationList">
      <div>
        <h2>Browse by Location</h2>
        <div class="list_location">
          <ul id="locationList"></ul>
        </div>
      </div>
    </div>
    </div>
  );
}
