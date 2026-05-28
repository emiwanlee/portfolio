 (function() {
      // Interactive: Dynamic profile picture upload (user can place actual photo)
      // This enables you to "place your picture" easily
      const placeholderDiv = document.getElementById('imgPlaceholder');
      const actualImg = document.getElementById('actualProfileImg');
      const profileContainer = document.getElementById('profilePictureContainer');

      // Create an invisible file input to allow image selection
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/jpeg, image/png, image/jpg, image/webp';
      fileInput.style.display = 'none';
      document.body.appendChild(fileInput);

      // Helper to display the uploaded image
      function handleImageUpload(file) {
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = function(e) {
            actualImg.src = e.target.result;
            actualImg.style.display = 'block';
            placeholderDiv.style.display = 'none';
            // optional: store in localStorage to remember picture? (not needed, but nice)
            try {
              localStorage.setItem('userProfileImage', e.target.result);
            } catch(err) { /* no storage needed */ }
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please select a valid image (JPEG, PNG, etc.)');
        }
      }

      // When user clicks on the placeholder (or profile picture area)
      function triggerUpload() {
        fileInput.click();
      }

      // If there is already saved image in localStorage, load it on page load
      function loadStoredImage() {
        const storedImg = localStorage.getItem('userProfileImage');
        if (storedImg) {
          actualImg.src = storedImg;
          actualImg.style.display = 'block';
          if (placeholderDiv) placeholderDiv.style.display = 'none';
        }
      }

      if (placeholderDiv) {
        placeholderDiv.addEventListener('click', triggerUpload);
      }
      // Also make the caption area clickable for better UX
      const captionDiv = document.querySelector('.profile-caption');
      if (captionDiv) {
        captionDiv.style.cursor = 'pointer';
        captionDiv.addEventListener('click', triggerUpload);
      }

      fileInput.addEventListener('change', function(event) {
        if (event.target.files && event.target.files[0]) {
          handleImageUpload(event.target.files[0]);
        }
      });

      // Load previously uploaded picture if exists
      loadStoredImage();

      // Contact button alert (or demonstration of interactive)
      const contactBtn = document.getElementById('contactBtn');
      if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
          e.preventDefault();
          alert("📧 Hi Chukwuemeka! (demo) \nReach out: emeka.agupugo@devportfolio.com \nOr connect via social links below.");
        });
      }

      // optional: slight console greet
      console.log("🔥 Chukwuemeka's portfolio — ready to showcase full-stack expertise");

      // dynamic year or interactive effects: typing effect on title? but keep lightweight
      // Add event listener for nav links smooth scroll
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const hash = this.getAttribute('href');
          if (hash && hash !== '#') {
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });

      // Also make the "View Work" button scroll to projects
      const viewWorkBtn = document.querySelector('.btn-outline');
      if (viewWorkBtn && viewWorkBtn.getAttribute('href') === '#projects') {
        viewWorkBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const projectsSection = document.getElementById('projects');
          if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
      }

      // add additional small effect: show timestamp of last visit?
      const footerDate = document.querySelector('.footer-right p:first-child');
      if (footerDate) {
        // just a modern touch
      }
    })();