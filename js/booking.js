const specialEventSuccessMessage = document.querySelector("#special-event-success-message")
const specialEventForm = document.querySelector("#special-event-form");
const specialEventName = document.querySelector("#name");
const specialEventNameErrorMessage = document.querySelector("#special-event-name-errorMessage");
const specialEventEmail = document.querySelector("#email");
const specialEventEmailErrorMessage = document.querySelector("#special-event-email-errorMessage");
const specialEventAdults = document.querySelector("#adults");
const specialEventChildren = document.querySelector("#children");
const specialEventPersonsErrorMessage = document.querySelector("#special-event-persons-errorMessage");
const specialEventDate1 = document.querySelector("#date-1");
const specialEventDate2 = document.querySelector("#date-2");
const specialEventDate3 = document.querySelector("#date-3");
const specialEventDate4 = document.querySelector("#date-4");
const specialEventDate5 = document.querySelector("#date-5");
const specialEventDate6 = document.querySelector("#date-6");
const specialEventDateErrorMessage = document.querySelector("#special-event-date-errorMessage");
const specialEventBtn = document.querySelector("#special-event-btn");

function checkSpecialEventForm(event) {
    event.preventDefault();

    if (checkLength(specialEventName.value, 1)) {
        specialEventNameErrorMessage.style.display = "none";
    } else {
        specialEventNameErrorMessage.style.display = "block";
    }

    if (checkEmail(specialEventEmail.value) && checkLength(specialEventEmail.value, 5)) {
        specialEventEmailErrorMessage.style.display = "none";
    } else {
        specialEventEmailErrorMessage.style.display = "block";
    }

    if (specialEventAdults.value >= 1 || specialEventChildren.value >= 1) {
        specialEventPersonsErrorMessage.style.display = "none";
    } else {
        specialEventPersonsErrorMessage.style.display = "block";
    }

    if (specialEventDate1.checked || specialEventDate2.checked || specialEventDate3.checked || specialEventDate4.checked || specialEventDate5.checked || specialEventDate6.checked) {
        specialEventDateErrorMessage.style.display = "none";
    } else {
        specialEventDateErrorMessage.style.display = "block";
    }

    if (checkLength(specialEventName.value, 1) && checkEmail(specialEventEmail.value) && checkLength(specialEventEmail.value, 5) && (specialEventAdults.value >= 1 || specialEventChildren.value >= 1) && (specialEventDate1.checked || specialEventDate2.checked || specialEventDate3.checked || specialEventDate4.checked || specialEventDate5.checked || specialEventDate6.checked)) {
        specialEventSuccessMessage.innerHTML = `
        <h2 class="success-message">Confirmed</h2>
        <div>
            <h3>Thank You ${specialEventName.value}!</h3>
            <section class="welcome-section">
                <div class="section-image-container">
                    <img src="images/kristina-paparo-IIY5YxY8WKY-unsplash-scaled.jpg"
                        alt="a man and a woman waving hello in front of the entrance to the museum"
                        class="section-image special-images">
                </div>
            </section>
            <p>We have sent an email to ${specialEventEmail.value} with the confirmation.</p>
            <p>We will see you soon!</p>
        </div>`;
        specialEventForm.reset();
        window.scrollTo(0, 500);
    }
}

specialEventForm.addEventListener("submit", checkSpecialEventForm);
specialEventForm.addEventListener("keyup", resetSuccessMessageForm);

const bookingSuccessMessage = document.querySelector("#booking-success-message")
const bookingForm = document.querySelector("#booking-form");
const bookingName = document.querySelector("#name2");
const bookingNameErrorMessage = document.querySelector("#booking-name-errorMessage");
const bookingEmail = document.querySelector("#email2");
const bookingEmailErrorMessage = document.querySelector("#booking-email-errorMessage");
const bookingAdults = document.querySelector("#adults2");
const bookingChildren = document.querySelector("#children2");
const bookingPersonsErrorMessage = document.querySelector("#booking-persons-errorMessage");
const bookingCalender = document.querySelector("#calender");
const bookingDateErrorMessage = document.querySelector("#booking-date-errorMessage");
const bookingBtn = document.querySelector("#booking-btn");

