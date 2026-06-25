"use client";
import { Download, Plus } from "lucide-react";
import s from "./MainContent.module.css";
import Breadcrumb from "./breadcrumb.jsx";

export default function MainContent({
  breadcrumb,
  crP,
  contents1,
  contents2,
  onOpen,
}) {
  return (
    <div className={s.mainContent}>
      <Breadcrumb breadcrumb={breadcrumb} />

      <div className={s.pageHeaderRow}>
        <div className={s.pageTitle}>
          <h2>{crP.crPTable}</h2>
          <span>{crP.crPInfo}</span>
        </div>
        <div className={s.actionButtons}>
          <button className={s.excelBtn}>
            <Download size={14} color="#374151" />
            <p>PDF 다운로드</p>
          </button>
          <button className={s.newBtn} onClick={onOpen}>
            <Plus size={14} color="#FFFFFF" />
            <p>{crP.plusBtnText}</p>
          </button>
        </div>
      </div>

      {contents1}

      {contents2}
    </div>
  );
}
