// Toggle Mobile Menu
const menuBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');
menuBtn.onclick = () => menu.classList.toggle('active');

// Language Logic
let index = 0;
const langs = ['AR', 'EN', 'FR'];
const data = {
    'AR': {
        'nav-home': 'الرئيسية', 'nav-store': 'المتجر', 'nav-specs': 'المواصفات', 'buy-now': 'اشتري الآن',
        'tagline': 'مستقبل الترفيه وصل', 'hero-p': 'قوة هائلة في حجم صغير. استمتع بدقة 4K فائقة ووصول غير محدود.',
        'explore': 'اكتشف الجهاز', 'store-title': 'اختر عتادك', 'order': 'اطلب عبر واتساب'
    },
    'EN': {
        'nav-home': 'Home', 'nav-store': 'Store', 'nav-specs': 'Specs', 'buy-now': 'Buy Now',
        'tagline': 'THE FUTURE OF FUN', 'hero-p': 'Mighty power in a tiny size. Enjoy Ultra 4K and unlimited global content.',
        'explore': 'Explore Device', 'store-title': 'Choose Your Gear', 'order': 'Order via WhatsApp'
    }
};

function cycleLanguage() {
    index = (index + 1) % langs.length;
    const l = langs[index];
    document.getElementById('current-lang').textContent = l;
    document.body.classList.toggle('rtl', l === 'AR');
    document.documentElement.dir = l === 'AR' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(data[l] && data[l][key]) el.textContent = data[l][key];
    });
}
function changeProductImage(imgSrc, element) {
    const mainImg = document.getElementById('main-product-img');
    
    // تأثير تلاشي بسيط عند التغيير
    mainImg.style.opacity = '0';
    mainImg.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        mainImg.src = imgSrc;
        mainImg.style.opacity = '1';
        mainImg.style.transform = 'scale(1)';
    }, 200);

    // تحديث الحالة النشطة (Active) للصور المصغرة
    document.querySelectorAll('.thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });
    element.classList.add('active');
}