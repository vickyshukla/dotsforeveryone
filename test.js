
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
    handleGraphSelection(item, graph, userActivityList);
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
        closeBtn.closest('.graph-area').classList.add('hidden');

    });
});














newDiv.innerHTML += ` <div class="${e.filterName} flex items-center gap-2 flex-wrap">
                          <div class="activity-dropdown inline-block relative">
                                <button
                                  class="activity-btn rounded px-6 py-1 custom-outline custom-safety-btn"
                                >
                                  <span>Activity Type</span>
                                  <i class="ri-arrow-down-s-fill"></i>
                                </button>
                                <ul
                                  class="activity-dropdown-menu activity-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                                >
                                  <li id="user" class="activity-item user-activity">
                                    <a
                                      class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                      href="#"
                                      >User Activity</a
                                    >
                                  </li>
                                  <li id="group" class="dropdown-submenu group activity-item group-activity">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Group Activity
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group activity-item rbac-activity">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      RBAC
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group activity-item filemanagement-activity">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      File management 
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group activity-item softwareusage-activity">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Software Usage
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group activity-item locationbased-activity">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Location-Based Metrics 
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group activity-item systemperformance-activity">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      System Performance 
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group activity-item security-activity">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Security
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group activity-item auditlogs-activity">
                                    <a
                                      class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Audit Logs
                                    </a>
                                  </li>
                                </ul>
                          </div>
                           <div class="graph-dropdown inline-block relative">
                                <button
                                  class="select-graph rounded px-6 py-1 custom-outline custom-safety-btn user"
                                >
                                  <span>Select Graph</span>
                                  <i class="ri-arrow-down-s-fill"></i>
                                </button>
                                <ul
                                  class="user-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                                >
                                  <li id="user-login-over-time">
                                    <a
                                      class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                      href="#"
                                      >User Logins Over Time</a
                                    >
                                  </li>
                                  <li id="failed-login-attempt" class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Failed Login Attempts
                                    </a>
                                  </li>
                                  <li id="successful-logout" class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Successful Logouts
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Average Session Duration per User
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Most Active Users
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Inactive Users
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      File Accessed by Users
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    Files Downloaded by Users
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    Files Uploaded by Users
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      File Types Accessed
                                    </a>
                                  </li>
                                </ul>
                                  <ul
                                  class="group-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                                >
                                  <li>
                                    <a
                                      class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                      href="#"
                                      >Groups Created Over Time</a
                                    >
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Group Activity Distribution
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Group File Access Patterns
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    Number of Users in Groups
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    Group Participation by Location
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    File Sharing Between Groups
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    External API Access by Groups
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    Collaboration Patterns in Groups
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                  Inactive Groups
                                    </a>
                                  </li>
                                  <li class="dropdown-submenu group">
                                    <a
                                      class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                    Group Ownership Changes
                                    </a>
                                  </li>
                                </ul>
                                <ul
                                class="rbac-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                              >
                                <li>
                                  <a
                                    class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                    href="#"
                                    >Roles Created Over Time</a
                                  >
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Permission Changes by Roles
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Privileges Per Role
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Role Usage by Time
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Users Assigned to Roles
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                 Files Accessed by Role
                                  </a>
                                </li>
                              </ul>
                               <ul
                                class="filemanagement-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                              >
                                <li>
                                  <a
                                    class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                    href="#"
                                    >Files Accessed Over Time</a
                                  >
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Most Accessed Files
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Average File Access Time
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  File Modifications
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Deleted Files Over Time
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  File Access by Location
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Unauthorized File Access
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Large File Transfers
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                Sensitive File Access
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Files Accessed Outside Business Hours
                                  </a>
                                </li>
                              </ul>
                               <ul
                                class="softwareusage-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                              >
                                <li>
                                  <a
                                    class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                    href="#"
                                    >Software Installations</a
                                  >
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Software Engagement by Users
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Version Updates Over Time
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Software Crashes
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Software Usage Patterns by Users
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  License Expirations
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Software Used in Multiple Locations
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Software Vulnerabilities Exploited
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                Software Access Frequency
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Error Rates by Software
                                  </a>
                                </li>
                              </ul>
                              <ul
                                class="locationbased-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                              >
                                <li>
                                  <a
                                    class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                    href="#"
                                    >User Access by Country</a
                                  >
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Latency by Location
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    File Access by Country
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Failed File Transfers by Location
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Bandwidth Utilization by Location
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  User Activity Patterns by Country
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  File Sharing Between Countries
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Data Transfer Rates by Region
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                Network Latency by Time Zone
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Access from Unusual Locations
                                  </a>
                                </li>
                              </ul>
                              <ul
                                class="systemperformance-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                              >
                                <li>
                                  <a
                                    class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                    href="#"
                                    >CPU Usage Over Time</a
                                  >
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                   RAM Usage Over Time
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Disk I/O Rates
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Network Traffic
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Database Query Response Times
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  System Error Rates
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  System Uptime
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Server Response Time by Location
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                I/O Wait Time Distribution
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Resource Utilization per User
                                  </a>
                                </li>
                              </ul>
                              <ul
                                class="security-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                              >
                                <li>
                                  <a
                                    class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                    href="#"
                                    >Security Incidents Over Time</a
                                  >
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                   Unauthorized Network Access
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    Intrusion Detection Alerts
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  VPN Usage by Users
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Failed File Encryption Attempts
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Malware Infections
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                 Patches Applied Over Time
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Firewall Block Events
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                Suspicious Activity in Logs
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  System Vulnerability Scans
                                  </a>
                                </li>
                              </ul>
                              <ul
                                class="auditlogs-activity-menu graph-dropdown-menu graph-custom-dropdown-menu absolute hidden text-c-black shadow bg-custom-pure-white text-xs"
                              >
                                <li>
                                  <a
                                    class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                    href="#"
                                    >File Access History</a
                                  >
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                   User Session History
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                    User Privilege Changes
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Data Transfer Logs
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Deleted Files Audit
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Group Activity Logs
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                 Software Usage History
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  Role Assignment Changes
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                Unauthorized Access Logs
                                  </a>
                                </li>
                                <li class="dropdown-submenu group">
                                  <a
                                    class="rounded-b custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                    href="#"
                                  >
                                  System Backup Logs
                                  </a>
                                </li>
                              </ul>
                          </div>


                          <div class="data-label-dropdown inline-block relative ">
                                <button 
                                  class="label-btn rounded px-6 py-1 custom-outline custom-safety-btn"
                                >
                                  <span>Data Label</span>
                                  <i class="ri-arrow-down-s-fill"></i>
                                </button>
                                <ul
                                  class="label-dropdown-menu label-custom-dropdown-menu w-full absolute hidden text-c-black shadow bg-c-lighten-gray rounded overflow-hidden text-xs"
                                >
                                  <li id="on-label" class="activity-item">
                                    <a
                                      class="custom-bg-hover rounded-t py-2 px-4 block whitespace-no-wrap px-4"
                                      href="#"
                                      >On</a
                                    >
                                  </li>
                                  <li id="off-label" class="dropdown-submenu group activity-item">
                                    <a
                                      class="custom-bg-hover py-2 px-4 block whitespace-no-wrap flex justify-between items-center"
                                      href="#"
                                    >
                                      Off
                                    </a>
                                  </li>
                                </ul>
                          </div>
                          <button
                            class="custom-safety-btn rounded px-6 py-1 mr-1 hover:border-yellow-300"
                          >
                            Today
                          </button>
                          <button
                            class="custom-safety-btn focus:border-yellow-500 rounded px-6 py-1 mr-1 hover:border-yellow-300"
                          >
                            Last 7 days
                          </button>
                          <button
                            class="custom-safety-btn rounded px-6 py-1 mr-1 hover:border-yellow-300"
                          >
                            Last 30 days
                          </button>
                          <button
                            class="custom-safety-btn rounded px-6 py-1 mr-1 hover:border-yellow-300"
                          >
                            Custom Date
                          </button>   
                      </div>
                       <div class="graph-area rounded mt-6">
                        <div class="text-right pr-3 pt-2">
                          <i class="ri-close-circle-fill ri-xl close-graph-div"></i>
                        </div>
                        <div class="graph-show">
                          <div id="${e.graphShowId}">
                            <div class="text-c-black font-medium text-xl text-center py-3">
                             ${e.Title}
                            </div>
                              <div class="pt-2">
                                  <div class="failed-login-attempt" style="height: 370px;">
                                      <canvas id="${e.canvaId}"></canvas>
                                  </div>
                              </div>
                              <div class="text-c-black font-normal text-lg text-center py-3">
                              ${e.bottomInfo}
                              </div>
                          </div>
                        </div>
                      </div>`;