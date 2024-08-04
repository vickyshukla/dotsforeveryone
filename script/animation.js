//functionality of animation of apps openining

function handleClick() {
    setTimeout(() => {
        const iframe = document.querySelector('#box');
        togglePane('.popupiframe');
        iframe.classList.add('show');
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const downloadItems = document.querySelectorAll('.app');
    const toolbar = document.getElementById('toolbar');
    const box = document.getElementById("box");
    const minimizebtn = document.getElementById("minimizebtn");
    let isDragging = false;
    let dragStartX, initialLeft;


    downloadItems.forEach(item => {
        item.addEventListener('click', () => {
            const appId = item.getAttribute('data-app-id');
            const existingIcon = toolbar.querySelector(`img[data-app-id="${appId}"]`);

            if (!existingIcon) {
                const originalIcon = item.querySelector('img');
                const img = document.createElement('img');
                img.src = originalIcon.src;
                img.setAttribute('data-app-id', appId);
                img.classList.add('app-icon');
                img.style.width = '50px'; 
                img.draggable = false;
                enableDrag(img);
                animateIcon(img, originalIcon);
            }
        });
    });

    toolbar.addEventListener('click', (event) => {
        const targetIcon = event.target.closest('img[data-app-id]');
        if (targetIcon) {
            if (minimized) {
                box.classList.remove('hidden');
                box.classList.remove('minimized');
                box.classList.add('fall-down');

                box.addEventListener('animationend', () => {
                    box.classList.remove('fall-down');
                }, { once: true });
            } else {
                animateIconDownward(targetIcon);
            }
        }
    });

    function animateIcon(icon, originalIcon) {
        const rect = originalIcon.getBoundingClientRect();
        const toolbarRect = toolbar.getBoundingClientRect();
        const toolbarCenterX = toolbarRect.left + (toolbarRect.width / 2) - (rect.width / 2);
        const toolbarCenterY = toolbarRect.top + (toolbarRect.height / 2) - (rect.height / 2);

        const moveX = toolbarCenterX - rect.left;
        const moveY = toolbarCenterY - rect.top;

        const clone = originalIcon.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.left = `${rect.left}px`;
        clone.style.top = `${rect.top}px`;
        clone.style.width = `${rect.width}px`;
        clone.style.height = `${rect.height}px`;
        clone.style.setProperty('--move-x', `${moveX}px`);
        clone.style.setProperty('--move-y', `${moveY}px`);
        clone.classList.add('moving-to-top');
        document.body.appendChild(clone);

        clone.addEventListener('animationend', () => {
            clone.remove();
            toolbar.appendChild(icon);
            animateIconToCenter(icon);
        });
    }


    function animateIconToCenter(icon) {
        icon.style.opacity = 0;
        setTimeout(() => {
            icon.style.transition = 'opacity 0.5s, transform 0.5s';
            icon.style.opacity = 1;
            icon.style.transform = 'translateY(0)';
        }, 10);
    }


    minimizebtn.addEventListener("click", function () {
        const appId = box.getAttribute('data-app-id');
        const targetIcon = toolbar.querySelector(`img[data-app-id="${appId}"]`);

        if (targetIcon) {
            if (!box.classList.contains("minimized")) {
                box.classList.add("minimized");
                minimized = true;
                setTimeout(() => {
                    box.classList.add('hidden');
                }, 600);
            }
        }
    });

    function enableDrag(icon) {
        icon.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.clientX;
            initialLeft = icon.offsetLeft;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            if (isDragging) {
                const moveX = e.clientX - dragStartX;
                icon.style.position = 'absolute';
                icon.style.left = `${initialLeft + moveX}px`;
            }
        }

        function onMouseUp() {
            if (isDragging) {
                adjustIconPosition(icon);
            }
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }

    function adjustIconPosition(draggedIcon) {
        const icons = Array.from(toolbar.querySelectorAll('img.app-icon'));
        const draggedIconRect = draggedIcon.getBoundingClientRect();

        icons.splice(icons.indexOf(draggedIcon), 1);

        let insertIndex = icons.findIndex(icon => {
            const iconRect = icon.getBoundingClientRect();
            return draggedIconRect.left < iconRect.left;
        });

        if (insertIndex === -1) {
            insertIndex = icons.length;
        }

        icons.splice(insertIndex, 0, draggedIcon);

        const totalWidth = icons.reduce((sum, icon) => sum + icon.getBoundingClientRect().width + 10, 0);

        const toolbarCenter = (toolbar.clientWidth - totalWidth) / 2;

        icons.forEach((icon, index) => {
            const iconWidth = icon.getBoundingClientRect().width;
            icon.style.position = 'absolute';
            icon.style.left = `${toolbarCenter + index * (iconWidth + 10)}px`;
        });
    }


    const closeiframeBtns = document.querySelectorAll('.closeiframe-btn');
    closeiframeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const filekey = this.getAttribute('data-app-id');
            const toolbarIcon = toolbar.querySelector(`img[data-app-id="${filekey}"]`);
            if (toolbarIcon) {
                toolbarIcon.remove();
            }
        });
    });
});