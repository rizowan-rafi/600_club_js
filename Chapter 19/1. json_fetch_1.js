// json
//Q1
/*
    the difference between js object and json string ::
    1. js object can hold all the data types.but json can not hold function/method.
    2. js object's key and value can written in any data type. but json's key and value can only written in string with double quotes
    3. to convert object to json --> JSON.stringify(object) , to convert json to object --> JSON.parse(jsonData)

*/

//Q2
const user = {
    name: 'John',
    email: 'john@example.com',
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    orderHistory: ['laptop','mobile','headphone']
    
}

const jsonUser = JSON.stringify(user)
console.log(jsonUser)

//Q3
const shoppingCart = {
    products: ['laptop', 'mobile', 'headphone'],
    totalPrice: 200000,
    userDetails: {
        name: 'John Doe',
        id: 1,
        contact: 'johndoe@example.com'

    }
}
const jsonCart = JSON.stringify(shoppingCart)
console.log(jsonCart)

//Q4
const weather = {
    city: 'New York',
    temperature: 20,
    humidity: 80,
    forecast: [23,34,45,12,23,36,22]
}
const jsonWeather = JSON.stringify(weather)
console.log(jsonWeather)

//Q5
const movie = {
    title: 'ABCD',
    releaseDate: '23-06-2020',
    actors: ['John Doe', 'Helli Smith', 'John Smith'],
    rating: 8.5
}
const jsonMovie = JSON.stringify(movie)
console.log(jsonMovie)
const movieObj = JSON.parse((jsonMovie))
console.log(movieObj)

//Q6
const projectManagementSystem = [
    {
        name: "Website Redesign",
        description: "Redesign the company website to improve user experience.",
        teamMembers: ["Rafi", "Ayesha", "Tanvir"],
        deadline: "2025-05-15",
        tasks: [
            {
                title: "Design new homepage layout",
                assignee: "Ayesha",
                status: "In Progress"
            },
            {
                title: "Implement responsive design",
                assignee: "Rafi",
                status: "Not Started"
            },
            {
                title: "Test on different browsers",
                assignee: "Tanvir",
                status: "Pending"
            }
        ]
    },
    {
        name: "Mobile App Launch",
        description: "Develop and launch the new mobile application.",
        teamMembers: ["Rafi", "Nadia", "Farhan"],
        deadline: "2025-06-10",
        tasks: [
            {
                title: "Create login functionality",
                assignee: "Farhan",
                status: "Completed"
            },
            {
                title: "Build profile page",
                assignee: "Nadia",
                status: "In Progress"
            },
            {
                title: "App store submission",
                assignee: "Rafi",
                status: "Not Started"
            }
        ]
    }
];

const jsonProjectManagementSystem = JSON.stringify(projectManagementSystem)
console.log(projectManagementSystem);

//Q7
const courses = [
    {
        title: 'Frontend Development Course',
        instructor: 'John Doe',
        duration: '6 months',
        lessons: [
            {
                lessonName: 'HTML & CSS Basics',
                duration: '2 weeks',
                difficultyLevel: 'Beginner'
            },
            {
                lessonName: 'JavaScript Essentials',
                duration: '3 weeks',
                difficultyLevel: 'Intermediate'
            },
            {
                lessonName: 'React.js Fundamentals',
                duration: '4 weeks',
                difficultyLevel: 'Advanced'
            }
        ]
    },
    {
        title: 'Backend Development Course',
        instructor: 'Jane Smith',
        duration: '5 months',
        lessons: [
            {
                lessonName: 'Node.js Basics',
                duration: '2 weeks',
                difficultyLevel: 'Beginner'
            },
            {
                lessonName: 'Express.js & Routing',
                duration: '3 weeks',
                difficultyLevel: 'Intermediate'
            },
            {
                lessonName: 'MongoDB Integration',
                duration: '4 weeks',
                difficultyLevel: 'Advanced'
            }
        ]
    },
    {
        title: 'Full Stack Project Bootcamp',
        instructor: 'Alex Johnson',
        duration: '8 months',
        lessons: [
            {
                lessonName: 'Project Planning & Git',
                duration: '1 week',
                difficultyLevel: 'Beginner'
            },
            {
                lessonName: 'Building REST APIs',
                duration: '3 weeks',
                difficultyLevel: 'Intermediate'
            },
            {
                lessonName: 'Deployment & CI/CD',
                duration: '2 weeks',
                difficultyLevel: 'Advanced'
            }
        ]
    }
];
const jsonCourses = JSON.stringify(courses)
console.log(jsonCourses)

//Q8
const productReviews = [
    {
        productName: 'Laptop',
        reviewerDetails: {
            name: 'John Doe',
            email: 'john.doe@gmail.com'
        },
        rating: 8.0,
        reviewText: 'Excellent laptop with great performance.'
    },
    {
        productName: 'Smartphone',
        reviewerDetails: {
            name: 'Ayesha Rahman',
            email: 'ayesha.rahman@email.com'
        },
        rating: 9.2,
        reviewText: 'Amazing camera and battery life. Totally worth it!'
    },
    {
        productName: 'Wireless Headphones',
        reviewerDetails: {
            name: 'Rafiul Islam',
            email: 'rafiul.islam@email.com'
        },
        rating: 7.5,
        reviewText: 'Good sound quality but the battery drains fast.'
    }
];
const jsonProductReviews = JSON.stringify(productReviews)
console.log(jsonProductReviews)
const productReviewsObj = JSON.parse(jsonProductReviews)
console.log(productReviewsObj)


