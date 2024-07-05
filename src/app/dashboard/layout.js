import Footer from "../ui/dashboard/footer/footer";
import Sidebara from "@/app/ui/dashboard/sidebara/sidebara";
import Navbara from "@/app/ui/dashboard/navbara/navabara";
import style from "@/app/ui/dashboard/dashboard.module.css";
import "../ui/globals.css";

const Layout = ({children}) => {
  return (
    <div className={style.container}>
        <div className={style.menu}>
            <Sidebara />
        </div>
        <div className={style.content}>
            <Navbara />
            {children}
            <Footer />
        </div>
    </div>
  )
}

export default Layout
