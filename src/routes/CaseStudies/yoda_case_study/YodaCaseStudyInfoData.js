// Also include:
// 1. key metrics and results
// 2. challenges faced during development
// 3. lessons learned
// 4. screenshos
// 5. timeline 
// 6. tools and frameworks used
// 7. Accessibility features
export const YodaCaseStudyInfoData = [
  // payment integration
  {
    title: "Payment Integration Case Study",
    overview:
      "This case study focuses on integrating a payment system into Yoda Safety Services to facilitate secure transactions in order for users and companies to purchase courses. The user needed to be able to purchase a variety of courses for themselves, and their employer needed to be able to purcahse courses for the employees. Which ended up being a serperate page for both types of users, including seperate backend routes. Users are able to see their purchased courses within their profile, and companies are able to see the courses purchased for their employees within their profile. They have immediate access to the course, and can start learning right away. They will recieve a payment confirmation, and once the certificate is expiring they will recieve and email notification",
    problem:
      "The application needed a reliable and secure way to handle payments, ensuring user data protection and compliance with financial regulations. As well as a way for users to purchase courses, and for companies to purchase courses for their employees.",
    solution:
      "The solution involved integrating paypal to accept payments, providing a easy and secure checkout process for users.",
    technologiesUsed:
      "Technologies used is Paypal, may implement stripe in the future.",
    conclusion:
      "The integration has enabled transactions allowing users to purchase courses directly through the application, enhancing user experience and increasing revenue for Yoda Safety Services.",
    keyMetrics: "Increased course sales by 10% within the first month of integration. (Key note: Yoda Safety Services is a new company)",
    futureImprovements:
      "Future improvements will include adding more methods of payment, such as Stripe.",
    links: {
      website: "https://yodasafetyservices.com",
      github: "",
    },
    tabName: "Payment",
    image: "https://example.com/payment-integration-image.jpg",
  },
  // user authentication
  // {
  //   title: "User Authentication Case Study",
  //   overview:
  //     "This case study explores the implementation of a user authentication system in a web application to ensure secure access.",
  //   problem:
  //     "The application required a robust authentication system to protect user data and restrict access to authorized users only.",
  //   solution:
  //     "The solution involved implementing JWT (JSON Web Tokens) for secure user authentication and session management.",
  //   technologiesUsed:
  //     "Technologies used include Node.js for the back-end, Express.js for routing, and MongoDB for user data storage.",
  //   conclusion:
  //     "The authentication system has successfully secured user access, providing peace of mind regarding data protection.",
  //   futureImprovements:
  //     "Future improvements could include multi-factor authentication and enhanced password policies.",
  //   links: {
  //     website: "https://example.com/user-authentication",
  //     github: "",
  //   },
  //   tabName: "Authentication",
  //   image: "https://example.com/user-authentication-image.jpg",
  // },
  // user profile management
  {
    title: "User Profile Management Case Study",
    overview:
      "This case study focuses on developing a user profile management system that allows users to create, update, and manage their profiles.",
    problem:
      "Users needed a way to manage their personal information, preferences, and settings within the application.",
    solution:
      "The solution involved creating a user profile management system with features for editing personal information, changing passwords, and managing preferences.",
    technologiesUsed:
      "Technologies used include React for the front-end, Node.js for the back-end, and MongoDB for storing user profiles.",
    conclusion:
      "The user profile management system has improved user engagement and satisfaction by providing a personalized experience.",
    futureImprovements:
      "Future improvements could include adding social media integration and enhanced privacy settings.",
    links: {
      website: "https://example.com/user-profile-management",
      github: "",
    },
    tabName: "User Profile ",
    image: "https://example.com/user-profile-management-image.jpg",
  },
  // deployment
  {
    title: "Deployment Case Study",
    overview:
      "This case study covers the deployment of a web application to a production environment, ensuring it is accessible to users.",
    problem:
      "The application needed to be deployed in a way that ensures high availability, scalability, and security.",
    solution:
      "The solution involved deploying the application using Docker containers and hosting it on a cloud platform like AWS or Heroku.",
    technologiesUsed:
      "Technologies used include Docker for containerization, AWS for hosting, and Nginx for reverse proxy.",
    conclusion:
      "The deployment has made the application accessible to users worldwide, with improved performance and reliability.",
    futureImprovements:
      "Future improvements could include setting up CI/CD pipelines for automated deployments and monitoring.",
    links: {
      website: "https://example.com/deployment",
      github: "",
    },
    tabName: "Deployment",
    image: "https://example.com/deployment-image.jpg",
  },
  // UX/UI Design
  {
    title: "UX/UI Design Case Study",
    overview:
      "This case study explores the design process of creating a user-friendly and visually appealing interface for a web application.",
    problem:
      "The application needed a design that enhances user experience, making it intuitive and easy to navigate.",
    solution:
      "The solution involved conducting user research, creating wireframes, and designing a responsive layout using modern design principles.",
    technologiesUsed:
      "Technologies used include Figma for design prototyping, CSS for styling, and React for implementing the design.",
    conclusion:
      "The UX/UI design has significantly improved user satisfaction and engagement with the application.",
    futureImprovements:
      "Future improvements could include A/B testing for design variations and incorporating user feedback into future updates.",
    links: {
      website: "https://example.com/ux-ui-design",
      github: "",
    },
    tabName: "UX/UI",
    image: "https://example.com/ux-ui-design-image.jpg",
  },
];
