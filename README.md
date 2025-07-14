Tech-Titan (PriaccEnterprise.AI)
A Slack-style web application integrating AI-powered workflow management, SAP simulation, Power BI dashboards, and full-stack automation.
🚀 Features
Slack-style Web Chat: Real-time chat UI with workflow triggers.
AI Assistant (Python + LangChain): FastAPI-driven AI assistant with ≥6 commands for workflow automation.
SAP Workflow Simulation: Simulated HR, Procurement, Inventory, and Vendor processes.
Backend (Spring Boot): REST APIs and WebSocket server.
Database (PostgreSQL): Schema and SQL views supporting dashboards and process tracking.
Power BI Dashboards: Dynamic business insights and usage metrics.
DevOps Automation: Dockerized setup with CI/CD pipelines via GitHub Actions.
Automated Testing: UI and API-level testing.
📂 Project Structure
Final_Submission/
├── frontend/         # React.js UI for chat and workflows
├── backend/          # Spring Boot APIs and WebSocket
├── ai-assistant/     # Python FastAPI + LangChain AI assistant
├── sap-simulation/   # Mock SAP modules with workflows
├── database/         # PostgreSQL schema.sql and SQL views
├── powerbi/          # .pbix files and dashboard screenshots
├── testing/          # UI/API tests and reports
├── devops/           # Dockerfiles, docker-compose.yml, GitHub Actions
├── docs/             # Architecture diagrams and supporting docs
├── README.md         # Project documentation
└── demo.mp4          # (Optional) End-to-end system demo
⚙️ Setup Instructions
Clone Repository
Environment Setup
Ensure Docker and Docker Compose are installed.
Use provided Dockerfiles for all services:
Frontend Access
Navigate to http://localhost:<frontend_port> for UI.
Backend APIs
Available at http://localhost:<backend_port>/api.
AI Assistant
FastAPI service runs separately or via Docker.
Power BI
Load .pbix files from /powerbi in Power BI Desktop.
Automated Tests
Run test scripts located in /testing.
📊 Demo Highlights
Live chat triggers workflows.
AI assistant interprets commands and invokes APIs.
SAP simulations process and return statuses.
Real-time database updates.
Power BI dashboards refresh dynamically.
Automated test results available post-deployment.
📌 Contributors
Frontend Developer: React.js module
Backend Developer: Spring Boot APIs
AI Developer: Python, LangChain
SAP Simulation: Workflow logic
Database Engineer: PostgreSQL
Power BI Developer: Dashboards
QA Tester: Automated UI/API tests
DevOps Engineer: Docker, CI/CD
Team Lead: Integration, documentation, and demo
