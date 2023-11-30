import React from 'react';
import './style.css';
import Head from '../head';
import Item from '../item';
function BasketModal() {
    return (
        <div className='BasketModal'>
            <div>
                <Head title='Корзина' closeBtn={true}/> 
                <Item/>
            </div>
        </div>
    );
}

export default BasketModal