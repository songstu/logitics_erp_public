"use client";
import { Save, Search, UserPlus, X } from "lucide-react";
import s from "./Modal1.module.css";
import { useRef, useState } from "react";

export default function Modal1({ isOn, onClose }) {
  const scrollBodyRef = useRef(null);
  // 현재는 훈련용으로 state를 사용하나
  // 나중에는 useForm 학습하여 변경하는 것을 고려
  const close = () => {
    setName("");
    setDepartment("");
    setPosition("");
    setHireDate("");
    setPhone("");
    setEmail("");
    setDetailAddress("");
    setEmergencyName("");
    setEmergencyPhone("");

    setAutoInputs({
      employeeNo: "",
      postalCode: "",
      streetAddress: "",
    });
    setEmergencyRelationValue("");

    scrollBodyRef.current.scrollTop = 0;
    onClose();
  };

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [EmergencyName, setEmergencyName] = useState("");
  const [EmergencyPhone, setEmergencyPhone] = useState("");

  const [EmergencyRelationValue, setEmergencyRelationValue] = useState("");

  // onClick 대신 onSubmit 사용
  // state로 유효성 검사까지 만들기 귀찮음
  const save = (e) => {
    e.preventDefault();
    console.log({
      employeeNo,
      name,
      department,
      position,
      hireDate,
      phone,
      email,
      postalCode,
      streetAddress,
      detailAddress,
      employeeStatusCodeRadio,
      EmergencyName,
      EmergencyPhone,
    });
    close();
  };

  const [employeeStatusCodeRadio, setEmployeeStatusCodeRadio] = useState("");

  const [autoInputs, setAutoInputs] = useState({
    employeeNo: "",
    postalCode: "",
    streetAddress: "",
  });
  const { employeeNo, postalCode, streetAddress } = autoInputs;

  // [다음주소 api] 2. 주소 선택시 데이터 받기
  const openPostcode = () => {
    if (!window || window === undefined) return;

    const postCode = new window.daum.Postcode({
      oncomplete(data) {
        // 여기서 setter로 처리
        // console.log("선택한 주소 >>> ", data);
        setAutoInputs({
          ...autoInputs,
          ["postalCode"]: data?.zonecode,
          ["streetAddress"]: data?.address,
        });
      },
    });

    postCode.open();
  };

  return (
    <div className={`${s.overlay} ${isOn ? s.on : s.off}`}>
      <form className={s.modal}>
        <div className={s.modalHeader}>
          <div className={s.titleGruop}>
            <UserPlus color="#60A5FA" size={18} />
            <h4>인사정보등록</h4>
          </div>
          <button className={s.closeBtn} onClick={() => close()} type="button">
            <X color="#ffffff" size={16} />
          </button>
        </div>
        <div className={s.modalBody} ref={scrollBodyRef}>
          <fieldset className={s.sectionBasic}>
            <legend className={s.sectionTitleBasic}>기본정보</legend>
            <div className={s.row1}>
              <div className={`${s.employeeNoField} ${s.fields}`}>
                <label htmlFor="employeeNo">
                  사원번호<span className={s.nesMarker}> *</span>
                </label>
                {/* CSS용 input */}
                <input
                  className={`${s.employeeNoInput} ${employeeNo ? "" : s.autoInput}`}
                  type="text"
                  readOnly
                  placeholder="자동생성"
                  value={employeeNo}
                />
                {/* 서버 전송용 input */}
                <input
                  type="hidden"
                  id="employeeNo"
                  value={employeeNo}
                  onChange={(e) => setEmployeeNo(e.target.value)}
                  // 더미데이터를 넣거나 자동생성 이전에는 필수속성 보류
                  // required
                />
              </div>
              <div className={`${s.nameFieldField} ${s.fields}`}>
                <label htmlFor="name">
                  성명<span className={s.nesMarker}> *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="홍길동"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className={s.row2}>
              <div className={`${s.departmentField} ${s.fields}`}>
                <label htmlFor="department">
                  부서<span className={s.nesMarker}> *</span>
                </label>
                <select
                  name="department"
                  id="department"
                  required
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option value="">부서를 선택하세요</option>
                  <option value="HR">인사팀</option>
                  <option value="MS">경영지원팀</option>
                  <option value="Dev">개발팀</option>
                  <option value="Sal">영업팀</option>
                </select>
              </div>
              <div className={`${s.positionField} ${s.fields}`}>
                <label htmlFor="position">
                  직급<span className={s.nesMarker}> *</span>
                </label>
                <select
                  name="position"
                  id="position"
                  required
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option value="">직급을 선택하세요</option>
                  <option value="SM">과장</option>
                  <option value="AM">팀장</option>
                  <option value="SS">대리</option>
                  <option value="Stf">사원</option>
                </select>
              </div>
            </div>
            <div className={s.row3}>
              <div className={`${s.hireDateField} ${s.fields}`}>
                <label htmlFor="hireDate">
                  입사일<span className={s.nesMarker}> *</span>
                </label>
                <input
                  type="date"
                  id="hireDate"
                  placeholder="자동생성"
                  required
                  value={hireDate}
                  onChange={(e) => setHireDate(e.target.value)}
                />
              </div>
              <fieldset className={s.employeeStatusCodeField}>
                <h4 className={s.employeeStatusCodeLegend}>
                  재직상태<span className={s.nesMarker}> *</span>
                </h4>
                <div className={s.employeeStatusCodeRadio}>
                  <div className={s.working}>
                    <input
                      type="radio"
                      name="employeeStatusCode"
                      id="working"
                      value="working"
                      required
                      checked={employeeStatusCodeRadio === "working"}
                      onChange={(e) =>
                        setEmployeeStatusCodeRadio(e.target.value)
                      }
                    />
                    <label htmlFor="working">재직중</label>
                  </div>
                  <div className={s.onLeave}>
                    <input
                      type="radio"
                      name="employeeStatusCode"
                      id="onLeave"
                      value="onLeave"
                      required
                      checked={employeeStatusCodeRadio === "onLeave"}
                      onChange={(e) =>
                        setEmployeeStatusCodeRadio(e.target.value)
                      }
                    />
                    <label htmlFor="onLeave">휴직중</label>
                  </div>
                  <div className={s.retreat}>
                    <input
                      type="radio"
                      name="employeeStatusCode"
                      id="retreat"
                      value="retreat"
                      required
                      checked={employeeStatusCodeRadio === "retreat"}
                      onChange={(e) =>
                        setEmployeeStatusCodeRadio(e.target.value)
                      }
                    />
                    <label htmlFor="retreat">퇴직</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </fieldset>
          <fieldset className={s.sectionContact}>
            <legend className={s.sectionTitleContact}>연락처</legend>
            <div className={s.row1}>
              <div className={`${s.phoneField} ${s.fields}`}>
                <label htmlFor="phone">
                  휴대폰<span className={s.nesMarker}> *</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="010-0000-0000"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={`${s.emailField} ${s.fields}`}>
                <label htmlFor="email">이메일</label>
                <input
                  type="text"
                  id="email"
                  placeholder="example@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className={s.sectionAddress}>
            <legend className={s.sectionTitleAddress}>주소</legend>
            <div className={s.row1}>
              <div className={`${s.postalCodeField} ${s.fields}`}>
                <label htmlFor="postalCode">우편번호</label>
                <div className={s.postalCodeInput}>
                  <input
                    className={`${s.postalCodeInputI} ${postalCode ? "" : s.autoInput}`}
                    type="text"
                    id="postalCode"
                    value={postalCode}
                    readOnly
                    placeholder="우편번호"
                  />
                  <button
                    className={s.postalCodeSearchBtn}
                    type="button" // submit 방지
                    onClick={openPostcode}
                  >
                    <Search color="#fff" size={13} />
                    주소검색
                  </button>
                </div>
              </div>
            </div>
            <div className={s.row2}>
              <div className={`${s.streetAddressField} ${s.fields}`}>
                <label htmlFor="streetAddress">도로명주소</label>
                <input
                  className={`${s.streetAddressInput} ${streetAddress ? "" : s.autoInput}`}
                  type="text"
                  id="streetAddress"
                  value={streetAddress}
                  readOnly
                  placeholder="주소검색 후 자동입력"
                />
              </div>
            </div>
            <div className={s.row3}>
              <div className={`${s.detailAddressField} ${s.fields}`}>
                <label htmlFor="detailAddress">상세주소</label>
                <input
                  type="text"
                  id="detailAddress"
                  placeholder="상세주소를 입력하세요"
                  value={detailAddress}
                  onChange={(e) => setDetailAddress(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <fieldset className={s.sectionEmergency}>
            <legend className={s.sectionTitleEmergency}>비상연락처</legend>
            <div className={s.row1}>
              <div className={`${s.EmergencyNameField} ${s.fields}`}>
                <label htmlFor="EmergencyName">성명</label>
                <input
                  type="text"
                  id="EmergencyName"
                  placeholder="비상연락처 성명"
                  value={EmergencyName}
                  onChange={(e) => setEmergencyName(e.target.value)}
                />
              </div>
              <div className={`${s.EmergencyRelationField} ${s.fields}`}>
                <label htmlFor="EmergencyRelation">관계</label>
                <select
                  id="EmergencyRelation"
                  value={EmergencyRelationValue}
                  onChange={(e) => setEmergencyRelationValue(e.target.value)}
                  style={{
                    color: `${EmergencyRelationValue.trim() ? "#111827" : "#9ca3af"}`,
                  }}
                >
                  <option value="">관계 선택</option>
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
                <input
                  type="text"
                  id="EmergencyPhone"
                  placeholder="010-0000-0000"
                  value={EmergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                />
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
            <button
              className={s.cancelBtn}
              onClick={() => close()}
              type="button"
            >
              <X color="#6B7280" size={14} />
              <p>취소</p>
            </button>
            <button className={s.saveBtn} onSubmit={save}>
              <Save color="#ffffff" size={14} />
              <p>저장</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
