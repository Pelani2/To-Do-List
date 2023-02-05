// creating a dropdown menu on mouseover
{
    const colorModeHolderTrigger = document.getElementById("colorModeHolder");
    const menu = document.querySelector('.dropdown-menu');
    menu.style.marginTop = "15px";

    colorModeHolderTrigger.addEventListener("mouseover", function() {
        this.style.cursor = 'pointer';
        menu.style.display = "block";
    });

    colorModeHolderTrigger.addEventListener("mouseout", function() {
        menu.style.display = "none";
    });

    // styling the colorModeHolder button
    {
        colorModeHolderTrigger.style.backgroundColor = '#D9CA9C';
        colorModeHolderTrigger.style.color = '#060A0D';
        colorModeHolderTrigger.style.width = '150px';
        colorModeHolderTrigger.style.height = '25px';
        colorModeHolderTrigger.style.border = '0';
        colorModeHolderTrigger.style.borderRadius = '5px';
        colorModeHolderTrigger.style.marginBottom = '5px';

        // animating the dropdown menu
        {
            
        }
    }

    // styling elements inside dropdown menu
    {
        const anchors = menu.children;
        for (var q = 0; q < anchors.length; q++) {
            anchors[q].style.borderRadius = '5px';
            anchors[q].style.height = "100%";
            anchors[q].style.backgroundColor = '#73605A';
            anchors[q].style.color = "#BF8F73";
            anchors[q].style.textDecoration = "none";
            anchors[q].style.fontSize = "16px";
            anchors[q].style.marginBottom = '5.5px';
            anchors[q].style.marginTop = '6.5px';
            anchors[q].style.textAlign = "center";
            anchors[q].style.padding = '5px';
            anchors[q].style.display = 'flex';
            anchors[q].style.justifyContent = 'center';
            anchors[q].style.alignItems = 'center';
            anchors[q].addEventListener("mouseover", function() {
                this.style.backgroundColor = "#BF8F73";
                this.style.color = "#73605A";
            });
            
            anchors[q].addEventListener("mouseout", function() {
                this.style.backgroundColor = "#73605A";
                this.style.color = "#BF8F73";
            });
        }

        // selecting the first anchor inside a dropdown menu
        {
            const firstAnchor = document.querySelector(".dropdown-menu a");
            firstAnchor.style.marginTop = "10px";
        }
    }
}

// creating a function for lightModeButton
{
    // light mode color variables
    const mediumGray = "#727365";
    const lightGrayishYellow = "#BFBFAE";
    const veryLightGrayishYellow = "#F2F2E4";
    const darkGrey = "#262626";

    const lightButton = document.getElementById("lightModeButton");
    lightButton.addEventListener("click", function() {
        // styling the frame
        const frame = document.getElementById("frame");
        frame.style.backgroundColor = veryLightGrayishYellow;

        // styling the frame title
        const frameTitle = document.getElementById("frameTitle");
        frameTitle.style.color = mediumGray;

        // styling the addTaskButton
        const addTaskButton = document.getElementById("addTaskButton");
        addTaskButton.style.backgroundColor = lightGrayishYellow;
        addTaskButton.style.color = mediumGray;
        addTaskButton.addEventListener("mouseenter", function() {
            this.style.backgroundColor = darkGrey;
            this.style.color = veryLightGrayishYellow;
        });
        addTaskButton.addEventListener("mouseleave", function() {
            this.style.backgroundColor = lightGrayishYellow;
            this.style.color = mediumGray;
        });

        // styling the deleteAllTasksButton
        const deleteAllTasksButton = document.getElementById("deleteAllTasksButton");
        deleteAllTasksButton.style.backgroundColor = lightGrayishYellow;
        deleteAllTasksButton.style.color = mediumGray;
        deleteAllTasksButton.addEventListener("mouseenter", function() {
            this.style.backgroundColor = darkGrey;
            this.style.color = veryLightGrayishYellow;
        });
        deleteAllTasksButton.addEventListener("mouseleave", function() {
            this.style.backgroundColor = lightGrayishYellow;
            this.style.color = mediumGray;
        });

        // styling the taskHolder
        const taskHolder = document.getElementById("taskHolder");
        taskHolder.style.border = "2px solid #727365";

        // styling the taskHolderTitle
        const taskHolderTitle = document.getElementById("taskHolderTitle");
        taskHolderTitle.style.color = mediumGray;

        // styling the taskContent
        const taskContent = document.getElementById("taskContent");
        taskContent.style.color = darkGrey;
        taskContent.style.backgroundColor = lightGrayishYellow;

        // styling the buttons inside buttonHolder
        const buttonHolder = document.getElementById("buttonHolder");
        const buttons = buttonHolder.children;
        for (var q = 0; q < buttons.length; q++) {
            buttons[q].style.color = mediumGray;
            buttons[q].style.backgroundColor = lightGrayishYellow;
            buttons[q].addEventListener("mouseenter", function() {
                this.style.backgroundColor = darkGrey;
                this.style.color = veryLightGrayishYellow;
            });
            buttons[q].addEventListener("mouseleave", function() {
                this.style.color = mediumGray;
                this.style.backgroundColor = lightGrayishYellow;
            });
        }

        // styling the colorModeHolder
        const colorModeHolder = document.getElementById("colorModeHolder");
        colorModeHolder.style.backgroundColor = lightGrayishYellow;
        colorModeHolder.style.color = mediumGray;
        colorModeHolder.addEventListener("mouseenter", function() {
            this.style.backgroundColor = darkGrey;
            this.style.color = veryLightGrayishYellow;
        });
        colorModeHolder.addEventListener("mouseleave", function() {
            this.style.backgroundColor = lightGrayishYellow;
            this.style.color = mediumGray;
        });

        // styling the anchors inside the dropdown menu
        const dropdownMenu = document.querySelector(".dropdown-menu");
        const anchors = dropdownMenu.children;
        for (var q = 0; q < anchors.length; q++) {
            anchors[q].style.backgroundColor = lightGrayishYellow;
            anchors[q].style.color = mediumGray;
            anchors[q].addEventListener("mouseenter", function() {
                this.style.backgroundColor = darkGrey;
                this.style.color = veryLightGrayishYellow;
            });
            anchors[q].addEventListener("mouseleave", function() {
                this.style.backgroundColor = lightGrayishYellow;
                this.style.color = mediumGray;
            });
        }
    });
}

