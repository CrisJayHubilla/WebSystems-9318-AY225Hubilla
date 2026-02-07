// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const alertClose = document.getElementById('alertClose');
const emergencyAlert = document.getElementById('emergencyAlert');
const campaignGrid = document.getElementById('campaignGrid');
const eventsGrid = document.getElementById('eventsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const announcementsList = document.getElementById('announcementsList');
const eventModal = document.getElementById('eventModal');
const modalClose = document.getElementById('modalClose');
const registerBtn = document.getElementById('registerBtn');
const volunteerForm = document.getElementById('volunteerForm');
const donationModal = document.getElementById('donationModal');
const donationModalClose = document.getElementById('donationModalClose');
const amountButtons = document.querySelectorAll('.amount-btn');
const customAmountBtn = document.getElementById('customAmountBtn');
const customAmountInput = document.getElementById('customAmountInput');
const donateNowBtn = document.getElementById('donateNowBtn');
const paymentForm = document.getElementById('paymentForm');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const servicesTabs = document.querySelectorAll('.services-tabs .tab-btn');
const serviceTabContents = document.querySelectorAll('.service-tab-content');

// Mobile Menu Toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close alert banner
if (alertClose && emergencyAlert) {
    alertClose.addEventListener('click', () => {
        emergencyAlert.style.display = 'none';
    });
}

// Campaign data
const campaigns = [
    {
        id: 1,
        title: "Blood Donation Drive",
        description: "Help us maintain a stable blood supply for emergencies and patients in need.",
        image: "blood-drive",
        tag: "Health",
        raised: 85000,
        goal: 150000,
        progress: 57
    },
    {
        id: 2,
        title: "Typhoon Relief Fund",
        description: "Providing emergency aid to families affected by recent typhoons in Northern Luzon.",
        image: "typhoon-relief",
        tag: "Disaster",
        raised: 320000,
        goal: 500000,
        progress: 64
    },
    {
        id: 3,
        title: "Community Health Initiative",
        description: "Support our mobile clinics serving remote communities without access to healthcare.",
        image: "health-initiative",
        tag: "Health",
        raised: 125000,
        goal: 250000,
        progress: 50
    }
];

// Load campaigns on home page
if (campaignGrid) {
    campaigns.forEach(campaign => {
        const campaignCard = document.createElement('div');
        campaignCard.className = 'campaign-card';
        campaignCard.innerHTML = `
            <div class="campaign-image">
                <div class="campaign-tag">${campaign.tag}</div>
            </div>
            <div class="campaign-content">
                <h3>${campaign.title}</h3>
                <p>${campaign.description}</p>
                <div class="campaign-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${campaign.progress}%"></div>
                    </div>
                    <div class="progress-text">
                        <span>₱${campaign.raised.toLocaleString()} raised</span>
                        <span>${campaign.progress}%</span>
                    </div>
                </div>
                <a href="volunteer.html" class="btn btn-primary">Donate Now</a>
            </div>
        `;
        campaignGrid.appendChild(campaignCard);
    });
}

// Events data
const events = [
    {
        id: 1,
        title: "First Aid Training Workshop",
        date: "15",
        month: "Nov",
        location: "Makati City",
        type: "training",
        audience: "Public",
        description: "Learn essential first aid skills including CPR, wound care, and emergency response. This hands-on workshop is suitable for individuals, parents, and community leaders.",
        fullDate: "November 15, 2023",
        fullLocation: "PHAS Training Center, Makati City"
    },
    {
        id: 2,
        title: "Medical Mission in Tondo",
        date: "22",
        month: "Nov",
        location: "Tondo, Manila",
        type: "health",
        audience: "Medical Volunteers",
        description: "Join our medical team providing free consultations, basic treatments, and medicines to underserved communities in Tondo. Volunteers needed: doctors, nurses, and support staff.",
        fullDate: "November 22, 2023",
        fullLocation: "Barangay Health Center, Tondo, Manila"
    },
    {
        id: 3,
        title: "Disaster Preparedness Seminar",
        date: "28",
        month: "Nov",
        location: "Quezon City",
        type: "training",
        audience: "Community Leaders",
        description: "Training session for community leaders on disaster risk reduction, early warning systems, and emergency evacuation planning.",
        fullDate: "November 28, 2023",
        fullLocation: "Quezon City Hall, Conference Room A"
    },
    {
        id: 4,
        title: "Blood Donation Day",
        date: "5",
        month: "Dec",
        location: "Multiple Locations",
        type: "health",
        audience: "Donors",
        description: "Nationwide blood donation drive. Walk-in donors welcome at all PHAS centers and partner hospitals.",
        fullDate: "December 5, 2023",
        fullLocation: "PHAS Centers Nationwide"
    },
    {
        id: 5,
        title: "Year-End Volunteer Appreciation",
        date: "16",
        month: "Dec",
        location: "PHAS Main Office",
        type: "social",
        audience: "Volunteers",
        description: "Celebrating our dedicated volunteers with awards, recognition, and fellowship. All current and past volunteers are invited.",
        fullDate: "December 16, 2023",
        fullLocation: "PHAS Main Office, Ayala Avenue, Makati"
    }
];

// Announcements data
const announcements = [
    {
        id: 1,
        title: "Emergency Response Alert: Flooding in Central Luzon",
        date: "November 10, 2023",
        description: "Our teams are deployed to provide emergency relief to communities affected by severe flooding. Donations of food, water, and hygiene kits are urgently needed.",
        icon: "fas fa-exclamation-triangle"
    },
    {
        id: 2,
        title: "New Partnership with Department of Health",
        date: "November 5, 2023",
        description: "We are pleased to announce a new partnership with the Department of Health to expand our community health programs nationwide.",
        icon: "fas fa-handshake"
    },
    {
        id: 3,
        title: "Holiday Schedule Update",
        date: "November 1, 2023",
        description: "Please note that our offices will be closed on November 30 (Bonifacio Day) and December 25 (Christmas Day). Emergency services remain available 24/7.",
        icon: "fas fa-calendar-alt"
    }
];

// Load events on events page
if (eventsGrid) {
    function loadEvents(filter = 'all') {
        eventsGrid.innerHTML = '';
        
        const filteredEvents = filter === 'all' 
            ? events 
            : events.filter(event => {
                if (filter === 'upcoming') return event.type === 'health' || event.type === 'training';
                if (filter === 'ongoing') return event.type === 'health';
                if (filter === 'announcement') return event.type === 'social';
                return true;
            });
        
        filteredEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.setAttribute('data-id', event.id);
            eventCard.innerHTML = `
                <div class="event-image">
                    <div class="event-date">
                        <span class="day">${event.date}</span>
                        <span class="month">${event.month}</span>
                    </div>
                </div>
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <div class="event-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                        <span><i class="fas fa-users"></i> ${event.audience}</span>
                    </div>
                    <button class="event-btn view-details" data-id="${event.id}">View Details</button>
                </div>
            `;
            eventsGrid.appendChild(eventCard);
        });
        
        // Add event listeners to view details buttons
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const eventId = parseInt(this.getAttribute('data-id'));
                const event = events.find(e => e.id === eventId);
                openEventModal(event);
            });
        });
    }
    
    loadEvents();
    
    // Event filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Load events with selected filter
            const filter = this.getAttribute('data-filter');
            loadEvents(filter);
        });
    });
}

