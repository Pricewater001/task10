import React from "react";
import { NumberStatus } from "./components/NumberStatus";
import Box from "./components/Box";
import styles from "./main.module.css";
import Details from "./components/Details";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import Table from "./components/Table";
import MapChart from "./components/MapChart";
import Image from "next/image";
import {column1 ,data1,column2 , data2 } from "./tabledata";



const MainPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 m-2 ">
      <div className={styles["admin-info"]}>
        <Box>
          <NumberStatus
            title="Mohammed AlNsour"
            description="Admin"
            primary={true}
          />
          <Details assestNumber="324" lastLogin="23 Nov" />
        </Box>
      </div>
      <div className={styles["v-divider"]}>
        <Box>
          <NumberStatus
            number="25"
            title="New Accounts Created"
            description="Last update on 12/06/2022"
            primary={true}
          />

          <NumberStatus
            number="5%"
            title="Increased Pageviews"
            description="Last update on 12/06/2022"
            primary={true}
          />
        </Box>
        <Box>
          <NumberStatus
            number="62"
            title="Tasks Pending"
            description="23 overdue"
          />

          <NumberStatus
            number="13"
            title="New Notifications"
            description="23 overdue"
          />
          <NumberStatus
            number="21"
            title="New Requests"
            description="Since your last login"
          />
        </Box>
      </div>
      <div className={styles["chart-info"]}>
        <LineChart />
      </div>

      <div className={styles["map-container"]}>
        <div className={styles["map-info"]}>
          <Box>
            <div className={styles["map-upper"]}>
              <span>Portal Usage</span>
              <MapChart />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <NumberStatus
                number="2%"
                title="Worldwide Increase"
                description="Last update on 12/06/2022"
                primary={true}
                direction="column"
              />
              <NumberStatus
                number="8%"
                title="Domestic Increase"
                description="Last update on 12/06/2022"
                primary={true}
                direction="column"
              />
              <h1 className={styles["map-span"]}>View Downloads</h1>
            </div>
          </Box>
        </div>
        <div>
          <div className={styles["upload-container"]}>
            <Box>
              <div className={styles["assets-container"]}>
                <div className={styles["assets-info"]}>
                  <h3 className={styles["assets-title"]}>Your Assets</h3>
                  <h4 className={styles["assets-description"]}>
                    13458 Total Assets on Portal
                  </h4>
                  <BarChart />
                </div>
                <div className={styles["assets-Counter"]}>
                  <h2>2870</h2>
                  <h3>Uploaded to Date</h3>
                </div>
                <div className={styles["upload-assest"]}>
                  <Image
                    src="/icons8-upload_to_cloud.svg"
                    alt="Update Logo"
                    width={54}
                    height={45}
                    priority
                  />
                  <h3>Drag and drop your files here or</h3>
                  <input type="file" id="actual-btn" hidden />

                  <label htmlFor="actual-btn">Browser</label>
                </div>
              </div>
            </Box>
          </div>
          <div className={styles["assets2-info"]}>
            <Box>
              <div className={styles["display-assest"]}>
                <span>image crusal</span>
                <h4>+13</h4>
                <h4>Assets pending details</h4>
                <h4>View Assets</h4>
              </div>
            </Box>
          </div>
        </div>
      </div>
      <div className={styles["table-box-container"]}>
        <Box>
          <div className={styles["table-div"]}>
            <div className={styles["table-title"]}>
              <h5>Most Searched Keywords (Global - Top5)</h5>
              <input type="text" placeholder="Last month" />
            </div>
            <Table dataTable={data1} columnTable={column1}  sign={true}  />
          </div>
        </Box>
        <Box>
          <div className={styles["table-div"]}>
          <div className={styles["table-title"]}>
              <h5>Most Downloaded Assets</h5>
              <input type="text" placeholder="Past 6 months" />
            </div>
          <Table  dataTable={data2} columnTable={column2}/>
          </div>
        </Box>
       
      </div>
    </main>
  );
};

export default MainPage;
