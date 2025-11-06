// 1. 🌐 TRANSLATION DATA

const translations = {
    // English (Default)
    'en': {
        greeting: "Namaskar, ",
        manage_farm: "Manage your farm",
        irrigation_title: "Smart Irrigation",
        irrigation_desc: "Water based on weather and crop.",
        fert_title: "Fertilizer Optimiser",
        fert_desc: "Right fertilizer based on soil test.",
        dashboard_title: "Sustainability Dashboard",
        dashboard_desc: "See water, power, and money savings.",
        login_btn: "Login",
        logout_btn: "Logout",
        // NOTE: login_btn and logout_btn IDs are used in HTML
    },
    // Hindi
    'hi': {
        greeting: "नमस्ते, ",
        manage_farm: "अपने खेत का प्रबंधन करें",
        irrigation_title: "स्मार्ट सिंचाई",
        irrigation_desc: "मौसम और फसल के हिसाब से पानी दें।",
        fert_title: "खाद ऑप्टिमाइज़र",
        fert_desc: "मिट्टी टेस्ट के आधार पर सही खाद की सिफारिश।",
        dashboard_title: "बचत डैशबोर्ड",
        dashboard_desc: "पानी, बिजली और पैसे की बचत देखें।",
        login_btn: "लॉगिन करें",
        logout_btn: "लॉगआउट",
    },
    // Odia (Oriya)
    'or': {
        greeting: "ନମସ୍କାର, ",
        manage_farm: "ନିଜ ଚାଷର ପରିଚାଳନା କରନ୍ତୁ",
        irrigation_title: "ସ୍ମାର୍ଟ ଜଳସେଚନ",
        irrigation_desc: "ପାଣିପାଗ ଓ ଫସଲ ଅନୁଯାୟୀ ପାଣି ଦିଅନ୍ତୁ।",
        fert_title: "ସାର ଅପ୍ଟିମାଇଜର୍",
        fert_desc: "ମାଟି ପରୀକ୍ଷା ଆଧାରରେ ସଠିକ୍ ସାର ସୁପାରିଶ।",
        dashboard_title: "ସ୍ଥିରତା ଡ୍ୟାସବୋର୍ଡ",
        dashboard_desc: "ଜଳ, ବିଦ୍ୟୁତ ଓ ଅର୍ଥ ସଞ୍ଚୟ ଦେଖନ୍ତୁ।",
        login_btn: "ଲଗଇନ୍ କରନ୍ତୁ",
        logout_btn: "ଲଗଆଉଟ୍",
    }
};

// 2. 🚀 CORE APP VARIABLES & ROUTING

let loggedInUserName = 'Kisaan'; 

// Function to switch between pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    if (pageId === 'home-page') {
        document.getElementById('user-name-display').textContent = loggedInUserName;
    }
}

// Function to handle Sign-up (Using Local Storage for this MVP)
function signupUser() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password.length >= 6) {
        const userData = { name: name, email: email, password: password };
        localStorage.setItem('kisanAppUser', JSON.stringify(userData));

        alert(`Account created successfully for ${name}! Please login.`);

        document.getElementById('signup-name').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
        showPage('login-page');
    } else {
        alert('Please fill in all fields correctly. Password must be at least 6 characters.');
    }
}

// Function to handle Login (Using Local Storage for this MVP)
function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Please enter your email and password.');
        return;
    }

    const storedUser = localStorage.getItem('kisanAppUser');

    if (storedUser) {
        const userData = JSON.parse(storedUser);

        if (userData.email === email && userData.password === password) {
            loggedInUserName = userData.name;
            alert(`Welcome back, ${loggedInUserName}!`);

            document.getElementById('login-email').value = '';
            document.getElementById('login-password').value = '';
            showPage('home-page');
            return;
        }
    }

    alert('Invalid Email or Password. Please check your credentials or Sign-up.');
}


// 3. 🌐 LANGUAGE & TOGGLE LOGIC