// Load announcements
if (announcementsList) {
    announcements.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item';
        announcementItem.innerHTML = `
            <div class="announcement-icon">
                <i class="${announcement.icon}"></i>
            </div>
            <div class="announcement-content">
                <h3>${announcement.title}</h3>
                <p>${announcement.description}</p>
                <div class="announcement-date">${announcement.date}</div>
            </div>
        `;
        announcementsList.appendChild(announcementItem);
    });
}

// Event Modal Functionality
function openEventModal(event) {
    if (!eventModal) return;
    
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDate').textContent = event.fullDate;
    document.getElementById('modalLocation').textContent = event.fullLocation;
    document.getElementById('modalAudience').textContent = event.audience;
    document.getElementById('modalDescription').innerHTML = `<p>${event.description}</p>`;
    
    eventModal.style.display = 'flex';
}

// Close modal
if (modalClose) {
    modalClose.addEventListener('click', () => {
        eventModal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        eventModal.style.display = 'none';
    }
    if (e.target === donationModal) {
        donationModal.style.display = 'none';
    }
});

// Register for event button
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        alert('Thank you for your interest! You will be redirected to the volunteer registration page.');
        window.location.href = 'volunteer.html';
    });
}

// Volunteer Form Validation
if (volunteerForm) {
    volunteerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(error => {
            error.style.display = 'none';
        });
        
        // Validate name
        const name = document.getElementById('fullName');
        if (!name.value.trim()) {
            document.getElementById('nameError').textContent = 'Full name is required';
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            document.getElementById('emailError').textContent = 'Email address is required';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else if (!emailPattern.test(email.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }
        
        // Validate phone
        const phone = document.getElementById('phone');
        const phonePattern = /^[0-9+\-\s()]{10,}$/;
        if (!phone.value.trim()) {
            document.getElementById('phoneError').textContent = 'Contact number is required';
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        } else if (!phonePattern.test(phone.value)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid contact number';
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        }
        
        // Validate volunteer type
        const volunteerType = document.getElementById('volunteerType');
        if (!volunteerType.value) {
            document.getElementById('volunteerTypeError').textContent = 'Please select a volunteer interest';
            document.getElementById('volunteerTypeError').style.display = 'block';
            isValid = false;
        }
        
        // Validate availability
        const availability = document.getElementById('availability');
        if (!availability.value) {
            document.getElementById('availabilityError').textContent = 'Please select your availability';
            document.getElementById('availabilityError').style.display = 'block';
            isValid = false;
        }
        
        // Validate terms
        const terms = document.getElementById('terms');
        if (!terms.checked) {
            document.getElementById('termsError').textContent = 'You must agree to the terms and conditions';
            document.getElementById('termsError').style.display = 'block';
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            volunteerForm.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
            
            // In a real application, you would send the form data to a server here
            console.log('Volunteer form submitted:', {
                name: name.value,
                email: email.value,
                phone: phone.value,
                address: document.getElementById('address').value,
                volunteerType: volunteerType.value,
                availability: availability.value,
                skills: document.getElementById('skills').value
            });
        }
    });
}

