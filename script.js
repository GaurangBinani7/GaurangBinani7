// Guides Database from CSV
const guidesDatabase = [
    {
        name: "Maria Gonzalez",
        location: "Seville, Spain",
        country: "Spain",
        city: "Seville",
        pricePerHour: 25,
        rating: 4.7,
        speciality: "Heritage & Architecture",
        languages: ["Spanish", "English"],
        avatar: "MG"
    },
    {
        name: "Rakesh Sharma",
        location: "Jaipur, India",
        country: "India",
        city: "Jaipur",
        pricePerHour: 18,
        rating: 4.5,
        speciality: "Heritage & Culture",
        languages: ["Hindi", "English"],
        avatar: "RS"
    },
    {
        name: "Linda Kowalski",
        location: "Krakow, Poland",
        country: "Poland",
        city: "Krakow",
        pricePerHour: 22,
        rating: 4.8,
        speciality: "Food & Culture",
        languages: ["Polish", "English", "German"],
        avatar: "LK"
    },
    {
        name: "Ahmed El-Sayed",
        location: "Cairo, Egypt",
        country: "Egypt",
        city: "Cairo",
        pricePerHour: 20,
        rating: 4.6,
        speciality: "Heritage (Pyramids & Tombs)",
        languages: ["Arabic", "English"],
        avatar: "AE"
    },
    {
        name: "Sophie Dubois",
        location: "Lyon, France",
        country: "France",
        city: "Lyon",
        pricePerHour: 28,
        rating: 4.9,
        speciality: "Food & Wine",
        languages: ["French", "English"],
        avatar: "SD"
    },
    {
        name: "John Peterson",
        location: "Denver, USA",
        country: "USA",
        city: "Denver",
        pricePerHour: 30,
        rating: 4.4,
        speciality: "Trekking & Hiking",
        languages: ["English"],
        avatar: "JP"
    },
    {
        name: "Mei Ling",
        location: "Beijing, China",
        country: "China",
        city: "Beijing",
        pricePerHour: 19,
        rating: 4.7,
        speciality: "Heritage & Culture",
        languages: ["Mandarin", "English"],
        avatar: "ML"
    },
    {
        name: "Paolo Ricci",
        location: "Rome, Italy",
        country: "Italy",
        city: "Rome",
        pricePerHour: 35,
        rating: 5.0,
        speciality: "Ancient Heritage",
        languages: ["Italian", "English"],
        avatar: "PR"
    },
    {
        name: "Elena Petrova",
        location: "St. Petersburg, Russia",
        country: "Russia",
        city: "St. Petersburg",
        pricePerHour: 21,
        rating: 4.5,
        speciality: "Museum & History Tours",
        languages: ["Russian", "English"],
        avatar: "EP"
    },
    {
        name: "Carlos Mendes",
        location: "Rio de Janeiro, Brazil",
        country: "Brazil",
        city: "Rio de Janeiro",
        pricePerHour: 24,
        rating: 4.6,
        speciality: "Food & Street Culture",
        languages: ["Portuguese", "English", "Spanish"],
        avatar: "CM"
    },
    {
        name: "Ayumi Tanaka",
        location: "Kyoto, Japan",
        country: "Japan",
        city: "Kyoto",
        pricePerHour: 27,
        rating: 4.8,
        speciality: "Heritage & Temples",
        languages: ["Japanese", "English"],
        avatar: "AT"
    },
    {
        name: "Michael Brown",
        location: "Cape Town, South Africa",
        country: "South Africa",
        city: "Cape Town",
        pricePerHour: 23,
        rating: 4.7,
        speciality: "Trekking & Nature",
        languages: ["English", "Afrikaans"],
        avatar: "MB"
    },
    {
        name: "Aisha Khan",
        location: "Istanbul, Turkey",
        country: "Turkey",
        city: "Istanbul",
        pricePerHour: 20,
        rating: 4.6,
        speciality: "Heritage & Food",
        languages: ["Turkish", "English"],
        avatar: "AK"
    },
    {
        name: "Oliver Hughes",
        location: "London, UK",
        country: "UK",
        city: "London",
        pricePerHour: 32,
        rating: 4.9,
        speciality: "Royal Heritage",
        languages: ["English"],
        avatar: "OH"
    },
    {
        name: "Rajiv Menon",
        location: "Kochi, India",
        country: "India",
        city: "Kochi",
        pricePerHour: 17,
        rating: 4.4,
        speciality: "Backwaters & Culture",
        languages: ["Malayalam", "Hindi", "English"],
        avatar: "RM"
    },
    {
        name: "Hannah Müller",
        location: "Berlin, Germany",
        country: "Germany",
        city: "Berlin",
        pricePerHour: 26,
        rating: 4.8,
        speciality: "WWII & Modern History",
        languages: ["German", "English"],
        avatar: "HM"
    },
    {
        name: "Daniel Smith",
        location: "Sydney, Australia",
        country: "Australia",
        city: "Sydney",
        pricePerHour: 29,
        rating: 4.7,
        speciality: "Beaches & Outdoor Tours",
        languages: ["English"],
        avatar: "DS"
    },
    {
        name: "Fatima Noor",
        location: "Marrakech, Morocco",
        country: "Morocco",
        city: "Marrakech",
        pricePerHour: 18,
        rating: 4.5,
        speciality: "Souks & Food Culture",
        languages: ["Arabic", "French", "English"],
        avatar: "FN"
    },
    {
        name: "Lucas Johnson",
        location: "Vancouver, Canada",
        country: "Canada",
        city: "Vancouver",
        pricePerHour: 27,
        rating: 4.6,
        speciality: "Trekking & Adventure",
        languages: ["English", "French"],
        avatar: "LJ"
    },
    {
        name: "Isabella Rossi",
        location: "Florence, Italy",
        country: "Italy",
        city: "Florence",
        pricePerHour: 34,
        rating: 4.9,
        speciality: "Renaissance Heritage",
        languages: ["Italian", "English"],
        avatar: "IR"
    },
    {
        name: "Chang Wu",
        location: "Seoul, South Korea",
        country: "South Korea",
        city: "Seoul",
        pricePerHour: 22,
        rating: 4.7,
        speciality: "Pop Culture & Heritage",
        languages: ["Korean", "English"],
        avatar: "CW"
    },
    {
        name: "Samira Al-Fahd",
        location: "Muscat, Oman",
        country: "Oman",
        city: "Muscat",
        pricePerHour: 25,
        rating: 4.6,
        speciality: "Desert & Trekking Tours",
        languages: ["Arabic", "English"],
        avatar: "SA"
    },
    {
        name: "Thomas Eriksson",
        location: "Stockholm, Sweden",
        country: "Sweden",
        city: "Stockholm",
        pricePerHour: 28,
        rating: 4.8,
        speciality: "Viking Heritage",
        languages: ["Swedish", "English"],
        avatar: "TE"
    },
    {
        name: "Gabriela Silva",
        location: "Mexico City, Mexico",
        country: "Mexico",
        city: "Mexico City",
        pricePerHour: 20,
        rating: 4.5,
        speciality: "Food & Street Culture",
        languages: ["Spanish", "English"],
        avatar: "GS"
    },
    {
        name: "Ethan Clarke",
        location: "Auckland, New Zealand",
        country: "New Zealand",
        city: "Auckland",
        pricePerHour: 31,
        rating: 4.7,
        speciality: "Adventure & Nature",
        languages: ["English"],
        avatar: "EC"
    }
];