function checkBookingForm(event) {
    event.preventDefault();

    if (checkLength(bookingName.value, 1)) {
        bookingNameErrorMessage.style.display = "none";
    } else {
        bookingNameErrorMessage.style.display = "block";
    }

    if (checkEmail(bookingEmail.value) && checkLength(bookingEmail.value, 5)) {
        bookingEmailErrorMessage.style.display = "none";
    } else {
        bookingEmailErrorMessage.style.display = "block";
    }

    if (bookingAdults.value >= 1 || bookingChildren.value >= 1) {
        bookingPersonsErrorMessage.style.display = "none";
    } else {
        bookingPersonsErrorMessage.style.display = "block";
    }

    if (bookingCalender.value) {
        bookingDateErrorMessage.style.display = "none";
    } else {
        bookingDateErrorMessage.style.display = "block";
    }


    if (checkLength(bookingName.value, 1) && checkEmail(bookingEmail.value) && checkLength(bookingEmail.value, 5) && (bookingAdults.value >= 1 || bookingChildren.value >= 1) && (bookingCalender.value)) {
        bookingSuccessMessage.innerHTML = `
        <h2 class="success-message">Confirmed</h2>
        <div>
            <h3>Thank You ${bookingName.value}!</h3>
            <section class="welcome-section">
                <div class="section-image-container">
                    <img src="images/kristina-paparo-IIY5YxY8WKY-unsplash-scaled.jpg"
                        alt="a man and a woman waving hello in front of the entrance to the museum"
                        class="section-image special-images">
                </div>
            </section>
            <p>We have sent an email to ${bookingEmail.value} with the confirmation.</p>
            <p>We look forward to seeing your party at ${bookingCalender.value}!</p>
        </div>`;
        bookingForm.reset();
        window.scrollTo(0, 500);
    }
}

bookingForm.addEventListener("submit", checkBookingForm);
bookingForm.addEventListener("keyup", resetSuccessMessageForm);

const joinClubSuccessMessage = document.querySelector("#join-club-success-message")
const joinClubForm = document.querySelector("#joing-club-form");
const joinClubName = document.querySelector("#name3");
const joinClubNameErrorMessage = document.querySelector("#join-club-name-errorMessage");
const joinClubEmail = document.querySelector("#email3");
const joinClubEmailErrorMessage = document.querySelector("#join-club-email-errorMessage");
const joinClubYoungStar = document.querySelector("#young-star-club");
const joinClubHoliday = document.querySelector("#holiday-club");
const joinClubSelectErrorMessage = document.querySelector("#join-club-select-errorMessage");
const joinBtn = document.querySelector("#join-btn");

function checkJoinClubForm(event) {
    event.preventDefault();

    if (checkLength(joinClubName.value, 1)) {
        joinClubNameErrorMessage.style.display = "none";
    } else {
        joinClubNameErrorMessage.style.display = "block";
    }

    if (checkEmail(joinClubEmail.value) && checkLength(joinClubEmail.value, 5)) {
        joinClubEmailErrorMessage.style.display = "none";
    } else {
        joinClubEmailErrorMessage.style.display = "block";
    }

    if (joinClubYoungStar.checked || joinClubHoliday.checked) {
        joinClubSelectErrorMessage.style.display = "none";
    } else {
        joinClubSelectErrorMessage.style.display = "block";
    }

    if (checkLength(joinClubName.value, 1) && checkEmail(joinClubEmail.value) && checkLength(joinClubEmail.value, 5) && (joinClubYoungStar.checked || joinClubHoliday.checked)) {
        joinClubSuccessMessage.innerHTML = `
        <h2 class="success-message">Confirmed</h2>
        <div>
            <h3>Thank You ${joinClubName.value}!</h3>
            <section class="welcome-section">
                <div class="section-image-container">
                    <img src="images/kristina-paparo-IIY5YxY8WKY-unsplash-scaled.jpg"
                        alt="a man and a woman waving hello in front of the entrance to the museum"
                        class="section-image special-images">
                </div>
            </section>
            <p>We have sent an email to ${joinClubEmail.value} with the confirmation.</p>
            <p>We hope to see you soon!</p>
        </div>`;
        joinClubForm.reset();
        window.scrollTo(0, 500);
    }
}

