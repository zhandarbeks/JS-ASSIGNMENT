document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Проверка сохраненной темы в localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');

        // Сохранение текущей темы в localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    function updateDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        };

        const formattedDateTime = now.toLocaleString('en-US', options);
        document.getElementById('date-time').innerText = formattedDateTime;
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);



    const openPopup = document.getElementById('openPopupBtn');
    const closePopup = document.getElementById('closePopupBtn');
    const popup = document.getElementById('popup');

    openPopup.addEventListener('click', () => {
        popup.style.visibility = 'visible';
        popup.style.opacity = '1';
    });

    closePopup.addEventListener('click', () => {
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.visibility = 'hidden';
            popup.style.opacity = '0';
        }
    });
});