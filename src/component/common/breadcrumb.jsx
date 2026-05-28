import { ChevronRight, House } from "lucide-react";
import s from"./breadcrumb.module.css";

export default function Breadcrumb({breadcrumb}) {
    return(
        <div className={s.breadcrumb}>
            <House size={12} color="#9CA3AF" />
            {breadcrumb.map((item, index) => (
                <span key={index}>
                    <ChevronRight size={12} color="#9CA3AF" />
                    <p>{item}</p>
                </span>
            ))}
        </div>
    )
}
