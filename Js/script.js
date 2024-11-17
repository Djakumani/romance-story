function toggleMBTI(mbti, cardElement) {
    const storyContainer = cardElement.querySelector('.story-container');

    // Hide all other story containers
    document.querySelectorAll('.story-container').forEach(container => {
        if (container !== storyContainer) {
            container.style.display = 'none';
        }
    });

    // Toggle the visibility of the selected story container
    if (!storyContainer.style.display || storyContainer.style.display === 'none') {
        // Populate the story container if needed
        if (mbti === 'ENFJ') {
            storyContainer.innerHTML = `
                <div class="synopsis-container2" style="background-image: url('../public/Assets/Images/Background_images/Images_27.png');">
                    <button class="btn-read" onclick="goToSynopsis()">Read</button>
                </div>
            `;
        } else {
            // Handle other MBTI types if they have no stories
            storyContainer.innerHTML = `
                    <p>No story yet. Make a request!</p>
            `;
        }
        storyContainer.style.display = 'block';
    } else {
        storyContainer.style.display = 'none';
    }
}






