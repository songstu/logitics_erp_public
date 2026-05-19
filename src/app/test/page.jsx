'use client'
import baseApi from "@/api/baseApi";
import s from"./page.module.css";
import { useEffect, useState } from "react";

export default function Page() {

    const [employees, setEmployees] = useState([])

    useEffect(() => {

        const getEmployee = async () => {
            const response = await baseApi.get("/api/v1/employees");
            console.log(response.data.data);
            setEmployees(response.data.data);
        }

        getEmployee();

    }, []);

    return (
        <div className={s.pageWrap}>
            <div className={s.header}>
                <div className={s.logoArea}>
                    <div className={s.logoIcon}>
                        <img src="/BriefcaseBusiness.png" alt="Briefcase Business" />
                    </div>
                    <h2>인사관리시스템</h2>
                </div>
                <div className={s.gnb}>
                    <div className={s.departmentTap}>인사관리</div>
                    <div className={s.attendanceTap}>근태관리</div>
                    <div className={s.payrollTap}>급여관리</div>
                    <div className={s.dailyWorkerTap}>일용직관리</div>
                </div>
                <div className={s.userInfo}>
                    <div className={s.noticeIcon}>
                        <img src="/Bell.png" alt="Bell" />
                    </div>
                    <div className={s.avatar}>홍</div>
                    <div className={s.profile}>
                        <p className={s.profileName}>홍길동 | 인사팀</p>
                    </div>
                    <div className={s.logoutIcon}>
                        <img src="/LogOut.png" alt="Log Out" />
                    </div>
                </div>
            </div>

            <div className={s.body}>
                <div className={s.sidebar}>
                    <div className={s.group}>인사정보</div>
                    <div className={s.group}>경조비</div>
                    <div className={s.group}>증명서</div>
                </div>
                <div className={s.mainContent}>
                    <div className={s.breadcrumb}>
                        <p>홈</p>
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
                        <div className={s.tableHeader}>
                            <table>
                                <tr>
                                    <td>NO</td>
                                    <td>사원번호</td>
                                    <td>성명</td>
                                    <td>부서</td>
                                    <td>직급</td>
                                    <td>입사일</td>
                                    <td>연락처</td>
                                    <td>이메일</td>
                                    <td>재직상태</td>
                                    <td>관리</td>
                                </tr>
                            </table>
                        </div>
                        <table>
                            {employees.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.employeeNo}</td>
                                    <td>{item.name}</td>
                                    <td>부서</td>
                                    <td>직급</td>
                                    <td>입사일</td>
                                    <td>연락처</td>
                                    <td>이메일</td>
                                    <td>재직상태</td>
                                    <td>관리</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
// http://localhost:33000/swagger-ui/index.html