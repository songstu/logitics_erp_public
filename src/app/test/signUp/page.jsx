
"use client";
import { Briefcase, Building2, Check, CircleCheck, Eye, EyeOff, Gift, IdCard, Info, Lock, LogIn, Mail, ShieldCheck, UserPlus } from "lucide-react";
import s from"./page.module.css";
import Nav from"@/component/common/Nav.jsx";
import { useState } from "react";


export default function Page() {

    const Checklist = [
        "무제한 직원 등록 및 관리",
        "자동화된 급여 계산 및 신고",
        "실시간 근태 현황 모니터링",
        "강력한 보안 및 권한 관리"
    ];

    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const [isAgree, setIsAgree] = useState(false);


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
                            {Checklist.map((item, index) => (
                                <div className={s.check1} key={index}>
                                    <CircleCheck color="#4ADE80" size={14}/>
                                    {item}
                                </div>
                            ))}
                            {/* <div className={s.CK1}>
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
                            </div> */}
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
                                <div className={s.lnF}>
                                    <label htmlFor="lastName">성</label>
                                    <div className={s.lnI}>
                                        <input type="text" name="lastName" id="lastName" placeholder="성" />
                                    </div>
                                </div>
                                <div className={s.fnF}>
                                    <label htmlFor="firstName">이름</label>
                                    <div className={s.fnI}>
                                        <input type="text" name="firstName" id="firstName" placeholder="이름" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.empRow}>
                                <div className={s.empF}>
                                    <label htmlFor="employeeNo">사번</label>
                                    <div className={s.empI}>
                                        <IdCard color="#9CA3AF" size={16}/>
                                        <input type="text" name="employeeNo" id="employeeNo" placeholder="사번" />
                                    </div>
                                </div>
                                <div className={s.deptF}>
                                    <label htmlFor="department">부서</label>
                                    <div className={s.deptI}>
                                        <Building2 color="#9CA3AF" size={16}/>
                                        <select name="department" id="department">
                                            <option value="#">전체</option>
                                            <option value="HR">인사팀</option>
                                            <option value="MS">경영지원팀</option>
                                            <option value="Dev">개발팀</option>
                                            <option value="Sal">영업팀</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={s.roleRow}>
                                <div className={s.roleF}>
                                    <label htmlFor="position">직급</label>
                                    <div className={s.deptI}>
                                        <Briefcase color="#9CA3AF" size={16} />
                                        <select name="position" id="position">
                                            <option value="#">전체</option>
                                            <option value="SM">과장</option>
                                            <option value="AM">팀장</option>
                                            <option value="SS">대리</option>
                                            <option value="Stf">사원</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={s.emailF}>
                                    <label htmlFor="email">회사 이메일</label>
                                    <div className={s.emailI}>
                                        <Mail color="#9CA3AF" size={16} />
                                        <input type="text" name="email" id="email" placeholder="company@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.pwRow}>
                                <div className={s.pwF}>
                                    <label htmlFor="password">비밀번호</label>
                                    <div className={s.pwI}>
                                        <Lock color="#9CA3AF" size={18}/>
                                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="비밀번호 입력" onChange={(e) => setPassword(e.target.value)}/>
                                        <div className={s.passwordToggle}>
                                            <input type="checkbox" id="passwordToggleInput1" className={s.passwordToggleInput} checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                                            <label htmlFor="passwordToggleInput1" className={s.passwordToggleLabel}>
                                                <span className={s.eye}><Eye color="#9CA3AF" size={18}/></span>
                                                <span className={s.eyeoff}><EyeOff color="#9CA3AF" size={18}/></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.cpwF}>
                                    <label htmlFor="confirmPassword">비밀번호 확인</label>
                                    <div className={s.cpwI}>
                                        <Lock color="#9CA3AF" size={18}/>
                                        <input type={showCPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="비밀번호 재입력" onChange={(e) => setCPassword(e.target.value)}/>
                                        <div className={s.passwordToggle}>
                                            <input type="checkbox" id="passwordToggleInput2" className={s.passwordToggleInput} checked={showCPassword} onChange={() => setShowCPassword(!showCPassword)}/>
                                            <label htmlFor="passwordToggleInput2" className={s.passwordToggleLabel}>
                                                <span className={s.eye}><Eye color="#9CA3AF" size={18}/></span>
                                                <span className={s.eyeoff}><EyeOff color="#9CA3AF" size={18}/></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.pwHint}>
                                <Info color="#9CA3AF" size={14}/>
                                영문, 숫자, 특수문자 포함 8자리 이상
                            </div>
                        </fieldset>
                        <div className={s.terms}>
                            <input type="checkbox" name="tcb" id="tcb" checked={isAgree} onChange={() => setIsAgree(!isAgree)}/>
                            <label htmlFor="tcb" className={s.tcbLabel}>
                                <div className={s.checkBoxRedesign}>
                                    <Check color="#fff" strokeWidth={3} size={10}/>
                                </div>
                                <p>이용약관 및 개인정보처리방침에 동의합니다</p>
                            </label>
                            <span>내용 보기</span>
                        </div>
                        <div className={s.submitAction}>
                            <button className={s.submitBtn} disabled={!isAgree} onClick={() => console.log('btn test')}>
                                <UserPlus color="#ffffff" size={18} />
                                회원가입
                            </button>
                        </div>
                        <div className={s.loginLink}>
                            <p>이미 계정이 있으신가요?</p>
                            <span>로그인 하기</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}