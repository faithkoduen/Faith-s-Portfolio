const roles = [
            "Software Developer",
            "Web Designer",
            "UI/UX Expert",
            "Full Stack Engineer",
            "Researcher"
        ];
        const roleElement = document.querySelector('.role-text');
        let currentRoleIndex = 0;
        function rotateRoles() {
           
            roleElement.style.opacity = 0;
            setTimeout(() => {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                roleElement.textContent = roles[currentRoleIndex];
              
                roleElement.style.opacity = 1;
            }, 500);
        }
        
        setTimeout(() => {
            
            setInterval(rotateRoles, 3000);
        }, 2000);