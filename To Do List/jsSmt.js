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
    }

    // putting a collection of saved input values into a div
    var taskContainer = document.getElementById('taskContainer');
    taskContainer.appendChild(newParagraph);
}

function closeTaskWindow() {
    var element = document.getElementById('taskHolder');
    element.style.display = 'none';
}

// creating the keyboard ESC interation with "close" button
{
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            document.getElementById("closeButton").click();
        }
    });
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

// creating the keyboard enter interaction with the "create" button
{
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            document.getElementById("createButton").click();
        }
    });
}

function resetTextContent() {
    document.getElementById('taskContent').value = "";
}

// creating a DEL keyboard button interaction with the "reset" button
{
    var resetButton = document.getElementById("resetButton");
    var taskContent = document.getElementById("taskContent");
    var key1 = false;
    var key2 = false;

    // function for when two buttons are pressed together
    document.addEventListener("keydown", function(event) {
        if (event.code === "ShiftLeft") {
            key1 = true;
        }

        if (event.code === "Delete") {
            key2 = true;
        }

        if (key1 && key2) {
            taskContent.value = "";
        }
    });

    // function for when two buttons are released
    document.addEventListener("keyup", function(event) {
        if (event.code === "ShiftLeft") {
            key1 = false;
        }

        if (event.code === "Delete") {
            key2 = false;
        }

        if (!key1 || !key2) {
            event.preventDefault();
        }
    });
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

    // creating a keyboard interaction with "delete all tasks button"
    {   
       var deleteAllTasksButton = document.getElementById("deleteAllTasksButton");
       document.addEventListener("keydown", function(event) {
            if (event.keyCode === 116) {
                deleteAllTasksButton.click();
            }
       });
    }
}

// styling the keyboard shortcut list
{
    const shortcutList = document.getElementById("shortcutList");
    shortcutList.style.border = "1px solid #D9CA9C";
    shortcutList.style.borderRadius = "5px";
    shortcutList.style.color = "#D9CA9C";
    shortcutList.style.marginTop = "5px";
    shortcutList.style.padding = "5px";
    shortcutList.style.marginBottom = "5px";

    // styling the elements inside shortcut list
    const paragraphs = shortcutList.children;
    // selecting and styling all paragraphs
    for (var q = 0; q < paragraphs.length; q++) {
        if (paragraphs[q].tagName === "P") {
            paragraphs[q].style.textAlign = "left";
            paragraphs[q].style.fontSize = "16px";
        }
    }
    // selecting and styling the h3 element
    for (var q = 0; q < paragraphs.length; q++) {
        if (paragraphs[q].tagName === "H3") {
            paragraphs[q].style.fontSize = "19px";
        }
    }
}