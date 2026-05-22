
import s from"./Aside.module.css";

export default function Aside({dummy}) {

    // const dummy = [
    //     {
    //         menu1:{icon:'/User.png', menu1Name:'인사정보'},
    //         menu2:['인사정보등록', '사원명수/인사기록카드', '인사발령등록']
    //     },
    //     {
    //         menu1:{icon:'/HeartHandshake.png', menu1Name:'경조비관리'},
    //         menu2:['경조비신청', '경조비신청현황']
    //     },
    //     {
    //         menu1:{icon:'/FileText.png', menu1Name:'증명서관리'},
    //         menu2:['증명서발급']
    //     }
    // ]

    return (

        <header>
            <div className={s.sidebar}>
                {dummy.map((item, index) => (
                    <ul key={index}>
                        <li className={s.group}>
                            <img src={item.menu1.icon} alt={item.menu1.menu1Name} />
                            <p>{item.menu1.menu1Name}</p>
                        </li>

                        {item.menu2.map((subItem, subIndex) => (
                            <li className={`${s.sub} ${subItem === '인사정보등록' ? s.currentPage : ''}`} key={subIndex}>{subItem}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </header>
        
        // <div className={s.sidebar}>
        //     <div className={s.group}>
        //         <img src="#" alt="user" />
        //         <p>인사정보</p>
        //     </div>
        //     <ul className={s.info}>
        //         <li>인사정보등록</li>
        //     </ul>
        //     <p className={s.group}>경조비</p>
        //     <p className={s.group}>증명서</p>
        // </div>
    )
} 