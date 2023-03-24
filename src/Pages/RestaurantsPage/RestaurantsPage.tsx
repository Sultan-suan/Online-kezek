import React, {useEffect, useState} from 'react';
import style from "../../app.module.css";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


type RestaurantType = {
    id: number;
    title: string;
    img: string;
    url: string;
}




export const RestaurantsPage = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

    useEffect(() => {
        fetch('https://online-kezek-test-production-5624.up.railway.app/api/restaurants/')
            .then(res => res.json())
            .then((data: any) => {
                setRestaurants(data)
            })
    }, [])

    return (
        <div>
            <div className={style.wrapper}>
                {
                    restaurants.map(r => {
                        return <div className={style.item} key={r.id}>
                            <h1>{r.title}</h1>
                            <p>{r.url}</p>
                            <button onClick={()=> {
                                navigate(`/restaurants/${r.id}`)
                            }
                            }>
                                {t("GO_TO_RESTAURANT")}
                            </button>
                            <img src={r.img} alt="r.title"/>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

