import React, {useEffect, useState} from 'react'

import style from './app.module.css'
import Admin from "./Admin/admin";
import react from "@vitejs/plugin-react";
import {Table} from "./components/Table/table";
import {Slider} from "./components/Slider/Slider";
import {Restaurant} from "./Pages/Restaurant/Restaurant";
import {Outlet} from "react-router-dom";
import {RestaurantsPage} from "./Pages/RestaurantsPage/RestaurantsPage";
import {useTranslation} from "react-i18next";





export function App() {
const {i18n} = useTranslation()


   return (
       <div className={style.app}>
           <button className="language-button" onClick={() => {
               i18n.changeLanguage('kz')
           }}>kz</button>
           <button className="language-button" onClick={() => {
               i18n.changeLanguage('ru')
           }}>ru</button>
           <button className="language-button" onClick={() => {
               i18n.changeLanguage('en')
           }}>en</button>
           <Outlet/>
       </div>
   )
};

