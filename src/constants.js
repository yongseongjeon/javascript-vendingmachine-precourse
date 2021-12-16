export const TABLE = {
  COIN_ID: "charge-table",
  COIN_HEAD: ["동전", "갯수"],
  COIN_BODY: ["500원", "100원", "50원", "10원"],
  PRODUCT_ID: "product-manage-item",
  PRODUCT_HEAD: ["상품명", "가격", "수량"],
  PRODUCT_BODY: [],
  PURCHASE_ID: "product-purchase-item",
  PURCHASE_HEAD: ["상품명", "가격", "수량", "구매"],
  PURCHASE_BODY: ["콜라", "사이다"],
};

export const ID = {
  ROOT: "app",
  COIN_BODY: [
    "vending-machine-coin-500-quantity",
    "vending-machine-coin-100-quantity",
    "vending-machine-coin-50-quantity",
    "vending-machine-coin-10-quantity",
  ],
};

export const STR = {
  TITLE: "🥤자판기🥤",
  TAB_ADD_PRODUCT: "상품 관리",
  TAB_MANAGE: "잔돈 충전",
  TAB_PURCHASE_PRODUCT: "상품 구매",
  SUBTITLE_ADD_PRODUCT: "상품 추가하기",
  SUBTITLE_PRODUCT_STATUS: "상품 현황",
  SUBTITLE_CHARGE: "자판기 동전 충전하기",
  SUBTITLE_HAS_COIN: "자판기가 보유한 동전",
  SUBTITLE_INPUT_MONEY: "금액 투입",
  SUBTITLE_CAN_PURCHASE_STATE: "구매할 수 있는 상품 현황",
  SUBTITLE_CHANGES: "잔돈",
};

export const INIT = {
  COINS: [{ "500원": 0 }, { "100원": 0 }, { "50원": 0 }, { "10원": 0 }],
};
