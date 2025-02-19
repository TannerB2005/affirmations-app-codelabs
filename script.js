//CRUD IS THE MOST IMPORTANT
const affirmations = [
    {
        quote: "'I am deeply grateful for all that I have, and all that I am.'",
        by: "-Louise Hay"
    }, 
    {
        quote: "'Belief consists in accepting the affirmations of the soul; unbelief in denying them.'" ,
        by: "-Ralph Waldo Emerson"
    }, 
    {
        quote: "'You become what you give your attention to.'",
        by: "-Epictetus"
    },
    {
        quote: "'You don't have to wait for life to change to feel better. Feel better and your life will change.'",
        by: "-Patricia Moreno"
    },
    {
        quote: "'All is well. I am open to creative solutions. I release my limiting beliefs.'",
        by: "-Gabby Bernstein"
    },
    {
        quote: "'Real growth is not about becoming bigger; badder; more powerful; it's about becoming softer, more compassionate, and more at ease with truth and vulnerability.'",
        by: "-Rebekah Borucki"
    },
    {
        quote: "'Keep some room in your heart for the unimaginable.'",
        by: "-Mary Oliver"
    },
    {
        quote: "'.'",
        by: "-"
    },
    {
        quote: "'.'",
        by: "-"
    },
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const selectedAffirmation = affirmations[randomIndex];
    
    document.getElementById('quote').innerText = selectedAffirmation.quote;
    document.getElementById('by').innerText = selectedAffirmation.by;
}

