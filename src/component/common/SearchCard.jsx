import { RotateCcw, Search } from "lucide-react";
import s from "./SearchCard.module.css";
import { useState } from "react";
import baseApi from "@/api/baseApi";

export default function SearchCard() {
  const [keyword, setKeyword] = useState({});

  const getEmployees = async () => {
    const res = await baseApi.get("/api/v1/employees", {
      params: {
        keyword: keyword || "",
        page: 1,
      },
    });
    console.log(res.data.data);
  };

  // const [employees, setEmployees] = useState([])

  // useEffect(() => {

  //     const getEmployee = async () => {
  //         const response = await baseApi.get("/api/v1/employees", {
  //         params: {
  //             keyword: keyword || '',
  //             page:1
  //         }});
  //         setEmployees(response.data.data);
  //     }

  //     getEmployee();

  // }, []);

  return (
    <div className={s.searchCard}>
      <div className={s.searchTitleRow}>
        <Search size={14} color="#1B3A6B" />
        <h4>검색조건</h4>
      </div>
      <fieldset className={s.searchFields}>
        <div className={s.employeeNo}>
          <label htmlFor="employee_no">사원번호</label>
          <input
            type="text"
            id="employee_no"
            placeholder="전체"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className={s.department}>
          <label htmlFor="department">부서</label>
          <select name="department" id="department">
            <option value="#">전체</option>
            <option value="HR">인사팀</option>
            <option value="MS">경영지원팀</option>
            <option value="Dev">개발팀</option>
            <option value="Sal">영업팀</option>
          </select>
        </div>
        <div className={s.position}>
          <label htmlFor="position">직급</label>
          <select name="position" id="position">
            <option value="#">전체</option>
            <option value="SM">과장</option>
            <option value="AM">팀장</option>
            <option value="SS">대리</option>
            <option value="Stf">사원</option>
          </select>
        </div>
        <div className={s.employeeStatus}>
          <label htmlFor="employee-status-code">재직상태</label>
          <select name="employeeStatus" id="employee-status-code">
            <option value="working">재직중</option>
            <option value="onLeave">휴직중</option>
            <option value="retreat">도비는 자유에요</option>
          </select>
        </div>
        <button className={s.searchBtn} onClick={() => getEmployees()}>
          <Search size={13} color="#ffffff" />
          <p>조회</p>
        </button>
        <button className={s.resetBtn}>
          <RotateCcw size={13} color="#6B7280" style={{ flexShrink: 0 }} />
          <p>초기화</p>
        </button>
      </fieldset>
    </div>
  );
}
