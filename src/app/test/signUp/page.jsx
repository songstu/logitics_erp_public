
import { CircleCheck, Eye, EyeOff, Gift, Lock, LogIn, Mail, ShieldCheck } from "lucide-react";
import s from"./page.module.css";
import Nav from"@/component/common/Nav.jsx";


export default function Page() {

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
                crP={''}
            />
            <div className={s.panel}>
                <div className={s.leftPanel}>
                    <div className={s.brand}>
                        <div className={s.badge}>
                            <ShieldCheck color="#93C5FD" size={15}/>
                            <p>Enterprise HR Solution</p>
                        </div>
                        <div className={s.headline}>
                            <h1>HRMaster와 함께</h1>
                            <span>인사관리를 혁신하세요</span>
                            <p>지금 가입하고 강력한 <br /> 인사관리 도구를 경험해보세요.</p>
                        </div>
                        <div className={s.checklist}>
                            <div className={s.CK1}>
                                <CircleCheck color="#4ADE80" size={14}/>
                                무제한 직원 등록 및 관리
                            </div>
                            <div className={s.CK1}>
                                <CircleCheck color="#4ADE80" size={14}/>
                                자동화된 급여 계산 및 신고
                            </div>
                            <div className={s.CK1}>
                                <CircleCheck color="#4ADE80" size={14}/>
                                실시간 근태 현황 모니터링
                            </div>
                            <div className={s.CK1}>
                                <CircleCheck color="#4ADE80" size={14}/>
                                강력한 보안 및 권한 관리
                            </div>
                        </div>
                        <div className={s.trialBudge}>
                            <Gift color="#FCD34D" size={18}/>
                            30일 무료 체험 제공
                        </div>
                    </div>
                </div>
                <div className={s.rightPanel}>
                    <div className={s.formCard}>
                        <div className={s.formHeader}>
                            <h2>회원가입</h2>
                            <p>계정을 만들어 인사관리를 시작하세요</p>
                        </div>
                        <fieldset className={s.formBody}>
                            <div className={s.nameRow}>
                                <div className={s.LNF}>
                                    <label htmlFor="familyName">성</label>
                                    <input type="text" placeholder="성" />
                                </div>
                                
                            </div>
                            <div className={s.pf}>
                                <label htmlFor="password">비밀번호</label>
                                <div className={s.pi}>
                                    <Lock color="#9CA3AF" size={18}/>
                                    <input type="password" name="password" id="password" placeholder="비밀번호를 입력하세요"/>
                                    <div className={s.passwordToggle}>
                                        <input type="checkbox" id="passwordToggleInput" className={s.passwordToggleInput} />
                                        <label htmlFor="passwordToggleInput" className={s.passwordToggleLabel}>
                                            <span className={s.eye}><Eye color="#9CA3AF" size={18}/></span>
                                            <span className={s.eyeoff}><EyeOff color="#9CA3AF" size={18}/></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={s.opts}>
                                <div className={s.rem}>
                                    <input type="checkbox" id="staySignedInput" className={s.staySignedInput}/>
                                    <label htmlFor="staySignedInput" className={s.staySignedLabel}>로그인 상태 유지</label>
                                </div>
                                <span className={s. findPassword}>비밀번호 찾기</span>
                            </div>
                        </fieldset>
                        <div className={s.actions}>
                            <div className={s.loginBtn}>
                                <LogIn color="#ffffff" size={18}/>
                                로그인
                            </div>
                            <span>또는</span>
                            <div className={s.kakaoLogin}>
                                
                            </div>
                        </div>
                        <div className={s.sl}>
                            <p>계정이 없으신가요?</p>
                            <span>회원가입 신청</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}