// Global Atlas Data
const globalAtlas = {
    countries: {
        "Spain": {
            cities: ["Seville", "Madrid", "Barcelona", "Valencia"],
            description: "A country known for its rich history, vibrant culture, and stunning architecture.",
            continent: "Europe"
        },
        "India": {
            cities: ["Jaipur", "Kochi", "Delhi", "Mumbai", "Bangalore"],
            description: "A diverse nation with ancient heritage, colorful traditions, and spiritual richness.",
            continent: "Asia"
        },
        "Poland": {
            cities: ["Krakow", "Warsaw", "Gdansk", "Wroclaw"],
            description: "A Central European country with medieval architecture and rich cultural heritage.",
            continent: "Europe"
        },
        "Egypt": {
            cities: ["Cairo", "Alexandria", "Luxor", "Aswan"],
            description: "Home to ancient pyramids, pharaohs, and the majestic Nile River.",
            continent: "Africa"
        },
        "France": {
            cities: ["Lyon", "Paris", "Nice", "Marseille"],
            description: "Famous for its cuisine, wine, art, and romantic landscapes.",
            continent: "Europe"
        },
        "USA": {
            cities: ["Denver", "New York", "Los Angeles", "Chicago"],
            description: "A vast country with diverse landscapes from mountains to beaches.",
            continent: "North America"
        },
        "China": {
            cities: ["Beijing", "Shanghai", "Xi'an", "Chengdu"],
            description: "An ancient civilization with modern cities and diverse cultural heritage.",
            continent: "Asia"
        },
        "Italy": {
            cities: ["Rome", "Florence", "Venice", "Milan"],
            description: "The cradle of Renaissance art, ancient Roman history, and exquisite cuisine.",
            continent: "Europe"
        },
        "Russia": {
            cities: ["St. Petersburg", "Moscow", "Sochi", "Kazan"],
            description: "The world's largest country with rich imperial history and cultural treasures.",
            continent: "Europe/Asia"
        },
        "Brazil": {
            cities: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],
            description: "A vibrant country known for carnival, beaches, and Amazon rainforest.",
            continent: "South America"
        },
        "Japan": {
            cities: ["Kyoto", "Tokyo", "Osaka", "Hiroshima"],
            description: "A fascinating blend of ancient traditions and cutting-edge technology.",
            continent: "Asia"
        },
        "South Africa": {
            cities: ["Cape Town", "Johannesburg", "Durban", "Port Elizabeth"],
            description: "A diverse nation with stunning wildlife, wine regions, and rich history.",
            continent: "Africa"
        },
        "Turkey": {
            cities: ["Istanbul", "Cappadocia", "Ankara", "Antalya"],
            description: "A transcontinental country bridging Europe and Asia with rich Ottoman heritage.",
            continent: "Europe/Asia"
        },
        "UK": {
            cities: ["London", "Edinburgh", "Bath", "York"],
            description: "Historic kingdoms with royal heritage, castles, and charming countryside.",
            continent: "Europe"
        },
        "Germany": {
            cities: ["Berlin", "Munich", "Hamburg", "Cologne"],
            description: "A country with significant historical importance and modern innovation.",
            continent: "Europe"
        },
        "Australia": {
            cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
            description: "A continent-country with unique wildlife, stunning beaches, and vibrant cities.",
            continent: "Oceania"
        },
        "Morocco": {
            cities: ["Marrakech", "Casablanca", "Fez", "Rabat"],
            description: "A North African kingdom with bustling souks, desert landscapes, and Berber culture.",
            continent: "Africa"
        },
        "Canada": {
            cities: ["Vancouver", "Toronto", "Montreal", "Calgary"],
            description: "A vast country known for natural beauty, mountains, and multicultural cities.",
            continent: "North America"
        },
        "South Korea": {
            cities: ["Seoul", "Busan", "Jeju", "Incheon"],
            description: "A dynamic country blending traditional culture with modern pop culture phenomenon.",
            continent: "Asia"
        },
        "Oman": {
            cities: ["Muscat", "Salalah", "Nizwa", "Sur"],
            description: "An Arabian Peninsula country with stunning deserts, mountains, and coastlines.",
            continent: "Asia"
        },
        "Sweden": {
            cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
            description: "A Scandinavian country known for Vikings, design, and natural beauty.",
            continent: "Europe"
        },
        "Mexico": {
            cities: ["Mexico City", "Cancún", "Guadalajara", "Oaxaca"],
            description: "A colorful country with ancient civilizations, vibrant culture, and delicious cuisine.",
            continent: "North America"
        },
        "New Zealand": {
            cities: ["Auckland", "Wellington", "Christchurch", "Queenstown"],
            description: "An island nation famous for breathtaking landscapes and adventure activities.",
            continent: "Oceania"
        }
    }
};

