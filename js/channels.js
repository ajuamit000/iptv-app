// ========================================
// IP TV Website - Channels Page JavaScript
// Developer: Techno Science (Mr. Dev)
// ========================================

// Channel Data - Categories with counts
const categories = [
    { name: 'Animation', icon: 'fa-solid fa-film', count: 60 },
    { name: 'Auto', icon: 'fa-solid fa-car', count: 17 },
    { name: 'Business', icon: 'fa-solid fa-briefcase', count: 72 },
    { name: 'Classic', icon: 'fa-solid fa-clock', count: 51 },
    { name: 'Comedy', icon: 'fa-solid fa-face-laugh', count: 76 },
    { name: 'Cooking', icon: 'fa-solid fa-utensils', count: 32 },
    { name: 'Culture', icon: 'fa-solid fa-masks-theater', count: 168 },
    { name: 'Documentary', icon: 'fa-solid fa-book', count: 114 },
    { name: 'Education', icon: 'fa-solid fa-graduation-cap', count: 184 },
    { name: 'Entertainment', icon: 'fa-solid fa-star', count: 608 },
    { name: 'Family', icon: 'fa-solid fa-users', count: 55 },
    { name: 'General', icon: 'fa-solid fa-globe', count: 2441 },
    { name: 'Kids', icon: 'fa-solid fa-child', count: 247 },
    { name: 'Legislative', icon: 'fa-solid fa-landmark', count: 186 },
    { name: 'Lifestyle', icon: 'fa-solid fa-heart', count: 98 },
    { name: 'Movies', icon: 'fa-solid fa-video', count: 382 },
    { name: 'Music', icon: 'fa-solid fa-music', count: 623 },
    { name: 'News', icon: 'fa-solid fa-newspaper', count: 897 },
    { name: 'Outdoor', icon: 'fa-solid fa-tree', count: 45 },
    { name: 'Public', icon: 'fa-solid fa-building', count: 41 },
    { name: 'Relax', icon: 'fa-solid fa-spa', count: 4 },
    { name: 'Religious', icon: 'fa-solid fa-hands-praying', count: 732 },
    { name: 'Science', icon: 'fa-solid fa-flask', count: 24 },
    { name: 'Series', icon: 'fa-solid fa-tv', count: 216 },
    { name: 'Shop', icon: 'fa-solid fa-cart-shopping', count: 88 },
    { name: 'Sports', icon: 'fa-solid fa-futbol', count: 308 },
    { name: 'Travel', icon: 'fa-solid fa-plane', count: 41 },
    { name: 'Weather', icon: 'fa-solid fa-cloud-sun', count: 16 }
];

// Popular Languages
const languages = [
    { name: 'English', code: 'en', count: 1500 },
    { name: 'Spanish', code: 'es', count: 890 },
    { name: 'Arabic', code: 'ar', count: 370 },
    { name: 'Portuguese', code: 'pt', count: 320 },
    { name: 'French', code: 'fr', count: 280 },
    { name: 'German', code: 'de', count: 210 },
    { name: 'Russian', code: 'ru', count: 195 },
    { name: 'Turkish', code: 'tr', count: 180 },
    { name: 'Italian', code: 'it', count: 165 },
    { name: 'Hindi', code: 'hi', count: 150 },
    { name: 'Chinese', code: 'zh', count: 140 },
    { name: 'Japanese', code: 'ja', count: 85 }
];

// Popular Countries
const countries = [
    { name: 'United States', code: 'us', flag: '🇺🇸', count: 850 },
    { name: 'United Kingdom', code: 'gb', flag: '🇬🇧', count: 420 },
    { name: 'India', code: 'in', flag: '🇮🇳', count: 380 },
    { name: 'Brazil', code: 'br', flag: '🇧🇷', count: 340 },
    { name: 'Germany', code: 'de', flag: '🇩🇪', count: 290 },
    { name: 'France', code: 'fr', flag: '🇫🇷', count: 275 },
    { name: 'Spain', code: 'es', flag: '🇪🇸', count: 260 },
    { name: 'Italy', code: 'it', flag: '🇮🇹', count: 245 },
    { name: 'Russia', code: 'ru', flag: '🇷🇺', count: 230 },
    { name: 'Canada', code: 'ca', flag: '🇨🇦', count: 185 },
    { name: 'Australia', code: 'au', flag: '🇦🇺', count: 165 },
    { name: 'Mexico', code: 'mx', flag: '🇲🇽', count: 155 }
];

