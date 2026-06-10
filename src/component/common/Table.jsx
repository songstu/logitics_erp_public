'use client'
import { Download, Plus} from "lucide-react";
import baseApi from "@/api/baseApi";
import { useEffect, useState } from "react";
import s from"./Table.module.css";
import Breadcrumb from "./breadcrumb.jsx";
import SearchCard from "./SearchCard.jsx";
import TableCard from "./TableCard";

export default function Table({breadcrumb, crP, isOn, onOpen}) {

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
            
            <Breadcrumb 
                breadcrumb={breadcrumb}
            />
            
            <div className={s.pageHeaderRow}>
                <div className={s.pageTitle}>
                    <h2>{crP.crPTable}</h2>
                    <span>{crP.crPInfo}</span>
                </div>
                <div className={s.actionButtons}>
                    <button className={s.excelBtn}>
                       <Download size={14} color="#374151" />
                        <p>PDF 다운로드</p>
                    </button>
                    <button className={s.newBtn} onClick={onOpen}>
                        <Plus size={14} color="#FFFFFF" />
                        <p>{crP.newResist}</p>
                    </button>
                </div>
            </div>

            <SearchCard />

            <TableCard 
                columns={[
                    {classifyEn:'no', textKo:'NO'}, 
                    {classifyEn:'employeeNo', textKo:'사원번호'}, 
                    {classifyEn:'name', textKo:'성명'}, 
                    {classifyEn:'department', textKo:'부서'}, 
                    {classifyEn:'position', textKo:'직급'}, 
                    {classifyEn:'hireDate', textKo:'입사일'}, 
                    {classifyEn:'phone', textKo:'연락처'}, 
                    {classifyEn:'email', textKo:'이메일'}, 
                    {classifyEn:'employeeStatusCode', textKo:'재직상태'}, 
                    {classifyEn:'put', textKo:'관리'}
                ]}
                employees={[
                    {employeeNo:'EMP-001', 
                        name:'김철수',
                        department:{classifyEn:'department', textKo:'인사팀'},
                        position:{classifyEn:'position', textKo:'팀장'},
                        hireDate:'2019.03.02',
                        phone:'010-1234-5678',
                        email:'kim@company.com',
                        employeeStatusCode:{classifyEn:'working', textKo:'재직중'}
                    },
                    {employeeNo:'EMP-002 ', 
                        name:'이명희',
                        department:{classifyEn:'department', textKo:'경영지원팀'},
                        position:{classifyEn:'position', textKo:'과장'},
                        hireDate:'2018.07.15',
                        phone:'010-9876-5432',
                        email:'lee@company.com',
                        employeeStatusCode:{classifyEn:'working', textKo:'재직중'}
                    },
                    {employeeNo:'EMP-003', 
                        name:'박민준',
                        department:{classifyEn:'department', textKo:'개발팀'},
                        position:{classifyEn:'position', textKo:'대리'},
                        hireDate:'2021.08.01',
                        phone:'010-5555-7777',
                        email:'park@company.com',
                        employeeStatusCode:{classifyEn:'onLeave', textKo:'휴직중'}
                    },
                    {employeeNo:'EMP-004', 
                        name:'최지영',
                        department:{classifyEn:'department', textKo:'영업팀'},
                        position:{classifyEn:'position', textKo:'사원'},
                        hireDate:'2023.01.09',
                        phone:'010-3333-4444',
                        email:'choi@company.com',
                        employeeStatusCode:{classifyEn:'working', textKo:'재직중'}
                    },
                    {employeeNo:'EMP-005', 
                        name:'도비킴',
                        department:{classifyEn:'department', textKo:'청소팀'},
                        position:{classifyEn:'position', textKo:'사원'},
                        hireDate:'2023.01.09',
                        phone:'010-2222-1111',
                        email:'doby@company.com',
                        employeeStatusCode:{classifyEn:'retirement', textKo:'퇴직'}
                    }
                ]} 
                isOn = {isOn}
                onOpen = {onOpen}
            />
        </div>
    )
}