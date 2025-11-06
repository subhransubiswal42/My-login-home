// // Variable to store the logged-in user's name (for display)
// let loggedInUserName = 'Kisaan';

// // Function to switch between pages
// function showPage(pageId) {
//     // Hide all pages
//     document.querySelectorAll('.page').forEach(page => {
//         page.classList.remove('active');
//     });
//     // Show the requested page
//     document.getElementById(pageId).classList.add('active');

//     // Update username display on Home page
//     if (pageId === 'home-page') {
//         document.getElementById('user-name-display').textContent = loggedInUserName;
//     }
// }

// // Function to handle Sign-up (Basic validation only)
// function signupUser() {
//     const name = document.getElementById('signup-name').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     if (name && email && password.length >= 6) {

//         // 🔑 LOCAL STORAGE STEP 1: Data Object Banana
//         const userData = {
//             name: name,
//             email: email,
//             password: password // Note: Real apps always hash passwords before saving!
//         };

//         // 🔑 LOCAL STORAGE STEP 2: Object ko String mein badalna (JSON.stringify)
//         // Local Storage sirf string value store karta hai.
//         localStorage.setItem('kisanAppUser', JSON.stringify(userData));

//         alert(`Account created successfully for ${name}! Please login.`);

//         // Clear input fields and show login page
//         document.getElementById('signup-name').value = '';
//         document.getElementById('signup-email').value = '';
//         document.getElementById('signup-password').value = '';
//         showPage('login-page');
//     } else {
//         alert('Please fill in all fields correctly. Password must be at least 6 characters.');
//     }
// }

// // Variable to store the logged-in user's name (globally)
// // let loggedInUserName = 'Kisaan'; 

// function loginUser() {
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     if (!email || !password) {
//         alert('Please enter your email and password.');
//         return;
//     }

//     // 🔑 LOCAL STORAGE STEP 3: Data nikalna (localStorage.getItem)
//     const storedUser = localStorage.getItem('kisanAppUser');

//     if (storedUser) {
//         // 🔑 LOCAL STORAGE STEP 4: String ko wapas Object mein badalna (JSON.parse)
//         const userData = JSON.parse(storedUser);

//         // Credentials Verify Karein
//         if (userData.email === email && userData.password === password) {
//             loggedInUserName = userData.name; // User ka naam update karein
//             alert(`Welcome back, ${loggedInUserName}!`);

//             // Clear input fields and show home page
//             document.getElementById('login-email').value = '';
//             document.getElementById('login-password').value = '';
//             showPage('home-page');
//             return;
//         }
//     }

//     // Agar login fail ho jaye
//     alert('Invalid Email or Password. Please check your credentials or Sign-up.');
// }

// // Ensure the login page is shown when the page loads
// // Initial check when the script loads
// const storedUser = localStorage.getItem('kisanAppUser');
// if (storedUser) {
//     // Agar user registered hai, toh uska naam set kar do
//     loggedInUserName = JSON.parse(storedUser).name;
// }
// // Agar koi user registered nahi hai, toh default 'Kisaan' rahega


// // Logout button ki functionality
// // (Pichle HTML mein button tha, yahan koi data deletion ki zaroorat nahi hai, sirf page switch karna hai)
// // Agar aap puri tarah se login state clear karna chahte hain (next step mein dekhenge)

// // ... rest of the script ...

// // Ensure the correct page is shown when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     // Agar Local Storage mein data hai, toh unhe login screen dikhao, warna signup.
//     if (localStorage.getItem('kisanAppUser')) {
//         showPage('login-page');
//     } else {
//         showPage('signup-page'); // First time users directly go to signup
//     }
// });

// // New page added

















// ===========================================
// 1. 🌐 TRANSLATION DATA
// ===========================================

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
        // Add more common translations here...
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
        // Add more common translations here...
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
        // Add more common translations here...
    }
};

// ===========================================
// 2. 🚀 CORE APP VARIABLES & FUNCTIONS
// ===========================================

let loggedInUserName = 'Kisaan'; // Global variable to store the logged-in user's name

// Function to switch between pages
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    // Update username display on Home page
    if (pageId === 'home-page') {
        document.getElementById('user-name-display').textContent = loggedInUserName;
    }
}

