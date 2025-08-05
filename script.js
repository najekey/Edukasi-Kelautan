function showSection(sectionName) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            

            document.getElementById(sectionName).classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === sectionName) {
                    link.classList.add('active');
                }
            });
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                showSection(link.dataset.section); 
            });
        });

        document.querySelectorAll('.card.clickable').forEach(card => {
            card.addEventListener('click', (e) => {
                const targetSection = card.dataset.target;
                showSection(targetSection);
            });
        });

 function showSection(sectionName) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            

            document.getElementById(sectionName).classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === sectionName) {
                    link.classList.add('active');
                }
            });
        }

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); 
                showSection(link.dataset.section); 
            });
        });

        document.querySelectorAll('.card.clickable').forEach(card => {
            card.addEventListener('click', (e) => {
                const targetSection = card.dataset.target;
                showSection(targetSection);
            });
        });

        document.addEventListener('touchstart', function() {}, {passive: true});