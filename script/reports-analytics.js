// Elements
const activityBtn = document.getElementById('activity-btn');
const activityMenu = document.querySelector(".activity-dropdown-menu");
const labelBtn = document.getElementById('label-btn');
const labelMenu = document.querySelector(".label-dropdown-menu");
const selectGraph = document.getElementById('select-graph');

//Activity Element
const userActivityList = document.getElementById('user-activity-list');
const groupActivityList = document.getElementById('group-activity-list');
const rbacActivityList = document.getElementById('rbac-activity-list');
const filemanagementActivityList = document.getElementById('filemanagement-activity-list');
const softwareUsageActivityList = document.getElementById('softwareusage-activity-list');
const locationBasedActivityList = document.getElementById('locationbased-activity-list');
const systemPerformanceActivityList = document.getElementById('systemperformance-activity-list');
const securityActivityList = document.getElementById('security-activity-list');
const auditLogsActivityList = document.getElementById('auditlogs-activity-list');

//Graph Element
let failedLoginAttemptGraph = document.getElementById('failed-login-attempt-graph');
let userLoginOverTimeGraph = document.getElementById('user-login-over-time-graph');
let successfulLogoutGraph = document.getElementById("successful-logout-graph");
let failedLoginAttemptItem = document.getElementById('failed-login-attempt');
let userLoginOverTimeItem = document.getElementById('user-login-over-time');
let successfulLogoutItem = document.getElementById("successful-logout");


selectGraph.disabled = true;
selectGraph.classList.add('disabled-btn');

// Variable to track current activity and active graph item
let currentActivity = '';

// Toggle activity dropdown menu visibility
activityBtn.addEventListener("click", function () {
    activityMenu.classList.toggle('hidden');
});

// Toggle label dropdown menu visibility
labelBtn.addEventListener("click", function () {
    labelMenu.classList.toggle('hidden');
});

// Handle activity item selection
document.querySelectorAll('.activity-item').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation();  // Prevent the event from propagating

        // Remove active class (yellow background) from all activity items
        document.querySelectorAll('.activity-item').forEach(el => el.classList.remove('bg-c-yellow'));

        // Add active class to the clicked activity item
        item.classList.add('bg-c-yellow');

        // Hide the activity menu after selection
        activityMenu.classList.add('hidden');

        // Update current activity based on the selected item
        currentActivity = item.id;

        // Enable the 'Select Graph' button when an activity is selected
        selectGraph.disabled = false;
        selectGraph.classList.remove('disabled-btn');
    });
});

// Toggle graph dropdown list based on the selected activity
selectGraph.addEventListener('click', function (e) {
    e.stopPropagation();  // Prevent click event propagation

    // Show the appropriate graph list based on the current activity
    if (currentActivity === 'user-activity') {
        userActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'group-activity') {
        groupActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'rbac-activity') {
        rbacActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'filemanagement-activity') {
        filemanagementActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'softwareusage-activity') {
        softwareUsageActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'locationbased-activity') {
        locationBasedActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'systemperformance-activity') {
        systemPerformanceActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'security-activity') {
        securityActivityList.classList.toggle('hidden');
    } else if (currentActivity === 'auditlogs-activity') {
        auditLogsActivityList.classList.toggle('hidden');
    }
});


// Handle graph selection and highlight the selected graph item
function handleGraphSelection(item, graphToShow, graphList) {
    // Attach the click event listener to the graph item
    item.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent default link behavior
        e.stopPropagation(); // Prevent event bubbling

        // Show the selected graph
        graphToShow.classList.remove('hidden');

        // Hide the graph dropdown menu after selection
        graphList.classList.add('hidden');
    });
}


// Store graph items and their corresponding graphs in an array
const graphItems = [
    { item: failedLoginAttemptItem, graph: failedLoginAttemptGraph },
    { item: userLoginOverTimeItem, graph: userLoginOverTimeGraph },
    { item: successfulLogoutItem, graph: successfulLogoutGraph },
    // Add more graph items here
];

// Call handleGraphSelection for each graph item dynamically
graphItems.forEach(({ item, graph }) => {
    handleGraphSelection(item, graph,userActivityList);
});

// Hide activity and graph dropdowns when clicking outside
document.addEventListener('click', function (e) {
    if (!activityMenu.contains(e.target) && !activityBtn.contains(e.target)) {
        activityMenu.classList.add('hidden');
    }
    if (!labelMenu.contains(e.target) && !labelBtn.contains(e.target)) {
        labelMenu.classList.add('hidden');
    }
    if (!userActivityList.contains(e.target) && !groupActivityList.contains(e.target) && !rbacActivityList.contains(e.target) && !filemanagementActivityList.contains(e.target) && !softwareUsageActivityList.contains(e.target) && !locationBasedActivityList.contains(e.target) && !systemPerformanceActivityList.contains(e.target) && !securityActivityList.contains(e.target) && !auditLogsActivityList.contains(e.target) && !selectGraph.contains(e.target)) {
        hideAllLists();
    }
});

// Helper function to show a specific list and hide others
function showList(listToShow) {
    hideAllLists();
    listToShow.classList.remove('hidden');
}

// Helper function to hide all dropdown lists
function hideAllLists() {
    userActivityList.classList.add('hidden');
    groupActivityList.classList.add('hidden');
    rbacActivityList.classList.add('hidden');
    filemanagementActivityList.classList.add('hidden');
    softwareUsageActivityList.classList.add('hidden');
    locationBasedActivityList.classList.add('hidden');
    systemPerformanceActivityList.classList.add('hidden');
    securityActivityList.classList.add('hidden');
    auditLogsActivityList.classList.add('hidden');
}

// Handle graph close functionality
document.querySelectorAll('.close-graph').forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();

        // Hide the parent graph container
        closeBtn.closest('.graph-box').classList.add('hidden');
        closeBtn.closest('.graph-container').classList.add('hidden');

    });
});
