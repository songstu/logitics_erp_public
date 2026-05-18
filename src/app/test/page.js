import "./page.css";
import logo from './assets/Briefcase Business.png';

export default function Page() {
    return (
        <>
            <header>
                <div className="logo-area">
                    <div className="logo-icon">
                        <img src={logo}/>
                    </div>
                    <h2>인사관리시스템</h2>
                </div>
                <div className="gnb">
                    <div className="department-tap">인사관리</div>
                    <div className="attendance-tap">근태관리</div>
                    <div className="allowance-tap">급여관리</div>
                    <div className="tap">일용직관리</div>
                </div>
                <div className="user-info">
                    <div className="notice-icon"></div>
                    <div className="avatar">홍</div>
                    <div className="profile">
                        <p className="profile-name">홍길동</p>
                        <span>|</span> 
                        <p className="profile-department">홍길동</p>
                    </div>
                    <div className="logout-icon"></div>
                </div>
            </header>
        </>
    )
}