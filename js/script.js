// Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const navItems = document.getElementById('nav-items');
        
        mobileMenuButton.addEventListener('click', function() {
            const isOpen = navItems.classList.toggle('active');
            document.body.classList.toggle('menu-open', isOpen);
            this.setAttribute('aria-expanded', String(isOpen));
            this.setAttribute('aria-label', isOpen ? 'Закрити меню' : 'Відкрити меню');
        });
        
        // Dropdown functionality
        document.addEventListener('DOMContentLoaded', function() {
            const navButtons = document.querySelectorAll('.nav-button');
            
            // Handle button click for mobile
            navButtons.forEach(button => {
                const dropdownId = button.getAttribute('data-dropdown') + '-dropdown';
                button.setAttribute('type', 'button');
                button.setAttribute('aria-controls', dropdownId);
                button.setAttribute('aria-expanded', 'false');
                button.addEventListener('click', function() {
                    const dropdown = document.getElementById(dropdownId);
                    
                    // Close all other dropdowns
                    document.querySelectorAll('.dropdown').forEach(d => {
                        if (d.id !== dropdownId) {
                            d.classList.remove('active');
                            const otherButton = document.querySelector(`[aria-controls="${d.id}"]`);
                            if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
                        }
                    });
                    
                    // Toggle current dropdown
                    const isOpen = dropdown.classList.toggle('active');
                    this.setAttribute('aria-expanded', String(isOpen));
                });
            });
            
            // Handle hover for desktop
            const navItems = document.querySelectorAll('.nav-item');
            
            navItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    if (window.innerWidth >= 992) {
                        const button = this.querySelector('.nav-button');
                        const dropdownId = button.getAttribute('data-dropdown') + '-dropdown';
                        const dropdown = document.getElementById(dropdownId);
                        
                        // Close all other dropdowns
                        document.querySelectorAll('.dropdown').forEach(d => {
                            d.classList.remove('active');
                        });
                        
                        // Open current dropdown
                        dropdown.classList.add('active');
                    }
                });
                
                item.addEventListener('mouseleave', function() {
                    if (window.innerWidth >= 992) {
                        const button = this.querySelector('.nav-button');
                        const dropdownId = button.getAttribute('data-dropdown') + '-dropdown';
                        const dropdown = document.getElementById(dropdownId);
                        
                        // Close current dropdown
                        dropdown.classList.remove('active');
                    }
                });
            });
            
            // Language selector functionality
            const languageButton = document.getElementById('language-button');
            const languageDropdown = document.getElementById('language-dropdown');
            const languageItems = document.querySelectorAll('.language-item');
            
            languageButton.addEventListener('click', function() {
                // Close all other dropdowns
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                
                // Toggle language dropdown
                const isOpen = languageDropdown.classList.toggle('active');
                languageButton.setAttribute('aria-expanded', String(isOpen));
            });
            
            // Modal functionality
            const modalTriggers = document.querySelectorAll('[data-modal]');
            const modalCloseButtons = document.querySelectorAll('.modal-close, .modal-back');
            const modalOverlays = document.querySelectorAll('.modal-overlay');
            
            // Open modal
            modalTriggers.forEach(trigger => {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    const modalId = this.getAttribute('data-modal') + '-modal';
                    const modal = document.getElementById(modalId);
                    
                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden'; // Prevent scrolling
                    }
                    
                    // Close dropdown after clicking
                    const dropdown = this.closest('.dropdown');
                    if (dropdown) {
                        dropdown.classList.remove('active');
                    }
                });
            });
            
            // Close modal with close button
            modalCloseButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const modal = this.closest('.modal-overlay');
                    modal.classList.remove('active');
                    document.body.style.overflow = ''; // Restore scrolling
                });
            });
            
            // Close modal when clicking outside
            modalOverlays.forEach(overlay => {
                overlay.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.remove('active');
                        document.body.style.overflow = ''; // Restore scrolling
                    }
                });
            });
            
            // Comprehensive translations for all website content
            const translations = {
                 // Russian translation (already provided)
  ru: {
    // Header and Navigation
    brand: "PartnerHub",
    language: "RU",
    taxi: "Такси",
    delivery: "Доставка",
    employment: "Трудоустройство / Сотрудничество",
    forFleets: "Для автопарков",
    forNewOffers: "Для новых предложений / коллабораций",
    contacts: "Контакты",

    // Dropdown items - Taxi
    driverDocs: "Документы для водителя",
    vehicleDocs: "Документы для машины",
    docAddresses: "Адреса для получения документов",
    pricing: "Ценник",
    chatConsultant: "Чат с консультантом",

    // Dropdown items - Delivery
    courierDocs: "Документы для курьера",
    transportMode: "Способ передвижения",
    deliveryPricing: "Ценник",

    // Dropdown items - Employment
    taxiEmployment: "Трудоустройство для водителя такси",
    courierEmployment: "Трудоустройство для курьера",
    b2b: "Сотрудничество по B2B",

    // Dropdown items - Fleets
    getExtracts: "Хочу выписы на свои авто под вашего партнера",
    rentVehicles: "Хочу сдать вам машины и просто получать прибыль",
    subleasing: "Сотрудничество субаренды (3 сторонний договор)",

    // Dropdown items - Offers
    collaborationProposal: "У меня есть предложение о коллаборации",
    cooperationOffer: "У меня предложение о сотрудничестве",

    // Dropdown items - Contacts
    telegram: "Телеграм",
    phone: "Телефон: +48 794 736 063",
    email: "Написать email",

    // Welcome section
    welcomePartner: "Приветствуем",
    noHiddenFees: "🚖 100 злотых в неделю — без скрытых оплат",
    bonus: "🎁 Бонус за каждого приведённого друга",
    promotions: "🎉 Акции и розыгрыши",
    legalization: "🌍 Легализация под ключ (приглашение на визу, Карта Побыту)",
    officialEmployment: "📝 Официальное трудоустройство",
    joinTeam: "Присоединяйтесь к нам",

    // About section
    aboutUs: "О НАС",
    aboutIntro:
      "PartnerHub — это больше, чем просто сервис такси. Мы – команда профессионалов с многолетним опытом в сфере перевозок, которые знают, что действительно важно для водителей и автопарков. Мы сами прошли этот путь и понимаем все его нюансы.",
    aboutDriver:
      "🚖 Водитель – это партнёр, а не работник\nМы строим долгосрочные и доверительные отношения с каждым, кто сотрудничает с нами. В PartnerHub вы не просто выполняете заказы – вы становитесь частью команды, где вас ценят и уважают.",
    aboutLanguage:
      "🌍 Языковой барьер – не проблема\nМы знаем, как сложно начинать работу в новой стране, особенно если есть сложности с языком. В PartnerHub мы помогаем адаптироваться и решать организационные вопросы, чтобы вы могли сосредоточиться на главном – своей работе.",
    aboutPriorities:
      "⚡ Наши приоритеты: лояльность, качество, скорость\n• Лояльность – уважение и честное отношение к каждому водителю.\n• Качество – прозрачные условия работы и поддержка на каждом этапе.\n• Скорость – мы знаем, насколько важен быстрый старт, поэтому делаем всё, чтобы вы могли выйти на линию без лишних задержек.",
    aboutJoin: "Присоединяйтесь к PartnerHub – здесь ценят ваш труд, поддерживают и помогают развиваться!",

    // Partners section
    ourPartners: "Наши Партнеры",

    // Service section
    serviceTitle: "Автосервис с низкими ценами и качественным обслуживанием",
    serviceDescription:
      "Мы предлагаем комплексные услуги автосервиса для водителей по специальным тарифам. Поддерживайте свой автомобиль в идеальном состоянии с нашей профессиональной командой.",
    regularMaintenance: "Регулярное обслуживание",
    maintenanceDesc: "Поддерживайте свой автомобиль в отличном состоянии с нашим регулярным техническим обслуживанием",
    repairs: "Ремонт",
    repairsDesc: "Профессиональный ремонт для всех марок и моделей автомобилей",
    tireService: "Шиномонтаж",
    tireDesc: "Замена, ротация и балансировка шин",
    partsReplacement: "Замена запчастей",
    partsDesc: "Качественные запчасти по конкурентным ценам",
    signUpService: "Запишите меня на сервис",

    // Footer
    socialSubscribe: "Подпишитесь на наши социальные сети",
    quickLinks: "Быстрые ссылки",
    home: "Главная",
    services: "Услуги",
    contact: "Контакты",
    contactUs: "Свяжитесь с нами",
    address: "Ul. Szczęsna 26; 02-454 Warszawa",
    phoneNumber: "+48 794 736 063",
    copyright: "© 2025 PartnerHub. Все права защищены.",

    // Modal titles
    driverDocsTitle: "Документы для водителя",
    vehicleDocsTitle: "Документы для автомобиля",
    docAddressesTitle: "Адреса для получения документов",
    pricingTitle: "Стоимость оформления документов",
    taxiEmploymentTitle: "Трудовой договор: условия трудоустройства",
    b2bTitle: "Сотрудничество по B2B",
    fleetExtractsTitle: "Выпис из лицензии на авто",
    fleetRentTitle: "Аренда авто под партнёра",
    fleetSubleasingTitle: "Субаренда / Трёхсторонний договор",

    // Curtains
    clickToOpen: "Нажмите, чтобы открыть",

    // Common modal elements
    backToMain: "Вернуться на главную",
  },

  // Polish translation
  pl: {
    // Header and Navigation
    brand: "PartnerHub",
    language: "PL",
    taxi: "Taxi",
    delivery: "Dostawa",
    employment: "Zatrudnienie / Współpraca",
    forFleets: "Dla flot",
    forNewOffers: "Dla nowych ofert / współpracy",
    contacts: "Kontakty",

    // Dropdown items - Taxi
    driverDocs: "Dokumenty dla kierowcy",
    vehicleDocs: "Dokumenty dla samochodu",
    docAddresses: "Adresy do odbioru dokumentów",
    pricing: "Cennik",
    chatConsultant: "Czat z konsultantem",

    // Dropdown items - Delivery
    courierDocs: "Dokumenty dla kuriera",
    transportMode: "Sposób transportu",
    deliveryPricing: "Cennik",

    // Dropdown items - Employment
    taxiEmployment: "Zatrudnienie dla kierowcy taxi",
    courierEmployment: "Zatrudnienie dla kuriera",
    b2b: "Współpraca B2B",

    // Dropdown items - Fleets
    getExtracts: "Chcę wyciągi na swoje auta pod Twojego partnera",
    rentVehicles: "Chcę wynająć Wam samochody i po prostu zarabiać",
    subleasing: "Współpraca w zakresie podnajmu (umowa 3-stronna)",

    // Dropdown items - Offers
    collaborationProposal: "Mam propozycję współpracy",
    cooperationOffer: "Mam ofertę współpracy",

    // Dropdown items - Contacts
    telegram: "Telegram",
    phone: "Telefon: +48 794 736 063",
    email: "Napisz email",

    // Welcome section
    welcomePartner: "Witamy",
    noHiddenFees: "🚖 100 złotych tygodniowo — bez ukrytych opłat",
    bonus: "🎁 Bonus za każdego przyprowadzonego przyjaciela",
    promotions: "🎉 Promocje i konkursy",
    legalization: "🌍 Legalizacja pod klucz (zaproszenie na wizę, Karta Pobytu)",
    officialEmployment: "📝 Oficjalne zatrudnienie",
    joinTeam: "Dołącz do nas",

    // About section
    aboutUs: "O NAS",
    aboutIntro:
      "PartnerHub to więcej niż tylko usługa taksówkowa. Jesteśmy zespołem profesjonalistów z wieloletnim doświadczeniem w branży transportowej, którzy wiedzą, co jest naprawdę ważne dla kierowców i flot. Sami przeszliśmy tę drogę i rozumiemy wszystkie jej niuanse.",
    aboutDriver:
      "🚖 Kierowca to partner, a nie pracownik\nBudujemy długoterminowe i zaufane relacje z każdym, kto z nami współpracuje. W PartnerHub nie tylko realizujesz zamówienia - stajesz się częścią zespołu, gdzie jesteś ceniony i szanowany.",
    aboutLanguage:
      "🌍 Bariera językowa to nie problem\nWiemy, jak trudno jest zacząć pracę w nowym kraju, zwłaszcza jeśli masz trudności z językiem. W PartnerHub pomagamy Ci się zaadaptować i rozwiązywać kwestie organizacyjne, abyś mógł skupić się na najważniejszym - swojej pracy.",
    aboutPriorities:
      "⚡ Nasze priorytety: lojalność, jakość, szybkość\n• Lojalność - szacunek i uczciwe traktowanie każdego kierowcy.\n• Jakość - przejrzyste warunki pracy i wsparcie na każdym etapie.\n• Szybkość - wiemy, jak ważny jest szybki start, dlatego robimy wszystko, abyś mógł wyjść na linię bez zbędnych opóźnień.",
    aboutJoin: "Dołącz do PartnerHub - tutaj Twoja praca jest doceniana, wspierana i pomagamy Ci się rozwijać!",

    // Partners section
    ourPartners: "Nasi Partnerzy",

    // Service section
    serviceTitle: "Serwis samochodowy w niskich cenach i wysokiej jakości obsługa",
    serviceDescription:
      "Oferujemy kompleksowe usługi serwisu samochodowego dla kierowców po specjalnych stawkach. Utrzymuj swój samochód w idealnym stanie z naszym profesjonalnym zespołem.",
    regularMaintenance: "Regularna konserwacja",
    maintenanceDesc: "Utrzymuj swój samochód w doskonałym stanie dzięki naszej regularnej obsłudze technicznej",
    repairs: "Naprawy",
    repairsDesc: "Profesjonalna naprawa dla wszystkich marek i modeli samochodów",
    tireService: "Serwis opon",
    tireDesc: "Wymiana, rotacja i wyważanie opon",
    partsReplacement: "Wymiana części",
    partsDesc: "Wysokiej jakości części w konkurencyjnych cenach",
    signUpService: "Zapisz mnie na serwis",

    // Footer
    socialSubscribe: "Subskrybuj nasze media społecznościowe",
    quickLinks: "Szybkie linki",
    home: "Strona główna",
    services: "Usługi",
    contact: "Kontakt",
    contactUs: "Skontaktuj się z nami",
    address: "Ul. Szczęsna 26; 02-454 Warszawa",
    phoneNumber: "+48 794 736 063",
    copyright: "© 2023 PartnerHub. Wszelkie prawa zastrzeżone.",

    // Modal titles
    driverDocsTitle: "Dokumenty dla kierowcy",
    vehicleDocsTitle: "Dokumenty dla samochodu",
    docAddressesTitle: "Adresy do odbioru dokumentów",
    pricingTitle: "Koszt wyrobienia dokumentów",
    taxiEmploymentTitle: "Umowa o pracę: warunki zatrudnienia",
    b2bTitle: "Współpraca B2B",
    fleetExtractsTitle: "Wypis z licencji na auto",
    fleetRentTitle: "Wynajem auta pod partnera",
    fleetSubleasingTitle: "Podnajem / Umowa trójstronna",

    // Curtains
    clickToOpen: "Kliknij, aby otworzyć",

    // Common modal elements
    backToMain: "Powrót do strony głównej",
  },

  // Ukrainian translation
  uk: {
    // Header and Navigation
    brand: "PartnerHub",
    language: "UA",
    taxi: "Таксі",
    delivery: "Доставка",
    employment: "Працевлаштування / Співпраця",
    forFleets: "Для автопарків",
    forNewOffers: "Для нових пропозицій / колаборацій",
    contacts: "Контакти",

    // Dropdown items - Taxi
    driverDocs: "Документи для водія",
    vehicleDocs: "Документи для автомобіля",
    docAddresses: "Адреси для отримання документів",
    pricing: "Ціни",
    chatConsultant: "Чат з консультантом",

    // Dropdown items - Delivery
    courierDocs: "Документи для кур'єра",
    transportMode: "Спосіб пересування",
    deliveryPricing: "Ціни",

    // Dropdown items - Employment
    taxiEmployment: "Працевлаштування для водія таксі",
    courierEmployment: "Працевлаштування для кур'єра",
    b2b: "Співпраця по B2B",

    // Dropdown items - Fleets
    getExtracts: "Хочу виписки на свої авто під вашого партнера",
    rentVehicles: "Хочу здати вам машини і просто отримувати прибуток",
    subleasing: "Співпраця суборенди (3-сторонній договір)",

    // Dropdown items - Offers
    collaborationProposal: "У мене є пропозиція щодо колаборації",
    cooperationOffer: "У мене пропозиція про співпрацю",

    // Dropdown items - Contacts
    telegram: "Телеграм",
    phone: "Телефон: +48 794 736 063",
    email: "Написати email",

    // Welcome section
    welcomePartner: "Вітаємо",
    noHiddenFees: "🚖 100 злотих на тиждень — без прихованих оплат",
    bonus: "🎁 Бонус за кожного приведеного друга",
    promotions: "🎉 Акції та розіграші",
    legalization: "🌍 Легалізація під ключ (запрошення на візу, Карта Побиту)",
    officialEmployment: "📝 Офіційне працевлаштування",
    joinTeam: "Приєднуйтесь до нас",

    // About section
    aboutUs: "ПРО НАС",
    aboutIntro:
      "PartnerHub — це більше, ніж просто сервіс таксі. Ми – команда професіоналів з багаторічним досвідом у сфері перевезень, які знають, що дійсно важливо для водіїв та автопарків. Ми самі пройшли цей шлях і розуміємо всі його нюанси.",
    aboutDriver:
      "🚖 Водій – це партнер, а не працівник\nМи будуємо довгострокові та довірчі відносини з кожним, хто співпрацює з нами. В PartnerHub ви не просто виконуєте замовлення – ви стаєте частиною команди, де вас цінують і поважають.",
    aboutLanguage:
      "🌍 Мовний бар'єр – не проблема\nМи знаємо, як складно починати роботу в новій країні, особливо якщо є складнощі з мовою. В PartnerHub ми допомагаємо адаптуватися та вирішувати організаційні питання, щоб ви могли зосередитися на головному – своїй роботі.",
    aboutPriorities:
      "⚡ Наші пріоритети: лояльність, якість, швидкість\n• Лояльність – повага та чесне ставлення до кожного водія.\n• Якість – прозорі умови роботи та підтримка на кожному етапі.\n• Швидкість – ми знаємо, наскільки важливий швидкий старт, тому робимо все, щоб ви могли вийти на лінію без зайвих затримок.",
    aboutJoin: "Приєднуйтесь до PartnerHub – тут цінують вашу працю, підтримують і допомагають розвиватися!",

    // Partners section
    ourPartners: "Наші Партнери",

    // Service section
    serviceTitle: "Автосервіс з низькими цінами та якісним обслуговуванням",
    serviceDescription:
      "Ми пропонуємо комплексні послуги автосервісу для водіїв за спеціальними тарифами. Підтримуйте свій автомобіль в ідеальному стані з нашою професійною командою.",
    regularMaintenance: "Регулярне обслуговування",
    maintenanceDesc: "Підтримуйте свій автомобіль у відмінному стані з нашим регулярним технічним обслуговуванням",
    repairs: "Ремонт",
    repairsDesc: "Професійний ремонт для всіх марок і моделей автомобілів",
    tireService: "Шиномонтаж",
    tireDesc: "Заміна, ротація та балансування шин",
    partsReplacement: "Заміна запчастин",
    partsDesc: "Якісні запчастини за конкурентними цінами",
    signUpService: "Запишіть мене на сервіс",

    // Footer
    socialSubscribe: "Підпишіться на наші соціальні мережі",
    quickLinks: "Швидкі посилання",
    home: "Головна",
    services: "Послуги",
    contact: "Контакти",
    contactUs: "Зв'яжіться з нами",
    address: "Ul. Szczęsna 26; 02-454 Warszawa",
    phoneNumber: "+48 794 736 063",
    copyright: "© 2023 PartnerHub. Всі права захищені.",

    // Modal titles
    driverDocsTitle: "Документи для водія",
    vehicleDocsTitle: "Документи для автомобіля",
    docAddressesTitle: "Адреси для отримання документів",
    pricingTitle: "Вартість оформлення документів",
    taxiEmploymentTitle: "Трудовий договір: умови працевлаштування",
    b2bTitle: "Співпраця по B2B",
    fleetExtractsTitle: "Випис з ліцензії на авто",
    fleetRentTitle: "Оренда авто під партнера",
    fleetSubleasingTitle: "Суборенда / Тристоронній договір",

    // Curtains
    clickToOpen: "Натисніть, щоб відкрити",

    // Common modal elements
    backToMain: "Повернутися на головну",
  },

  // English translation
  en: {
    // Header and Navigation
    brand: "PartnerHub",
    language: "EN",
    taxi: "Taxi",
    delivery: "Delivery",
    employment: "Employment / Cooperation",
    forFleets: "For Fleets",
    forNewOffers: "For New Offers / Collaborations",
    contacts: "Contacts",

    // Dropdown items - Taxi
    driverDocs: "Driver Documents",
    vehicleDocs: "Vehicle Documents",
    docAddresses: "Document Collection Addresses",
    pricing: "Pricing",
    chatConsultant: "Chat with Consultant",

    // Dropdown items - Delivery
    courierDocs: "Courier Documents",
    transportMode: "Transportation Method",
    deliveryPricing: "Pricing",

    // Dropdown items - Employment
    taxiEmployment: "Taxi Driver Employment",
    courierEmployment: "Courier Employment",
    b2b: "B2B Cooperation",

    // Dropdown items - Fleets
    getExtracts: "I want extracts for my vehicles under your partner",
    rentVehicles: "I want to rent you cars and simply receive profit",
    subleasing: "Subleasing Cooperation (3-party agreement)",

    // Dropdown items - Offers
    collaborationProposal: "I have a collaboration proposal",
    cooperationOffer: "I have a cooperation offer",

    // Dropdown items - Contacts
    telegram: "Telegram",
    phone: "Phone: +48 794 736 063",
    email: "Send email",

    // Welcome section
    welcomePartner: "Welcome",
    noHiddenFees: "🚖 100 zloty per week — no hidden fees",
    bonus: "🎁 Bonus for each referred friend",
    promotions: "🎉 Promotions and giveaways",
    legalization: "🌍 Turnkey legalization (visa invitation, Residence Card)",
    officialEmployment: "📝 Official employment",
    joinTeam: "Join our team",

    // About section
    aboutUs: "ABOUT US",
    aboutIntro:
      "PartnerHub is more than just a taxi service. We are a team of professionals with years of experience in transportation who know what truly matters for drivers and fleets. We've walked this path ourselves and understand all its nuances.",
    aboutDriver:
      "🚖 The driver is a partner, not an employee\nWe build long-term and trusting relationships with everyone who works with us. At PartnerHub, you don't just fulfill orders – you become part of a team where you are valued and respected.",
    aboutLanguage:
      "🌍 Language barrier is not a problem\nWe know how difficult it is to start working in a new country, especially if there are language difficulties. At PartnerHub, we help you adapt and solve organizational issues so you can focus on what's important – your work.",
    aboutPriorities:
      "⚡ Our priorities: loyalty, quality, speed\n• Loyalty – respect and honest treatment for every driver.\n• Quality – transparent working conditions and support at every stage.\n• Speed – we know how important a quick start is, so we do everything to get you on the road without unnecessary delays.",
    aboutJoin: "Join PartnerHub – where your work is valued, supported, and you're helped to develop!",

    // Partners section
    ourPartners: "Our Partners",

    // Service section
    serviceTitle: "Auto service with low prices and quality maintenance",
    serviceDescription:
      "We offer comprehensive auto service for drivers at special rates. Keep your vehicle in perfect condition with our professional team.",
    regularMaintenance: "Regular Maintenance",
    maintenanceDesc: "Keep your vehicle in excellent condition with our regular technical maintenance",
    repairs: "Repairs",
    repairsDesc: "Professional repairs for all car makes and models",
    tireService: "Tire Service",
    tireDesc: "Replacement, rotation, and balancing of tires",
    partsReplacement: "Parts Replacement",
    partsDesc: "Quality parts at competitive prices",
    signUpService: "Sign me up for service",

    // Footer
    socialSubscribe: "Subscribe to our social media",
    quickLinks: "Quick Links",
    home: "Home",
    services: "Services",
    contact: "Contact",
    contactUs: "Contact Us",
    address: "Ul. Szczęsna 26; 02-454 Warszawa",
    phoneNumber: "+48 794 736 063",
    copyright: "© 2023 PartnerHub. All rights reserved.",

    // Modal titles
    driverDocsTitle: "Driver Documents",
    vehicleDocsTitle: "Vehicle Documents",
    docAddressesTitle: "Document Collection Addresses",
    pricingTitle: "Document Processing Cost",
    taxiEmploymentTitle: "Employment Contract: Terms of Employment",
    forUkrainians: "🇺🇦 For citizens of Ukraine",
    ukrainianDocsNeeded: "✅ Required documents:",
    ukrainianDoc1: "Passport",
    ukrainianDoc2: "Polish Identification Number (PESEL)",
	ukrainianNote1: "📌 If you have international protection, a resident card, a Pole's card, permanent residence permit or a diploma from a Polish university, be sure to take them with you.",
	ukrainianNote2: "📌 Students must also provide a student ID and a certificate from the educational institution.",
    b2bTitle: "B2B Cooperation",
    fleetExtractsTitle: "Vehicle License Extract",
    fleetRentTitle: "Vehicle Rental under Partner",
    fleetSubleasingTitle: "Subleasing / Three-party Agreement",

    // Curtains
    clickToOpen: "Click to open",

    // Common modal elements
    backToMain: "Return to main page",
  },

  // Georgian translation
  ge: {
    // Header and Navigation
    brand: "PartnerHub",
    language: "GE",
    taxi: "ტაქსი",
    delivery: "მიწოდება",
    employment: "დასაქმება / თანამშრომლობა",
    forFleets: "ავტოპარკებისთვის",
    forNewOffers: "ახალი შეთავაზებებისთვის / თანამშრომლობისთვის",
    contacts: "კონტაქტები",

    // Dropdown items - Taxi
    driverDocs: "მძღოლის დოკუმენტები",
    vehicleDocs: "ავტომობილის დოკუმენტები",
    docAddresses: "დოკუმენტების მიღების მისამართები",
    pricing: "ფასები",
    chatConsultant: "კონსულტანტთან ჩატი",

    // Dropdown items - Delivery
    courierDocs: "კურიერის დოკუმენტები",
    transportMode: "გადაადგილების საშუალება",
    deliveryPricing: "ფასები",

    // Dropdown items - Employment
    taxiEmployment: "ტაქსის მძღოლის დასაქმება",
    courierEmployment: "კურიერის დასაქმება",
    b2b: "B2B თანამშრომლობა",

    // Dropdown items - Fleets
    getExtracts: "მსურს ჩემი ავტომობილებისთვის ამონაწერები თქვენი პარტნიორის ქვეშ",
    rentVehicles: "მსურს გაქირავოთ მანქანები და უბრალოდ მივიღო მოგება",
    subleasing: "ქვეიჯარის თანამშრომლობა (3-მხარის ხელშეკრულება)",

    // Dropdown items - Offers
    collaborationProposal: "მაქვს თანამშრომლობის შეთავაზება",
    cooperationOffer: "მაქვს თანამშრომლობის წინადადება",

    // Dropdown items - Contacts
    telegram: "ტელეგრამი",
    phone: "ტელეფონი: +48 794 736 063",
    email: "ელფოსტის გაგზავნა",

    // Welcome section
    welcomePartner: "მოგესალმებით",
    noHiddenFees: "🚖 100 ზლოტი კვირაში — დამალული გადასახადების გარეშე",
    bonus: "🎁 ბონუსი ყოველი მოყვანილი მეგობრისთვის",
    promotions: "🎉 აქციები და გათამაშებები",
    legalization: "🌍 სრული ლეგალიზაცია (ვიზის მოწვევა, ბინადრობის ბარათი)",
    officialEmployment: "📝 ოფიციალური დასაქმება",
    joinTeam: "შემოგვიერთდით",

    // About section
    aboutUs: "ჩვენ შესახებ",
    aboutIntro:
      "PartnerHub არის მეტი, ვიდრე უბრალოდ ტაქსის სერვისი. ჩვენ ვართ პროფესიონალების გუნდი მრავალწლიანი გამოცდილებით ტრანსპორტირების სფეროში, რომლებმაც იციან, რა არის მნიშვნელოვანი მძღოლებისა და ავტოპარკებისთვის. ჩვენ თავად გავიარეთ ეს გზა და გვესმის მისი ყველა ნიუანსი.",
    aboutDriver:
      "🚖 მძღოლი არის პარტნიორი და არა თანამშრომელი\nჩვენ ვაშენებთ გრძელვადიან და ნდობაზე დაფუძნებულ ურთიერთობებს ყველასთან, ვინც ჩვენთან თანამშრომლობს. PartnerHub-ში თქვენ არ ასრულებთ მხოლოდ შეკვეთებს - თქვენ ხდებით გუნდის ნაწილი, სადაც თქვენ გაფასებენ და პატივს გცემენ.",
    aboutLanguage:
      "🌍 ენობრივი ბარიერი არ არის პრობლემა\nჩვენ ვიცით, რამდენად რთულია ახალ ქვეყანაში მუშაობის დაწყება, განსაკუთრებით თუ ენის სირთულეები გაქვთ. PartnerHub-ში ჩვენ გეხმარებით ადაპტაციაში და ორგანიზაციული საკითხების გადაჭრაში, რათა თქვენ შეძლოთ კონცენტრირება მთავარზე - თქვენს სამუშაოზე.",
    aboutPriorities:
      "⚡ ჩვენი პრიორიტეტებია: ლოიალურობა, ხარისხი, სიჩქარე\n• ლოიალურობა - პატივისცემა და პატიოსანი მოპყრობა ყველა მძღოლისადმი.\n• ხარისხი - გამჭვირვალე სამუშაო პირობები და მხარდაჭერა ყველა ეტაპზე.\n• სიჩქარე - ჩვენ ვიცით, რამდენად მნიშვნელოვანია სწრაფი დაწყება, ამიტომ ყველაფერს ვაკეთებთ იმისთვის, რომ თქვენ შეძლოთ გზაზე გასვლა ზედმეტი დაყოვნების გარეშე.",
    aboutJoin: "შემოუერთდით PartnerHub-ს - სადაც თქვენს შრომას აფასებენ, მხარს გიჭერენ და გეხმარებიან განვითარებაში!",

    // Partners section
    ourPartners: "ჩვენი პარტნიორები",

    // Service section
    serviceTitle: "ავტოსერვისი დაბალი ფასებით და ხარისხიანი მომსახურებით",
    serviceDescription:
      "ჩვენ გთავაზობთ ყოვლისმომცველ ავტოსერვისს მძღოლებისთვის სპეციალური ტარიფებით. შეინარჩუნეთ თქვენი ავტომობილი იდეალურ მდგომარეობაში ჩვენი პროფესიონალური გუნდის დახმარებით.",
    regularMaintenance: "რეგულარული მომსახურება",
    maintenanceDesc: "შეინარჩუნეთ თქვენი ავტომობილი შესანიშნავ მდგომარეობაში ჩვენი რეგულარული ტექნიკური მომსახურებით",
    repairs: "შეკეთება",
    repairsDesc: "პროფესიონალური შეკეთება ყველა მარკისა და მოდელის ავტომობილისთვის",
    tireService: "საბურავების სერვისი",
    tireDesc: "საბურავების შეცვლა, როტაცია და ბალანსირება",
    partsReplacement: "ნაწილების შეცვლა",
    partsDesc: "ხარისხიანი ნაწილები კონკურენტულ ფასებში",
    signUpService: "დამარეგისტრირეთ სერვისზე",

    // Footer
    socialSubscribe: "გამოიწერეთ ჩვენი სოციალური მედია",
    quickLinks: "სწრაფი ბმულები",
    home: "მთავარი",
    services: "სერვისები",
    contact: "კონტაქტი",
    contactUs: "დაგვიკავშირდით",
    address: "Ul. Szczęsna 26; 02-454 Warszawa",
    phoneNumber: "+48 794 736 063",
    copyright: "© 2023 PartnerHub. ყველა უფლება დაცულია.",

    // Modal titles
    driverDocsTitle: "მძღოლის დოკუმენტები",
    vehicleDocsTitle: "ავტომობილის დოკუმენტები",
    docAddressesTitle: "დოკუმენტების მიღების მისამართები",
    pricingTitle: "დოკუმენტების დამუშავების ღირებულება",
    taxiEmploymentTitle: "შრომითი ხელშეკრულება: დასაქმების პირობები",
    b2bTitle: "B2B თანამშრომლობა",
    fleetExtractsTitle: "ავტომობილის ლიცენზიის ამონაწერი",
    fleetRentTitle: "ავტომობილის გაქირავება პარტნიორის ქვეშ",
    fleetSubleasingTitle: "ქვეიჯარა / სამხრივი ხელშეკრულება",

    // Curtains
    clickToOpen: "დააჭირეთ გასახსნელად",

    // Common modal elements
    backToMain: "მთავარ გვერდზე დაბრუნება",
  },

  // Uzbek translation
  uz: {
    // Header and Navigation
    brand: "PartnerHub",
    language: "UZ",
    taxi: "Taksi",
    delivery: "Yetkazib berish",
    employment: "Ishga joylashish / Hamkorlik",
    forFleets: "Avtoparklarga",
    forNewOffers: "Yangi takliflar / hamkorliklar uchun",
    contacts: "Kontaktlar",

    // Dropdown items - Taxi
    driverDocs: "Haydovchi hujjatlari",
    vehicleDocs: "Avtomobil hujjatlari",
    docAddresses: "Hujjatlarni olish manzillari",
    pricing: "Narxlar",
    chatConsultant: "Konsultant bilan suhbat",

    // Dropdown items - Delivery
    courierDocs: "Kuryer hujjatlari",
    transportMode: "Harakatlanish usuli",
    deliveryPricing: "Narxlar",

    // Dropdown items - Employment
    taxiEmployment: "Taksi haydovchisi uchun ishga joylashish",
    courierEmployment: "Kuryer uchun ishga joylashish",
    b2b: "B2B hamkorlik",

    // Dropdown items - Fleets
    getExtracts: "Avtomobillarim uchun sizning hamkoringiz ostida ko'chirmalar olmoqchiman",
    rentVehicles: "Avtomobillarni sizga ijaraga berib, faqat foyda olmoqchiman",
    subleasing: "Subijara hamkorligi (3 tomonlama shartnoma)",

    // Dropdown items - Offers
    collaborationProposal: "Hamkorlik bo'yicha taklifim bor",
    cooperationOffer: "Hamkorlik bo'yicha taklifim bor",

    // Dropdown items - Contacts
    telegram: "Telegram",
    phone: "Telefon: +48 794 736 063",
    email: "Email yozish",

    // Welcome section
    welcomePartner: "Xush kelibsiz",
    noHiddenFees: "🚖 Haftasiga 100 zlotiy — yashirin to'lovlarsiz",
    bonus: "🎁 Har bir taklif qilingan do'st uchun bonus",
    promotions: "🎉 Aksiyalar va o'yinlar",
    legalization: "🌍 Kalit topshirish legalizatsiyasi (viza taklifi, Yashash kartasi)",
    officialEmployment: "📝 Rasmiy ishga joylashish",
    joinTeam: "Bizga qo'shiling",

    // About section
    aboutUs: "BIZ HAQIMIZDA",
    aboutIntro:
      "PartnerHub bu shunchaki taksi xizmati emas. Biz transport sohasida ko'p yillik tajribaga ega bo'lgan, haydovchilar va avtoparklar uchun nima muhimligini biladigan mutaxassislar jamoasimiz. Biz o'zimiz bu yo'lni bosib o'tganmiz va uning barcha nozik jihatlarini tushunamiz.",
    aboutDriver:
      "🚖 Haydovchi - bu xodim emas, hamkor\nBiz biz bilan hamkorlik qiladigan har bir kishi bilan uzoq muddatli va ishonchli munosabatlar quramiz. PartnerHub'da siz shunchaki buyurtmalarni bajarmaysiz - siz qadrlanadigan va hurmat qilinadigan jamoa a'zosiga aylanasiz.",
    aboutLanguage:
      "🌍 Til to'sig'i muammo emas\nBiz yangi mamlakatda ishlashni boshlash qanchalik qiyin ekanligini, ayniqsa til bilan qiyinchiliklar bo'lsa, bilamiz. PartnerHub'da biz sizga moslashishga va tashkiliy masalalarni hal qilishga yordam beramiz, shunda siz eng muhim narsaga - ishingizga e'tibor qaratishingiz mumkin.",
    aboutPriorities:
      "⚡ Bizning ustuvorliklarimiz: sodiqlik, sifat, tezlik\n• Sodiqlik - har bir haydovchiga hurmat va halol munosabat.\n• Sifat - shaffof ish sharoitlari va har bir bosqichda qo'llab-quvvatlash.\n• Tezlik - biz tez boshlashning qanchalik muhimligini bilamiz, shuning uchun sizni ortiqcha kechikishlarsiz yo'lga chiqishingiz uchun hamma narsani qilamiz.",
    aboutJoin:
      "PartnerHub'ga qo'shiling - bu yerda sizning ishingiz qadrlanadi, qo'llab-quvvatlanadi va rivojlanishingizga yordam beriladi!",

    // Partners section
    ourPartners: "Bizning Hamkorlarimiz",

    // Service section
    serviceTitle: "Past narxlar va sifatli xizmat ko'rsatish bilan avtoservis",
    serviceDescription:
      "Biz haydovchilarga maxsus tariflar bo'yicha keng qamrovli avtoservis xizmatlarini taklif etamiz. Avtomobilingizni bizning professional jamoamiz bilan mukammal holatda saqlang.",
    regularMaintenance: "Muntazam texnik xizmat ko'rsatish",
    maintenanceDesc: "Muntazam texnik xizmat ko'rsatish bilan avtomobilingizni ajoyib holatda saqlang",
    repairs: "Ta'mirlash",
    repairsDesc: "Barcha avtomobil markalari va modellari uchun professional ta'mirlash",
    tireService: "Shinalar xizmati",
    tireDesc: "Shinalarni almashtirish, aylantirish va muvozanatlash",
    partsReplacement: "Ehtiyot qismlarni almashtirish",
    partsDesc: "Raqobatbardosh narxlarda sifatli ehtiyot qismlar",
    signUpService: "Meni xizmatga yozing",

    // Footer
    socialSubscribe: "Ijtimoiy tarmoqlarimizga obuna bo'ling",
    quickLinks: "Tezkor havolalar",
    home: "Bosh sahifa",
    services: "Xizmatlar",
    contact: "Aloqa",
    contactUs: "Biz bilan bog'laning",
    address: "Ul. Szczęsna 26; 02-454 Warszawa",
    phoneNumber: "+48 794 736 063",
    copyright: "© 2023 PartnerHub. Barcha huquqlar himoyalangan.",

    // Modal titles
    driverDocsTitle: "Haydovchi hujjatlari",
    vehicleDocsTitle: "Avtomobil hujjatlari",
    docAddressesTitle: "Hujjatlarni olish manzillari",
    pricingTitle: "Hujjatlarni rasmiylashtirish narxi",
    taxiEmploymentTitle: "Mehnat shartnomasi: ishga joylashish shartlari",
    b2bTitle: "B2B hamkorlik",
    fleetExtractsTitle: "Avtomobil litsenziyasi ko'chirmasi",
    fleetRentTitle: "Hamkor ostida avtomobil ijarasi",
    fleetSubleasingTitle: "Subijara / Uch tomonlama shartnoma",

    // Curtains
    clickToOpen: "Ochish uchun bosing",

    // Common modal elements
    backToMain: "Bosh sahifaga qaytish",
  },

  // Armenian translation
  am: {
    // Header and Navigation
    brand: "PartnerHub",
    language: "AM",
    taxi: "Տաքսի",
    delivery: "Առաքում",
    employment: "Աշխատանք / Համագործակցություն",
    forFleets: "Ավտոպարկերի համար",
    forNewOffers: "Նոր առաջարկների / համագործակցության համար",
    contacts: "Կոնտակտներ",

    // Dropdown items - Taxi
    driverDocs: "Վարորդի փաստաթղթեր",
    vehicleDocs: "Ավտոմեքենայի փաստաթղթեր",
    docAddresses: "Փաստաթղթերի ստացման հասցեներ",
    pricing: "Գնացուցակ",
    chatConsultant: "Զրույց խորհրդատուի հետ",

    // Dropdown items - Delivery
    courierDocs: "Սուրհանդակի փաստաթղթեր",
    transportMode: "Տեղաշարժման միջոց",
    deliveryPricing: "Գնացուցակ",

    // Dropdown items - Employment
    taxiEmployment: "Տաքսու վարորդի աշխատանք",
    courierEmployment: "Սուրհանդակի աշխատանք",
    b2b: "B2B համագործակցություն",

    // Dropdown items - Fleets
    getExtracts: "Ցանկանում եմ քաղվածքներ իմ ավտոմեքենաների համար ձեր գործընկերոջ ներքո",
    rentVehicles: "Ցանկանում եմ ձեզ վարձակալության տալ մեքենաներ և պարզապես շահույթ ստանալ",
    subleasing: "Ենթավարձակալության համագործակցություն (3-կողմանի պայմանագիր)",

    // Dropdown items - Offers
    collaborationProposal: "Ես ունեմ համագործակցության առաջարկ",
    cooperationOffer: "Ես ունեմ համագործակցության առաջարկ",

    // Dropdown items - Contacts
    telegram: "Թելեգրամ",
    phone: "Հեռախոս: +48 794 736 063",
    email: "Ուղարկել էլ. փոստ",

    // Welcome section
    welcomePartner: "Բարի գալուստ",
    noHiddenFees: "🚖 100 զլոտի շաբաթական — առանց թաքնված վճարների",
    bonus: "🎁 Բոնուս յուրաքանչյուր բերված ընկերոջ համար",
    promotions: "🎉 Ակցիաներ և խաղարկություններ",
    legalization: "🌍 Լեգալիզացիա բանալին ձեռքին (հրավեր վիզայի համար, Բնակության քարտ)",
    officialEmployment: "📝 Պաշտոնական աշխատանք",
    joinTeam: "Միացեք մեզ",

    // About section
    aboutUs: "ՄԵՐ ՄԱՍԻՆ",
    aboutIntro:
      "PartnerHub-ը ավելին է, քան պարզապես տաքսի ծառայություն: Մենք փոխադրումների ոլորտում բազմամյա փորձ ունեցող մասնագետների թիմ ենք, ովքեր գիտեն, թե ինչն է իսկապես կարևոր վարորդների և ավտոպարկերի համար: Մենք ինքներս անցել ենք այս ճանապարհը և հասկանում ենք դրա բոլոր նրբությունները:",
    aboutDriver:
      "🚖 Վարորդը գործընկեր է, ոչ թե աշխատող\nՄենք կառուցում ենք երկարաժամկետ և վստահելի հարաբերություններ մեզ հետ համագործակցող յուրաքանչյուրի հետ: PartnerHub-ում դուք պարզապես պատվերներ չեք կատարում - դուք դառնում եք թիմի մի մաս, որտեղ ձեզ գնահատում և հարգում են:",
    aboutLanguage:
      "🌍 Լեզվական արգելքը խնդիր չէ\nՄենք գիտենք, թե որքան դժվար է սկսել աշխատել նոր երկրում, հատկապես եթե կան լեզվական դժվարություններ: PartnerHub-ում մենք օգնում ենք ձեզ հարմարվել և լուծել կազմակերպչական հարցեր, որպեսզի դուք կարողանաք կենտրոնանալ կարևորի վրա՝ ձեր աշխատանքի:",
    aboutPriorities:
      "⚡ Մեր առաջնահերթությունները՝ հավատարմություն, որակ, արագություն\n• Հավատարմություն - հարգանք և ազնիվ վերաբերմունք յուրաքանչյուր վարորդի հանդեպ:\n• Որակ - թափանցիկ աշխատանքային պայմաններ և աջակցություն յուրաքանչյուր փուլում:\n• Արագություն - մենք գիտենք, թե որքան կարևոր է արագ մեկնարկը, այդ պատճառով մենք ամեն ինչ անում ենք, որպեսզի դուք կարողանաք դուրս գալ ճանապարհ առանց անհարկի ուշացումների:",
    aboutJoin: "Միացեք PartnerHub-ին - որտեղ ձեր աշխատանքը գնահատվում է, աջակցվում և օգնում են զարգանալ!",

    // Partners section
    ourPartners: "Մեր Գործընկերները",

    // Service section
    serviceTitle: "Ավտոսերվիս ցածր գներով և որակյալ սպասարկմամբ",
    serviceDescription:
      "Մենք առաջարկում ենք համապարփակ ավտոսերվիսի ծառայություններ վարորդների համար հատուկ սակագներով: Պահպանեք ձեր ավտոմեքենան կատարյալ վիճակում մեր մասնագիտական թիմի հետ:",
    regularMaintenance: "Կանոնավոր սպասարկում",
    maintenanceDesc: "Պահպանեք ձեր ավտոմեքենան գերազանց վիճակում մեր կանոնավոր տեխնիկական սպասարկման միջոցով",
    repairs: "Վերանորոգում",
    repairsDesc: "Մասնագիտական վերանորոգում բոլոր մակնիշների և մոդելների ավտոմեքենաների համար",
    tireService: "Անվադողերի սպասարկում",
    tireDesc: "Անվադողերի փոխարինում, պտտում և հավասարակշռում",
    partsReplacement: "Մասերի փոխարինում",
    partsDesc: "Որակյալ մասեր մրցակցային գներով",
    signUpService: "Գրանցեք ինձ սպասարկման համար",

    // Footer
    socialSubscribe: "Բաժանորդագրվեք մեր սոցիալական մեդիային",
    quickLinks: "Արագ հղումներ",
    home: "Գլխավոր",
    services: "Ծառայություններ",
    contact: "Կապ",
    contactUs: "Կապվեք մեզ հետ",
    address: "Ul. Szczęsna 26; 02-454 Warszawa",
    phoneNumber: "+48 794 736 063",
    copyright: "© 2023 PartnerHub: Բոլոր իրավունքները պաշտպանված են:",

    // Modal titles
    driverDocsTitle: "Վարորդի փաստաթղթեր",
    vehicleDocsTitle: "Ավտոմեքենայի փաստաթղթեր",
    docAddressesTitle: "Փաստաթղթերի ստացման հասցեներ",
    pricingTitle: "Փաստաթղթերի մշակման արժեքը",
    taxiEmploymentTitle: "Աշխատանքային պայմանագիր. Աշխատանքի պայմաններ",
    b2bTitle: "B2B համագործակցություն",
    fleetExtractsTitle: "Ավտոմեքենայի լիցենզիայի քաղվածք",
    fleetRentTitle: "Ավտոմեքենայի վարձակալություն գործընկերոջ ներքո",
    fleetSubleasingTitle: "Ենթավարձակալություն / Եռակողմ պայմանագիր",

    // Curtains
    clickToOpen: "Սեղմեք բացելու համար",

    // Common modal elements
    backToMain: "Վերադառնալ գլխավոր էջ",
  },
}
            
            // Function to apply translations to all elements with data-translate attribute
            function applyTranslation(lang) {
                if (!translations[lang]) return;
                
                const trans = translations[lang];
                
                // Find all elements with data-translate attribute
                const elements = document.querySelectorAll('[data-translate]');
                
                elements.forEach(element => {
                    const key = element.getAttribute('data-translate');
                    if (trans[key]) {
                        element.textContent = trans[key];
                    }
                });
                
                // Set the HTML lang attribute
                document.documentElement.lang = lang;
                
                // Update language button text
                document.querySelector('#language-button span').textContent = trans.language;
                
                // Save selected language to localStorage
                localStorage.setItem('selectedLanguage', lang);
            }
            
            // Handle language selection
            languageItems.forEach(item => {
                item.addEventListener('click', function() {
                    const lang = this.getAttribute('data-lang');
                    applyTranslation(lang);
                    
                    // Close the dropdown
                    languageDropdown.classList.remove('active');
                });
            });
            
            // Close language dropdown when clicking outside
            document.addEventListener('click', function(event) {
                if (!event.target.closest('.language-selector')) {
                    languageDropdown.classList.remove('active');
                    languageButton.setAttribute('aria-expanded', 'false');
                }
            });

            // Mobile-friendly navigation: close the panel after navigation, outside taps or Escape.
            navItems.addEventListener('click', function(event) {
                if (window.innerWidth < 992 && event.target.closest('.dropdown-item')) {
                    navItems.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    mobileMenuButton.setAttribute('aria-label', 'Відкрити меню');
                }
            });

            document.addEventListener('click', function(event) {
                if (window.innerWidth < 992 && navItems.classList.contains('active') &&
                    !event.target.closest('#nav-items') && !event.target.closest('#mobile-menu-button')) {
                    navItems.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    mobileMenuButton.setAttribute('aria-label', 'Відкрити меню');
                }
            });

            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    document.querySelectorAll('.dropdown, .language-dropdown').forEach(item => item.classList.remove('active'));
                    navItems.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                    languageButton.setAttribute('aria-expanded', 'false');
                }
            });

            window.addEventListener('resize', function() {
                if (window.innerWidth >= 992) {
                    navItems.classList.remove('active');
                    document.body.classList.remove('menu-open');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Load saved language preference on page load
            const savedLanguage = localStorage.getItem('selectedLanguage');
            if (savedLanguage) {
                applyTranslation(savedLanguage);
            }
            
            // Smooth scrolling for navigation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Scroll Header Effect
            window.addEventListener('scroll', function() {
                const header = document.getElementById('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Dark Curtains functionality - Auto open on page load
            const curtainContainer = document.getElementById('curtain-container');
            const curtainLeft = document.getElementById('curtain-left');
            const curtainRight = document.getElementById('curtain-right');
            const curtainContent = document.getElementById('curtain-content');
            
            // Automatically open curtains after a short delay
            setTimeout(() => {
                curtainLeft.classList.add('open');
                curtainRight.classList.add('open');
                
                // Remove curtains after animation completes
                setTimeout(() => {
                    curtainContainer.style.display = 'none';
                }, 1500);
            }, 500); // Short delay before auto-opening
        });

const yearElement = document.getElementById('current-year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
