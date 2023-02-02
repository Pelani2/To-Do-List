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