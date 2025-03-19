import axios from 'axios'

async function generateJoke() {
    const jokeBtn = document.getElementById('jokeBtn')
    const jokeElement = document.getElementById('joke')
    
    // Set loading state
    jokeBtn.disabled = true
    jokeBtn.textContent = 'Loading...'
    
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    try {
        const res = await axios.get('https://icanhazdadjoke.com', config)
        jokeElement.innerHTML = res.data.joke
    } catch (error) {
        jokeElement.innerHTML = 'Failed to fetch joke. Please try again.'
        console.error('Error fetching joke:', error)
    } finally {
        // Reset button state
        jokeBtn.disabled = false
        jokeBtn.textContent = 'Get Another Joke'
    }
}

export default generateJoke