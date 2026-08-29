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
      "This case study focuses on integrating a payment system into Yoda Safety Services to facilitate secure transactions in order for users and companies to purchase courses. The user needed to be able to purchase a variety of courses for themselves, and their employer needed to be able to purcahse courses for the employees. Which ended up being a serperate page for both types of users, including seperate backend routes. Users are able to see their purchased courses within their profile, and companies are able to see the courses purchased for their employees within their profile. They have immediate access to the course, and can start learning right away. They will recieve a payment confirmation, and once the certificate is expiring they will recieve and email notification.",
    problem:
      "The application needed a reliable and secure way to handle payments, ensuring user data protection and compliance with financial regulations. As well as a way for users to purchase courses, and for companies to purchase courses for their employees.",
    solution:
      "The solution involved integrating paypal to accept payments, providing a easy and secure checkout process for users.",
    technologiesUsed:
      "Technologies used is Paypal, may implement stripe in the future.",
    conclusion:
      "The integration has enabled transactions allowing users to purchase courses directly through the application, enhancing user experience and increasing revenue for Yoda Safety Services.",
    keyMetrics:
      "Increased course sales by 10% within the first month of integration. (Key note: Yoda Safety Services is a new company)",
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
      "This case study focuses on developing a user profile management system that allows users to create, update, delete, and manage their profiles. While combining in types of users, such as regular users and company users. Depending on the type of user they are allowed certain permissions that other users are not allowed to have.",
    problem:
      "Users needed a way to manage their personal information, preferences, and settings within the application. As well as to manager other users accounts if they were in the same company as them and had permissions to do so.",
    solution:
      "The solution involved creating a user profile management system with features for editing personal information, changing passwords, and managing preferences. As well as another tier to manager the company - that included managing courses, forms, adding and removing employees, to change the status of the employee if needed, and viewing employee progress. Other requirements were seeing who has done training, getting certificates with the ability to download them as well as sending training reminders.",
    technologiesUsed:
      "Technologies used include React for the front-end, Node.js for the back-end, and MongoDB for storing user profiles. ",
    conclusion:
      "The user profile management system has improved user engagement and satisfaction by providing a personalized experience. With an easy-to-use interface for managing profiles and company accounts.",
    futureImprovements:
      "Future improvements could include adding social media integration and enhanced privacy settings.",
    links: {
      website: "https://example.com/user-profile-management",
      github: "",
    },
    keyMetrics: "Verbal feedback from users.",
    tabName: "User Profile ",
    image: "https://example.com/user-profile-management-image.jpg",
  },
  // UX/UI Design
  {
    title: "UX/UI Design Case Study",
    overview:
      "This case study explores the design process of creating a user-friendly and visually appealing interface for a web application. That was able to handle the complexity and different sections that were needed for different types of users. ",
    problem:
      "The application needed a design that enhances user experience, making it intuitive and easy to navigate. Some challenges that occured were the organization of courses, showing what courses the user had completed, which ones were in progress, and ones that were getting close or expired. As well as a clean cohesive way to take the course that would not be overwhelming for the user, specifically the quiz which could be 50+ questions, ensuring the user would not miss a question. Another challenge was designing the forms section, the different user types made it so they only had certain permissions to view and fill out forms. Companies needed to be able to see which employees had filled out which forms, and have a way to see all forms, query forms and manage them.",
    solution:
      "The solutions for the quiz included a multi-step process where the user could see their progress, and easily navigate back and forth between questions. For the forms section, a clean layout with clear sections for different types of forms, and a dashboard for companies to manage employee forms.",
    technologiesUsed:
      "Technologies used include Figma for design prototyping, CSS for styling, and React for implementing the design.",
    conclusion:
      "The UX/UI design has significantly improved user satisfaction and engagement with the application.",
    futureImprovements:
      "Future improvements could include A/B testing for design variations and incorporating user feedback into future updates.",
    tabName: "UX/UI",
    keyMetrics:
      "User satisfaction was conducted through verbal feedback from customers.",
  },
];
