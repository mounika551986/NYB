        let addBtn = document.getElementById("addBtn");
        let taskInput = document.getElementById("taskInput");
        let taskList = document.getElementById("taskList");

        addBtn.addEventListener("click", function() {

            let task = taskInput.value;

            if (task === "") {
                alert("Please enter a task");
                return;
            }

            // Create list item
            let li = document.createElement("li");
            li.textContent = task;


            // Create remove button
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";

            removeBtn.addEventListener("click", function() {
                li.remove();
            });

            li.appendChild(removeBtn);
            taskList.appendChild(li);

                        // Clear input field
            taskInput.value = "";
        });
        function changeColor() {
    document.body.style.backgroundColor = "lightblue";
        };

