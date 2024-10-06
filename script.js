const btn1 =  document.getElementById('Contact');
const div1 =  document.getElementById('contact-me');
const btn =  document.getElementById('About');
const div =  document.getElementById('about-me');
btn.addEventListener('click',() => {

div.textContent =  "[AS] is a fashion-forward clothing brand that embodies the perfect blend of style, comfort, and individuality. Our mission is to provide high-quality, on-trend apparel that inspires confidence and self-expression. From casual everyday wear to statement pieces for special occasions, our collections are designed to make you feel empowered and authentic. With a focus on sustainable practices and exceptional craftsmanship, we strive to create clothing that not only looks great but also makes you feel good about what you're wearing.";
div1.removeChild();
});
btn1.addEventListener('click',() => {
div1.textContent =  "Email: Shumailahmad97th@gmail.com     Phone:0687283012"
div.removeChild();

    });


    const btn2 =  document.getElementById('info');
    const div2 =  document.getElementById('info-me');
    btn2.addEventListener('click',() => {
    div2.innerText =  '';
        });
    
        

