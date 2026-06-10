import { ChevronLeft, ChevronRight } from "lucide-react";
import s from "./TableCard.module.css";

export default function TableCard({ columns, employees, isOn, onOpen }) {
  // if (!isOn) return null;

  return (
    <div className={s.tableCard}>
      <table>
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th key={index} className={s[item.classifyEn]}>
                {item.textKo}
              </th>
            ))}
            {/* <td>NO</td>
                            <td>사원번호</td>
                            <td>성명</td>
                            <td>부서</td>
                            <td>직급</td>
                            <td>입사일</td>
                            <td>연락처</td>
                            <td>이메일</td>
                            <td>재직상태</td>
                            <td>관리</td> */}
          </tr>
        </thead>
        <tbody>
          {/* {employees.map((item, index) => (
                            <tr key={index}>
                                <td className={s.no}>{index + 1}</td>
                                <td className={s.employeeNo}>{item.employeeNo}</td>
                                <td className={s.name}>{item.name}</td>
                                <td className={`${s.department} ${s[item.department.classifyEn]}`}>{item.department.textKo}</td>
                                <td className={`${s.position} ${s[item.position.classifyEn]}`}>{item.position.textKo}</td>
                                <td className={s.hireDate}>{item.hireDate}</td>
                                <td className={s.phone}>{item.phone}</td>
                                <td className={s.email}>{item.email}</td>
                                <td className={`${s.employeeStatusCode} ${s[item.employeeStatusCode.classifyEn]}`}><p>{item.employeeStatusCode.textKo}</p></td>
                                <td className={s.put}><button onClick={onOpen}>수정</button></td>
                            </tr>
                        ))} */}
          {employees.map((item, index) => (
            <tr key={index}>
              <td className={s.no}>{index + 1}</td>
              <td className={s.employeeNo}>{item.employeeNo}</td>
              <td className={s.name}>{item.name}</td>
              <td className={s.department}>{item.department}</td>
              <td className={s.position}>{item.position}</td>
              <td className={s.hireDate}>{item.hireDate}</td>
              <td className={s.phone}>{item.phone}</td>
              <td className={s.email}>{item.email}</td>
              <td
                className={`${s.employeeStatusCode} ${s[item.employeeStatusCode]}`}
              >
                <p>{item.employeeStatusCode}</p>
              </td>
              <td className={s.put}>
                <button onClick={onOpen}>수정</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className={s.countPost} colSpan={1}>
              총 {employees.length}건
            </td>
            <td colSpan={7}></td>
            <td colSpan={2}>
              <div className={s.pagination}>
                {/* 테이블을 포함하여 페이지네이션은 차후 수정/보완 필요 */}
                <div className={s.prev}>
                  <ChevronLeft size={13} color="#9CA3AF" />
                </div>
                {Array.from({ length: Math.ceil(employees.length / 10) }).map(
                  (_, index) => (
                    <div key={index} className={s.currentPage}>
                      {index + 1}
                    </div>
                  ),
                )}
                <div className={s.next}>
                  <ChevronRight size={13} color="#9CA3AF" />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
