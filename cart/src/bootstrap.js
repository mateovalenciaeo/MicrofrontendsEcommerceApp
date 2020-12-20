import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    el.innerHTML = cartText;
};

// Solution to run the App in the development environment and in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-dev');
    if (el) {
        mount(el);
    }
}

// Solution to run this file in development or production throught the Container App
export { mount };
