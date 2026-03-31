// API Module - Handles API calls and data fetching

const API_BASE_URL = '';

/**
 * Fetch data from an API endpoint
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - API response
 */
export async function fetchData(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

/**
 * Post data to an API endpoint
 * @param {string} endpoint - API endpoint
 * @param {object} data - Data to send
 * @returns {Promise<any>} - API response
 */
export async function postData(endpoint, data) {
    return fetchData(endpoint, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

/**
 * Get data from an API endpoint
 * @param {string} endpoint - API endpoint
 * @returns {Promise<any>} - API response
 */
export async function getData(endpoint) {
    return fetchData(endpoint, {
        method: 'GET'
    });
}
