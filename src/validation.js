export const canPurchase = (curMoney, prod) => {
    const isEnoughMoney = curMoney >= prod.price;
    const isEnoughQuantity = prod.quantity;
    return isEnoughMoney && isEnoughQuantity;
}