// Donation functionality
if (amountButtons) {
    let selectedAmount = 0;
    
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            if (this.id === 'customAmountBtn') {
                customAmountInput.style.display = 'block';
                selectedAmount = 0;
            } else {
                customAmountInput.style.display = 'none';
                selectedAmount = parseInt(this.getAttribute('data-amount'));
            }
        });
    });
    
    if (customAmountBtn) {
        customAmountBtn.addEventListener('click', function() {
            amountButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            customAmountInput.style.display = 'block';
        });
    }
    
    if (donateNowBtn) {
        donateNowBtn.addEventListener('click', function() {
            const customDonation = document.getElementById('customDonation');
            
            if (customAmountInput.style.display === 'block' && customDonation.value) {
                selectedAmount = parseInt(customDonation.value);
            }
            
            if (selectedAmount > 0) {
                document.getElementById('donationAmount').textContent = `₱${selectedAmount.toLocaleString()}`;
                document.getElementById('donationType').textContent = 'One-time donation';
                donationModal.style.display = 'flex';
            } else {
                alert('Please select or enter a donation amount.');
            }
        });
    }
}

// Payment form
if (paymentForm) {
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real application, you would process the payment here
        alert('Thank you for your donation! Payment processed successfully.');
        donationModal.style.display = 'none';
        
        // Reset form
        paymentForm.reset();
    });
}

// Close donation modal
if (donationModalClose) {
    donationModalClose.addEventListener('click', () => {
        donationModal.style.display = 'none';
    });
}

// Tab functionality for volunteer page
if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Tab functionality for services page
if (servicesTabs.length > 0) {
    servicesTabs.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            servicesTabs.forEach(btn => btn.classList.remove('active'));
            serviceTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Update URL hash for deep linking
            window.location.hash = tabId;
        });
    });
    
    // Check for hash on page load
    if (window.location.hash) {
        const tabId = window.location.hash.substring(1);
        const tabButton = document.querySelector(`.services-tabs .tab-btn[data-tab="${tabId}"]`);
        if (tabButton) {
            tabButton.click();
        }
    }
}

// Animate statistics on home page
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 20);
    });
}

// Intersection Observer for stats animation
if (document.querySelector('.statistics')) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.statistics'));
}

// Initialize tooltips for donation impact cards
const impactCards = document.querySelectorAll('.impact-card');
impactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow)';
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Handle membership form submission
const membershipForm = document.getElementById('membershipForm');
if (membershipForm) {
    membershipForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your membership inquiry! Our partnership team will contact you within 3 business days.');
        this.reset();
    });
}

// Add active class to current page in navigation
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    
    if (currentPage === linkPage || 
        (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading for campaign and event images
    const images = document.querySelectorAll('.campaign-image, .event-image, .project-image');
    
    images.forEach(image => {
        // Add a shimmer effect
        image.innerHTML += '<div class="shimmer"></div>';
        
        // In a real application, you would load actual images here
        // For this demo, we'll just set a background color
        const colors = ['#a8dadc', '#457b9d', '#1d3557', '#e63946', '#2a9d8f'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        image.style.backgroundColor = randomColor;
        
        // Remove shimmer after "loading"
        setTimeout(() => {
            const shimmer = image.querySelector('.shimmer');
            if (shimmer) {
                shimmer.style.opacity = '0';
                setTimeout(() => shimmer.remove(), 500);
            }
        }, 800);
    });
});
// Service Tabs Functionality
function initServiceTabs() {
    const serviceTabButtons = document.querySelectorAll('.services-tabs .tab-btn');
    const serviceTabContents = document.querySelectorAll('.service-tab-content');
    
    if (serviceTabButtons.length > 0 && serviceTabContents.length > 0) {
        // Function to show a specific tab
        function showTab(tabId) {
            // Hide all tab contents
            serviceTabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all buttons
            serviceTabButtons.forEach(button => {
                button.classList.remove('active');
            });
            
            // Show the selected tab content
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
            
            // Activate the corresponding button
            const activeButton = document.querySelector(`.services-tabs .tab-btn[data-tab="${tabId}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }
        }
        
        // Add click event to each tab button
        serviceTabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                showTab(tabId);
                
                // Update URL hash
                history.pushState(null, null, `#${tabId}`);
            });
        });
        
        // Check URL hash on page load
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            const validTabs = ['health', 'disaster', 'community', 'training'];
            
            if (validTabs.includes(hash)) {
                showTab(hash);
            }
        }
        
        // Handle browser back/forward buttons
        window.addEventListener('popstate', function() {
            if (window.location.hash) {
                const hash = window.location.hash.substring(1);
                const validTabs = ['health', 'disaster', 'community', 'training'];
                
                if (validTabs.includes(hash)) {
                    showTab(hash);
                }
            } else {
                // Default to first tab if no hash
                showTab('health');
            }
        });
    }
}

// Initialize service tabs when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initServiceTabs();
});