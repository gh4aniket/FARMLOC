# 🌾 FARMLOC  

<div align="center">
  
[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Contributors Welcome](https://img.shields.io/badge/contributors-welcome-0b7cbd)](https://github.com/nikohoffren/fork-commit-merge/pulls)
[![First Contributors](https://img.shields.io/badge/first-contributors-0b7cbd)](https://github.com/nikohoffren/fork-commit-merge/pulls)
[![PR:s Welcome](https://img.shields.io/badge/PR:s-welcome-0b7cbd)](https://github.com/nikohoffren/fork-commit-merge/pulls)

[![GSSOC'25](https://img.shields.io/badge/GSSOC-25-orange)](https://gssoc.girlscript.tech/)
[![OSCI'25](https://img.shields.io/badge/OSCI-25-blue)](https://www.osconnect.org)

[![Issues](https://img.shields.io/github/issues/Pujan-sarkar/FARMLOC.svg?style=flat)](https://github.com/Pujan-sarkar/FARMLOC/issues)
[![Stars](https://img.shields.io/badge/stars-17-yellow)](https://github.com/Pujan-sarkar/FARMLOC/stargazers)
[![Forks](https://img.shields.io/badge/forks-39-green)](https://github.com/Pujan-sarkar/FARMLOC/forks)

[![MIT License](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

</div>

**FARMLOC** stands for **Farmers-Agricultural-Resource-Management-and-Location-Of-Cold-storage**.  
It is a web-based platform designed to empower farmers by providing seamless access to agricultural resources, tools for management, and real-time information about the nearest available cold storages.


## 🔧 Tech Stack

### **Frontend:**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

### **Backend:**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### **Database:**

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### **Authentication & Hosting:**

![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

## ✨ Features

- 📍 **Cold Storage Locator** – Find and connect with the nearest available cold storages in real-time
- 📊 **Farm Resource Management** – Track and manage seeds, fertilizers, and equipment easily
- 🔐 **Secure Authentication** – User login and registration powered by Firebase
- 📡 **Real-Time Updates** – Seamless communication between frontend and backend
- 🌐 **Responsive UI** – Mobile-first design with Tailwind CSS & Bootstrap
- 🤝 **Collaboration Ready** – Built for open-source contributions and hackathon scaling

## 📁 Project Structure (Basic Idea)

    FARMLOC/
    ├── apps/
    │   ├── frontend/
    │   │   ├── src/
    │   │   ├── public/
    │   │   ├── package.json
    │   │   └── ...
    │   └── backend/
    │       ├── routes/
    │       ├── models/
    │       ├── controllers/
    │       ├── package.json
    │       └── ...
    ├── README.md
    └── ...

## 🛠️ Installation & Setup

1.  **Clone the repository:**

         git clone https://github.com/your-username/FARMLOC.git
         cd FARMLOC

    **Note:** This repository has two branches:

    - `main` - Production/stable branch
    - `dev` - Development branch

2.  **Frontend Setup:**

        cd apps
        cd frontend
        pnpm i
        pnpm dev

3.  **Backend Setup:**

        cd apps
        cd backend
        pnpm i
        pnpm dev

## 🤝 Contributing

We ❤️ contributions! If you’d like to contribute to FARMLOC:

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a new branch** from `dev`
4. Make your changes and **test thoroughly**
5. **Commit** with a clear message
6. **Push** to your fork and open a Pull Request to `dev`

📌 All pull requests should target the `dev` branch.  
Please ensure your code follows our standards and includes proper documentation.

⭐ Don’t forget to star our repo if you like this project! 🌱💚

## 📝 Development Workflow

    # 1. Switch to dev branch
    git checkout dev

    # 2. Pull latest changes from dev
    git pull origin dev

    # 3. Create a new feature branch
    git checkout -b feature/your-feature-name

    # --- Make your changes in the codebase now ---

    # 4. Stage and commit your changes
    git add .
    git commit -m "Add your commit message"

    # 5. Push to your feature branch
    git push origin feature/your-feature-name

    # 6. Create a Pull Request
    # (Use the GitHub/GitLab/Bitbucket web UI to open a PR from feature/your-feature-name to dev)

## 🚦 Getting Started

1. Ensure you have Node.js and pnpm installed
2. Follow the installation steps above
3. Start both frontend and backend servers
4. Navigate to the frontend URL (typically `http://localhost:3000`)
5. Begin exploring FARMLOC features!

## 🙌 Our Contributors

We thank all the amazing contributors who help make **FARMLOC** better every day! 🌾💚

<a href="https://github.com/Pujan-sarkar/FARMLOC/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Pujan-sarkar/FARMLOC" />
</a>

---

🎉 **This project is listed in [GirlScript Summer of Code 2025](https://gssoc.girlscript.tech)!**  
<a href="https://gssoc.girlscript.tech/" target="_blank">
<img src="https://camo.githubusercontent.com/952866a3a2679243b5bb4b8e977a2e1eebe82074271ca4baa079da59be8efa76/68747470733a2f2f747365312e6d6d2e62696e672e6e65742f74682f69642f4f49502e68374f4241737068324262314b34573943366a694c51486143533f7069643d41706926503d3026683d313830"
    height="180" />
</a>

🎉 **This project is listed in [Open Source Connect India 2025](https://www.osconnect.org)!**

<img src="https://github.com/user-attachments/assets/dc34467a-b396-43b0-a6d7-7eafd601177a"
    height="180" />

We welcome all contributors participating via GSSoC’25 & OSCI'25. Come, collaborate, and grow with us!
</a>

## 📧 Support

For any questions or issues, please create an issue in the repository or contact the development team.

## 📜 License

This project is licensed under the **MIT License** – you’re free to use, modify, and distribute it with attribution.

See the [LICENSE](./License.md) file for details.

## Maintainer

<table style="width:100%; border: 0;"> <tr> <td align="center" style="border: 0;"> <img src="https://avatars.githubusercontent.com/u/144250917?v=4" width="120" height="120" style="border-radius: 50%;" alt="Pujan Sarkar"/><br/> <strong>Pujan Sarkar</strong><br/><br/> <a href="https://github.com/Pujan-sarkar"> <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white&labelColor=000000" alt="GitHub" /> </a> <a href="https://www.linkedin.com/in/pujan-sarkar"> <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /> </a> </td> </tr> </table>
</div>

Your support helps us grow and reach more farmers.
**Happy Coding! 🌱**
