import React from 'react';
import styles from './ProductView.module.css';

export default function ProductView(props) {

  const data = props.location.state;
    
  const productData = props.getProductInfo(props.match.params.id);

    console.log(productData)

  return (
    <div>
        <button onClick={() => props.history.goBack()}>Back</button>
        <div className={ styles.product }>
          <img src={productData.image} className={styles.image_products} />
          <div className={ styles.infoSection }>
            <h1>{ productData.name }</h1>
            <h3>{ productData.seller }</h3>
            <h2>${ productData.promotion_price }</h2>
            <h2>${ productData.original_price }</h2>

            <div>
              <ul>
                {/* { productData.promos.map((promo, index) => <li key={index}>{promo}</li>) } */}
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}