// Sample Channel Data
const sampleChannels = [
    // News Channels
    { name: 'CNN International', category: 'news', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/220px-CNN.svg.png' },
    { name: 'BBC World News', category: 'news', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BBC_World_News_2022.svg/220px-BBC_World_News_2022.svg.png' },
    { name: 'Al Jazeera English', category: 'news', country: 'Qatar', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Al_Jazeera_English_2006.svg/220px-Al_Jazeera_English_2006.svg.png' },
    { name: 'France 24', category: 'news', country: 'France', language: 'French', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/France24_logo.svg/220px-France24_logo.svg.png' },
    { name: 'DW News', category: 'news', country: 'Germany', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/DW_Logo.svg/220px-DW_Logo.svg.png' },
    { name: 'Sky News', category: 'news', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Sky_News_logo.svg/220px-Sky_News_logo.svg.png' },
    { name: 'RT News', category: 'news', country: 'Russia', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/RT_Logo.svg/220px-RT_Logo.svg.png' },
    { name: 'NHK World', category: 'news', country: 'Japan', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/NHK_World.svg/220px-NHK_World.svg.png' },
    { name: 'CGTN', category: 'news', country: 'China', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/CGTN_logo.svg/220px-CGTN_logo.svg.png' },
    { name: 'Euronews', category: 'news', country: 'France', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Euronews_logo.svg/220px-Euronews_logo.svg.png' },
    
    // Sports Channels
    { name: 'ESPN', category: 'sports', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/ESPN_logo.svg/220px-ESPN_logo.svg.png' },
    { name: 'beIN Sports', category: 'sports', country: 'Qatar', language: 'Arabic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BeIN_Sports.svg/220px-BeIN_Sports.svg.png' },
    { name: 'Sky Sports News', category: 'sports', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sky_Sports.svg/220px-Sky_Sports.svg.png' },
    { name: 'Fox Sports', category: 'sports', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Fox_Sports_logo.svg/220px-Fox_Sports_logo.svg.png' },
    { name: 'Eurosport', category: 'sports', country: 'France', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Eurosport_logo.svg/220px-Eurosport_logo.svg.png' },
    { name: 'Sport TV', category: 'sports', country: 'Portugal', language: 'Portuguese', logo: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/3c/SportTV.png/220px-SportTV.png' },
    { name: 'DAZN', category: 'sports', country: 'Germany', language: 'German', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/DAZN_logo.svg/220px-DAZN_logo.svg.png' },
    { name: 'Star Sports', category: 'sports', country: 'India', language: 'Hindi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Star_Sports_logo.svg/220px-Star_Sports_logo.svg.png' },
    
    // Movies Channels
    { name: 'HBO', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/f1/HBO_logo.svg/220px-HBO_logo.svg.png' },
    { name: 'Cinemax', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cinemax_logo.svg/220px-Cinemax_logo.svg.png' },
    { name: 'AMC', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/AMC_logo.svg/220px-AMC_logo.svg.png' },
    { name: 'TCM', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/TCM_logo_2020.svg/220px-TCM_logo_2020.svg.png' },
    { name: 'Film4', category: 'movies', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Film4_logo.svg/220px-Film4_logo.svg.png' },
    { name: 'Canal+', category: 'movies', country: 'France', language: 'French', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Canal%2B_logo.svg/220px-Canal%2B_logo.svg.png' },
    { name: 'Sky Cinema', category: 'movies', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sky_Sports.svg/220px-Sky_Sports.svg.png' },
    
    // Music Channels
    { name: 'MTV', category: 'music', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/MTV_2021_vertical_logo.svg/220px-MTV_2021_vertical_logo.svg.png' },
    { name: 'VH1', category: 'music', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/VH1_logo.svg/220px-VH1_logo.svg.png' },
    { name: 'Trace Urban', category: 'music', country: 'France', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Trace_Urban_logo.png/220px-Trace_Urban_logo.png' },
    { name: 'Deluxe Music', category: 'music', country: 'Germany', language: 'German', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Deluxe_Music_logo.svg/220px-Deluxe_Music_logo.svg.png' },
    { name: 'Mezzo', category: 'music', country: 'France', language: 'French', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mezzo_logo.svg/220px-Mezzo_logo.svg.png' },
    { name: 'MTV Base', category: 'music', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/MTV_2021_vertical_logo.svg/220px-MTV_2021_vertical_logo.svg.png' },
    { name: 'Club MTV', category: 'music', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/MTV_2021_vertical_logo.svg/220px-MTV_2021_vertical_logo.svg.png' },
    
    // Kids Channels
    { name: 'Cartoon Network', category: 'kids', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2019_logo.svg/220px-Cartoon_Network_2019_logo.svg.png' },
    { name: 'Nickelodeon', category: 'kids', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nickelodeon_logo.svg/220px-Nickelodeon_logo.svg.png' },
    { name: 'Disney Channel', category: 'kids', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Disney_Channel_2014.svg/220px-Disney_Channel_2014.svg.png' },
    { name: 'CBeebies', category: 'kids', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/CBeebies_logo_2022.svg/220px-CBeebies_logo_2022.svg.png' },
    { name: 'Nick Jr.', category: 'kids', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Nick_Jr._logo.svg/220px-Nick_Jr._logo.svg.png' },
    { name: 'Disney Junior', category: 'kids', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Disney_Channel_2014.svg/220px-Disney_Channel_2014.svg.png' },
    { name: 'Boomerang', category: 'kids', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Boomerang_tv_logo.svg/220px-Boomerang_tv_logo.svg.png' },
    
    // Entertainment Channels
    { name: 'Comedy Central', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Comedy_Central_logo.svg/220px-Comedy_Central_logo.svg.png' },
    { name: 'E! Entertainment', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/E_Entertainment_Television_logo.svg/220px-E_Entertainment_Television_logo.svg.png' },
    { name: 'TLC', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/TLC_logo_2016.svg/220px-TLC_logo_2016.svg.png' },
    { name: 'Bravo', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bravo_2013_logo.svg/220px-Bravo_2013_logo.svg.png' },
    { name: 'Lifetime', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lifetime_TV_logo.svg/220px-Lifetime_TV_logo.svg.png' },
    { name: 'ITV', category: 'entertainment', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/ITV_logo_2013.svg/220px-ITV_logo_2013.svg.png' },
    { name: 'ProSieben', category: 'entertainment', country: 'Germany', language: 'German', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/ProSieben_logo.svg/220px-ProSieben_logo.svg.png' },
    
    // Documentary Channels
    { name: 'Discovery Channel', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Discovery_Channel_2019.svg/220px-Discovery_Channel_2019.svg.png' },
    { name: 'National Geographic', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/National_Geographic_logo.svg/220px-National_Geographic_logo.svg.png' },
    { name: 'History Channel', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/History_Logo.svg/220px-History_Logo.svg.png' },
    { name: 'Animal Planet', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Animal_Planet_logo.svg/220px-Animal_Planet_logo.svg.png' },
    { name: 'BBC Earth', category: 'documentary', country: 'United Kingdom', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BBC_World_News_2022.svg/220px-BBC_World_News_2022.svg.png' },
    { name: 'Discovery Science', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Discovery_Channel_2019.svg/220px-Discovery_Channel_2019.svg.png' },
    
    // More channels for variety
    { name: 'CNBC', category: 'news', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/CNBC_logo.svg/220px-CNBC_logo.svg.png' },
    { name: 'Bloomberg', category: 'news', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bloomberg_L.P._corporate_logo.svg/220px-Bloomberg_L.P._corporate_logo.svg.png' },
    { name: 'TRT World', category: 'news', country: 'Turkey', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/TRT_Logo.svg/220px-TRT_Logo.svg.png' },
    { name: 'Arirang TV', category: 'news', country: 'South Korea', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ArirangTV.svg/220px-ArirangTV.svg.png' },
    { name: 'ABC News', category: 'news', country: 'Australia', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/ABC_News_Australia_logo.svg/220px-ABC_News_Australia_logo.svg.png' },
    { name: 'CNA', category: 'news', country: 'Singapore', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Channel_NewsAsia_logo.svg/220px-Channel_NewsAsia_logo.svg.png' },
    { name: 'FOX News', category: 'news', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/FOX_News_Channel_logo_%282015%29.svg/220px-FOX_News_Channel_logo_%282015%29.svg.png' },
    { name: 'MSNBC', category: 'news', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/MSNBC_2021.svg/220px-MSNBC_2021.svg.png' },
    { name: 'CBS News', category: 'news', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/CBS_News_logo.svg/220px-CBS_News_logo.svg.png' },
    { name: 'NBC News', category: 'news', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/NBCNews.svg/220px-NBCNews.svg.png' },
    
    { name: 'NBA TV', category: 'sports', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/NBA_TV_logo.svg/220px-NBA_TV_logo.svg.png' },
    { name: 'NFL Network', category: 'sports', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NFL_Network_logo.svg/220px-NFL_Network_logo.svg.png' },
    { name: 'MLB Network', category: 'sports', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MLB_Network_logo.svg/220px-MLB_Network_logo.svg.png' },
    { name: 'Tennis Channel', category: 'sports', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tennis_Channel_logo.svg/220px-Tennis_Channel_logo.svg.png' },
    { name: 'Golf Channel', category: 'sports', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Golf_Channel_2013_logo.svg/220px-Golf_Channel_2013_logo.svg.png' },
    { name: 'Olympic Channel', category: 'sports', country: 'Switzerland', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Olympic_Channel_logo.svg/220px-Olympic_Channel_logo.svg.png' },
    
    { name: 'Showtime', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Showtime_logo.svg/220px-Showtime_logo.svg.png' },
    { name: 'Starz', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Starz_logo.svg/220px-Starz_logo.svg.png' },
    { name: 'Epix', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/MGM%2B_logo.svg/220px-MGM%2B_logo.svg.png' },
    { name: 'Sundance TV', category: 'movies', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Sundance_TV_logo.svg/220px-Sundance_TV_logo.svg.png' },
    
    { name: 'BET', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/BET_logo.svg/220px-BET_logo.svg.png' },
    { name: 'FX', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/FX_logo.svg/220px-FX_logo.svg.png' },
    { name: 'USA Network', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/USA_logo.svg/220px-USA_logo.svg.png' },
    { name: 'TNT', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/TNT_logo_2013.svg/220px-TNT_logo_2013.svg.png' },
    { name: 'TBS', category: 'entertainment', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/TBS_logo.svg/220px-TBS_logo.svg.png' },
    
    { name: 'Nick Music', category: 'music', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nickelodeon_logo.svg/220px-Nickelodeon_logo.svg.png' },
    { name: 'CMT', category: 'music', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/CMT_logo.svg/220px-CMT_logo.svg.png' },
    { name: 'BET Jams', category: 'music', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/BET_logo.svg/220px-BET_logo.svg.png' },
    { name: 'MTV Hits', category: 'music', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/MTV_2021_vertical_logo.svg/220px-MTV_2021_vertical_logo.svg.png' },
    
    { name: 'PBS Kids', category: 'kids', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/PBS_Kids_logo.svg/220px-PBS_Kids_logo.svg.png' },
    { name: 'Baby TV', category: 'kids', country: 'Israel', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Baby_TV_logo.svg/220px-Baby_TV_logo.svg.png' },
    { name: 'Ducktv', category: 'kids', country: 'Slovakia', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Duckogo.svg/220px-Duckogo.svg.png' },
    
    { name: 'Smithsonian Channel', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Smithsonian_Channel_logo.svg/220px-Smithsonian_Channel_logo.svg.png' },
    { name: 'Science Channel', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Science_Channel_logo.svg/220px-Science_Channel_logo.svg.png' },
    { name: 'Nat Geo Wild', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/National_Geographic_logo.svg/220px-National_Geographic_logo.svg.png' },
    { name: 'Discovery Life', category: 'documentary', country: 'United States', language: 'English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Discovery_Channel_2019.svg/220px-Discovery_Channel_2019.svg.png' }
];

// State
let currentFilter = 'all';
let searchQuery = '';
let visibleChannels = 24;
const channelsPerLoad = 12;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderLanguages();
    renderCountries();
    renderChannels();
    initSearch();
    initFilterTabs();
    initLoadMore();
});

// Render Categories Grid
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    grid.innerHTML = categories.map(cat => `
        <div class="category-card" data-category="${cat.name.toLowerCase()}">
            <i class="${cat.icon}"></i>
            <div class="card-info">
                <span class="card-name">${cat.name}</span>
                <span class="card-count">${cat.count} channels</span>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    grid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            setFilter(category);
            scrollToChannels();
        });
    });
}

// Render Languages Grid
function renderLanguages() {
    const grid = document.getElementById('languagesGrid');
    if (!grid) return;
    
    grid.innerHTML = languages.map(lang => `
        <div class="language-card" data-language="${lang.name.toLowerCase()}">
            <i class="fa-solid fa-language"></i>
            <div class="card-info">
                <span class="card-name">${lang.name}</span>
                <span class="card-count">${lang.count}+ channels</span>
            </div>
        </div>
    `).join('');
}

// Render Countries Grid
function renderCountries() {
    const grid = document.getElementById('countriesGrid');
    if (!grid) return;
    
    grid.innerHTML = countries.map(country => `
        <div class="country-card" data-country="${country.name.toLowerCase()}">
            <span class="country-flag" style="font-size: 1.5rem;">${country.flag}</span>
            <div class="card-info">
                <span class="card-name">${country.name}</span>
                <span class="card-count">${country.count} channels</span>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    grid.querySelectorAll('.country-card').forEach(card => {
        card.addEventListener('click', () => {
            const country = card.dataset.country;
            document.getElementById('channelSearch').value = country;
            searchQuery = country;
            renderChannels();
            scrollToChannels();
        });
    });
}

// Render Channels
function renderChannels() {
    const grid = document.getElementById('channelsGrid');
    const noResults = document.getElementById('noResults');
    const visibleCountEl = document.getElementById('visibleCount');
    const totalCountEl = document.getElementById('totalCount');
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (!grid) return;
    
    // Filter channels
    let filtered = sampleChannels.filter(channel => {
        const matchesFilter = currentFilter === 'all' || channel.category === currentFilter;
        const matchesSearch = !searchQuery || 
            channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            channel.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            channel.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
            channel.language.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });
    
    // Update counts
    const total = filtered.length;
    const visible = Math.min(visibleChannels, total);
    
    if (visibleCountEl) visibleCountEl.textContent = visible;
    if (totalCountEl) totalCountEl.textContent = total;
    
    // Show/hide no results
    if (noResults) {
        noResults.classList.toggle('visible', total === 0);
    }
    
    // Show/hide load more button
    if (loadMoreBtn) {
        loadMoreBtn.style.display = visible < total ? 'inline-flex' : 'none';
    }
    
    // Get visible channels
    const channelsToShow = filtered.slice(0, visible);
    
    // Render channels with animation delay
    grid.innerHTML = channelsToShow.map((channel, index) => {
        const initials = getChannelInitials(channel.name);
        const bgColor = getCategoryColor(channel.category);
        const hasLogo = channel.logo && channel.logo.trim() !== '';
        const logoStyle = `background: ${bgColor}; color: white; font-weight: 700; font-size: 1.2rem;`;
        
        return `
        <div class="channel-item" style="animation-delay: ${index * 0.05}s">
            <div class="channel-logo ${hasLogo ? '' : 'has-fallback'}" style="${logoStyle}">
                ${hasLogo ? `<img src="${channel.logo}" alt="${channel.name} logo" loading="lazy" onerror="this.closest('.channel-logo').classList.add('has-fallback')">` : ''}
                <span class="logo-fallback-text">${initials}</span>
            </div>
            <div class="channel-info">
                <div class="channel-name">${channel.name}</div>
                <div class="channel-meta">
                    <span class="meta-tag">
                        <i class="fa-solid fa-tag"></i>
                        ${capitalizeFirst(channel.category)}
                    </span>
                    <span class="meta-tag">
                        <i class="fa-solid fa-globe"></i>
                        ${channel.country}
                    </span>
                    <span class="meta-tag">
                        <i class="fa-solid fa-language"></i>
                        ${channel.language}
                    </span>
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// Initialize Search
function initSearch() {
    const searchInput = document.getElementById('channelSearch');
    const clearBtn = document.getElementById('clearSearch');
    
    if (!searchInput) return;
    
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            searchQuery = e.target.value.trim();
            visibleChannels = 24; // Reset visible count on new search
            renderChannels();
            
            // Toggle clear button
            if (clearBtn) {
                clearBtn.classList.toggle('visible', searchQuery.length > 0);
            }
        }, 300);
    });
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            visibleChannels = 24;
            renderChannels();
            clearBtn.classList.remove('visible');
        });
    }
}

// Initialize Filter Tabs
function initFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.dataset.filter;
            setFilter(filter);
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

// Set Filter
function setFilter(filter) {
    currentFilter = filter;
    visibleChannels = 24; // Reset visible count on filter change
    renderChannels();
    
    // Update filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === filter);
    });
}

// Initialize Load More
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleChannels += channelsPerLoad;
            renderChannels();
        });
    }
}

// Scroll to Channels Section
function scrollToChannels() {
    const channelsSection = document.querySelector('.channels-list');
    if (channelsSection) {
        const offsetTop = channelsSection.offsetTop - 150;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Utility Functions
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Get channel initials for logo
function getChannelInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();
}

// Get color based on category
function getCategoryColor(category) {
    const colors = {
        'news': '#FF6B6B',
        'sports': '#4ECDC4',
        'movies': '#FFE66D',
        'music': '#95E1D3',
        'kids': '#F38181',
        'entertainment': '#AA96DA',
        'documentary': '#FCBAD3',
        'all': '#6C5CE7'
    };
    return colors[category] || '#6C5CE7';
}