// Function to toggle the password field visibility
function togglePasswordVisibility(passwordFieldId, buttonElement) {
    const passwordField = document.getElementById(passwordFieldId);
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        buttonElement.textContent = '🔒';
    } else {
        passwordField.type = 'password';
        buttonElement.textContent = '👁️';
    }
}

// Function to handle Sign-up
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

// Function to handle Login
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

// ===========================================
// 3. 🌐 LANGUAGE LOGIC
// ===========================================

function setLanguage(lang) {
    const currentLangData = translations[lang];

    if (!currentLangData) return;

    // Home Page Updates (IDs must be present in HTML!)
    document.getElementById('greeting-text').textContent = currentLangData.greeting;
    document.getElementById('manage-farm-text').textContent = currentLangData.manage_farm;
    
    document.getElementById('irrigation-title').textContent = currentLangData.irrigation_title;
    document.getElementById('irrigation-desc').textContent = currentLangData.irrigation_desc;

    document.getElementById('fert-title').textContent = currentLangData.fert_title;
    document.getElementById('fert-desc').textContent = currentLangData.fert_desc;

    document.getElementById('dashboard-title').textContent = currentLangData.dashboard_title;
    document.getElementById('dashboard-desc').textContent = currentLangData.dashboard_desc;

    document.getElementById('logout-btn-text').textContent = currentLangData.logout_btn;

    // Store selected language
    localStorage.setItem('kisanAppLang', lang);
}


// ===========================================
// 4. 💧 SMART IRRIGATION LOGIC
// ===========================================

const CROP_WATER_NEED = {
    rice: 6.0, // Average Daily Water Need (mm/day)
    wheat: 5.5,
    maize: 5.0
};

function calculateIrrigation() {
    const rainfall = parseFloat(document.getElementById('weather-condition').value);
    const crop = document.getElementById('crop-type').value;
    const area = parseFloat(document.getElementById('area-size').value);
    const resultBox = document.getElementById('irrigation-result-display');

    if (isNaN(rainfall) || !crop || isNaN(area) || area <= 0) {
        resultBox.innerHTML = '<p style="color: red;">❌ Kripya sabhi jaankariyan sahi se bharein.</p>';
        return;
    }

    const cropNeed = CROP_WATER_NEED[crop] || 5.5; 
    const netNeed = cropNeed - rainfall; 
    
    if (netNeed <= 0) {
        // Paani ki zaroorat nahi hai
        const waterSavedLitres = area * cropNeed * 10000;
        resultBox.innerHTML = `
            <p style="color: green; font-weight: bold;">✅ Sichaai Zaroori Nahi Hai!</p>
            <p>Expected Baarish (${rainfall}mm) aapki fasal ki zaroorat (${cropNeed}mm) se kaafi hai.</p>
            <p style="font-size: 0.9em; margin-top: 10px;">💰 **Anumaanit Bachat:** Lagbhag ${waterSavedLitres.toLocaleString()} Litre paani.</p>
        `;
    } else {
        // Paani ki zaroorat hai
        const timeNeededMinutes = (netNeed / 4) * 60; // Assuming standard pump rate: 4mm/hour
        resultBox.innerHTML = `
            <p style="color: darkorange; font-weight: bold;">⚠️ Sichaai Zaroori Hai!</p>
            <p>Fasal ko abhi **${netNeed.toFixed(1)} mm** paani ki zaroorat hai.</p>
            <p style="font-size: 1.1em; margin-top: 10px;">⏰ **Anumaanit Samay:** ${Math.round(timeNeededMinutes)} Minute.</p>
        `;
    }
}


// ===========================================
// 5. ✅ INITIALIZATION (CRITICAL FOR LANGUAGE)
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // A. Initial Language Set Karna (Page load hote hi language set hoti hai)
    const savedLang = localStorage.getItem('kisanAppLang') || 'hi'; 
    setLanguage(savedLang); 

    // B. Login State Check Karna
    const storedUserCheck = localStorage.getItem('kisanAppUser');
    if (storedUserCheck) {
        const userData = JSON.parse(storedUserCheck);
        loggedInUserName = userData.name;
        showPage('login-page');
    } else {
        showPage('signup-page'); 
    }
});