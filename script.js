 //CRUD IS THE MOST IMPORTANT

const affirmationsKey = 'affirmations'

const affirmations = JSON.parse(localStorage.getItem(affirmationsKey)) || [
    {
        quote: "I am deeply grateful for all that I have, and all that I am.",
        by: "Louise Hay"
    }, 
    {
        quote: "Belief consists in accepting the affirmations of the soul; unbelief in denying them." ,
        by: "Ralph Waldo Emerson"
    }, 
    {
        quote: "You become what you give your attention to.",
        by: "Epictetus"
    },
    {
        quote: "You don't have to wait for life to change to feel better. Feel better and your life will change.",
        by: "Patricia Moreno"
    },
    {
        quote: "All is well. I am open to creative solutions. I release my limiting beliefs.",
        by: "Gabby Bernstein"
    },
    {
        quote: "Real growth is not about becoming bigger; badder; more powerful; it's about becoming softer, more compassionate, and more at ease with truth and vulnerability.",
        by: "Rebekah Borucki"
    },
    {
        quote: "Keep some room in your heart for the unimaginable.",
        by: "Mary Oliver"
    },
];
//this saves affiramtions to local storage//
function saveAffirmations() {
    localStorage.setItem(affirmationsKey, JSON.stringify(affirmations));
}

function newQuote() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const selectedAffirmation = affirmations[randomIndex];
    
    document.getElementById('quote').innerText = selectedAffirmation.quote;
    document.getElementById('by').innerText = selectedAffirmation.by;
}


// Modal & ManageQuotes functionality
const modal = document.getElementById("myModal");
const manageQuotesModal = document.getElementById("manageQuotesModal");
const btn = document.getElementById("openModalButton");
const manageQuotesBtn = document.getElementById("manageQuotesButton");
const span = document.getElementsByClassName("close");
const addQuoteButton = document.getElementById("addQuoteButton");
const deleteQuoteButton = document.getElementById("deleteQuoteButton");
const quotesList = document.getElementById("quotesList");

//this is the modal open, closing//
btn.onclick = () => modal.style.display = "block";
    manageQuotesBtn.onclick = () => { 
    manageQuotesModal.style.display = "block";
    displayQuotes();
};

    span[0].onclick = () => modal.style.display = "none";
    span[1].onclick = () => manageQuotesModal.style.display = "none";
        window.onclick = (event) => {
            if (event.target == modal) {
            modal.style.display = "none";
        }
            if (event.target == manageQuotesModal) {
            manageQuotesModal.style.display = "none";
        }
};

// Add text to the array // 
addQuoteButton.onclick = () => {
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteBy = document.getElementById("newQuoteBy").value;

    if(newQuoteText && newQuoteBy) {
        affirmations.push({ quote: newQuoteText, by: newQuoteBy});
        saveAffirmations();
        document.getElementById("newQuoteText").value + '';
        document.getElementById("newQuoteBy").value + '';
        modal.style.display = "none";
    } else {
        alert("Please enter both a affirmation and a author.")
    }
}
//display the quotes in modal
function displayQuotes() {
    quotesList.innerHTML = '';
    affirmations.forEach((affirmation, index) => {
        const li = document.createElement('li');
        li.textContent = `${affirmation.quote} - ${affirmation.by}`;
        li.dataset.index = index;
        li.onclick = () => {
            const selected = document.querySelector('.selected');
            if (selected) selected.classList.remove('selected');
            li.classList.add('selected');
        };
        quotesList.appendChild(li);
    });
}

deleteQuoteButton.onclick = () => {
    const selected = document.querySelector('.selected');
    if (selected) {
        const index = selected.dataset.index;
        affirmations.splice(index, 1);
        saveAffirmations();
        displayQuotes();
    } else {
        alert("Please select a quote to delete.");
    }
};
    