exports.getInfo = (req, res, next) => {
    res.status(200).json({
      data: [{ professionalName: 'Mr. Professional', 
      base64Image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 
      alt: 'Mr. Professional Portrait', 
      nameLink: [{firstName: "link for name", url: "url"}], 
      primaryDescription: "Description here...",
      workDescription1: " Description",
      workDescription2: " description 2",
      linkedInLink: "link",
      githubLink: "gh link",
      contactText: "contact"
     }]
    });
  };
  
  