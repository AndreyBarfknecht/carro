let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


// Configuração do tema escuro
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark-theme');
    
    // Salvar a preferência no localStorage
    if (document.documentElement.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark-theme');
        themeToggle.checked = true;
    }
});

// Configuração do idioma
const translations = {
    pt: {
        'login_title': 'login do usuário',
        'login_password': 'senha',
        'forgot_password': 'esqueceu sua senha',
        'click_here': 'clique aqui',
        'login_with': 'Ou faça login com',
        'no_account': 'não tem uma conta?',
        'create_account': 'crie uma',
        'home': 'Início',
        'vehicles': 'Veículos',
        'services': 'Serviços',
        'featured': 'Destaques',
        'reviews': 'Avaliações',
        'contact': 'Contato',
        'login': 'Entrar',
        'newsletter': 'Boletim',
        'subscribe': 'Inscrever-se',
        'email': 'Seu Email',
        'send': 'Enviar',
        'message': 'Mensagem',
        'name': 'Nome',
        'phone': 'Telefone',
        'find_car': 'encontre o seu carro',
        'explore_cars': 'Explorar Carros',
        'branches': 'filiais',
        'cars_sold': 'carros vendidos',
        'happy_clients': 'clientes satisfeitos',
        'new_cars': 'carros novos',
        'popular_vehicles': 'Veículos Populares',
        'new_model': 'novo modelo',
        'price': 'preço',
        'learn_more': 'saiba mais',
        'our_services': 'nossos serviços',
        'car_selling': 'venda de carros',
        'parts_repair': 'reparo de peças',
        'car_insurance': 'seguro automotivo',
        'battery_replacement': 'troca de bateria',
        'oil_change': 'troca de óleo',
        'support': 'suporte 24/7',
        'read_more': 'leia mais',
        'featured_cars': 'carros em destaque',
        'newsletter_title': 'inscreva-se para receber as últimas atualizações',
        'newsletter_text': 'Clique no botão Inscrever-se para receber mais atualizações sobre os novos modelos de carros.',
        'customer_reviews': 'avaliações dos clientes',
        'contact_us': 'fale conosco',
        'get_in_touch': 'entre em contato'
    },
    en: {
        'login_title': 'user login',
        'login_password': 'password',
        'forgot_password': 'forgot your password',
        'click_here': 'click here',
        'login_with': 'Or login with',
        'no_account': 'don\'t have an account?',
        'create_account': 'create one',
        'home': 'Home',
        'vehicles': 'Vehicles',
        'services': 'Services',
        'featured': 'Featured',
        'reviews': 'Reviews',
        'contact': 'Contact',
        'login': 'Login',
        'newsletter': 'Newsletter',
        'subscribe': 'Subscribe',
        'email': 'Your Email',
        'send': 'Send',
        'message': 'Message',
        'name': 'Name',
        'phone': 'Phone',
        'find_car': 'find your car',
        'explore_cars': 'Explore Cars',
        'branches': 'branches',
        'cars_sold': 'cars sold',
        'happy_clients': 'happy clients',
        'new_cars': 'new cars',
        'popular_vehicles': 'Popular Vehicles',
        'new_model': 'new model',
        'price': 'price',
        'learn_more': 'learn more',
        'our_services': 'our services',
        'car_selling': 'car selling',
        'parts_repair': 'parts repair',
        'car_insurance': 'car insurance',
        'battery_replacement': 'battery replacement',
        'oil_change': 'oil change',
        'support': '24/7 support',
        'read_more': 'read more',
        'featured_cars': 'featured cars',
        'newsletter_title': 'subscribe for latest updates',
        'newsletter_text': 'Click the Subscribe button to receive more updates about new car models.',
        'customer_reviews': 'customer reviews',
        'contact_us': 'contact us',
        'get_in_touch': 'get in touch'
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName.toLowerCase() === 'input') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

document.querySelector('#language-toggle').addEventListener('change', function() {
    const lang = this.checked ? 'en' : 'pt';
    updateLanguage(lang);
});

// Inicializar com português
updateLanguage('pt');