     document.addEventListener('DOMContentLoaded', () => {
            const seeMoreBtns = document.querySelectorAll('.see-more-btn');
            
            seeMoreBtns.forEach(button => {
                button.addEventListener('click', () => {
                    // Find the closest parent section
                    const section = button.closest('section');
                    // Find the collapsible content div within that section
                    const collapsibleContent = section.querySelector('.collapsible-content');
                    
                    if (collapsibleContent) {
                        // Toggle the 'expanded' class to trigger the transition
                        collapsibleContent.classList.toggle('expanded');
                        
                        // Change the button text
                        if (collapsibleContent.classList.contains('expanded')) {
                            button.textContent = "Show less";
                        } else {
                            button.textContent = "See more";
                        }
                    }
                });
            });
        });










/* ====================  MENU TOGLER ============*/

const link_container = document.getElementById("link-container");
const show_menu_btn = document.getElementById("show-menu-btn");
const close_menu_btn = document.getElementById("close-menu-btn");


show_menu_btn.addEventListener(("click"),()=>{
    link_container.style.display = `block`;
})


close_menu_btn.addEventListener(("click"),()=>{
    link_container.style.display = `none`;
})
