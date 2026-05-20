// 'use client'
// import baseApi from "@/api/baseApi";
// import { useEffect, useState } from "react";
import s from"./Table.module.css";

export default function Table(columns) {

    // const dummyColumn= ['NO', '사원번호', '성명', '부서', '직급', '입사일', '연락처', '이메일', '재직상태', '관리']

    const dummy2= [
        {
            menu1:{icon:'/User.png', menu1Name:'인사정보'},
            menu2:['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
        },
        {
            menu1:{icon:'/HeartHandshake.png', menu1Name:'경조비관리'},
            menu2:['경조비신청', '경조비신청현황']
        },
        {
            menu1:{icon:'/FileText.png', menu1Name:'증명서관리'},
            menu2:['증명서발급']
        }
    ]



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
                <img src="/House.png" alt="home" />
                <img src="/ChevronRight.png" alt="화살표" />
                <p>인사관리</p>
                <img src="/ChevronRight.png" alt="화살표" />
                <p>인사정보</p>
                <img src="/ChevronRight.png" alt="화살표" />
                <p>인사정보등록</p>
            </div>
            
            <div className={s.pageHeaderRow}>
                <div className={s.pageTitle}>
                    <h2>인사정보등록</h2>
                    <span>직원의 인사정보를 등록하고 관리합니다.</span>
                </div>
                <div className={s.actionButtons}>
                    <button className={s.excelBtn}>
                        <img src="#" alt="Excel Download" />
                        <p>엑셀 다운로드</p>
                    </button>
                    <button className={s.newBtn}>
                        <img src="#" alt="plus, 신규등록" />
                        <p>신규등록</p>
                    </button>
                </div>
            </div>

            <div className={s.searchCard}>
                <div className={s.searchTitleRow}>
                    <img src="#" alt="search, 검색조건" />
                    <h4>검색조건</h4>
                </div>
                <fieldset className={s.searchFields}>
                    <div className={s.employeeNo}>
                        <label htmlFor="employee_no">사원번호</label>
                        <input type="text" id="employee_no" placeholder="전체"/>
                    </div>
                    <div className={s.department}>
                        <label htmlFor="department">사원번호</label>
                        <select name="department" id="department">
                            <option value="#">전체</option>
                            <option value="???">??부</option>
                        </select>
                    </div>
                    <div className={s.position}>
                        <label htmlFor="position">직급</label>
                        <select name="position" id="position">
                            <option value="#">전체</option>
                            <option value="???">팀원</option>
                        </select>
                    </div>
                    <div className={s.employeeStatus}>
                        <label htmlFor="employee-status-code">직급</label>
                        <select name="employeeStatus" id="employee-status-code">
                            <option value="#">재직중</option>
                            <option value="???">도비는 자유에요</option>
                        </select>
                    </div>
                    <button className={s.searchBtn}>
                        <img src="#" alt="search" />
                        <p>조회</p>
                    </button>
                    <button className={s.resetBtn}>
                        <img src="#" alt="reset" />
                        <p>초기화</p>
                    </button>
                </fieldset>
            </div>

            <div className={s.tableCard}>
                <table>
                    <thead>
                        <tr>
                            {columns.map((item, index) => (
                                <td key={index} className={s.number}>{item}</td>
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
                                <td>{index + 1}</td>
                                <td>{item.employeeNo}</td>
                                <td>{item.name}</td>
                                <td>{item.department}</td>
                                <td>{item.position}</td>
                                <td>{item.hireDate}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.employeeStatusCode}</td>
                                <td><button className={s.put}>수정</button></td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className={s.countPost}>총 {employees.length}건</td>
                            <td>
                                <div className={s.pagination}>
                                    <div className={s.prev}>&lt;</div>
                                    <div className="p1">1</div>
                                    <div className="p2">2</div>
                                    <div className="p3">3</div>
                                    <div className={s.next}>&gt;</div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}