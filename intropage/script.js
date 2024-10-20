const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
  
          const breakpoints = {
              mobile: 480,
              tablet: 768,
              desktop: 1024
          };
  
          function adjustLayout() {
              if (viewportWidth <= breakpoints.mobile) {
                  document.body.classList.add('mobile');
              } else if (viewportWidth <= breakpoints.tablet) {
                  document.body.classList.add('tablet');
              } else {
                  document.body.classList.add('desktop');
              }
          }
  
          window.addEventListener('resize', adjustLayout);
  
          adjustLayout();