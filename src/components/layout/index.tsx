import React from "react"
//import { Footer } from "./footer"
import { Header } from "./header"


export const Layout:React.FC<React.PropsWithChildren> = (/*{children}*/) =>{
    /*return(
        <React.Fragment>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </React.Fragment>
    )*/
   return(
        <React.Fragment>
            <Header/>
        </React.Fragment>
    )
}