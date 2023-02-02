// styling the list frame
{   
    var frame = document.getElementById('frame');
    frame.style.backgroundColor = '#3E3E40';
    frame.style.textAlign = 'center';
    frame.style.width = '80%';
    frame.style.marginTop = '3.5%';
    frame.style.marginLeft = 'auto';
    frame.style.marginRight = 'auto';
    frame.style.borderRadius = '15px';
    frame.style.display = 'flex';
    frame.style.flexDirection = 'column';
    frame.style.alignItems = 'center';
}

// selecting and styling the title
{
    var frame = document.getElementById('frame');
    var title = frame.querySelector('h1');
    title.style.fontSize = '38px';
    title.style.fontWeight = '700';
    title.style.fontStyle = 'normal';
    title.style.color = '#D9CA9C';
    title.style.marginTop = '0.7%';
}

function addTask() {
    var taskHolder = document.getElementById('taskHolder');
    taskHolder.style.display = 'block';
}

// creating a keyboard interaction with "addTaskButton"
{
    var addTaskButton = document.getElementById("addTaskButton");
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 115) {
            addTaskButton.click();
        }
    });
}

// styling the 'addTask' button
{
    var addTaskButton = document.getElementById('addTaskButton');
    addTaskButton.style.border = '2px solid rgba(217, 202, 256, 0.3)';
    addTaskButton.style.borderRadius = '5px';
    addTaskButton.style.backgroundColor = '#D9CA9C';
    addTaskButton.style.width = '70%';
    addTaskButton.style.padding = '2px';
    addTaskButton.style.color = '#060A0D';
    addTaskButton.style.fontWeight = '600';

    // styling the button on mouseover
    addTaskButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#BF8F73';
        this.style.cursor = 'pointer';
    });

    addTaskButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#D9CA9C';
    });
}

function createNewTask() {
    // getting the value of task input
    var inputValue = document.getElementById('taskContent').value;
    // creating a new element to save input value
    var newParagraph = document.createElement('p');
    newParagraph.textContent = inputValue;

    // styling the new paragraph inside "taskContainer"
    {
        newParagraph.style.border = '2px solid rgba(217, 202, 256, 0.3)';
        newParagraph.style.borderRadius = '5px';
        newParagraph.style.textAlign = 'left';
        newParagraph.style.color = '#D9CA9C';
        newParagraph.style.padding = '2px';
        newParagraph.style.marginTop = '5px';
        newParagraph.style.marginBottom = '5px';
        newParagraph.style.marginRight = '3px';
        newParagraph.style.marginLeft = '3px';
        newParagraph.style.width = '785px';
        newParagraph.style.fontWeight = '700';
        newParagraph.style.position = "relative";

        // todo: creating a done button inside the new paragraph on mouseover
        var doneButton = null;
        newParagraph.addEventListener("mouseover", function() {
            if (!doneButton) {
                doneButton = document.createElement("button");
                doneButton.textContent = "Done";
                newParagraph.appendChild(doneButton);
            }

            doneButton.style.border = "0";
            doneButton.style.borderRadius = "5px";
            doneButton.style.color = "#D9CA9C";
            doneButton.style.backgroundColor = "#73605A";
            doneButton.style.padding = "5px";
            doneButton.style.margin = "3px 3px 3px 20px";
            doneButton.addEventListener("mouseenter", function() {
                this.style.cursor = 'pointer';
                this.style.backgroundColor = '#D9CA9C';
                this.style.color = '#73605A';
            });

            // todo: a click function for done button to check if there are no checkmarks, if there are none it'll create one and not more
            doneButton.addEventListener("click", function() {
                const checkmark = String.fromCharCode(10003);
                const existingCheckmark = document.querySelector(".checkmark");
                if (!existingCheckmark) {
                    const checkmarkElement = document.createElement("span");
                    checkmarkElement.classList.add("checkmark");
                    checkmarkElement.textContent = checkmark;
                    newParagraph.appendChild(checkmarkElement);

                    // todo: styling the checkmark element
                    {
                        checkmarkElement.style.color = "#9EF277";
                        checkmarkElement.style.position = "absolute";
                        checkmarkElement.style.right = "0";
                        checkmarkElement.style.top = "0";
                        checkmarkElement.style.transform = "translate(-50%, 25%)";
                    }
                    
                    // todo: making the text content green when Done button is clicked
                    newParagraph.style.color = "#9EF277";
                }
            });
        });

        // todo: creating a delete task button inside the new paragraph on a mouseover
        var deleteTaskButton = null;
        newParagraph.addEventListener("mouseover", function() {
            if (!deleteTaskButton) {
                deleteTaskButton = document.createElement("button");
                deleteTaskButton.textContent = "Delete";
                newParagraph.appendChild(deleteTaskButton);
            }

            // todo: when the button is clicked, the task paragraph is deleted
            deleteTaskButton.addEventListener("click", function() {
                newParagraph.remove();
            });

            // todo: styling the delete button
            deleteTaskButton.style.border = "0";
            deleteTaskButton.style.borderRadius = "5px";
            deleteTaskButton.style.color = "D9CA9C";
            deleteTaskButton.style.backgroundColo = "#73605A";
            deleteTaskButton.style.padding = "5px";
            deleteTaskButton.style.margin = "3px 3px 3px 3px";
            deleteTaskButton.addEventListener("mouseenter", function() {
                this.style.cursor = "pointer";
                this.style.backgroundColor = "#D9CA9C";
                this.style.color = "#73605A";
            });
            deleteTaskButton.addEventListener("mouseleave", function() {
                this.style.backgroundColor = "#73605A";
                this.style.color = "#D9CA9C";
            });
        });
    }

    // putting a collection of saved input values into a div
    var taskContainer = document.getElementById('taskContainer');
    taskContainer.appendChild(newParagraph);
}

