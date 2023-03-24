import React from 'react';
import style from './table.module.css';
import Lottie from 'lottie-react';
import Loading from '../../assets/animation/loading.json';
import notFound from '../../assets/animation/not-found.json';
import Slider from 'react-slick';
import { OrderType } from '../../Pages/Restaurant/Restaurant';

export type TablePropsType = {
    title: string;
    isLoading: boolean;
    orders: OrderType[];
    status: 'ready' | 'not_ready';
    onClick: (id: number, is_ready: boolean) => void
};

const tableStyle = {
    ready: {
        border: '1px solid green',
    },
    not_ready: {
        border: '1px solid orange',
    },
};

export const Table = (props: TablePropsType) => {
    const orders = props.orders.length ? (
        props.orders.map((order) => {
            return (
                <div key={order.id} className={style.item}>
                    <button style={tableStyle[props.status]} onClick={() => props.onClick(order.id, !order.is_ready)}>{order.key}</button>
                </div>
            );
        })
    ) : (
        <Lottie animationData={notFound} />
    );

    return (
        <div className={style.table}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div className={props.isLoading || !props.orders.length ? style.flex : style.grid} style={tableStyle[props.status]}>
                {props.isLoading ? <Lottie animationData={Loading} /> : orders}
            </div>
        </div>
    );
};
