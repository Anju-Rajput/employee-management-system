const admin = [
{
    id: 1,
    email: "admin@gmail.com",
    password: "123"
}
];

const employees = [
{
    id: 1,
    firstName: "Amit",
    email: "employee1@gmail.com",
    password: "123",

    taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
    },

    tasks: [
        {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Create Login Page",
            taskDescription: "Design and develop login page UI",
            date: "2026-03-07",
            category: "Development"
        },
        {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Fix Navbar Bug",
            taskDescription: "Resolve responsive navbar issue",
            date: "2026-03-05",
            category: "Bug Fix"
        },
        {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "API Integration",
            taskDescription: "Connect frontend with API",
            date: "2026-03-04",
            category: "Backend"
        }
    ]
},

{
    id: 2,
    firstName: "Priya",
    email: "employee2@gmail.com",
    password: "123",

    taskNumbers: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
    },

    tasks: [
        {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Build Dashboard",
            taskDescription: "Create employee dashboard UI",
            date: "2026-03-07",
            category: "Development"
        },
        {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "CSS Optimization",
            taskDescription: "Improve website styling",
            date: "2026-03-06",
            category: "Design"
        },
        {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Form Validation",
            taskDescription: "Add validation to signup form",
            date: "2026-03-07",
            category: "Frontend"
        }
    ]
},

{
    id: 3,
    firstName: "Rahul",
    email: "employee3@gmail.com",
    password: "123",

    taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
    },

    tasks: [
        {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Database Setup",
            taskDescription: "Setup MySQL database",
            date: "2026-03-07",
            category: "Database"
        },
        {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "API Testing",
            taskDescription: "Test REST API endpoints",
            date: "2026-03-06",
            category: "Testing"
        },
        {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "Bug Investigation",
            taskDescription: "Investigate login bug",
            date: "2026-03-05",
            category: "Debugging"
        }
    ]
},

{
    id: 4,
    firstName: "Sneha",
    email: "employee4@gmail.com",
    password: "123",

    taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
    },

    tasks: [
        {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "UI Improvement",
            taskDescription: "Improve homepage UI",
            date: "2026-03-07",
            category: "Design"
        },
        {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Footer Section",
            taskDescription: "Create responsive footer",
            date: "2026-03-05",
            category: "Frontend"
        },
        {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            taskTitle: "Animation Feature",
            taskDescription: "Add animation effects",
            date: "2026-03-04",
            category: "UI"
        }
    ]
},

{
    id: 5,
    firstName: "Arjun",
    email: "employee5@gmail.com",
    password: "123",

    taskNumbers: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
    },

    tasks: [
        {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: "Write Documentation",
            taskDescription: "Prepare project documentation",
            date: "2026-03-07",
            category: "Documentation"
        },
        {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            taskTitle: "Code Review",
            taskDescription: "Review team code",
            date: "2026-03-06",
            category: "Review"
        },
        {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            taskTitle: "Performance Testing",
            taskDescription: "Test website performance",
            date: "2026-03-07",
            category: "Testing"
        }
    ]
}
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = ()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return { employees,admin}
    
}

// give first name property to employees give them only indan names and do one more thing give 1 property fo task number and give each type of task's number like active etc.