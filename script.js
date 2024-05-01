const examDetails = {
    "Pre A1 Starters": {
        total: "Approx 45 mins",
        listening: "20 mins, 4 parts, 20 items",
        readingWriting: "20 mins, 5 parts, 25 items",
        speaking: "3-5 mins"
    },
    "A1 Movers": {
        total: "Approx 1 hour 2 mins",
        listening: "25 mins, 5 parts, 25 items",
        readingWriting: "30 mins, 6 parts, 35 items",
        speaking: "5-7 mins"
    },
    "A2 Flyers": {
        total: "Approx 1 hour 14 mins",
        listening: "25 mins, 5 parts, 25 items",
        readingWriting: "40 mins, 7 parts, 44 items",
        speaking: "7-9 mins"
    },
    "A2 Key for Schools": {
        total: "Approx 1 hour 40 mins",
        readingWriting: "60 mins, 7 parts, 32 items",
        listening: "30 mins, 5 parts, 25 items",
        speaking: "8-10 mins"
    },
    "A2 Key": {
        total: "Approx 1 hour 40 mins",
        readingWriting: "60 mins, 7 parts, 32 items",
        listening: "30 mins, 5 parts, 25 items",
        speaking: "8-10 mins"
    },
    "B1 Preliminary for Schools": {
        total: "Approx 2 hrs 12 mins",
        reading: "45 mins, 6 parts, 32 items",
        writing: "45 mins, 2 parts",
        listening: "30 mins, 4 parts, 25 items",
        speaking: "12-17 mins"
    },
    "B1 Preliminary": {
        total: "Approx 2 hrs 12 mins",
        reading: "45 mins, 6 parts, 32 items",
        writing: "45 mins, 2 parts",
        listening: "30 mins, 4 parts, 25 items",
        speaking: "12-17 mins"
    },
    "B2 First for Schools": {
        total: "Approx 3 hrs 29 mins",
        readingUseOfEnglish: "1 hr 15 mins, 7 parts, 52 items",
        writing: "1 hr 20 mins, 2 parts",
        listening: "40 mins, 4 parts, 30 items",
        speaking: "14 mins"
    },
    "B2 First": {
        total: "Approx 3 hrs 29 mins",
        readingUseOfEnglish: "1 hr 15 mins, 7 parts, 52 items",
        writing: "1 hr 20 mins, 2 parts",
        listening: "40 mins, 4 parts, 30 items",
        speaking: "14 mins"
    },
    "C1 Advanced": {
        total: "Approx 3 hrs 55 mins",
        readingUseOfEnglish: "1 hr 30 mins, 8 parts, 56 items",
        writing: "1 hr 30 mins, 2 parts",
        listening: "40 mins, 4 parts, 30 items",
        speaking: "15 mins"
    },
    "C2 Proficiency": {
        total: "Approx 3 hrs 56 mins",
        readingUseOfEnglish: "1 hr 30 mins, 7 parts, 53 items",
        writing: "1 hr 30 mins, 2 parts",
        listening: "40 mins, 4 parts, 30 items",
        speaking: "16 mins"
    }
};

function displayExamDetails() {
    const selectedExam = document.getElementById('exam').value;
    const examInfo = examDetails[selectedExam];
    const resultDiv = document.getElementById('result');
    if (examInfo) {
        resultDiv.innerHTML = `<div class='section'><strong>Total Duration:</strong> ${examInfo.total}</div>
                               ${examInfo.readingWriting ? `<div class='section'><strong>Reading and Writing:</strong> ${examInfo.readingWriting}</div>` : ''}
                               <div class='section'><strong>Listening:</strong> ${examInfo.listening}</div>
                               <div class='section'><strong>Speaking:</strong> ${examInfo.speaking}</div>
                               ${examInfo.readingUseOfEnglish ? `<div class='section'><strong>Reading Use of English:</strong> ${examInfo.readingUseOfEnglish}</div>` : ''}
                               ${examInfo.writing ? `<div class='section'><strong>Writing:</strong> ${examInfo.writing}</div>` : ''}`;
    } else {
        resultDiv.textContent = "Exam details not found.";
    }
}