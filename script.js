function calculateAge() {
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    if (!day || !month || !year) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    let birthDate = new Date(year, month - 1, day); // Month is zero-based in JS
    let today = new Date();

    if (birthDate > today) {
        document.getElementById("result").innerText = "Date of birth cannot be in the future!";
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Get last day of previous month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerText = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
