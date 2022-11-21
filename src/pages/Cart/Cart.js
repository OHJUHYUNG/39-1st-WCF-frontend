import React from 'react';
import CartFilled from './components/CartFilled';
import './Cart.scss';

export default function Cart() {
  return (
    <main className="container cart">
      <div className="cart-box">
        <div className="cart">
          <h1>장바구니</h1>
        </div>
      </div>

      <section className="cart-container">
        <div className="order-box">
          <CartFilled />
          {/* <div className="basket-img-box">
            <span className="basket-img" />
          </div>
          <p className="cart-empty">장바구니에 담긴 상품이 없습니다.</p> */}
        </div>
        <ul className="cart-info-list">
          <li className="cart-info dot">
            장바구니에 담긴 상품은 30일간 저장됩니다.
          </li>
          <li className="cart-info dot">
            SSF SHOP은 자사/입점사 제품별, 주문유형별 배송비 기준에 따라
            배송비가 별도 부과됩니다.
          </li>
          <li className="cart-info dot info-last">
            SSF SHOP은 동일 고객(ID기준)의 배송지가 일치하는 여러 건의 주문이
            있을 경우, 에코 프렌들리 정책 따른 친환경 소비를 위해 출고일을
            기준으로
            <br />
            자사 상품에 한해 합배송 서비스를 제공합니다.(일부 예외 브랜드 제외)
            <br />
            만약 합배송 되어 상품을 수령하셨을 경우, 모든 주문이 배송완료된 후
            결제한 배송비를 재계산하여 익일에 퍼플코인으로 돌려드립니다.
            <br />
            (단, 무료배송 쿠폰으로 결제한 배송비는 페이백 대상에서 제외)
          </li>
        </ul>
      </section>
    </main>
  );
}
