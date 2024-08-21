const overviewSteps = [
    {
        title: "Welcome to the Overview Tour 👋 ",
        content: "The Overview page offers a quick summary of system performance, user activity, and file storage usage, helping you monitor and manage your system efficiently.",
        target: "body",
        order: "",
        group: "groupA"
    },
    {
        title: "Overview Tab",
        content: "Provides a summary of system usage and performance, including user statistics, file usage, and system health.",
        target: "#overview",
        order: "",
        group: "groupA"
    },
    {
        title: "Total No. of Users",
        content: "Displays the total number of users registered in the system, along with their online or offline status.",
        target: ".user-card",
        order: "",
        group: "groupA"
    },
    {
        title: "Space Used",
        content: "Shows the total amount of storage used by files in the system, including the number of files and the amount of space saved.",
        target: ".file-card",
        order: "",
        group: "groupA"
    },
    {
        title: "Access Today",
        content: "Tracks the number of file operations performed today, such as uploads, downloads, edits, and deletions, along with user activity.",
        target: ".access-card",
        order: "",
        group: "groupA"
    },
    {
        title: "System Score",
        content: "Indicates the overall system performance, displaying metrics for disk usage, storage, speed, and other system components.",
        target: ".system-card",
        order: "",
        group: "groupA"
    },
    {
        title: "User Space",
        content: "Lists individual users along with their allocated and used storage space, and the date of their account creation.",
        target: ".space-container",
        order: "",
        group: "groupA"
    },
    {
        title: "Group Space",
        content: "Lists individual users along with their allocated and used storage space, and the date of their account creation.",
        target: ".space-container",
        beforeEnter: () => {
            document.getElementById("user-space-tab").classList.remove('active')
            document.getElementById("user-space-btn").classList.remove('active')
            document.getElementById("group-space-tab").classList.add('active')
        },
        afterLeave: () => {
            document.getElementById("group-space-tab").classList.remove('active')
            document.getElementById("group-space-btn").classList.add('active')
            document.getElementById("user-space-tab").classList.add('active')
        },
        order: "",
        group: "groupA"
    },
    {
        title: "File Usage Ratio",
        content: "Visual representation of file storage distribution among users, groups, and other categories in a pie chart format.",
        target: "#file-usage-ratio",
        order: "",
        group: "groupA"
    },
    {
        title: "User Data",
        content: "abcd",
        target: ".graph-container",
        order: "",
        group: "groupA"
    }
]

const tg = new tourguide.TourGuideClient({
    steps: overviewSteps,
    completeOnFinish: true,
    allowDialogOverlap: true,
    group: "groupA",
    exitOnClickOutside: true,
    rememberStep: true,
    
})

function startGuide() {
    tg.start()
}