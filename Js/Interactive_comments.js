// Import Firebase modules
import { db, auth } from './firebase-init.js'; // Ensure firebase-init.js exports `db` and `auth`

// Firestore collection for chapter 1 comments
const commentsCollection = db.collection("comments_chapter_1");

// Function to add a new comment
document.getElementById("post-comment-btn").addEventListener("click", () => {
    const commentText = document.getElementById("comment-input").value.trim();

    // Check if user is authenticated
    const user = auth.currentUser;
    if (!user) {
        alert("You must be signed in to post a comment!");
        return;
    }

    if (commentText) {
        const author = user.isAnonymous ? "Anonymous" : user.email || "Anonymous";

        commentsCollection.add({
            text: commentText,
            author: author,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            alert("Comment posted successfully!");
            document.getElementById("comment-input").value = ""; // Clear input
        })
        .catch((error) => {
            console.error("Error adding comment:", error);
            alert("Failed to post comment. Please try again later.");
        });
    } else {
        alert("Comment cannot be empty!");
    }
});

// Real-time listener to display comments
commentsCollection.orderBy("timestamp", "asc").onSnapshot(snapshot => {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = ''; // Clear the comment list before updating

    snapshot.forEach(doc => {
        const comment = doc.data();
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");
        commentItem.innerHTML = `
            <p><strong>${comment.author || "Anonymous"}:</strong> ${comment.text}</p>
            <small>${comment.timestamp?.toDate().toLocaleString() || "Just now"}</small>
        `;
        commentsList.appendChild(commentItem);
    });
});

// Optional: Function to handle authentication state changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log(`User signed in: ${user.email || "Anonymous"}`);
    } else {
        console.log("No user signed in");
    }
});
