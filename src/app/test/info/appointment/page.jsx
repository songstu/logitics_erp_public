
import s from"./page.module.css";
import Nav from"@/component/common/Nav.jsx";
import Aside from"@/component/common/Aside.jsx";
import Table from"@/component/common/Table.jsx";

export default function Page() {
    const crP="인사발령등록"
    return (
        <div className={s.pageWrap}>

            <Nav/>

            <div className={s.body}>

                <Aside
                    dummy={
                        [
                            {
                                menu1:{icon:'/User.svg', menu1Name:'인사정보'},
                                menu2:['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
                            },
                            {
                                menu1:{icon:'/HeartHandshake.svg', menu1Name:'경조비관리'},
                                menu2:['경조비신청', '경조비신청현황']
                            },
                            {
                                menu1:{icon:'/FileText.svg', menu1Name:'증명서관리'},
                                menu2:['증명서발급']
                            }
                        ]
                    }
                    crP ={crP}
                />

                <Table
                    breadcrumb={['인사관리', '인사정보', '인사발령등록']}
                    crP ={crP}
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
                />
            </div>
        </div>
    )
}