joinClubForm.addEventListener("submit", checkJoinClubForm);
joinClubForm.addEventListener("keyup", resetSuccessMessageForm);

const involvedSuccessMessage = document.querySelector("#involved-success-message")
const involvedForm = document.querySelector("#involved-form");
const involvedName = document.querySelector("#name4");
const involvedNameErrorMessage = document.querySelector("#involved-name-errorMessage");
const involvedEmail = document.querySelector("#email4");
const involvedEmailErrorMessage = document.querySelector("#involved-email-errorMessage");
const involvedVolunteer = document.querySelector("#volunteer");
const involvedInternship = document.querySelector("#internship");
const involvedSelectErrorMessage = document.querySelector("#involved-select-errorMessage");
const involvedBtn = document.querySelector("#involved-btn");

function checkInvolvedForm(event) {
    event.preventDefault();

    if (checkLength(involvedName.value, 1)) {
        involvedNameErrorMessage.style.display = "none";
    } else {
        involvedNameErrorMessage.style.display = "block";
    }

    if (checkEmail(involvedEmail.value) && checkLength(involvedEmail.value, 5)) {
        involvedEmailErrorMessage.style.display = "none";
    } else {
        involvedEmailErrorMessage.style.display = "block";
    }

    if (involvedVolunteer.checked || involvedInternship.checked) {
        involvedSelectErrorMessage.style.display = "none";
    } else {
        involvedSelectErrorMessage.style.display = "block";
    }

    if (checkLength(involvedName.value, 1) && checkEmail(involvedEmail.value) && checkLength(involvedEmail.value, 5) && (involvedVolunteer.checked || involvedInternship.checked)) {
        involvedSuccessMessage.innerHTML = `
        <h2 class="success-message">Confirmed</h2>
        <div>
            <h3>Thank you for applying!</h3>
            <section class="welcome-section">
                <div class="section-image-container">
                    <img src="images/kristina-paparo-IIY5YxY8WKY-unsplash-scaled.jpg"
                        alt="a man and a woman waving hello in front of the entrance to the museum"
                        class="section-image special-images">
                </div>
            </section>
            <p>We look forwad to read the application from you ${involvedName.value}.</p>
            <p>We will contact you on ${involvedEmail.value}!</p>
        </div>`;
        involvedForm.reset();
        window.scrollTo(0, 500);
    }
}

involvedForm.addEventListener("submit", checkInvolvedForm);
involvedForm.addEventListener("keyup", resetSuccessMessageForm);


function resetSuccessMessageForm() {
    if (specialEventName || specialEventEmail || specialEventAdults || specialEventChildren ||
        specialEventDate1 || specialEventDate2 || specialEventDate3 || specialEventDate4 || specialEventDate5
        || specialEventDate6 || bookingName || bookingEmail || bookingAdults || bookingChildren ||
        joinClubName || joinClubEmail || joinClubYoungStar || joinClubHoliday || involvedName || involvedEmail
        || involvedVolunteer || involvedInternship) {
        specialEventSuccessMessage.innerHTML = "";
        bookingSuccessMessage.innerHTML = "";
        joinClubSuccessMessage.innerHTML = "";
        involvedSuccessMessage.innerHTML = "";
    }
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}