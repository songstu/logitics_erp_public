"use client";

import {
  Banknote,
  Clock,
  Eye,
  EyeOff,
  Lock,
  LogIn,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import s from "./page.module.css";
import Nav from "@/component/common/Nav.jsx";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [loginInfo, setLoginInfo] = useState({});

  // const goLogin = async () => {
  //     const res = await baseApi.post('/api/v1/employees/login', loginInfo);
  //     localStorage.setItem("키값", "넣을값");
  //     const 로컬스토리지꺼낸데이터 = localStorage.getItem('키값');
  //     // resister에서 api 호출 전에 토큰 값도 같이 던져준다
  // }

  const goLogin = async () => {
    try {
      const res = await baseApi.post("/api/v1/employees/login", {
        ...loginInfo,
      });

      const accessToken = res.data.data.accessToken;

      const employeeNo = res.data.data.employeeNo;
      const name = res.data.data.name;
      const departmentName = res.data.data.departmentName;
      const position = res.data.data.position;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);

        localStorage.setItem("employeeNo", employeeNo);
        localStorage.setItem("name", name);
        localStorage.setItem("departmentName", departmentName);
        localStorage.setItem("position", position);

        alert("로그인 성공");

        router.push("/test/info/resister");
      } else {
        alert("로그인 실패");
      }
    } catch (e) {
      console.error(e);
    } finally {
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getEmployees = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const employeeNo = localStorage.getItem("employeeNo");
        const name = localStorage.getItem("name");
        const departmentName = localStorage.getItem("departmentName");
        const position = localStorage.getItem("position");

        if (!token) return;

        const res = await baseApi.get("/api/v1/employees", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data.data);
      } catch (e) {
        console.error("직원 정보 로드 실패: ", e); // 👈
      }
    };

    getEmployees();
  }, []);

  return (
    <div className={s.pageWrap}>
      <Nav
        menu={[
          { classifyEn: "departmentTap", textKo: "인사관리" },
          { classifyEn: "attendanceTap", textKo: "근태관리" },
          { classifyEn: "payrollTap", textKo: "급여관리" },
          { classifyEn: "dailyWorkerTap", textKo: "일용직관리" },
        ]}
        crP={""}
      />
      <div className={s.panel}>
        <div className={s.leftPanel}>
          <div className={s.brand}>
            <div className={s.badge}>
              <ShieldCheck color="#93C5FD" size={15} />
              <p>Enterprise HR Solution</p>
            </div>
            <div className={s.headline}>
              <h1>스마트한 인사관리의</h1>
              <span>새로운 기준</span>
              <p>
                직원 채용부터 급여, 근태까지 <br /> 하나의 플랫폼으로
                관리하세요.
              </p>
            </div>
            <div className={s.stats}>
              <div className={s.s1}>
                <h2>2,400+</h2>
                <p>기업 도입</p>
              </div>
              <span></span>
              <div className={s.s2}>
                <h2>98%</h2>
                <p>고객 만족도</p>
              </div>
              <span></span>
              <div className={s.s3}>
                <h2>15년</h2>
                <p>서비스 운영</p>
              </div>
            </div>
          </div>
          <div className={s.features}>
            <div className={s.f1}>
              <div className={s.fIcon}>
                <Users color="#60A5FA" size={18} />
              </div>
              <div className={s.ft}>
                <h4>인사관리</h4>
                <p>조직도, 인사발령, 직원 정보 통합 관리</p>
              </div>
            </div>
            <div className={s.f2}>
              <div className={s.fIcon}>
                <Banknote color="#60A5FA" size={18} />
              </div>
              <div className={s.ft}>
                <h4>급여관리</h4>
                <p>자동 급여 계산, 세금 신고, 명세서 발송</p>
              </div>
            </div>
            <div className={s.f3}>
              <div className={s.fIcon}>
                <Clock color="#60A5FA" size={18} />
              </div>
              <div className={s.ft}>
                <h4>근태관리</h4>
                <p>출퇴근, 휴가, 초과근무 실시간 모니터링</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.rightPanel}>
          <div className={s.formCard}>
            <div className={s.formHeader}>
              <h2>로그인</h2>
              <p>계정에 로그인하여 업무를 시작하세요</p>
            </div>
            <fieldset className={s.fields}>
              <div className={s.ef}>
                <label htmlFor="email">이메일</label>
                <div className={s.ei}>
                  <Mail color="#9CA3AF" size={18} />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="이메일 주소를 입력하세요"
                    onChange={(e) =>
                      setLoginInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className={s.pf}>
                <label htmlFor="password">비밀번호</label>
                <div className={s.pi}>
                  <Lock color="#9CA3AF" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="비밀번호를 입력하세요"
                    onChange={(e) =>
                      setLoginInfo((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                  <div className={s.passwordToggle}>
                    <input
                      type="checkbox"
                      id="passwordToggleInput"
                      className={s.passwordToggleInput}
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label
                      htmlFor="passwordToggleInput"
                      className={s.passwordToggleLabel}
                    >
                      <span className={s.eye}>
                        <Eye color="#9CA3AF" size={18} />
                      </span>
                      <span className={s.eyeoff}>
                        <EyeOff color="#9CA3AF" size={18} />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className={s.opts}>
                <div className={s.rem}>
                  <input
                    type="checkbox"
                    id="staySignedInput"
                    className={s.staySignedInput}
                  />
                  <label
                    htmlFor="staySignedInput"
                    className={s.staySignedLabel}
                  >
                    로그인 상태 유지
                  </label>
                </div>
                <span className={s.findPassword}>비밀번호 찾기</span>
              </div>
            </fieldset>
            <div className={s.actions}>
              <div className={s.loginBtn} onClick={() => goLogin()}>
                <LogIn color="#ffffff" size={18} />
                로그인
              </div>
              <span>또는</span>
              <div className={s.kakaoLogin}>
                <img src="/kakaoLogin.png" alt="카카오 로그인" />
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
  );
}