function closeTaskWindow() {
    var element = document.getElementById('taskHolder');
    element.style.display = 'none';
}

// styling 'taskHolder'
{
    var taskHolder = document.getElementById('taskHolder');
    taskHolder.style.border = '2px solid rgba(217, 202, 256, 0.3)';
    taskHolder.style.borderRadius = '5px';
    taskHolder.style.display = 'flex';
    taskHolder.style.flexDirection = 'column';
    taskHolder.style.alignItems = 'center';
    taskHolder.style.width = '70%';
    taskHolder.style.display = 'none';
    taskHolder.style.marginTop = '5px';
}

// styling the title inside 'taskHolder'
{
    var taskHolder = document.getElementById('taskHolder');
    var title = taskHolder.querySelector('h3');
    title.style.color = '#D9CA9C';
    title.style.marginTop = '5px';
    title.style.marginBottom = '5px';
}

// styling the input element inside the 'taskHolder'
{
    var taskHolder = document.getElementById('taskHolder');
    var inputElement = taskHolder.querySelector('input');
    inputElement.style.width = '90%';
    inputElement.style.height = '30%';
    inputElement.style.border = '0';
    inputElement.style.backgroundColor = '#060A0D';
    inputElement.style.color = '#D9CA9C';
    inputElement.style.borderRadius = '5px';
    inputElement.style.height = '30px';
}

// styling 'buttonHolder'
{
    var buttonHolder = document.getElementById('buttonHolder');
    buttonHolder.style.display = 'flex';
    buttonHolder.style.flexDirection = 'row';
    buttonHolder.style.justifyContent = 'center';
    buttonHolder.style.alignItems = 'center';
    buttonHolder.style.padding = '5px';

    // styling all button elements inside 'buttonHolder'
    var buttons = buttonHolder.children;
    for (var q = 0; q < buttons.length; q++) {
        buttons[q].style.border = '0';
        buttons[q].style.borderRadius = '5px';
        buttons[q].style.padding = '8px';
        buttons[q].style.margin = '5px';
        buttons[q].style.backgroundColor = '#D9CA9C';
        buttons[q].style.color = '#3E3E40';
        buttons[q].style.fontWeight = '700';
    }

    // styling all button elements on mouseover
    buttonHolder.addEventListener("mouseover", function(event) {
        if (event.target.tagName === "BUTTON") {
            event.target.style.backgroundColor = '#060A0D';
            event.target.style.cursor = 'pointer';
            event.target.style.color = "#D9CA9C";
        }
    });

    // styling all button elements on mouseleave
    buttonHolder.addEventListener("mouseout", function(event) {
        if (event.target.tagName === "BUTTON") {
            event.target.style.backgroundColor = '#D9CA9C';
            event.target.style.color = "#3E3E40";
        }
    });
}

function resetTextContent() {
    document.getElementById('taskContent').value = "";
}

function removeAllTasks() {
    var element = document.getElementById('taskContainer');
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// styling a delete button
{
    var frame = document.getElementById('frame');
    var deleteButton = frame.getElementsByTagName("button")[4];
    deleteButton.style.backgroundColor = "#D9CA9C";
    deleteButton.style.width = "70%";
    deleteButton.style.marginTop = "5px";
    deleteButton.style.border = "2px solid rgba(217, 202, 256, 0.3)";
    deleteButton.style.borderRadius = "5px";
    deleteButton.style.fontWeight = "700";
    deleteButton.style.padding = "2px";
    deleteButton.style.marginBottom = "5px";

    // styling a delete button on mouseover
    deleteButton.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#BF8F73";
        this.style.cursor = "pointer";
    });
    // styling a delete button on mouseout
    deleteButton.addEventListener("mouseout", function() {
        this.style.backgroundColor = "#D9CA9C";
    });
}