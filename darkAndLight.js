// creating a dropdown menu on mouseover
{
    const colorModeHolderTrigger = document.getElementById("colorModeHolder");
    const menu = document.querySelector('.dropdown-menu');

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
            anchors[q].style.marginTop = '5.5px';
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
    const darkGrayishGreen = "#3F403B";
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