export const Bio = {
  name: 'Matthew Marshall',
  roles: ['Game Developer', 'Web Developer Developer', 'Programmer'],
  description:
    'I am a motivated and hard working programmer, always eager to take on new challenges. I am someone who thrives in team environmets and will always look to level up my skills. With a passion for learning, I am confident in my ability to produce high-quality results.',
  github: 'https://github.com/marsh189',
  resume:
    'https://drive.google.com/file/d/1zjH2K4CfjfOFyCOX-UKSas3StUGHmp2U/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/matt-a-marshall/',
};

export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React Js',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      },
      {
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      },
      {
        name: 'CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
      },
      {
        name: 'JavaScript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node Js',
        image: 'https://nodejs.org/static/images/logo.svg',
      },
      {
        name: 'Python',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      },
      {
        name: 'SQL Server',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
      },
      {
        name: 'MongoDB',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
      {
        name: 'ASP.Net',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg',
      },
      {
        name: 'express',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/express/express-original.svg',
      },
      {
        name: 'socket.io',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/socketio/socketio-original.svg',
      },
    ],
  },
  {
    title: 'Game Development',
    skills: [
      {
        name: 'Unity',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg',
      },
      {
        name: 'C#',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
      },
      {
        name: 'Unreal Engine',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/unrealengine/unrealengine-original.svg',
      },
      {
        name: 'C++',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      },
    ],
  },
  {
    title: 'Others',
    skills: [
      {
        name: 'Java',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      },
      {
        name: 'XML',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/xml/xml-plain.svg',
      },
      {
        name: 'Android Studio',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg',
      },
      {
        name: 'Git',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        image:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        name: 'Jira',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg',
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'House On Haunted Hollow',
    date: 'Jun 2016 - Oct 2016',
    description:
      "House on Haunted Hollow is a children's book that I was tasked to create a mobile application for using Unity. My main contributions included the main book functionality, a tile matching game, and publishing the app on the Google Play store with In-App Purchases.",
    image:
      'https://github.com/marsh189/THOHH-App/blob/master/hohh.png?raw=true',
    tags: ['Unity', 'C#', 'Google Play Store'],
    category: 'games',
    github: 'https://github.com/marsh189/THOHH-App',
    webapp: '',
  },
  {
    id: 2,
    title: 'Battleship',
    date: 'Mar 2016 - Apr 2016',
    description:
      'As a final project for a data networking class I helped develop a simple looking Battleship game with Java and Java GUI. My focus on the project was to learn how to use Java GUI and create the client boards. I also was involved in creating the communication between the clients and the server.',
    image:
      'https://github.com/marsh189/Battleship/blob/master/playerTurn.PNG?raw=true',
    tags: ['Java', 'Java GUI', 'Networking'],
    category: 'other',
    github: 'https://github.com/marsh189/Battleship',
    webapp: '',
  },
  {
    id: 3,
    title: 'Deer Me',
    date: 'Feb 2018 - Apr 2018',
    description:
      'A 2D Platformer where you must try and find a way to maneuver through the scene to reach the end. This was built in Unity as a Final Project for my Game Development minor. This class project was designed to help us work as a team like you would see in actual game studios with people working in different roles (artists, programmers, producers, etc.). I was one of the main engineers who worked on many different aspects of the game.',
    image: 'https://github.com/marsh189/Deer-Me/blob/master/DM.png?raw=true',
    tags: ['Unity', 'C#'],
    category: 'games',
    github: 'https://github.com/marsh189/Deer-Me',
    webapp: 'https://deer-me-demo.netlify.app/',
  },
  {
    id: 4,
    title: 'Shooting Circles',
    date: 'Jan 2020 Feb 2020',
    description:
      'This was a simple Top-Down Shooter built as a lesson plan for young kids to learn how to use Unity for Game Development. In this lesson, students learned how to create simple menus, object collisions, health bars, and more.',
    image:
      'https://github.com/marsh189/MVCode-Work/blob/master/shooting.png?raw=true',
    tags: ['Unity', 'C#'],
    category: 'games',
    github: 'https://github.com/marsh189/MVCode-Work',
    webapp: 'https://shooting-circles-demo.netlify.app/',
  },
  {
    id: 5,
    title: 'Gift Giving',
    date: 'Apr 2018 - May 2018',
    description:
      'A prototype for a Secret Santa- like application created as a final project for a Human Computer Interaction class. The idea was that a user could create a group of friends that will all receive a person they must buy a gift for. The users could then add wishlists and others can secrectly mark (not shown to the wishlist owner) what gifts they have gotten for them. The main focus of this project was to demostrate the understanding of good UX design and not full fuinctionality.',
    image:
      'https://github.com/marsh189/GiftGivingApp/blob/master/gift.png?raw=true',
    tags: ['Java', 'XML', 'Android Studio'],
    category: 'other',
    github: 'https://github.com/marsh189/GiftGivingApp',
    webapp: '',
  },
  {
    id: 6,
    title: 'Top Selling Books Page',
    date: 'Apr 2024',
    description:
      "Used as an introduction to React, this is a simple site that mimics Amazon's Best Seller list.",
    image:
      'https://github.com/marsh189/top-selling-book-copy/blob/main/top-sellers.png?raw=true',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'web',
    github: 'https://github.com/marsh189/top-selling-book-copy',
    webapp: 'https://react-amazon-top-sellers.netlify.app/',
  },
  {
    id: 7,
    title: 'Social Links Profile Component',
    date: 'Jun 2024',
    description:
      'A FrontEnd Mentor challenge I completed where I was tasked to create a component that included the Social Links for a profile.',
    image:
      'https://github.com/marsh189/social-link-profile/blob/main/src/design/destkop-design.jpg?raw=true',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'web',
    github: 'https://github.com/marsh189/social-link-profile',
    webapp: 'https://marsh189.github.io/social-link-profile/',
  },
  {
    id: 8,
    title: 'Recipe Web Page',
    date: 'Jun 2024',
    description:
      'A FrontEnd Mentor challenge I completed where I was tasked to create a web page for a simple omelette recipe.',
    image:
      'https://github.com/marsh189/recipe-page/blob/main/src/design/recipe-page.png?raw=true',
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    category: 'web',
    github: 'https://github.com/marsh189/recipe-page',
    webapp: 'https://marsh189.github.io/recipe-page/',
  },
  {
    id: 9,
    title: 'React Chat App',
    date: 'Mar 2025',
    description:
      'A challenging project used to learn how to create a node.js Server for a React based Chat Application.',
    image:
      'https://raw.githubusercontent.com/marsh189/react-chat-app/refs/heads/main/chat-app.png?raw=true',
    tags: [
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'NodeJS',
      'Exress',
      'socket.io',
    ],
    category: 'web',
    github: 'https://github.com/marsh189/react-chat-app',
    webapp: 'https://react-chat-app-78bd.onrender.com/',
  },
];
