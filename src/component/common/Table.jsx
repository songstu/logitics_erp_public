'use client'
import { ChevronLeft, ChevronRight, Download, House, Plus, RotateCcw, Search } from "lucide-react";
// import baseApi from "@/api/baseApi";
// import { useEffect, useState } from "react";
import s from"./Table.module.css";

export default function Table({breadcrumb, columns, employees}) {

    // const dummyColumn= ['NO', '사원번호', '성명', '부서', '직급', '입사일', '연락처', '이메일', '재직상태', '관리']

    // const dummy2= [
    //     {
    //         menu1:{icon:'/User.png', menu1Name:'인사정보'},
    //         menu2:['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
    //     },
    //     {
    //         menu1:{icon:'/HeartHandshake.png', menu1Name:'경조비관리'},
    //         menu2:['경조비신청', '경조비신청현황']
    //     },
    //     {
    //         menu1:{icon:'/FileText.png', menu1Name:'증명서관리'},
    //         menu2:['증명서발급']
    //     }
    // ]



    // {dummy}
    // const [employees, setEmployees] = useState([])

    // useEffect(() => {

    //     const getEmployee = async () => {
    //         const response = await baseApi.get("/api/v1/employees");
    //         console.log(response.data.data);
    //         setEmployees(response.data.data);
    //     }

    //     getEmployee();

    // }, []);


    return (
        <div className={s.mainContent}>
            <div className={s.breadcrumb}>
                <House size={12} color="#9CA3AF" />
                {breadcrumb.map((item, index) => (
                    <span key={index}>
                        <ChevronRight size={12} color="#9CA3AF" />
                        <p>{item}</p>
                    </span>
                ))}
            </div>
            
            <div className={s.pageHeaderRow}>
                <div className={s.pageTitle}>
                    <h2>인사정보등록</h2>
                    <span>직원의 인사정보를 등록하고 관리합니다.</span>
                </div>
                <div className={s.actionButtons}>
                    <button className={s.excelBtn}>
                       <Download size={14} color="#374151" />
                        <p>엑셀 다운로드</p>
                    </button>
                    <button className={s.newBtn}>
                        <Plus size={14} color="#FFFFFF" />
                        <p>신규등록</p>
                    </button>
                </div>
            </div>

            <div className={s.searchCard}>
                <div className={s.searchTitleRow}>
                    <Search size={14} color="#1B3A6B" />
                    <h4>검색조건</h4>
                </div>
                <fieldset className={s.searchFields}>
                    <div className={s.employeeNo}>
                        <label htmlFor="employee_no">사원번호</label>
                        <input type="text" id="employee_no" placeholder="전체"/>
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
                    <button className={s.searchBtn}>
                        <Search size={13} color="#ffffff" />
                        <p>조회</p>
                    </button>
                    <button className={s.resetBtn}>
                        <RotateCcw size={13} color="#6B7280" style={{flexShrink:0}}/>
                        <p>초기화</p>
                    </button>
                </fieldset>
            </div>

            <div className={s.tableCard}>
                <table>
                    <thead>
                        <tr>
                            {columns.map((item, index) => (
                                <th key={index} className={s[item.classifyEn]}>{item.textKo}</th>
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
                        {employees.map((item, index) => (
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
                                <td className={s.put}><button>수정</button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className={s.countPost} colSpan={1}>총 {employees.length}건</td>
                            <td colSpan={7}></td>
                            <td colSpan={2}>
                                <div className={s.pagination}>
                                    {/* 테이블을 포함하여 페이지네이션은 차후 수정/보완 필요 */}
                                    <div className={s.prev}><ChevronLeft size={13} color="#9CA3AF" /></div>
                                    {Array.from({length:Math.ceil(employees.length / 10)}).map((_, index) => (
                                        <div key={index} className={s.currentPage}>{index+1}</div>
                                    ))}
                                    <div className={s.next}><ChevronRight size={13} color="#9CA3AF" /></div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}