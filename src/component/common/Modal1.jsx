import { Save, Search, UserPlus, X } from "lucide-react";
import s from"./Modal1.module.css";

export default function Modal1() {

    return(
        <div className={s.overlay}>
            <div className={s.modal}>
                <div className={s.modalHeader}>
                    <div className={s.titleGruop}>
                        <UserPlus color="#60A5FA" size={18}/>
                        <h4>인사정보등록</h4>
                    </div>
                    <div className={s.closeBtn}>
                        <X color="#ffffff" size={16}/>
                    </div>
                </div>
                <div className={s.modalBody}>
                    <fieldset className={s.sectionBasic}>
                        <legend className={s.sectionTitleBasic}>기본정보</legend>
                        <div className={s.row1}>
                            <div className={`${s.employeeNoField} ${s.fields}`}>
                                <label htmlFor="employeeNo">사원번호<span className={s.nesMarker}> *</span></label>
                                <input type="text" id="employeeNo" disabled placeholder="자동생성" />
                            </div>
                            <div className={`${s.nameFieldField} ${s.fields}`}>
                                <label htmlFor="name">성명<span className={s.nesMarker}>*</span></label>
                                <input type="text" id="name" placeholder="홍길동" />
                            </div>
                        </div>
                        <div className={s.row2}>
                            <div className={`${s.departmentField} ${s.fields}`}>
                                <label htmlFor="department">부서<span className={s.nesMarker}> *</span></label>
                                <select name="department" id="department">
                                    <option value="#">부서를 선택하세요</option>
                                    <option value="HR">인사팀</option>
                                    <option value="MS">경영지원팀</option>
                                    <option value="Dev">개발팀</option>
                                    <option value="Sal">영업팀</option>
                                </select>
                            </div>
                            <div className={`${s.positionField} ${s.fields}`}>
                                <label htmlFor="position">직급<span className={s.nesMarker}> *</span></label>
                                <select name="position" id="position">
                                    <option value="#">직급을 선택하세요</option>
                                    <option value="SM">과장</option>
                                    <option value="AM">팀장</option>
                                    <option value="SS">대리</option>
                                    <option value="Stf">사원</option>
                                </select>
                            </div>
                        </div>
                        <div className={s.row3}>
                            <div className={`${s.hireDateField} ${s.fields}`}>
                                <label htmlFor="hireDate">입사일<span className={s.nesMarker}> *</span></label>
                                <input type="date" id="hireDate" placeholder="자동생성" />
                            </div>
                            <fieldset className={s.employeeStatusCodeField}>
                                <h4 className={s.employeeStatusCodeLegend}>재직상태<span className={s.nesMarker}> *</span></h4>
                                <div className={s.employeeStatusCodeRadio}>
                                    <div className={s.working}>
                                        <input type="radio" name="employeeStatusCode" id="working" value="working" />
                                        <label htmlFor="working">재직중</label>    
                                    </div>
                                    <div className={s.onLeave}>
                                        <input type="radio" name="employeeStatusCode" id="onLeave" value="onLeave" />
                                        <label htmlFor="onLeave">휴직중</label>    
                                    </div>
                                    <div className={s.retreat}>
                                        <input type="radio" name="employeeStatusCode" id="retreat" value="retreat" />
                                        <label htmlFor="retreat">도비는 자유에요</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </fieldset>
                    <fieldset className={s.sectionContact}>
                        <legend className={s.sectionTitleContact}>연락처</legend>
                        <div className={s.row1}>
                            <div className={`${s.phoneField} ${s.fields}`}>
                                <label htmlFor="phone">휴대폰<span className={s.nesMarker}> *</span></label>
                                <input type="text" id="phone" placeholder="010-0000-0000" />
                            </div>
                            <div className={`${s.emailField} ${s.fields}`}>
                                <label htmlFor="email">이메일</label>
                                <input type="text" id="email" placeholder="example@company.com" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className={s.sectionAddress}>
                        <legend className={s.sectionTitleAddress}>주소</legend>
                        <div className={s.row1}>
                            <div className={`${s.postalCodeField} ${s.fields}`}>
                                <label htmlFor="postalCode">우편번호</label>
                                <div className={s.postalCodeInput}>
                                    <input type="text" id="postalCode" disabled placeholder="우편번호" />
                                    <button className={s.postalCodeSearchBtn}>
                                        <Search color="#fff" size={13} />
                                        주소검색
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={s.row2}>
                            <div className={`${s.streetAddressField} ${s.fields}`}>
                                <label htmlFor="streetAddress">도로명주소</label>
                                <input type="text" id="streetAddress" disabled placeholder="주소검색 후 자동입력" />
                            </div>
                        </div>
                        <div className={s.row3}>
                            <div className={`${s.detailAddressField} ${s.fields}`}>
                                <label htmlFor="detailAddress">상세주소</label>
                                <input type="text" id="detailAddress" placeholder="상세주소를 입력하세요" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className={s.sectionEmergency}>
                        <legend className={s.sectionTitleEmergency}>비상연락처</legend>
                        <div className={s.row1}>
                            <div className={`${s.EmergencyNameField} ${s.fields}`}>
                                <label htmlFor="EmergencyName">성명</label>
                                <input type="text" id="EmergencyName" placeholder="비상연락처 성명" />
                            </div>
                            <div className={`${s.EmergencyRelationField} ${s.fields}`}>
                                <label htmlFor="EmergencyRelation">관계</label>
                                <select id="EmergencyRelation">
                                    <option value="#">관계 선택</option>
                                    <option value="Fath">부</option>
                                    <option value="Moth">모</option>
                                    <option value="GrF">조부</option>
                                    <option value="GrM">조모</option>
                                    <option value="Sib">형제</option>
                                    <option value="etc">기타</option>
                                </select>
                            </div>
                            <div className={`${s.EmergencyPhoneField} ${s.fields}`}>
                                <label htmlFor="EmergencyPhone">연락처</label>
                                <input type="text" id="EmergencyPhone" placeholder="010-0000-0000" />
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className={s.modalFooter}>
                    <div className={s.hint}>
                        <span className={s.nesMarker}>*</span>
                        <p>필수 입력 항목입니다.</p>
                    </div>
                    <div className={s.buttons}>
                        <button className={s.cancelBtn}>
                            <X color="#6B7280" size={14}/>
                            <p>취소</p>
                        </button>
                        <button className={s.saveBtn}>
                            <Save color="#ffffff" size={14}/>
                            <p>저장</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
