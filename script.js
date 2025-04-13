document.addEventListener('DOMContentLoaded', function() {
    // Video background setup
    const bgVideo = document.getElementById('bgVideo');
    const searchInput = document.getElementById('cosmicSearch');
    const searchButton = document.getElementById('searchButton');
    const eventsContent = document.getElementById('eventsContent');
    const discoveriesContent = document.getElementById('discoveriesContent');
    const factsContent = document.getElementById('factsContent');

    // Navigation setup
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSection = item.getAttribute('data-section');
            
            // Update active states
            menuItems.forEach(mi => mi.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Initialize charts
    function initializeCharts() {
        // Mission Success Rate Chart
        const successRateCtx = document.getElementById('successRateChart').getContext('2d');
        new Chart(successRateCtx, {
            type: 'doughnut',
            data: {
                labels: ['Successful', 'In Progress', 'Failed'],
                datasets: [{
                    data: [75, 20, 5],
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 165, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'
                    ],
                    borderColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(255, 165, 0, 1)',
                        'rgba(255, 0, 0, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                }
            }
        });

        // Cosmic Event Trends Chart
        const eventTrendsCtx = document.getElementById('eventTrendsChart').getContext('2d');
        new Chart(eventTrendsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Events Detected',
                    data: [12, 19, 15, 25, 22, 30],
                    borderColor: 'rgba(79, 172, 254, 1)',
                    backgroundColor: 'rgba(79, 172, 254, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
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
                }
            }
        });

        // Observation Statistics Chart
        const observationStatsCtx = document.getElementById('observationStatsChart').getContext('2d');
        new Chart(observationStatsCtx, {
            type: 'bar',
            data: {
                labels: ['Planets', 'Stars', 'Galaxies', 'Nebulae', 'Comets'],
                datasets: [{
                    label: 'Observations',
                    data: [45, 30, 25, 15, 10],
                    backgroundColor: 'rgba(0, 242, 254, 0.5)',
                    borderColor: 'rgba(0, 242, 254, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#fff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
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
                }
            }
        });
    }

    // View Details Functions
    function showEventDetails(eventId) {
        const events = {
            'eta-aquariids': {
                title: 'Eta Aquariids Meteor Shower 2025',
                date: 'May 5-6, 2025',
                description: 'The Eta Aquariids is one of the best meteor showers of the year, originating from the famous Halley\'s Comet. This year\'s shower promises to be particularly spectacular with optimal viewing conditions.',
                details: {
                    'Peak Time': 'Early morning hours (3-5 AM local time)',
                    'Expected Rate': '30-40 meteors per hour',
                    'Best Viewing': 'Southern Hemisphere',
                    'Duration': 'April 19 - May 28, 2025',
                    'Origin': 'Halley\'s Comet',
                    'Next Shower': 'Delta Aquariids (July 28-29, 2025)',
                    'Moon Phase': 'Waning Crescent (minimal interference)'
                }
            },
            'solstice': {
                title: 'Summer Solstice 2025',
                date: 'June 21, 2025',
                description: 'The summer solstice marks the longest day of the year in the Northern Hemisphere and the official start of summer. This astronomical event occurs when the Earth\'s axial tilt is most inclined towards the Sun.',
                details: {
                    'Duration': 'Longest day of the year',
                    'Sunrise': 'Earliest sunrise of the year',
                    'Sunset': 'Latest sunset of the year',
                    'Daylight': 'Up to 16 hours in northern latitudes',
                    'Next Solstice': 'December 21, 2025 (Winter)',
                    'Significance': 'Official start of summer',
                    'Cultural Events': 'Worldwide celebrations and festivals'
                }
            },
            'lunar-eclipse': {
                title: 'Total Lunar Eclipse 2025',
                date: 'September 7, 2025',
                description: 'A total lunar eclipse will be visible across the Americas, Europe, and Africa. During this event, the Moon will pass through Earth\'s shadow, creating a stunning "blood moon" effect visible to the naked eye.',
                details: {
                    'Duration': '3 hours 29 minutes (total phase)',
                    'Visibility': 'Visible from Americas, Europe, Africa',
                    'Best Viewing': 'Eastern United States',
                    'Next Eclipse': 'March 3, 2026 (Asia)',
                    'Safety': 'Safe to view with naked eye',
                    'Color': 'Reddish-orange (blood moon)',
                    'Maximum Eclipse': '18:11 UTC'
                }
            }
        };

        showModal(events[eventId]);
    }

    function showDiscoveryDetails(discoveryId) {
        const discoveries = {
            'exoplanet': {
                title: 'New Habitable Exoplanet Discovery',
                date: 'March 10, 2024',
                description: 'NASA\'s TESS mission has discovered a new exoplanet in the habitable zone of its star. The planet, named TOI-715 b, is about 1.5 times the size of Earth and orbits a small, cool M-dwarf star.',
                details: {
                    'Distance': '137 light-years from Earth',
                    'Orbital Period': '19 days',
                    'Star Type': 'M-dwarf (red dwarf)',
                    'Potential': 'Could support liquid water',
                    'Size': '1.5 times Earth\'s radius',
                    'Temperature': 'Estimated surface temperature: -40°C to 30°C',
                    'Discovery Method': 'Transit Photometry',
                    'Mission': 'TESS (Transiting Exoplanet Survey Satellite)'
                }
            },
            'mars-water': {
                title: 'Water on Mars Discovery',
                date: 'March 8, 2024',
                description: 'The Perseverance rover has discovered new evidence of liquid water beneath the Martian surface, suggesting the possibility of current microbial life on Mars.',
                details: {
                    'Location': 'Jezero Crater',
                    'Depth': 'Approximately 10 meters below surface',
                    'Temperature': 'Stable at -10°C',
                    'Salinity': 'Similar to Earth\'s oceans',
                    'Discovery Method': 'Ground-penetrating radar',
                    'Significance': 'First direct evidence of current liquid water on Mars',
                    'Next Steps': 'Further analysis of water chemistry'
                }
            }
        };

        showModal(discoveries[discoveryId]);
    }

    function showFactDetails(factId) {
        const facts = {
            'black-hole': {
                title: 'Black Hole Facts',
                description: 'Black holes are among the most fascinating and mysterious objects in the universe. Here are some incredible facts about them:',
                details: {
                    'Fastest Spin': '1,000 rotations per second',
                    'Largest Known': 'TON 618 (66 billion solar masses)',
                    'Closest to Earth': 'Gaia BH1 (1,560 light-years)',
                    'Temperature': 'Near absolute zero (-273.15°C)',
                    'Event Horizon': 'Point of no return for matter and light',
                    'Time Dilation': 'Time runs slower near black holes',
                    'Formation': 'Result of massive star collapse',
                    'Detection': 'Through gravitational effects and radiation'
                }
            },
            'galaxy-formation': {
                title: 'Galaxy Formation Facts',
                description: 'Our understanding of galaxy formation has evolved significantly in recent years. Here are some fascinating facts about how galaxies form and evolve:',
                details: {
                    'Milky Way Age': 'Approximately 13.6 billion years',
                    'Andromeda Collision': 'Expected in 4.5 billion years',
                    'Galaxy Types': 'Spiral, Elliptical, Irregular',
                    'Dark Matter': 'Makes up 85% of galaxy mass',
                    'Star Formation': 'Ongoing process in spiral arms',
                    'Supermassive Black Holes': 'Found in most galaxy centers',
                    'Galaxy Clusters': 'Largest gravitationally bound structures'
                }
            }
        };

        showModal(facts[factId]);
    }

    function showModal(data) {
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        // Add close button
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => modal.remove();
        
        // Add title
        const title = document.createElement('h2');
        title.textContent = data.title;
        
        // Add date if exists
        let date = '';
        if (data.date) {
            date = `<div class="modal-date">${data.date}</div>`;
        }
        
        // Add description
        const description = document.createElement('p');
        description.className = 'modal-description';
        description.textContent = data.description;
        
        // Add details
        const details = document.createElement('div');
        details.className = 'modal-details';
        
        for (const [key, value] of Object.entries(data.details)) {
            const detailItem = document.createElement('div');
            detailItem.className = 'detail-item';
            detailItem.innerHTML = `
                <span class="detail-label">${key}:</span>
                <span class="detail-value">${value}</span>
            `;
            details.appendChild(detailItem);
        }
        
        // Assemble modal
        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        if (date) modalContent.innerHTML += date;
        modalContent.appendChild(description);
        modalContent.appendChild(details);
        modal.appendChild(modalContent);
        
        // Add to document
        document.body.appendChild(modal);
        
        // Add click outside to close
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }

    // Initialize charts when Analytics section is visible
    const analyticsSection = document.getElementById('analytics');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                initializeCharts();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(analyticsSection);

    // Search functionality
    searchButton.addEventListener('click', searchCosmicInfo);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchCosmicInfo();
        }
    });

    function searchCosmicInfo() {
        const query = searchInput.value.trim();
        if (query) {
            fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: query })
            })
            .then(response => response.json())
            .then(data => {
                updateContent(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }

    function updateContent(data) {
        if (data.events) eventsContent.textContent = data.events;
        if (data.discoveries) discoveriesContent.textContent = data.discoveries;
        if (data.facts) factsContent.textContent = data.facts;
    }

    // Ensure video plays
    bgVideo.play().catch(error => {
        console.log('Video autoplay failed:', error);
        // Try to play video on user interaction
        document.addEventListener('click', () => {
            bgVideo.play().catch(e => console.log('Video play failed:', e));
        }, { once: true });
    });

    // Cosmic Chat Functionality
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-button');
    const chatMessages = document.querySelector('.chat-messages');

    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p>${content}</p>`;
        
        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserMessage(message) {
        addMessage(message, true);
        
        // Simulate typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message assistant typing';
        typingIndicator.innerHTML = '<div class="message-content"><p>Typing...</p></div>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate response delay
        setTimeout(() => {
            typingIndicator.remove();
            
            // Generate response based on message content
            let response = generateResponse(message);
            addMessage(response);
        }, 1500);
    }

    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('eclipse') || lowerMessage.includes('solar')) {
            return "The next solar eclipse will occur on March 14, 2025. It will be visible across Europe and Asia, with the path of totality stretching from Spain through Turkey and into Russia. Make sure to use proper eye protection when viewing!";
        } else if (lowerMessage.includes('meteor') || lowerMessage.includes('shower')) {
            return "The Lyrid meteor shower peaks on April 22, 2025. It's best viewed in the early morning hours away from city lights. This year's shower coincides with a new moon, making it particularly spectacular with minimal moonlight interference. You can expect to see about 15-20 meteors per hour!";
        } else if (lowerMessage.includes('planet') || lowerMessage.includes('alignment')) {
            return "On September 29, 2025, Venus, Mars, and Jupiter will align in the morning sky. This is a great opportunity for planetary observation! The planets will be visible just before sunrise in the eastern sky.";
        } else if (lowerMessage.includes('lunar') || lowerMessage.includes('moon')) {
            return "The next total lunar eclipse will occur on September 7, 2025. It will be visible across the Americas, Europe, and Africa. During this event, the Moon will pass through Earth's shadow, creating a stunning 'blood moon' effect visible to the naked eye.";
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! I'm here to help you explore cosmic events in 2025. You can ask me about upcoming eclipses, meteor showers, planetary alignments, or lunar events!";
        } else {
            return "I'm not sure about that specific event. You can ask me about upcoming solar eclipses (March 14, 2025), meteor showers (April 22, 2025), planetary alignments (September 29, 2025), or lunar eclipses (September 7, 2025)!";
        }
    }

    sendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            handleUserMessage(message);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                handleUserMessage(message);
                chatInput.value = '';
            }
        }
    });
}); 