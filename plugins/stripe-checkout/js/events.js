document.addEventListener("DOMContentLoaded", function()
{

    /***********************************************************/
    /* Add to Cart buttons: data-add-to-cart="sku"
    /***********************************************************/
    document.addEventListener('click', function (event) {
        if (!event.target.matches('[data-add-to-cart]')) return;
        event.preventDefault();

        const button = event.target;
        const quantity = button.dataset.addToCartQuantity || 1;
        const sku = button.dataset.addToCart;
        const extras = button.dataset.addToCartExtras ? JSON.parse(button.dataset.addToCartExtras) : null;

        StripeCheckout.addProduct(sku, quantity, extras);
    }, false);


    /***********************************************************/
    /* Clear Cart buttons: data-clear-cart
    /***********************************************************/
    document.addEventListener('click', function (event) {
        if (!event.target.matches('[data-clear-cart]')) return;
        event.preventDefault();

        StripeCheckout.clearCart();
        //location.reload();
        $( "#default" ).load(window.location.href + " #default" );
    }, false);


    /***********************************************************/
    /* Increase Quantity buttons: data-increase-quantity="sku"
    /***********************************************************/
    document.addEventListener('click', function (event) {
        if (!event.target.matches('[data-increase-quantity]')) return;
        event.preventDefault();

        const button = event.target;
        const quantity = button.dataset.increaseQuantity ? button.dataset.increaseQuantity : 1;
        const sku = button.dataset.itemSku;

        StripeCheckout.increaseQuantity(sku, quantity);
    }, false);


    /***********************************************************/
    /* Decrease Quantity buttons: data-increase-quantity="sku"
    /***********************************************************/
    document.addEventListener('click', function (event) {
        if (!event.target.matches('[data-decrease-quantity]')) return;
        event.preventDefault();

        const button = event.target;
        const quantity = button.dataset.decreaseQuantity || -1;
        const sku = button.dataset.itemSku;

        StripeCheckout.increaseQuantity(sku, quantity);
    }, false);


    /***********************************************************/
    /* Remove product buttons: data-remove-from-cart="sku"
    /***********************************************************/
    document.addEventListener('click', function (event) {
        if (!event.target.matches('[data-remove-from-cart]')) return;
        event.preventDefault();

        const button = event.target;
        const sku = button.dataset.removeFromCart;
        StripeCheckout.removeProduct(sku);
        //$( "#default" ).load(window.location.href + " #default" );
        location.reload();
    }, false);

    /***********************************************************/
    /* Redirect to Checkout Button: data-redirect-to-checkout
    /***********************************************************/
    document.addEventListener('click', function (event) {
        if (!event.target.matches('[data-redirect-to-checkout]')) return;
        event.preventDefault();
        StripeCheckout.goToCheckout();

    }, false);

});
