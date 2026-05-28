
import { Bell, BriefcaseBusiness, LogOut } from "lucide-react";
import s from"./Nav.module.css";

export default function Nav({menu, crP}) {

    const loginValue = '';

    return (
        <nav className={s.header}>
                <div className={s.logoArea}>
                    <div className={s.logoIcon}>
                        <BriefcaseBusiness size={20} color="#60A5FA" strokeWidth={2} />
                    </div>
                    <h2>인사관리시스템</h2>
                </div>
                <ul className={s.gnb}>
                    {menu?.map((item, index) => (
                        <li className={item.textKo === (crP) ? s.currentPage : ''} key={index}>{item.textKo}</li>
                    ))}
                </ul>
                    {/* <li className={`${s.departmentTap} ${s.currentPage}`}>인사관리</li>
                    <li className={s.attendanceTap}>근태관리</li>
                    <li className={s.payrollTap}>급여관리</li>
                    <li className={s.dailyWorkerTap}>일용직관리</li> */}
                
                <div className={`${s.userInfo} ${(crP) === loginValue ? s.non : ''}`}>
                    <div className={s.noticeIcon}>
                        <Bell size={18} color="#93C5FD" strokeWidth={2} />
                    </div>
                    <div className={s.avatar}>홍</div>
                    <div className={s.profile}>
                        <p className={s.profileName}>홍길동 | 인사팀</p>
                    </div>
                    <div className={s.logoutIcon}>
                        <LogOut size={16} color="#64748B" strokeWidth={2} />
                    </div>
                </div>
            </nav>
    )
}