export function calculatePrice (data = [], priceAccessor, quantityAccessor, discountAccessor) {
    let price = () => 0, quantity = () => 0, discount = () => 0;

    // string version
    if( typeof priceAccessor === 'string') price = (item) => item[priceAccessor]
    if(typeof quantityAccessor === 'string') quantity = (item) => item[quantityAccessor]
    if(typeof discountAccessor === 'string') discount = (item) => item[discountAccessor]

    //number version
    if(typeof priceAccessor === 'number') price = () => priceAccessor
    if(typeof quantityAccessor === 'number') quantity = () => quantityAccessor
    if(typeof discountAccessor === 'number') discount = () => discountAccessor

    //function version
    if(typeof priceAccessor === 'function') price = priceAccessor
    if(typeof quantityAccessor === 'function') quantity = quantityAccessor
    if(typeof discountAccessor === 'function')  discount = discountAccessor
    
    return data.reduce((total, item) => total += (price(item) - discount(item) || 0) * quantity(item), 0 )

}


export function calculateVat (price, vat) {
    return price * vat / 100
}


export function calculateTotal (subTotal, vat, discount) {
    return subTotal + vat - discount
}