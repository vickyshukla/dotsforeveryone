document.addEventListener('DOMContentLoaded', function () {
    const pinIcon = document.getElementById('pinned');
    const taskbar = document.querySelector('.taskbar-slide');
    let isPinned = false;


    pinIcon.addEventListener('click', function () {
        if (isPinned) {
           
            pinIcon.classList.add('ri-pushpin-line');
            pinIcon.classList.remove('ri-unpin-line');
            isPinned = false;
            // Allow hover effect
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            // Change to pinned state
            pinIcon.classList.remove('ri-pushpin-line');
            pinIcon.classList.add('ri-unpin-line');
            isPinned = true;
            // Disable hover effect
            document.removeEventListener('mousemove', handleMouseMove);
            // Show taskbar
            taskbar.classList.add('show');
        }
    });

    function handleMouseMove(event) {
        if (event.clientY <= 50) {
            taskbar.classList.add('show');
        } else {
            taskbar.classList.remove('show');
        }
    }

    document.addEventListener('mousemove', handleMouseMove);
});
