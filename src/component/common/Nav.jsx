
import s from"./Nav.module.css";

export default function Nav() {
    return (
        <nav className={s.header}>
                <div className={s.logoArea}>
                    <div className={s.logoIcon}>
                        <img src="/BriefcaseBusiness.png" alt="Briefcase Business" />
                    </div>
                    <h2>인사관리시스템</h2>
                </div>
                <ul className={s.gnb}>
                    <li className={s.departmentTap}>인사관리</li>
                    <li className={s.attendanceTap}>근태관리</li>
                    <li className={s.payrollTap}>급여관리</li>
                    <li className={s.dailyWorkerTap}>일용직관리</li>                </ul>
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
            </nav>
    )
}