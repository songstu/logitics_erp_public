
import s from"./page.module.css";
import Nav from"@/component/common/Nav.jsx";
import Aside from"@/component/common/Aside.jsx";
import Table from"@/component/common/Table.jsx";

export default function Page() {
    
    const crP = {
        crPNav:'인사관리',
        crPAsi:'인사발령등록',
        crPTable:'인사발령등록',
        crPInfo:'사원의 부서·직급·직책 발령 정보를 등록하고 이력을 관리합니다.',
        newResist: '발령등록'
    }

    return (
        <div className={s.pageWrap}>

            <Nav
                menu={
                    [
                        {classifyEn:'departmentTap', textKo:'인사관리'},
                        {classifyEn:'attendanceTap', textKo:'근태관리'},
                        {classifyEn:'payrollTap', textKo:'급여관리'},
                        {classifyEn:'dailyWorkerTap', textKo:'일용직관리'}
                    ]
                }
                crP={crP}
            />

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
                />
            </div>
        </div>
    )
}