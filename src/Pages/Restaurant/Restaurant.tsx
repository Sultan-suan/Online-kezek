import React, {useEffect, useState} from 'react';
import {Table} from '../../components/Table/table';
import {Slider} from '../../components/Slider/Slider';
import {useNavigate, useParams} from "react-router-dom";
import style from './Restaurant.module.css'

export type OrderType = {
    id: number;
    key: string;
    is_ready: boolean;
};

export const Restaurant = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const intervalId = setInterval(() => {
            fetch(`https://online-kezek-test-production-5624.up.railway.app/api/restaurants/${params.id}/orders/`)
                .then((response) => response.json())
                .then((data: { orders: OrderType[] }) => {
                    setOrders(data.orders);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const gettingReadyOrders = orders.filter((order) => !order.is_ready);
    const readyOrders = orders.filter((order) => order.is_ready);

    const onItemClicked = (id: number, is_ready: boolean) => {
        fetch(`https://online-kezek-test-production-5624.up.railway.app/api/orders/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                is_ready
            }),
        })
            .then(res => res.json())
            .then((data: any) => {});
    }

    return (
        <div className="App">
            <div className={style.disabled}>
            <button onClick={() => {
                navigate(-1)
            }
            }>back to restaurant
            </button>
            <Table orders={gettingReadyOrders} title="GettingReady" status="not_ready" isLoading={loading} onClick={onItemClicked}/>
            <Table orders={readyOrders} title="Ready" status="ready" isLoading={loading} onClick={onItemClicked}/>
            <Slider/>
        </div>
        </div>
    );
};
