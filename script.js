function generateResume() {
    const name = document.getElementById('name').value;
    const degreeGraduation = document.getElementById('degreeGraduation').value;
    const completionYearGraduation = document.getElementById('completionYearGraduation').value;
    const degreeSeniorSecondary = document.getElementById('degreeSeniorSecondary').value;
    const completionYearSeniorSecondary = document.getElementById('completionYearSeniorSecondary').value;
    const degreeSecondary = document.getElementById('degreeSecondary').value;
    const completionYearSecondary = document.getElementById('completionYearSecondary').value;
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;


    const resumeContent = `
      <h2>${name}</h2>
      <div class="resumeSection" id="educationDetails">
      <h3>Contact-Details:</h3>
        <p>${phoneNumber}</p>
        <p>${email}</p>
        <hr>
        <h3>Education Details:</h3>
        <p><strong>Graduation:</strong> ${degreeGraduation} (Completion Year: ${completionYearGraduation})</p>
        <p><strong>Senior Secondary:</strong> ${degreeSeniorSecondary} (Completion Year: ${completionYearSeniorSecondary})</p>
        <p><strong>Secondary:</strong> ${degreeSecondary} (Completion Year: ${completionYearSecondary})</p>
      </div>
      <div class="resumeSection" id="skillsSection">
        <h3>Skills:</h3>
        <p>${skills}</p>
      </div>
      <div class="resumeSection" id="projectsSection">
        <h3>Projects:</h3>
        <p>${projects}</p>
        
      `;

    // Create a new window with the generated resume content
    const newWindow = window.open();
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="styles.css">
        <title>Generated Resume</title>
        <style>
        body {
            background-color: #f2f2f2;
        }
        
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 100%;
            box-sizing: border-box;
            color: #333;
            margin: 0 auto; /* Center the container */
        }
        
        .resumeSection {
            margin-top: 20px;
            border-top: 1px solid black;
            padding-top: 20px;
        }
        
        #resumeOutput {
            margin-top: 20px;
        }
        
        button {
            background-color: #4caf50;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s; /* Add transition effect */
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        /* Style for the Education Details */
        .resumeSection #educationDetails p {
            display: flex;
            justify-content: space-end;
        }
        
        /* Additional styling for other sections */
        .resumeSection h3 {
            color: #4caf50; /* Green color for section headings */
        }
        
        .resumeSection p {
            margin-bottom: 8px;
        }
        
        </style>
      </head>
      <body>

        <div class="container">
          ${resumeContent}
          <button id="downloadButton">Download as PDF</button>
        </div>
        <script src="https://rawgit.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
        <script>
          document.getElementById('downloadButton').addEventListener('click', function() {
            const resumeContainer = document.querySelector('.container');
            html2pdf(resumeContainer);
          });
        </script>
      </body>
      </html>
    `);
}




