"use client";
import s from "./page.module.css";
import { useEffect, useState } from "react";

export default function Apply({ menu, crP }) {
  const [applyUserInfo, setApplyUserInfo] = useState();
  const [applyTargetInfo, setApplyTargetInfo] = useState();
  const [applyTargetBankInfo, setApplyTargetBankInfo] = useState();
  const [eventType, setEventType] = useState("본인결혼");

  const eventTypeList = [
    "본인결혼",
    "자녀결혼",
    "출산",
    "부모상",
    "배우자상",
    "부모회갑",
  ];

  useEffect(() => {
    const employeeNo = localStorage.getItem("employeeNo");
    const name = localStorage.getItem("name");
    const departmentName = localStorage.getItem("departmentName");
    const position = localStorage.getItem("position");
    const applyYear = new Date().getFullYear();
    const applyMonth =
      new Date().getMonth() > 9
        ? new Date().getMonth() + 1
        : `0${new Date().getMonth() + 1}`;
    const applyDate = new Date().getDate();
    const applyAllDate = `${applyYear}.${applyMonth}.${applyDate}`;

    setApplyUserInfo({
      employeeNo,
      name,
      departmentName,
      position,
      applyAllDate,
    });

    setApplyTargetInfo({
      TargetName: "",
      targetRel: "self",
      applicationDate: "",
      TargetEventPlace: "",
    });

    setApplyTargetBankInfo({
      bankName: "self",
      bankNumber: "",
      accountHolder: "",
    });
  }, []);

  return (
    <div className={s.wrap}>
      <fieldset className={s.applyUserField}>
        <div className={s.applyUser}>신청자 정보</div>
        <div className={s.employeeNo}>
          <input
            type="text"
            id="employeeNo"
            className={s.employeeNoInput}
            value={applyUserInfo?.employeeNo}
            readOnly
          />
          <label htmlFor="employeeNo">사원번호</label>
        </div>
        <div className={s.name}>
          <input
            type="text"
            id="name"
            className={s.nameInput}
            value={applyUserInfo?.name}
            readOnly
          />
          <label htmlFor="name">성명</label>
        </div>
        <div className={s.employeeNo}>
          <input
            type="text"
            id="departmentName"
            className={s.departmentName}
            value={applyUserInfo?.departmentName}
            readOnly
          />
          <label htmlFor="departmentName">부서</label>
        </div>
        <div className={s.position}>
          <input
            type="text"
            id="position"
            className={s.position}
            value={applyUserInfo?.position}
            readOnly
          />
          <label htmlFor="position">직급</label>
        </div>
        <div className={s.applyAllDate}>
          <input
            type="text"
            id="applyAllDate"
            className={s.applyAllDate}
            value={applyUserInfo?.applyAllDate}
            readOnly
          />
          <label htmlFor="applyAllDate">신청일</label>
        </div>
      </fieldset>

      {eventTypeList.map((item, index) => (
        <div className={s.btns} key={index}>
          <button
            className={s.event}
            onClick={() => {
              setEventType(item);
            }}
          >
            {item}
          </button>
        </div>
      ))}

      <fieldset className={s.applyTargetField}>
        <div className={s.TargetName}>
          <input
            type="text"
            id="TargetName"
            className={s.TargetNameInput}
            onChange={(e) =>
              setApplyTargetInfo((prev) => ({
                ...prev,
                // 위의 prev이하 구문 빼먹으면 최신 내용만 남는다.
                // return{...prev,}의 다른 표현
                TargetName: e.target.value,
              }))
            }
          />
          <label htmlFor="TargetName">대상자 성명</label>
        </div>
        <div className={s.targetRel}>
          <select
            name="targetRel"
            id="targetRel"
            className={s.targetRelInput}
            value={applyTargetInfo.targetRel}
            onChange={(e) =>
              setApplyTargetInfo((prev) => ({
                ...prev,
                targetRel: e.target.value,
              }))
            }
          >
            <option value="self">본인</option>
            <option value="spouse">배우자</option>
            <option value="child">자녀</option>
            <option value="parent">부모</option>
          </select>
          <label htmlFor="targetRel">관계</label>
        </div>
        <div className={s.applicationDate}>
          <input
            type="date"
            id="applicationDate"
            className={s.applicationDateInput}
            onChange={(e) =>
              setApplyTargetInfo((prev) => ({
                ...prev,
                applicationDate: e.target.value,
              }))
            }
          />
          <label htmlFor="applicationDate">경조일</label>
        </div>
        <div className={s.TargetEventPlace}>
          <input
            type="text"
            id="TargetEventPlace"
            className={s.TargetEventPlaceInput}
            onChange={(e) =>
              setApplyTargetInfo((prev) => ({
                ...prev,
                TargetEventPlace: e.target.value,
              }))
            }
          />
          <label htmlFor="TargetEventPlace">경조장소</label>
        </div>
      </fieldset>

      <fieldset className={s.applyTargetBankField}>
        <div className={s.bankName}>
          <select
            name="bankName"
            id="bankName"
            className={s.bankNameInput}
            value={applyTargetBankInfo.bankName}
            onChange={(e) =>
              setApplyTargetBankInfo((prev) => ({
                ...prev,
                bankName: e.target.value,
              }))
            }
          >
            <option value="self">은행</option>
            <option value="self">은행</option>
            <option value="self">은행</option>
          </select>
          <label htmlFor="bankName">은행</label>
        </div>
        <div className={s.bankNumber}>
          <input
            type="text"
            id="bankNumber"
            className={s.bankNumberInput}
            onChange={(e) =>
              setApplyTargetBankInfo((prev) => ({
                ...prev,
                bankNumber: e.target.value,
              }))
            }
          />
          <label htmlFor="bankNumber">계좌번호</label>
        </div>
        <div className={s.accountHolder}>
          <input
            type="text"
            id="accountHolder"
            className={s.accountHolderInput}
            onChange={(e) =>
              setApplyTargetBankInfo((prev) => ({
                ...prev,
                accountHolder: e.target.value,
              }))
            }
          />
          <label htmlFor="accountHolder">예금주</label>
        </div>
      </fieldset>
      <button
        className={s.apply}
        onClick={() => console.log(eventType, applyTargetInfo)}
      >
        신청하기
      </button>
    </div>
  );
}