function setLanguage(lang) {
    const currentLangData = translations[lang];

    if (!currentLangData) return;

    // Home Page Updates
    document.getElementById('greeting-text').textContent = currentLangData.greeting;
    document.getElementById('manage-farm-text').textContent = currentLangData.manage_farm;

    document.getElementById('irrigation-title').textContent = currentLangData.irrigation_title;
    document.getElementById('irrigation-desc').textContent = currentLangData.irrigation_desc;

    document.getElementById('fert-title').textContent = currentLangData.fert_title;
    document.getElementById('fert-desc').textContent = currentLangData.fert_desc;

    document.getElementById('dashboard-title').textContent = currentLangData.dashboard_title;
    document.getElementById('dashboard-desc').textContent = currentLangData.dashboard_desc;

    document.getElementById('logout-btn-text').textContent = currentLangData.logout_btn;
    document.getElementById('login-btn-text').textContent = currentLangData.login_btn;
    // Assuming signup button ID is 'signup-btn-text'
    // document.getElementById('signup-btn-text').textContent = currentLangData.signup_btn; 

    localStorage.setItem('kisanAppLang', lang);
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('lang-options');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function closeDropdown() {
    document.getElementById('lang-options').style.display = 'none';
}


// 4. 💧 SMART IRRIGATION & FERTILIZER LOGIC

// Data for Irrigation Calculation (Simplified)
const CROP_WATER_NEED = { rice: 6.0, wheat: 5.5, maize: 5.0 };

// Data for Fertilizer Calculation (Simplified)
const STANDARD_NUTRIENTS_KG_PER_ACRE = { rice: { N: 60, P: 30, K: 20 }, wheat: { N: 55, P: 25, K: 15 }, maize: { N: 70, P: 35, K: 25 } };
const ADJUSTMENT_FACTORS = { low: 1.25, medium: 1.0, high: 0.75 };
const FERTILIZER_PURITY = { Urea_N: 0.46, DAP_N: 0.18, DAP_P: 0.46, MOP_K: 0.60 };


// Central Savings Function
function updateSavings(type, amount) {
    let currentSavings = JSON.parse(localStorage.getItem('kisanAppSavings') || '{}');
    if (isNaN(currentSavings[type])) {
        currentSavings[type] = 0;
    }
    currentSavings[type] += amount;
    localStorage.setItem('kisanAppSavings', JSON.stringify(currentSavings));
}


function calculateIrrigation() {
    const rainfall = parseFloat(document.getElementById('weather-condition').value);
    const crop = document.getElementById('crop-type').value;
    const area = parseFloat(document.getElementById('area-size').value);
    const resultBox = document.getElementById('irrigation-result-display');
    
    // Basic validation...

    const cropNeed = CROP_WATER_NEED[crop] || 5.5; 
    const netNeed = cropNeed - rainfall; 
    
    if (netNeed <= 0) {
        const waterSavedLitres = area * cropNeed * 10000;
        
        // Update Savings
        updateSavings('water', waterSavedLitres);
        updateSavings('money', Math.round(waterSavedLitres / 1000 * 0.50)); 
        
        resultBox.innerHTML = `...`; // Display success
    } else {
        const timeNeededMinutes = (netNeed / 4) * 60; 
        resultBox.innerHTML = `...`; // Display irrigation needed
    }
}


function calculateFertilizer() {
    const crop = document.getElementById('fert-crop-type').value;
    const yield = parseFloat(document.getElementById('fert-yield').value);
    const nLevel = document.getElementById('n-level').value;
    const pLevel = document.getElementById('p-level').value;
    const kLevel = document.getElementById('k-level').value;
    const resultBox = document.getElementById('fertilizer-result-display');
    
    // ... validation ...
    
    const standardDose = STANDARD_NUTRIENTS_KG_PER_ACRE[crop];
    
    // Adjust Nutrient Need
    const requiredN = standardDose.N * ADJUSTMENT_FACTORS[nLevel] * (yield / 15);
    const requiredP = standardDose.P * ADJUSTMENT_FACTORS[pLevel] * (yield / 15);
    const requiredK = standardDose.K * ADJUSTMENT_FACTORS[kLevel] * (yield / 15);

    // Convert to Fertilizer Materials (Urea, DAP, MOP) ...
    // ... 
    
    // FERTILIZER SAVINGS LOGIC
    const totalStandardFert = standardDose.N + standardDose.P + standardDose.K;
    const totalRecommendedFert = requiredN + requiredP + requiredK;
    
    if (totalStandardFert > totalRecommendedFert) {
        const fertSaved = totalStandardFert - totalRecommendedFert;
        updateSavings('fertilizer', fertSaved);
        updateSavings('money', Math.round(fertSaved * 20)); // ₹20 per kg saved
    }
    // ... result display code ...
}

// 6. 📈 SUSTAINABILITY DASHBOARD LOGIC


function loadDashboard() {
    showPage('dashboard-page');
    
    const savings = JSON.parse(localStorage.getItem('kisanAppSavings') || '{}');
    
    const water = savings.water || 0;
    const fert = savings.fertilizer || 0;
    const money = savings.money || 0;
    
    document.getElementById('total-water-saved').textContent = 
        `${(water / 1000).toFixed(1)} K Litre`;
    
    document.getElementById('total-fert-saved').textContent = 
        `${fert.toFixed(1)} kg`;
    
    document.getElementById('total-money-saved').textContent = 
        `₹ ${Math.round(money).toLocaleString()}`;
}


// 7. ✅ INITIALIZATION (CRITICAL FOR LANGUAGE & ROUTING)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Language Set Karna
    const savedLang = localStorage.getItem('kisanAppLang') || 'hi'; 
    setLanguage(savedLang); 

    // 2. Login State Check Karna
    const storedUserCheck = localStorage.getItem('kisanAppUser');
    if (storedUserCheck) {
        const userData = JSON.parse(storedUserCheck);
        loggedInUserName = userData.name;
        showPage('login-page');
    } else {
        showPage('signup-page'); 
    }
});