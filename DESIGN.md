# Design Document

## Barbara Louyakis | Portfolio

CS5610 Web Development - Project 1

## Project Description

This website was developed for CS5610 Web Development at Northeastern University during the Summer 2026 semester. It is designed as a personal portfolio and resume website for Barbara Louyakis, a MSCS student and mariner. This website will be used to showcase current projects, inform potential employers and peers of my educational & professional background, reference my current employment and provide contact information.

URL: https://blouyakis.github.io/barbaralouyakis/

This website was designed using HTML5 Vanilla, JavaScript ES6, CSS3, Bootstrap 5 and GitHub. I used Claude Sonnet 4-6 to generate the required GenAI pages which are the 'Professional' & 'Education' pages. It is designed to be W3C compliant. I chose a navy/pink color theme and used Amethysta from Google Fonts. There are 6 pages within the website:

- index.html - Homepage with navbar at the top, cards with page links and an image of a coral reef
- contact.html - Contact info page with navbar at the top, name, town, phone & email, and a contact form with the option to send a message
- projects.html - Project info page with navbar at the top and cards to display each project - these will eventually link to individual pages about each project
- employment.html - Employment info page with navbar at the top and cards to display current employment
- education.html - GenAI (Claude Sonnet 4-6) education info page with navbar and cards to display education history
- professional.html - GenAI (Claude Sonnet 4-6) professional info page with navbar and cards to display professional history

## User Personas

### Hiring Managers
Name: Diana Prince
Age: 29
Position: Recruiter for Amazon 
Background: Diana is a recruiter for a large cyber retail company who is looking for software engineers. She receives thousands of applications a day and needs to manage the workload efficiently.
Goals: Find qualified candidates quickly and have a simple way of contacting them. 
Device: Desktop PC, Macbook, Chrome Browser

### Students & Peers
Name: Clark Kent
Age: 40
Position: MSCS Align student at Northeastern
Background: Clark is also a student taking the summer web development class. He wants to see other students work so he can come up with ideas of improving his own portfolio. 
Goals: Understand other portfolio structures, learn creative JS implementations and learn more about his fellow classmates. 
Device: Macbook, iPad, Chrome Browser, Safari Browser

### Professors
Name: Steve Rogers
Age: 35
Position: Web Development Professor
Background: Steve is teaching a summer class on web development. He has a lot of students and needs to ensure all of their code is good quality, W3C compliant and structurally sound. He will be reviewing personal portfolios. 
Goals: Check code structure and design, ensure websites are within assignment specs, find creative additions to pages. 
Device: Macbook, Chrome Browser

### Friends & Family
Name: Peter Parker
Age: 25
Position: Fisherman
Background: Peter is a local mariner who is trying to leave the fishing industry and gain employment in the offshore wind industry. He needs to get certified for this work, and is seeking grant opportunities so he can get the education he needs funded. 
Goals: Peter does not have a strong background in computers so he is looking for a simple website to navigate where he can easily figure out how to apply for grant funding. 
Device: iPhone, Safari Browser

## User Stories

### Diana Prince, Hiring Manager
Diana is reading thousands of applications for a software engineer position recently opened at her company, Amazon. She gets Barbara's application and clicks a link to her portfolio. She immediately understands that any applicant with their own personal website must know a thing or two about computers. She navigates easily through the beautifully designed site, which clearly defines each category she is interested in learning more about. She reviews Barbara's current employment, checks out her projects page, and validates her qualifications through the Professional page. She wants to setup an interview, so she navigates over to the Contact page and sends her a quick message through the form to confirm her availability. 
- Diana was pleased with how well organized Barbara's information was and how quickly she was able to get the information she needed in just a couple of minutes time. 

### Clark Kent, MSCS Align Student
Clark is creating is own portfolio for the same web development class as Barbara. He checks out her site and thinks the navbar is sleek and sexy. He is not a fan of her color scheme, but likes how the pink does pop out of the page nicely. He finds some cool features like buttons changing when he hovers his mouse over them. He wants to figure out how she did all this, so he navigates to her Projects page and links over to her GitHub repo. He can easily see her entire project and has a ton a great ideas to take back to his own development project. 
- Clark was inspired by Barbara's buttons and navbar and quickly figured out how to implement these features in his own portfolio since she also shared her GitHub repo. 

### Steve Rogers, Web Development Professor
Steve is ready to grade Barbara's first project, which she designed as a personal portfolio. He follows her URL to the homepage and sees a pretty picture of coral, setting the theme of the site, and notes she is a student and a mariner. He wants to ensure she followed the project guidelines so he inspects the HTML for proper semantics, meta tags, ES6 modules, then he copies the URL into the validator from W3C. He checks out each page, and tries to send a message using Barbara's form feature on the contact page. He also reads the README and finds more information including a demo video and a slide presentation. He confirms the page has the required MIT License, and he runs ESLint. He also notices she followed the instructions to create a page with GenAI, and he reviews the reference she included in the README file. 
- Steve enjoys navigating Barbara's website and gives her full credit for a great design and extra features. 

### Peter Parker, Fisherman
Peter is a local fisherman out of New Bedford Fish Pier. He has only been fishing a few years but he has seen the massive wind farms being built off the Massachusetts coast. His buddies have all taken jobs aboard safety vessels and they brag about how easy the work is and how much better the pay is than fishing. Peter wants to get in on this work, but he does not have the required STCW certification to qualify. He calls around and all the schools are charging $500 for this training. He hears from another local fisherman that the MA CEC is giving out grant money which will pay for his STCW certification. He gets the name of the project coordinator and Googles her. He finds her personal portfolio and navigates to her employment page. He sees exactly what he is looking for, she is the project coordinator for the grant and there is a link on her page to the JotForm application he needs. He clicks it, applies and gets a phone call a few minutes later telling him he has been approved for funding. 
- Peter heard about grant money from his friend and got the name of the person who coordinates the funds. He looked up her name, followed her portfolio link and quickly found the application he needed within minutes. 

## Design Mockups