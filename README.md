# AccessiScan
Here’s a detailed **`README.md`** file for your **AccessiScan** project:

---

# **AccessiScan**  
A web-based accessibility analysis tool designed to help developers and website owners ensure their web pages are accessible to users with disabilities. **AccessiScan** scans and evaluates websites for compliance with accessibility standards (like WCAG), focusing on elements such as images, links, buttons, forms, color contrast, ARIA roles, keyboard navigation, heading structure, and focus order.

---

## **Features**  
- **Image Analysis**: Detects missing alt attributes to ensure all images are accessible.  
- **Link and Button Validation**: Ensures meaningful labels and proper functionality.  
- **Form Accessibility**: Verifies proper labels, fieldsets, and error messages.  
- **Color Contrast Check**: Evaluates text and background contrast ratios.  
- **ARIA Role Validation**: Checks proper usage of ARIA roles for assistive technologies.  
- **Keyboard Navigation**: Ensures all interactive elements are accessible via keyboard.  
- **Heading Structure Analysis**: Validates proper heading hierarchy for content organization.  
- **Focus Order Check**: Ensures logical and predictable focus movement.

---

## **Tech Stack**  
- **Frontend**:  
  - **React.js**: For building a dynamic and responsive user interface.  
  - **Tailwind CSS**: For styling and creating an accessible design system.  

- **Backend**:  
  - **Node.js** with **Express.js**: For server-side API development.  

- **Database**:  
  - **MongoDB**: For storing scan results and user profiles.  

- **Accessibility Testing Libraries**:  
  - **axe-core**: For automated accessibility validation.  
  - **Pa11y** (Optional): For generating detailed audit reports.  
  - **WAVE API**: For additional accessibility insights.  

---

## **Installation and Setup**  

### Prerequisites  
Ensure you have the following installed on your system:  
- **Node.js** (v14 or later)  
- **npm** or **yarn**  
- **MongoDB** (local or cloud setup)  

### Steps to Run Locally  
1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/Khushijoshi003/AccessiScan.git
   cd AccessiScan
   ```

2. **Install Dependencies**:  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:  
   Create a `.env` file in the root directory with the following:  
   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   ```

4. **Run the Backend Server**:  
   ```bash
   npm run server
   ```

5. **Run the Frontend**:  
   Navigate to the frontend folder and start the React app:  
   ```bash
   cd client
   npm start
   ```

6. **Access the Application**:  
   Open your browser and navigate to `http://localhost:3000`.

---

## **Usage**  
1. Enter the URL of the website or web page you want to analyze.  
2. Click on the **Scan** button to initiate the accessibility analysis.  
3. View detailed reports highlighting issues and recommendations for improvement.  

---

## **Contributing**  
We welcome contributions from the community! To contribute:  
1. Fork the repository.  
2. Create a new branch for your feature or bug fix:  
   ```bash
   git checkout -b feature-name
   ```  
3. Commit your changes and push the branch:  
   ```bash
   git push origin feature-name
   ```  
4. Open a Pull Request and describe your changes.

---

## **License**  
This project is licensed under the **MIT License**. See the `LICENSE` file for details.

---

## **Contact**  
For any queries or support, feel free to contact:  
- **Name**: Khushi Joshi  
- **Email**: khushijoshi740@gmail.com  

---

Let me know if you'd like to customize this further! 😊