// Current search results
let currentResults = [];

// Toggle Profile Dropdown
function toggleProfile() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('active');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-profile')) {
            dropdown.classList.remove('active');
        }
    });
}

// Switch Search Tabs
function switchTab(tabType) {
    // Update tab buttons
    document.querySelectorAll('.search-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[onclick="switchTab('${tabType}')"]`).classList.add('active');
    
    // Update search forms
    document.querySelectorAll('.search-form').forEach(form => {
        form.classList.remove('active');
    });
    
    if (tabType === 'destination') {
        document.getElementById('destinationSearch').classList.add('active');
    } else {
        document.getElementById('guideSearch').classList.add('active');
    }
}

// Search Destinations with Auto-complete
function searchDestinations(query) {
    if (query.length < 2) return;
    
    const suggestions = [];
    const queryLower = query.toLowerCase();
    
    // Search in countries
    Object.keys(globalAtlas.countries).forEach(country => {
        if (country.toLowerCase().includes(queryLower)) {
            suggestions.push({
                type: 'country',
                name: country,
                display: country
            });
        }
        
        // Search in cities
        globalAtlas.countries[country].cities.forEach(city => {
            if (city.toLowerCase().includes(queryLower)) {
                suggestions.push({
                    type: 'city',
                    name: city,
                    country: country,
                    display: `${city}, ${country}`
                });
            }
        });
    });
    
    // Limit suggestions
    return suggestions.slice(0, 5);
}

// Perform Destination Search
function performDestinationSearch() {
    const query = document.getElementById('destinationInput').value.trim();
    if (!query) return;
    
    // Find matching destination
    const queryLower = query.toLowerCase();
    let matchedLocation = null;
    let matchedCountry = null;
    
    // Check if it's a country
    Object.keys(globalAtlas.countries).forEach(country => {
        if (country.toLowerCase().includes(queryLower)) {
            matchedCountry = country;
            matchedLocation = country;
        }
        
        // Check cities in this country
        globalAtlas.countries[country].cities.forEach(city => {
            if (city.toLowerCase().includes(queryLower)) {
                matchedLocation = city;
                matchedCountry = country;
            }
        });
    });
    
    if (matchedLocation) {
        displayDestinationResults(matchedLocation, matchedCountry);
    } else {
        displayNoResults('destination', query);
    }
}

// Display Destination Results
function displayDestinationResults(location, country) {
    const resultsSection = document.getElementById('searchResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const resultsContent = document.getElementById('resultsContent');
    
    // Find guides in this location/country
    const locationGuides = guidesDatabase.filter(guide => {
        return guide.country.toLowerCase() === country.toLowerCase() ||
               guide.city.toLowerCase() === location.toLowerCase() ||
               guide.location.toLowerCase().includes(location.toLowerCase());
    });
    
    resultsTitle.textContent = `Destination: ${location}`;
    resultsCount.textContent = `${locationGuides.length} guides available`;
    
    const countryData = globalAtlas.countries[country];
    
    let html = `
        <div class="destination-result">
            <div class="destination-header">
                <div class="destination-icon">
                    <i class="fas fa-globe-americas"></i>
                </div>
                <h2 class="destination-title">${location}</h2>
                <p class="destination-subtitle">${countryData ? countryData.description : 'Discover this amazing destination'}</p>
            </div>
            <div class="destination-guides">
                <h3>Available Guides in ${location}</h3>
                <div class="results-grid">
    `;
    
    if (locationGuides.length > 0) {
        locationGuides.forEach(guide => {
            html += createGuideCard(guide);
        });
    } else {
        html += `
            <div class="no-guides">
                <p>No guides available in this location yet. Check back soon!</p>
            </div>
        `;
    }
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    resultsContent.innerHTML = html;
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Perform Guide Search
function performGuideSearch() {
    const location = document.getElementById('guideLocationInput').value.trim();
    const language = document.getElementById('languageFilter').value;
    const speciality = document.getElementById('specialityFilter').value;
    
    let filteredGuides = guidesDatabase;
    
    // Filter by location
    if (location) {
        const locationLower = location.toLowerCase();
        filteredGuides = filteredGuides.filter(guide => 
            guide.location.toLowerCase().includes(locationLower) ||
            guide.country.toLowerCase().includes(locationLower) ||
            guide.city.toLowerCase().includes(locationLower)
        );
    }
    
    // Filter by language
    if (language) {
        const languageMap = {
            'english': 'English',
            'spanish': 'Spanish',
            'french': 'French',
            'german': 'German',
            'italian': 'Italian',
            'hindi': 'Hindi',
            'mandarin': 'Mandarin',
            'arabic': 'Arabic',
            'japanese': 'Japanese'
        };
        const targetLanguage = languageMap[language];
        filteredGuides = filteredGuides.filter(guide => 
            guide.languages.includes(targetLanguage)
        );
    }
    
    // Filter by speciality
    if (speciality) {
        const specialityMap = {
            'heritage': ['Heritage', 'Architecture', 'Ancient', 'Royal', 'Renaissance', 'Viking'],
            'food': ['Food', 'Wine', 'Culture', 'Street'],
            'trekking': ['Trekking', 'Hiking', 'Adventure', 'Nature', 'Outdoor'],
            'nature': ['Nature', 'Wildlife', 'Beaches', 'Desert', 'Backwaters'],
            'history': ['History', 'Museum', 'WWII', 'Modern']
        };
        
        const keywords = specialityMap[speciality] || [];
        filteredGuides = filteredGuides.filter(guide => 
            keywords.some(keyword => guide.speciality.includes(keyword))
        );
    }
    
    displayGuideResults(filteredGuides, { location, language, speciality });
}

// Display Guide Results
function displayGuideResults(guides, filters) {
    const resultsSection = document.getElementById('searchResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const resultsContent = document.getElementById('resultsContent');
    
    resultsTitle.textContent = 'Travel Guides';
    resultsCount.textContent = `${guides.length} guides found`;
    
    let html = '<div class="results-grid">';
    
    if (guides.length > 0) {
        guides.forEach(guide => {
            html += createGuideCard(guide);
        });
    } else {
        html = `
            <div class="no-results">
                <h3>No guides found</h3>
                <p>Try adjusting your search filters or search for a different location.</p>
            </div>
        `;
    }
    
    html += '</div>';
    
    resultsContent.innerHTML = html;
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Create Guide Card HTML
function createGuideCard(guide) {
    const stars = '★'.repeat(Math.floor(guide.rating)) + (guide.rating % 1 >= 0.5 ? '☆' : '');
    
    return `
        <div class="guide-card">
            <div class="guide-header">
                <div class="guide-avatar">
                    ${guide.avatar}
                </div>
                <h3 class="guide-name">${guide.name}</h3>
                <div class="guide-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${guide.location}
                </div>
            </div>
            <div class="guide-details">
                <div class="guide-speciality">${guide.speciality}</div>
                <div class="guide-stats">
                    <div class="stat-item">
                        <span class="stat-value">$${guide.pricePerHour}</span>
                        <span class="stat-label">per hour</span>
                    </div>
                    <div class="stat-item">
                        <div class="rating">
                            <span class="stat-value">${guide.rating}</span>
                            <div class="stars">
                                ${stars}
                            </div>
                        </div>
                        <span class="stat-label">rating</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${guide.languages.length}</span>
                        <span class="stat-label">languages</span>
                    </div>
                </div>
                <button class="book-btn" onclick="bookGuide('${guide.name}')">
                    <i class="fas fa-calendar-check"></i>
                    Book Now
                </button>
            </div>
        </div>
    `;
}

// Search Location (for popular destinations)
function searchLocation(location) {
    document.getElementById('destinationInput').value = location;
    performDestinationSearch();
}

// Book Guide
function bookGuide(guideName) {
    const guide = guidesDatabase.find(g => g.name === guideName);
    if (guide) {
        alert(`Booking ${guide.name} in ${guide.location}!\n\nRate: $${guide.pricePerHour}/hour\nSpeciality: ${guide.speciality}\nRating: ${guide.rating}★\n\nThis would normally open the booking interface.`);
    }
}

// Display No Results
function displayNoResults(searchType, query) {
    const resultsSection = document.getElementById('searchResults');
    const resultsTitle = document.getElementById('resultsTitle');
    const resultsCount = document.getElementById('resultsCount');
    const resultsContent = document.getElementById('resultsContent');
    
    resultsTitle.textContent = 'No Results Found';
    resultsCount.textContent = '';
    
    resultsContent.innerHTML = `
        <div class="no-results">
            <h3>No ${searchType} found for "${query}"</h3>
            <p>Try searching for a different location or check the spelling.</p>
            <div class="suggestions">
                <h4>Popular destinations:</h4>
                <div class="suggestion-tags">
                    <span class="suggestion-tag" onclick="searchLocation('Jaipur, India')">Jaipur, India</span>
                    <span class="suggestion-tag" onclick="searchLocation('Rome, Italy')">Rome, Italy</span>
                    <span class="suggestion-tag" onclick="searchLocation('Tokyo, Japan')">Tokyo, Japan</span>
                    <span class="suggestion-tag" onclick="searchLocation('Paris, France')">Paris, France</span>
                </div>
            </div>
        </div>
    `;
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for Enter key
    document.getElementById('destinationInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performDestinationSearch();
        }
    });
    
    document.getElementById('guideLocationInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performGuideSearch();
        }
    });
    
    // Initialize with destination search active
    switchTab('destination');
});

// Additional CSS for new elements
const additionalStyles = `
<style>
.no-results {
    text-align: center;
    padding: 3rem;
    color: var(--medium-gray);
}

.no-results h3 {
    color: var(--dark-gray);
    margin-bottom: 1rem;
}

.suggestions {
    margin-top: 2rem;
}

.suggestions h4 {
    color: var(--dark-gray);
    margin-bottom: 1rem;
}

.suggestion-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.suggestion-tag {
    background: var(--light-blue);
    color: var(--primary-blue);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.suggestion-tag:hover {
    background: var(--primary-blue);
    color: var(--white);
    transform: translateY(-2px);
}

.stars {
    color: #fbbf24;
    font-size: 0.9rem;
}

.no-guides {
    text-align: center;
    padding: 2rem;
    color: var(--medium-gray);
    grid-column: 1 / -1;
}
</style>
`;

// Add the additional styles to the document
document.head.insertAdjacentHTML('beforeend', additionalStyles);