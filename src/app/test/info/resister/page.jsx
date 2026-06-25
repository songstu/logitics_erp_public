"use client";
import s from "./page.module.css";
import Nav from "@/component/common/Nav.jsx";
import Aside from "@/component/common/Aside.jsx";
// import Table from "@/component/common/Table.jsx";
import Modal1 from "@/component/common/Modal1";
import { useState, useEffect, useRef } from "react";
import baseApi from "@/api/baseApi";
import MainContent from "@/component/common/MainContent";
import SearchCard from "@/component/common/SearchCard";
import TableCard from "@/component/common/TableCard";

export default function Page() {
  const [modal1IsOn, setModal1IsOn] = useState(false);

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
      <Modal1 isOn={modal1IsOn} onClose={() => setModal1IsOn(false)} />
      <div className={s.pageWrap}>
        <Nav crP={crP} />

        <div className={s.body}>
          <Aside crP={crP} />
          <MainContent
            breadcrumb={["인사관리", "인사정보", "인사정보등록"]}
            crP={crP}
            contents1={<SearchCard />}
            contents2={
              <TableCard
                columns={[
                  { classifyEn: "no", textKo: "NO" },
                  { classifyEn: "employeeNo", textKo: "사원번호" },
                  { classifyEn: "name", textKo: "성명" },
                  { classifyEn: "department", textKo: "부서" },
                  { classifyEn: "position", textKo: "직급" },
                  { classifyEn: "hireDate", textKo: "입사일" },
                  { classifyEn: "phone", textKo: "연락처" },
                  { classifyEn: "email", textKo: "이메일" },
                  { classifyEn: "employeeStatusCode", textKo: "재직상태" },
                  { classifyEn: "put", textKo: "관리" },
                ]}
                employees={employeeList}
                isOn={modal1IsOn}
                onOpen={() => setModal1IsOn(true)}
              />
            }
          />
        </div>
      </div>
    </>
  );
}
// http://localhost:33000/swagger-ui/index.html
