document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. ACADEMIC PLANNER LOGIC
    // ==========================================
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    if (addTaskBtn) {
        // Sample initial array data
        let tasks = [
            { text: "Complete COS 106 Web Project", completed: false },
            { text: "Read Software Engineering modules", completed: true }
        ];

        function renderTasks() {
            taskList.innerHTML = "";
            tasks.forEach((task, index) => {
                const li = document.createElement("li");
                li.className = `task-item ${task.completed ? "completed" : ""}`;
                
                li.innerHTML = `
                    <span>${task.text}</span>
                    <div class="task-actions">
                        <button class="btn-complete" onclick="toggleTask(${index})">${task.completed ? "Undo" : "Done"}</button>
                        <button class="btn-delete" onclick="deleteTask(${index})">Delete</button>
                    </div>
                `;
                taskList.appendChild(li);
            });
        }

        window.toggleTask = function(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        };

        window.deleteTask = function(index) {
            tasks.splice(index, 1);
            renderTasks();
        };

        addTaskBtn.addEventListener("click", () => {
            const text = taskInput.value.trim();
            if (text !== "") {
                tasks.push({ text: text, completed: false });
                taskInput.value = "";
                renderTasks();
            } else {
                alert("Please enter a valid task description.");
            }
        });

        renderTasks();
    }

    // ==========================================
    // 2. CONTACT FORM VALIDATION LOGIC
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const messageInput = document.getElementById("message");
        const formError = document.getElementById("formError");
        const formSuccess = document.getElementById("formSuccess");

        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            formError.textContent = "";
            formSuccess.textContent = "";

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();
            const message = messageInput.value.trim();

            // Check if any field is empty
            if (!name || !email || !phone || !message) {
                formError.textContent = "Error: All fields must be filled out.";
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formError.textContent = "Error: Please enter a valid email address.";
                return;
            }

            // Validate phone number contains only digits
            const phoneRegex = /^\d+$/;
            if (!phoneRegex.test(phone)) {
                formError.textContent = "Error: Phone number must contain only digits.";
                return;
            }

            // Success feedback
            formSuccess.textContent = "Success! Your message has been validated and sent successfully.";
            contactForm.reset();
        });
    }
<<<<<<< HEAD
});
=======
});
>>>>>>> 59a2420cf58f0e89d408a6e96e49cb5f6ca69695
