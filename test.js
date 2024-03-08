function generateNumbers() {
    var usedNumbers = new Set(); // Set لتخزين الأرقام التي تم استخدامها بالفعل

    // لعرض 6 أرقام عشوائية من 0 إلى 9 دون تكرار
    var randomSixDigits = '';
    while (randomSixDigits.length < 6) {
        var randomNumber = Math.floor(Math.random() * 10);
        if (!usedNumbers.has(randomNumber)) {
            randomSixDigits += randomNumber;
            usedNumbers.add(randomNumber);
        }
    }
    document.getElementById("sixDigits").textContent = randomSixDigits;

    // لعرض 3 أرقام عشوائية من 0 إلى 9 دون تكرار
    var randomThreeDigits = '';
    while (randomThreeDigits.length < 3) {
        var randomNumber = Math.floor(Math.random() * 10);
        if (!usedNumbers.has(randomNumber)) {
            randomThreeDigits += randomNumber;
            usedNumbers.add(randomNumber);
        }
    }
    document.getElementById("threeDigits").textContent = randomThreeDigits;
}
window.onload = generateNumbers; // لعرض الأرقام عند تحميل الصفحة