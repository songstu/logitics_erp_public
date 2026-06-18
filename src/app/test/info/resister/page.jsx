"use client";
import s from "./page.module.css";
import Nav from "@/component/common/Nav.jsx";
import Aside from "@/component/common/Aside.jsx";
import Table from "@/component/common/Table.jsx";
import Modal1 from "@/component/common/Modal1";
import { useState, useEffect, useRef } from "react";
import baseApi from "@/api/baseApi";

export default function Page() {
  const [isOn, setIsOn] = useState(false);

  const [keyword, setKeyword] = useState();
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get("/api/v1/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: keyword || "",
        page: 1,
      },
    });

    setEmployeeList(res.data.data);

    console.log(res.data.data);
  };

  const crP = {
    crPNav: "인사관리",
    crPAsi: "인사정보등록",
    crPTable: "인사정보등록",
    crPInfo: "직원의 인사정보를 등록하고 관리합니다.",
    newResist: "신규등록",
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <Modal1 isOn={isOn} onClose={() => setIsOn(false)} />
      <div className={s.pageWrap}>
        <Nav
          menu={[
            { classifyEn: "departmentTap", textKo: "인사관리" },
            { classifyEn: "attendanceTap", textKo: "근태관리" },
            { classifyEn: "payrollTap", textKo: "급여관리" },
            { classifyEn: "dailyWorkerTap", textKo: "일용직관리" },
          ]}
          crP={crP}
        />

        <div className={s.body}>
          <Aside
            dummy={[
              {
                menu1: { icon: "/User.svg", menu1Name: "인사정보" },
                menu2: [
                  "인사정보등록",
                  "사원명수/인사기록카드",
                  "인사발령등록",
                ],
              },
              {
                menu1: { icon: "/HeartHandshake.svg", menu1Name: "경조비관리" },
                menu2: ["경조비신청", "경조비신청현황"],
              },
              {
                menu1: { icon: "/FileText.svg", menu1Name: "증명서관리" },
                menu2: ["증명서발급"],
              },
            ]}
            crP={crP}
          />
          <Table
            breadcrumb={["인사관리", "인사정보", "인사정보등록"]}
            crP={crP}
            isOn={isOn}
            tableList={employeeList}
            onOpen={() => setIsOn(true)}
          />
        </div>
      </div>
    </>
  );
}
// http://localhost:33000/swagger-ui/index.html
