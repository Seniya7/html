document.addEventListener("DOMContentLoaded", () => {
    // Базовая функциональность переключения языков
    const translations = {
        en: {
            // Site title
            siteTitle: "TradePro - Professional Trading Solutions",
            loading: "Loading...",

            // Navigation
            home: "Home",
            terms: "Terms of Use",
            about: "About Us",
            partner: "Partnership Program",
            faq: "FAQ",
            
            // Hero section
            heroTitle: "Professional Trading Platform",
            heroSubtitle: "Innovative solutions for modern trading",
            activeTraders: "Active Traders",
            countries: "Countries",
            tradingVolume: "Trading Volume",
            
            // Plan section
            choosePlanTitle: "Choose Your Plan",
            choosePlanSubtitle: "Pick the best option for your trading goals",
            instant: "Instant",
            step1: "1 Step",
            step2: "2 Steps",
            
            // Plans
            starter: "Starter",
            advanced: "Advanced",
            premium: "Premium",
            studentPlan: "Student Plan",
            practitionerPlan: "Practitioner Plan",
            masterPlan: "Master Plan",
            fromPrice: "from $5K",
            fromPrice10k: "from $10K",
            fromPrice25k: "from $25K",
            
            // Plan features
            basicFeatures: "Basic features",
            advancedFeatures: "Advanced features",
            premiumFeatures: "Premium features",
            limitedTrading: "Limited trading volume",
            increasedTrading: "Increased trading volume",
            unlimitedTrading: "Unlimited trading volume",
            standardSupport: "Standard support",
            prioritySupport: "Priority support",
            vipSupport: "24/7 VIP support",
            basicAnalytics: "Basic analytics",
            advancedAnalytics: "Advanced analytics",
            proAnalytics: "Professional analytics",
            
            // Features section
            whyChooseUs: "Why Choose Us",
            security: "Security",
            securityDesc: "Modern data and funds protection technologies",
            speed: "Speed",
            speedDesc: "Instant order execution",
            support: "Support",
            supportDesc: "24/7 professional support",
            analytics: "Analytics",
            analyticsDesc: "Advanced analysis tools",
            
            // Footer
            aboutCompany: "About Company",
            companyDesc: "TradePro is a leading platform for professional trading with advanced technologies and innovative solutions.",
            contacts: "Contacts",
            social: "Social Media",
            copyright: "© 2024 TradePro. All rights reserved.",
            
            // Buttons
            choosePlan: "Choose Plan"
        },
        ru: {
            // Site title
            siteTitle: "TradePro - Профессиональные торговые решения",
            loading: "Загрузка...",

            // Navigation
            home: "Главная",
            terms: "Условия использования",
            about: "О нас",
            partner: "Партнерская программа",
            faq: "FAQ",
            
            // Hero section
            heroTitle: "Профессиональная торговая платформа",
            heroSubtitle: "Инновационные решения для современного трейдинга",
            activeTraders: "Активных трейдеров",
            countries: "Стран",
            tradingVolume: "Торговый объем",
            
            // Plan section
            choosePlanTitle: "Выберите свой план",
            choosePlanSubtitle: "Выберите лучший вариант для ваших торговых целей",
            instant: "Мгновенный",
            step1: "1 Шаг",
            step2: "2 Шага",
            
            // Plans
            starter: "Начальный",
            advanced: "Продвинутый",
            premium: "Премиум",
            studentPlan: "План Студент",
            practitionerPlan: "План Практик",
            masterPlan: "План Мастер",
            fromPrice: "от $5K",
            fromPrice10k: "от $10K",
            fromPrice25k: "от $25K",
            
            // Plan features
            basicFeatures: "Базовые функции",
            advancedFeatures: "Расширенные функции",
            premiumFeatures: "Премиум функции",
            limitedTrading: "Ограниченный объем торгов",
            increasedTrading: "Увеличенный объем торгов",
            unlimitedTrading: "Неограниченный объем торгов",
            standardSupport: "Стандартная поддержка",
            prioritySupport: "Приоритетная поддержка",
            vipSupport: "VIP поддержка 24/7",
            basicAnalytics: "Базовая аналитика",
            advancedAnalytics: "Расширенная аналитика",
            proAnalytics: "Профессиональная аналитика",
            
            // Features section
            whyChooseUs: "Почему выбирают нас",
            security: "Безопасность",
            securityDesc: "Современные технологии защиты данных и средств",
            speed: "Скорость",
            speedDesc: "Мгновенное исполнение ордеров",
            support: "Поддержка",
            supportDesc: "Круглосуточная профессиональная поддержка",
            analytics: "Аналитика",
            analyticsDesc: "Продвинутые инструменты анализа",
            
            // Footer
            aboutCompany: "О компании",
            companyDesc: "TradePro - ведущая платформа для профессиональной торговли с передовыми технологиями и инновационными решениями.",
            contacts: "Контакты",
            social: "Социальные сети",
            copyright: "© 2024 TradePro. Все права защищены.",
            
            // Buttons
            choosePlan: "Выбрать план"
        },
        ua: {
            // Site title
            siteTitle: "TradePro - Професійні торгові рішення",
            loading: "Завантаження...",

            // Navigation
            home: "Головна",
            terms: "Умови використання",
            about: "Про нас",
            partner: "Партнерська програма",
            faq: "FAQ",
            
            // Hero section
            heroTitle: "Професійна торгова платформа",
            heroSubtitle: "Інноваційні рішення для сучасного трейдингу",
            activeTraders: "Активних трейдерів",
            countries: "Країн",
            tradingVolume: "Торговий об'єм",
            
            // Plan section
            choosePlanTitle: "Оберіть свій план",
            choosePlanSubtitle: "Оберіть найкращий варіант для ваших торгових цілей",
            instant: "Миттєвий",
            step1: "1 Крок",
            step2: "2 Кроки",
            
            // Plans
            starter: "Початковий",
            advanced: "Розширений",
            premium: "Преміум",
            studentPlan: "План Студент",
            practitionerPlan: "План Практик",
            masterPlan: "План Майстер",
            fromPrice: "від $5K",
            fromPrice10k: "від $10K",
            fromPrice25k: "від $25K",
            
            // Plan features
            basicFeatures: "Базові функції",
            advancedFeatures: "Розширені функції",
            premiumFeatures: "Преміум функції",
            limitedTrading: "Обмежений об'єм торгів",
            increasedTrading: "Збільшений об'єм торгів",
            unlimitedTrading: "Необмежений об'єм торгів",
            standardSupport: "Стандартна підтримка",
            prioritySupport: "Пріоритетна підтримка",
            vipSupport: "VIP підтримка 24/7",
            basicAnalytics: "Базова аналітика",
            advancedAnalytics: "Розширена аналітика",
            proAnalytics: "Професійна аналітика",
            
            // Features section
            whyChooseUs: "Чому обирають нас",
            security: "Безпека",
            securityDesc: "Сучасні технології захисту даних та коштів",
            speed: "Швидкість",
            speedDesc: "Миттєве виконання ордерів",
            support: "Підтримка",
            supportDesc: "Цілодобова професійна підтримка",
            analytics: "Аналітика",
            analyticsDesc: "Просунуті інструменти аналізу",
            
            // Footer
            aboutCompany: "Про компанію",
            companyDesc: "TradePro - провідна платформа для професійної торгівлі з передовими технологіями та інноваційними рішеннями.",
            contacts: "Контакти",
            social: "Соціальні мережі",
            copyright: "© 2024 TradePro. Всі права захищені.",
            
            // Buttons
            choosePlan: "Обрати план"
        }
    };

    let currentLang = 'ru';

    // Простая функция обновления текстов
    function updateTexts() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
    }

    // Обработчики для кнопок языка
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentLang = btn.dataset.lang;
            updateTexts();
        });
    });

    // Простая функция для прелоадера
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }

    // Обработка переключения планов и сумм
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    const cards = document.querySelectorAll(".card");
    const amountBtns = document.querySelectorAll("[data-amount]"); // Кнопки с суммами

    // Функция обновления суммы в карточке мастера
    function updateMasterAmount(amount) {
        const masterCard = document.querySelector(".card.master");
        if (masterCard) {
            const priceElement = masterCard.querySelector("[data-translate='masterPlan']");
            if (priceElement) {
                priceElement.textContent = `План Мастер $${amount}K`;
            }
        }
    }

    // Обработчик для кнопок сумм
    amountBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Убираем активный класс у всех кнопок сумм
            amountBtns.forEach((b) => b.classList.remove("active"));
            // Добавляем активный класс нажатой кнопке
            btn.classList.add("active");
            
            // Получаем выбранную сумму
            const amount = btn.dataset.amount;
            // Обновляем сумму в карточке мастера
            updateMasterAmount(amount);
        });
    });

    // Обработчик для переключения планов
    toggleBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Убираем активный класс у всех кнопок
            toggleBtns.forEach((b) => b.classList.remove("active"));
            // Добавляем активный класс нажатой кнопке
            btn.classList.add("active");
            
            // Обновляем отображение карточек
            const selectedStep = btn.dataset.step;
            
            cards.forEach((card) => {
                if (selectedStep === 'instant') {
                    // Для мгновенного плана показываем только мастер
                    if (card.classList.contains('master')) {
                        card.style.display = 'block';
                        card.style.margin = '0 auto';
                        
                        // Получаем активную сумму
                        const activeAmount = document.querySelector("[data-amount].active");
                        if (activeAmount) {
                            updateMasterAmount(activeAmount.dataset.amount);
                        }
                    } else {
                        card.style.display = 'none';
                    }
                } else {
                    // Для других планов показываем все карточки
                    card.style.display = 'block';
                    card.style.margin = '0';
                    
                    // Возвращаем оригинальный текст мастер плана
                    if (card.classList.contains('master')) {
                        const priceElement = card.querySelector("[data-translate='masterPlan']");
                        if (priceElement) {
                            priceElement.textContent = translations[currentLang].masterPlan;
                        }
                    }
                }
            });
        });
    });

    // Функционал графика
    function initChart() {
        const ctx = document.getElementById('tradingChart');
        if (!ctx) return;

        let tradingChart;

        // Генерация случайных данных
        function generateData(points) {
            const data = [];
            let value = 1000;
            for (let i = 0; i < points; i++) {
                value += Math.random() * 100 - 50;
                data.push(value);
            }
            return data;
        }

        // Создание графика
        function createChart(period) {
            const labels = {
                day: Array.from({length: 24}, (_, i) => `${i}:00`),
                week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                month: Array.from({length: 30}, (_, i) => `${i + 1}`)
            };

            const points = {
                day: 24,
                week: 7,
                month: 30
            };

            const data = generateData(points[period]);

            if (tradingChart) {
                tradingChart.destroy();
            }

            tradingChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels[period],
                    datasets: [{
                        label: 'Trading Volume',
                        data: data,
                        borderColor: '#64ffda',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#fff'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#fff'
                            }
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    },
                    animation: {
                        duration: 1000
                    }
                }
            });
        }

        // Обработчики для кнопок периода
        const chartBtns = document.querySelectorAll('.chart-btn');
        chartBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                chartBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                createChart(btn.dataset.period);
            });
        });

        // Инициализация графика
        createChart('day');
    }

    // Инициализация всех компонентов
    updateTexts();
    
    const activeBtn = document.querySelector('.toggle-btn.active');
    if (activeBtn) {
        activeBtn.click();
    }

    // Инициализация графика после основной инициализации
    initChart();

    // Инициализация активной суммы
    const activeAmount = document.querySelector("[data-amount].active");
    if (activeAmount) {
        updateMasterAmount(activeAmount.dataset.amount);
    }

    // Обработка бургер-меню
    const burgerMenu = document.querySelector('.burger-menu');
    const navWindow = document.querySelector('.transparent-window');

    if (burgerMenu && navWindow) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navWindow.classList.toggle('active');
        });

        // Закрывать меню при клике на ссылку
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                navWindow.classList.remove('active');
            });
        });
    }
});