// creating functionality for dark mode
{
    // dark mode variables
    const deepBlue = "#030A8C";
    const deepBlue2 = "#034C8C";
    const blueGreen = "#0F698C";
    const deepGreen = "#025951";
    const veryDarkGrey = "#0D0D0D";

    const darkButton = document.getElementById("darkModeButton");
    darkButton.addEventListener("click", function() {
        // styling the frame
        frame.style.backgroundColor = deepBlue2;

        // styling the frame title
        frameTitle.style.color = deepBlue;

        // styling add task button
        addTaskButton.style.backgroundColor = blueGreen;
        addTaskButton.style.color = veryDarkGrey;
        addTaskButton.style.border = "2px solid #025951"
        addTaskButton.addEventListener("mouseenter", function() {
            this.style.backgroundColor = veryDarkGrey;
            this.style.color = deepGreen;
            this.style.border = "2px solid #030A8C";
        });
        addTaskButton.addEventListener("mouseleave", function() {
            this.style.backgroundColor = blueGreen;
            this.style.color = veryDarkGrey;
            this.style.border = "2px solid #025951";
        });

        // styling delete all tasks button
        deleteAllTasksButton.style.backgroundColor = blueGreen;
        deleteAllTasksButton.style.color = veryDarkGrey;
        deleteAllTasksButton.style.border = "2px solid #025951";
        deleteAllTasksButton.addEventListener("mouseenter", function() {
            this.style.backgroundColor = veryDarkGrey;
            this.style.color = deepGreen;
            this.style.border = "2px solid #030A8C";
        });
        deleteAllTasksButton.addEventListener("mouseleave", function() {
            this.style.backgroundColor = blueGreen;
            this.style.color = veryDarkGrey;
            this.style.border = "2px solid #025951";
        });

        // styling the task holder
        taskHolder.style.border = "2px solid #025951";

        // styling the task holder title
        taskHolderTitle.style.color = veryDarkGrey;

        // styling the task content
        taskContent.style.backgroundColor = blueGreen;
        taskContent.style.color = veryDarkGrey;
        taskContent.style.border = "2px solid #025951";

        // styling the anchors inside button holder
        const anchors = buttonHolder.children;
        for (var q = 0; q < anchors.length; q++) {
            anchors[q].style.backgroundColor = blueGreen;
            anchors[q].style.color = veryDarkGrey;
            anchors[q].style.border = "1px solid #025951";
            anchors[q].addEventListener("mouseenter", function() {
                this.style.backgroundColor = veryDarkGrey;
                this.style.color = deepGreen;
                this.style.border = "1px solid #0D0D0D";
            });
            anchors[q].addEventListener("mouseleave", function() {
                this.style.backgroundColor = blueGreen;
                this.style.color = veryDarkGrey;
                this.style.border = "1px solid #025951";
            });
        }

        // styling the color mode holder
        colorModeHolder.style.backgroundColor = blueGreen;
        colorModeHolder.style.color = veryDarkGrey;
        colorModeHolder.addEventListener("mouseenter", function() {
            this.style.backgroundColor = veryDarkGrey;
            this.style.color = deepGreen;
        });
        colorModeHolder.addEventListener("mouseleave", function() {
            this.style.backgroundColor = blueGreen;
            this.style.color = veryDarkGrey;
        });

        // styling the anchors inside the mode holder
        const dropdownMenu = document.getElementById("dropdown");
        const colorAnchors = dropdownMenu.children;
        for (var q = 0; q < colorAnchors.length; q++) {
            colorAnchors[q].style.backgroundColor = blueGreen;
            colorAnchors[q].style.color = veryDarkGrey;
            colorAnchors[q].addEventListener("mouseenter", function() {
                this.style.backgroundColor = veryDarkGrey;
                this.style.color = deepGreen;
            });
            colorAnchors[q].addEventListener("mouseleave", function() {
                this.style.backgroundColor = blueGreen;
                this.style.color = veryDarkGrey;
            });
        }
    });
}

// creating functionality for normal mode
{
    // normal mode color variables
    const darkGrey = "#3E3E40";
    const darkBlue = "#060A0D";
    const lightBeige = "#D9CA9C";
    const mediumBrown = "#BF8F73";
    const darkPurple = "#73605A";
}